<script setup>
defineProps({
  capturedEmails: {
    type: Number,
    default: 0
  }
})

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Threads', href: 'https://threads.com' },
  { label: 'Github', href: 'https://github.com' }
]
</script>

<template>
  <footer class="pb-4 pt-4">
    <div class="container-shell">
      <div class="surface-card flex flex-col gap-8 px-5 py-6 sm:px-10 sm:py-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <a href="#hero" class="text-lg font-semibold tracking-tight text-slate-950">North Studio</a>
          <p class="mt-3 text-sm leading-7 text-slate-600">
            Web design for brands that want a sharper online presence and more qualified leads.
          </p>
          <!-- <p class="mt-3 text-sm text-slate-500">
            Newsletter leads captured: <span class="font-semibold text-slate-700">{{ capturedEmails }}</span>
          </p> -->
        </div>

        <div class="flex flex-col gap-6 text-sm leading-7 text-slate-500 sm:flex-row sm:items-center sm:gap-10">
          <a
            href="mailto:hello@northstudio.design"
            class="break-all font-medium text-slate-600 transition hover:text-brand-600 sm:break-normal"
          >
            hello@northstudio.design
          </a>

          <div class="flex flex-wrap items-center gap-4 sm:gap-5">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noreferrer"
              class="text-slate-500 transition hover:text-slate-950"
            >
              {{ social.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
