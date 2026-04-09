<script setup>
import { useForm } from '@/composables/useForm'
import BaseInput from './BaseInput.vue'

const { fields, errors, status, submit } = useForm(
  {
    name: '',
    email: '',
    phone: '',
    project: ''
  },
  'contact-form'
)

const handleSubmit = async () => {
  await submit()
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
          <form class="space-y-4" @submit.prevent="handleSubmit">

            <!-- Honeypot — hidden from real users, bots fill it in -->
            <input
              v-model="fields._honey"
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
                v-model="fields.name"
                label="Name"
                placeholder="Jane Smith"
                required
                variant="dark"
                :error="errors.name"
                :disabled="status === 'loading' || status === 'success'"
              />
              <BaseInput
                id="contact-email"
                v-model="fields.email"
                type="email"
                label="Email"
                placeholder="jane@company.com"
                required
                variant="dark"
                :error="errors.email"
                :disabled="status === 'loading' || status === 'success'"
              />
            </div>

            <BaseInput
              id="contact-phone"
              v-model="fields.phone"
              type="tel"
              label="Phone"
              placeholder="1234567890"
              variant="dark"
              :error="errors.phone"
              :disabled="status === 'loading' || status === 'success'"
            />

            <BaseInput
              id="contact-project"
              v-model="fields.project"
              type="textarea"
              label="Project"
              placeholder="Tell me about your business and what you're looking to build..."
              required
              variant="dark"
              :disabled="status === 'loading' || status === 'success'"
            />

            <!-- Success -->
            <Transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
            >
              <div
                v-if="status === 'success'"
                class="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-400"
              >
                ✓ Message received! I'll be in touch within 24 hours.
              </div>
            </Transition>

            <!-- Error -->
            <p v-if="status === 'error'" class="text-sm text-rose-400">
              Something went wrong. Email me directly at
              <a href="mailto:hello@northstudio.design" class="underline">
                hello@northstudio.design
              </a>
            </p>

            <button
              type="submit"
              :disabled="status === 'loading' || status === 'success'"
              class="btn-primary w-full justify-center py-3.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span v-if="status === 'loading'">Sending…</span>
              <span v-else-if="status === 'success'">Message Sent ✓</span>
              <span v-else>Send Message →</span>
            </button>

          </form>
        </div>
      </div>
    </div>
  </section>
</template>