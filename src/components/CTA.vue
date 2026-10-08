<script setup>
import { useForm } from "@/composables/useForm";
import BaseInput from "./BaseInput.vue";

const { fields, errors, status, submit } = useForm(
  {
    name: "",
    email: "",
    project: "",
  },
  "contact-form",
);

const handleSubmit = async () => {
  await submit();
};

const linkedinUrl = "https://www.linkedin.com/in/michael-adewumi/";
const contactEmail = "adewumimicheal00@gmail.com";
</script>

<template>
  <section id="contact" class="section-padding pt-8">
    <div class="container-shell">
      <div
        class="relative overflow-hidden rounded-[1.5rem] bg-slate-950 px-5 py-10 text-white shadow-soft sm:rounded-[2rem] sm:px-12 sm:py-14 lg:px-16"
        v-reveal="{ origin: 'scale' }"
      >
        <div
          class="absolute right-0 top-0 h-48 w-48 rounded-full bg-brand-500/30 blur-3xl sm:-right-16"
          aria-hidden="true"
        />
        <div
          class="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-sky-400/20 blur-3xl"
          aria-hidden="true"
        />

        <div class="relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div class="flex flex-col justify-center">
            <span class="eyebrow border-white/10 bg-white/10 text-white">
              Get In Touch
            </span>
            <h2
              class="mt-5 text-2xl font-semibold tracking-tight sm:mt-6 sm:text-4xl lg:text-5xl"
            >
              Let's work together
            </h2>

            <div class="mt-6 space-y-4">
              <div>
                <p class="text-sm font-semibold text-slate-200">
                  Looking for a frontend engineer?
                </p>
                <p class="mt-1 text-sm leading-6 text-slate-400">
                  I'm available for full-time, contract, and freelance
                  engineering work.
                </p>
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-200">
                  Need a modern website or web application?
                </p>
                <p class="mt-1 text-sm leading-6 text-slate-400">
                  I build professional websites and web applications for
                  businesses.
                </p>
              </div>
            </div>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                :href="linkedinUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <svg
                  class="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
                Connect on LinkedIn
              </a>
              <a
                :href="`mailto:${contactEmail}`"
                class="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <svg
                  class="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email me
              </a>
            </div>
          </div>

          <form class="space-y-4" @submit.prevent="handleSubmit">
            <input
              v-model="fields._honey"
              type="text"
              name="website"
              autocomplete="off"
              tabindex="-1"
              aria-hidden="true"
              aria-label="Do not fill this field out"
              class="hidden"
            />

            <BaseInput
              id="contact-name"
              v-model="fields.name"
              label="Name"
              placeholder="Your name"
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
              placeholder="name@company.com"
              required
              variant="dark"
              :error="errors.email"
              :disabled="status === 'loading' || status === 'success'"
            />
            <BaseInput
              id="contact-project"
              v-model="fields.project"
              type="textarea"
              label="Tell me about your project"
              placeholder="What are you looking to build?"
              required
              variant="dark"
              :disabled="status === 'loading' || status === 'success'"
            />

            <Transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
            >
              <div
                v-if="status === 'success'"
                role="status"
                aria-live="polite"
                class="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-400"
              >
                ✓ Message received! I'll be in touch soon.
              </div>
            </Transition>

            <p
              v-if="status === 'error'"
              role="alert"
              aria-live="assertive"
              class="text-sm text-rose-400"
            >
              Something went wrong. Email me directly at
              <a :href="`mailto:${contactEmail}`" class="underline">
                {{ contactEmail }}
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
