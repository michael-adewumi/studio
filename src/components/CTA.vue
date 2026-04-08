<script setup>
import { ref, reactive } from 'vue'
import { SHEET_URL } from '@/config.js'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  project: '',
  _honey: '' // honeypot — never filled by real users
})

const state = ref('idle') // idle | loading | success | error
const lastSubmit = ref(0)

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-brand-500 focus:ring-1 focus:ring-brand-500'

const submit = async () => {
  // Honeypot — silently block bots
  if (form._honey) return

  // Rate limit — block if submitted less than 30s ago
  const now = Date.now()
  if (now - lastSubmit.value < 30000) return

  // Prevent double submission
  if (state.value === 'loading') return

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(form.email.trim())) {
    state.value = 'error'
    return
  }

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
    Object.keys(form).forEach(k => (form[k] = ''))
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
              <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-400">Name</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  :disabled="state === 'loading' || state === 'success'"
                  :class="inputClass + ' disabled:opacity-50'"
                />
              </div>
              <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-400">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  :disabled="state === 'loading' || state === 'success'"
                  :class="inputClass + ' disabled:opacity-50'"
                />
              </div>
            </div>

            <div>
              <label class="mb-1.5 block text-sm font-medium text-slate-400">Phone</label>
              <input
                v-model="form.phone"
                type="tel"
                placeholder="+1 234 567 8900"
                :disabled="state === 'loading' || state === 'success'"
                :class="inputClass + ' disabled:opacity-50'"
              />
            </div>

            <div>
              <label class="mb-1.5 block text-sm font-medium text-slate-400">Project</label>
              <textarea
                v-model="form.project"
                rows="4"
                required
                placeholder="Tell me about your business and what you're looking to build..."
                :disabled="state === 'loading' || state === 'success'"
                :class="inputClass + ' resize-none disabled:opacity-50'"
              />
            </div>

            <!-- Success -->
            <div
              v-if="state === 'success'"
              class="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-400"
            >
              ✓ Message received! I'll be in touch within 24 hours.
            </div>

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