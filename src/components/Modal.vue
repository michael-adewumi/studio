<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { SHEET_URL } from '@/config.js'
import BaseInput from './BaseInput.vue'

const emit = defineEmits(['submit-email'])

const isOpen = ref(false)
const hasTriggered = ref(false)
const email = ref('')
const honey = ref('') // honeypot
const state = ref('idle') // idle | loading | success | error
const validationError = ref('')
const lastSubmit = ref(0)

let timeoutId

const openModal = () => {
  if (!hasTriggered.value) {
    isOpen.value = true
    hasTriggered.value = true
  }
}

const closeModal = () => {
  isOpen.value = false
  // Reset state after a short delay so the user doesn't see the form flip back instantly
  setTimeout(() => {
    state.value = 'idle'
    validationError.value = ''
  }, 300)
}

const handleExitIntent = (event) => {
  if (event.clientY <= 8) openModal()
}

const submitEmail = async () => {
  // Honeypot check
  if (honey.value) return

  // Rate limit
  const now = Date.now()
  if (now - lastSubmit.value < 30000) return

  // Prevent double submission
  if (state.value === 'loading') return

  // Validate email
  const normalizedEmail = email.value.trim().toLowerCase()
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailPattern.test(normalizedEmail)) {
    validationError.value = 'Please enter a valid email address.'
    return
  }

  validationError.value = ''
  lastSubmit.value = now
  state.value = 'loading'

  try {
    await fetch(SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({
        email: normalizedEmail,
        source: 'email-popup'
      })
    })

    emit('submit-email', normalizedEmail)
    state.value = 'success'
    email.value = ''
    setTimeout(() => closeModal(), 1800)
  } catch {
    state.value = 'error'
  }
}

watch(isOpen, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
})

onMounted(() => {
  timeoutId = window.setTimeout(openModal, 1500)
  document.addEventListener('mouseout', handleExitIntent)
})

onBeforeUnmount(() => {
  window.clearTimeout(timeoutId)
  document.removeEventListener('mouseout', handleExitIntent)
  document.body.style.overflow = ''
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/50 px-4 py-4 backdrop-blur-sm sm:items-center sm:px-5 sm:py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-title"
      @click.self="closeModal"
    >
      <Transition
        appear
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-95 translate-y-3"
        enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100 translate-y-0"
        leave-to-class="opacity-0 scale-95 translate-y-3"
      >
        <div class="surface-card relative mt-12 w-[92%] max-w-sm max-h-[calc(100vh-2rem)] overflow-y-auto p-5 sm:mt-0 sm:w-full sm:max-w-lg sm:max-h-[min(85vh,42rem)] sm:p-10">

          <!-- Close button -->
          <button
            type="button"
            class="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-brand-500"
            aria-label="Close modal"
            @click="closeModal"
          >
            <svg viewBox="0 0 20 20" fill="none" class="h-5 w-5">
              <path
                d="M5 5 15 15M15 5 5 15"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="1.8"
              />
            </svg>
          </button>

          <span class="eyebrow">Free Audit</span>
          <h2
            id="newsletter-title"
            class="mt-5 pr-10 text-2xl font-semibold tracking-tight text-slate-950 sm:mt-6 sm:text-3xl"
          >
            Get a free website audit
          </h2>
          <p class="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            I'll send a quick review with 3 practical ways your website can look stronger and convert better.
          </p>

          <form class="mt-6 space-y-4 sm:mt-8" @submit.prevent="submitEmail">

            <!-- Honeypot — hidden from real users -->
            <input
              v-model="honey"
              type="text"
              name="website"
              autocomplete="off"
              tabindex="-1"
              aria-hidden="true"
              class="hidden"
            />

            <BaseInput
              id="newsletter-email"
              v-model="email"
              type="email"
              label="Email address"
              placeholder="you@company.com"
              required
              :error="validationError"
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
                class="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
              >
                ✓ You're in! Check your inbox shortly.
              </div>
            </Transition>

            <!-- Fetch error -->
            <p v-if="state === 'error'" class="text-sm text-rose-500">
              Something went wrong. Please try again.
            </p>

            <button
              type="submit"
              :disabled="state === 'loading' || state === 'success'"
              class="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span v-if="state === 'loading'">Sending…</span>
              <span v-else-if="state === 'success'">Submitted ✓</span>
              <span v-else>Send My Free Audit</span>
            </button>

          </form>
        </div>
      </Transition>
    </div>
  </Transition>
</template>