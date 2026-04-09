import { ref, reactive, watch } from 'vue'
import { SHEET_URL } from '@/config.js'

/**
 * Reusable form logic for contact and audit forms.
 * @param {Object} initialFields - Initial state of the form fields.
 * @param {String} source - Source tag for analytics/tracking (e.g., 'contact-form').
 */
export function useForm(initialFields = {}, source = 'unspecified') {
  const fields = reactive({ ...initialFields, _honey: '' })
  const errors = reactive(Object.keys(initialFields).reduce((acc, key) => {
    acc[key] = ''
    return acc
  }, {}))
  
  const status = ref('idle') // idle | loading | success | error
  const lastSubmit = ref(0)
  let resetTimeout = null

  // Validation Patterns
  const patterns = {
    name: /^[A-Za-z\s'-]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/
  }

  // Real-time validation
  Object.keys(initialFields).forEach(key => {
    watch(() => fields[key], (val) => {
      validateField(key, val)
    })
  })

  function validateField(key, val) {
    if (!val || !val.toString().trim()) {
      errors[key] = '' // Don't show error if empty (while typing)
      return true
    }

    const trimmed = val.toString().trim()

    if (key === 'name') {
      if (!patterns.name.test(trimmed)) {
        errors.name = 'Only letters, spaces, hyphens, and apostrophes allowed'
        return false
      }
    }

    if (key === 'email') {
      if (!patterns.email.test(trimmed.toLowerCase())) {
        errors.email = 'Please enter a valid email address'
        return false
      }
    }

    if (key === 'phone') {
      const digits = trimmed.replace(/\D/g, '')
      if (digits.length !== 10 || /\D/.test(trimmed)) {
        errors.phone = 'Phone must be exactly 10 digits (no spaces or dashes)'
        return false
      }
    }

    errors[key] = ''
    return true
  }

  function validateAll() {
    let isValid = true
    Object.keys(initialFields).forEach(key => {
      const val = fields[key]
      if (key === 'project' || key === 'name' || key === 'email') {
         if (!val || !val.toString().trim()) {
           errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`
           isValid = false
           return
         }
      }
      if (!validateField(key, val)) {
        isValid = false
      }
    })
    return isValid
  }

  async function submit(customData = {}) {
    // Honeypot check
    if (fields._honey) return

    // Rate limit (30s)
    const now = Date.now()
    if (now - lastSubmit.value < 30000) return

    // Prevent double submission
    if (status.value === 'loading') return

    // Validate all fields
    if (!validateAll()) return

    status.value = 'loading'
    lastSubmit.value = now

    try {
      // Prepare payload
      const payload = {
        ...Object.keys(initialFields).reduce((acc, key) => {
          acc[key] = typeof fields[key] === 'string' ? fields[key].trim() : fields[key]
          return acc
        }, {}),
        ...customData,
        source: source,
        timestamp: new Date().toISOString()
      }

      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(payload)
      })

      status.value = 'success'
      
      // Auto-reset form fields
      Object.keys(initialFields).forEach(key => fields[key] = '')
      
      // Clear errors
      Object.keys(errors).forEach(key => errors[key] = '')

      // Auto-reset status after 5s
      if (resetTimeout) clearTimeout(resetTimeout)
      resetTimeout = setTimeout(() => {
        if (status.value === 'success') {
          status.value = 'idle'
        }
      }, 5000)

      return true
    } catch (err) {
      status.value = 'error'
      console.error('Form submission failed:', err)
      return false
    }
  }

  function reset() {
    Object.keys(initialFields).forEach(key => (fields[key] = ''))
    Object.keys(errors).forEach(key => (errors[key] = ''))
    status.value = 'idle'
    if (resetTimeout) clearTimeout(resetTimeout)
  }

  return {
    fields,
    errors,
    status,
    submit,
    reset,
    validateAll
  }
}
