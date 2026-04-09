<script setup>
import { ref, reactive } from 'vue'
import { SHEET_URL } from '@/config.js'
import BaseInput from './BaseInput.vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  project: '',
  _honey: '' // honeypot — never filled by real users
})

const errors = reactive({
  name: '',
  email: '',
  phone: ''
})

const state = ref('idle') // idle | loading | success | error
const lastSubmit = ref(0)

const validate = () => {
  let isValid = true
  errors.name = ''
  errors.email = ''
  errors.phone = ''

  // Name validation: alphabets, spaces, hyphens, apostrophes
  const namePattern = /^[A-Za-z\s'-]+$/
  if (!form.name.trim()) {
    errors.name = 'Name is required'
    isValid = false
  } else if (!namePattern.test(form.name.trim())) {
    errors.name = 'Only letters, spaces, hyphens, and apostrophes allowed'
    isValid = false
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!emailPattern.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }

  // Phone validation: US (strictly 10 digits)
  if (form.phone) {
    const digitsOnly = form.phone.replace(/\D/g, '')
    if (digitsOnly.length !== 10 || /\D/.test(form.phone)) {
      errors.phone = 'Phone must be exactly 10 digits (no other characters)'
      isValid = false
    }
  }

  return isValid
}

const submit = async () => {
  // Honeypot — silently block bots
  if (form._honey) return

  // Rate limit — block if submitted less than 30s ago
  const now = Date.now()
  if (now - lastSubmit.value < 30000) return

  // Prevent double submission
  if (state.value === 'loading') return

  // Validate fields
  if (!validate()) return

  lastSubmit.value = now
  state.value = 'loading'

  try {
    await fetch(SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
        project: form.project.trim(),
        source: 'contact-form'
      })
    })

    state.value = 'success'
    // Clear form
    Object.keys(form).forEach(k => (form[k] = ''))
    
    // Auto-reset state after 5 seconds to allow another submission
    setTimeout(() => {
      if (state.value === 'success') {
        state.value = 'idle'
      }
    }, 5000)
  } catch {
    state.value = 'error'
  }
}
</script>

<template>
  <section id="contact" class="section-padding pt-8">
    <div class="container-shell">
      <div
        class="relative overflow-hidden rounded-[1.5rem] bg-slate-950 px-5 py-10 text-white shadow-soft sm:rounded-[2rem] sm:px-12 sm:py-14 lg:px-16"
        v-reveal="{ origin: 'scale' }"
      >
        <!-- Background glows -->
        <div class="absolute -right-16 top-0 h-48 w-48 rounded-full bg-brand-500/30 blur-3xl" />
        <div class="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-sky-400/20 blur-3xl" />

        <div class="relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">

          <!-- Left: copy -->
          <div class="flex flex-col justify-center">
            <span class="eyebrow border-white/10 bg-white/10 text-white">Ready When You Are</span>
            <h2 class="mt-5 text-2xl font-semibold tracking-tight sm:mt-6 sm:text-4xl lg:text-5xl">
              Let's build your website
            </h2>
            <p class="mt-4 text-base leading-7 text-slate-400 sm:mt-5 sm:text-lg sm:leading-8">
              Tell me about your project and I'll get back to you within 24 hours.
            </p>
            <a
              href="#work"
              class="mt-8 inline-flex w-fit text-sm font-semibold text-brand-400 transition hover:text-brand-300"
            >
              ← See More Work
            </a>
          </div>

          <!-- Right: form -->
          <form class="space-y-4" @submit.prevent="submit">

            <!-- Honeypot — hidden from real users, bots fill it in -->
            <input
              v-model="form._honey"
              type="text"
              name="website"
              autocomplete="off"
              tabindex="-1"
              aria-hidden="true"
              class="hidden"
            />

            <div class="grid gap-4 sm:grid-cols-2">
              <BaseInput
                id="contact-name"
                v-model="form.name"
                label="Name"
                placeholder="Jane Smith"
                required
                variant="dark"
                :error="errors.name"
                :disabled="state === 'loading' || state === 'success'"
              />
              <BaseInput
                id="contact-email"
                v-model="form.email"
                type="email"
                label="Email"
                placeholder="jane@company.com"
                required
                variant="dark"
                :error="errors.email"
                :disabled="state === 'loading' || state === 'success'"
              />
            </div>

            <BaseInput
              id="contact-phone"
              v-model="form.phone"
              type="tel"
              label="Phone"
              placeholder="1234567890"
              variant="dark"
              :error="errors.phone"
              :disabled="state === 'loading' || state === 'success'"
            />

            <BaseInput
              id="contact-project"
              v-model="form.project"
              type="textarea"
              label="Project"
              placeholder="Tell me about your business and what you're looking to build..."
              required
              variant="dark"
              :disabled="state === 'loading' || state === 'success'"
            />

            <!-- Success -->
            <Transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
            >
              <div
                v-if="state === 'success'"
                class="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-400"
              >
                ✓ Message received! I'll be in touch within 24 hours.
              </div>
            </Transition>

            <!-- Error -->
            <p v-if="state === 'error'" class="text-sm text-rose-400">
              Something went wrong. Email me directly at
              <a href="mailto:hello@northstudio.design" class="underline">
                hello@northstudio.design
              </a>
            </p>

            <button
              type="submit"
              :disabled="state === 'loading' || state === 'success'"
              class="btn-primary w-full justify-center py-3.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span v-if="state === 'loading'">Sending…</span>
              <span v-else-if="state === 'success'">Message Sent ✓</span>
              <span v-else>Send Message →</span>
            </button>

          </form>
        </div>
      </div>
    </div>
  </section>
</template>