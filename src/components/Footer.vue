<script setup>
const contactEmail = "adewumimicheal00@gmail.com";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/michael-adewumi/",
  },
  { label: "GitHub", href: "https://github.com/michael-adewumi" },
];
</script>

<template>
  <footer class="pb-4 pt-4">
    <div class="container-shell">
      <div
        class="surface-card flex flex-col gap-8 px-5 py-6 sm:px-10 sm:py-8 lg:flex-row lg:items-center lg:justify-between"
      >
        <div>
          <a
            href="#hero"
            class="rounded-sm text-lg font-semibold tracking-tight text-slate-950 transition hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:text-white dark:hover:text-brand-400"
          >
            Michael Adewumi
          </a>
          <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Frontend Engineer building modern web applications with Vue, React,
            TypeScript and Next.js.
          </p>
        </div>

        <div
          class="flex flex-col gap-6 text-sm leading-7 text-slate-500 sm:flex-row sm:items-center sm:gap-10"
        >
          <a
            :href="`mailto:${contactEmail}`"
            class="break-all font-medium text-slate-600 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 sm:break-normal"
          >
            {{ contactEmail }}
          </a>

          <div class="flex flex-wrap items-center gap-4 sm:gap-5">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-md text-slate-500 transition hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:text-slate-400 dark:hover:text-white"
            >
              {{ social.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
