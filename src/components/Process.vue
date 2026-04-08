<script setup>
const steps = [
  {
    title: 'Discovery',
    description:
      'We clarify your audience, your offer, and the actions your website needs visitors to take.',
    icon: 'search'
  },
  {
    title: 'Design',
    description:
      'I turn that strategy into a clean, conversion-focused experience with premium visuals and clear hierarchy.',
    icon: 'pen'
  },
  {
    title: 'Launch',
    description:
      'After review and refinements, your site goes live ready for mobile visitors, enquiries, and growth.',
    icon: 'rocket'
  }
]

const iconPaths = {
  search:
    'm15.5 15.5 4.25 4.25M10.75 17a6.25 6.25 0 1 1 0-12.5 6.25 6.25 0 0 1 0 12.5Z',
  pen:
    'm15 5 4 4M5 19l3.75-.75L18 9l-3-3-9.25 9.25Z',
  rocket:
    'M8 16c-1.25 0-2.75 1.75-2.75 3 1.25 0 3-1.5 3-2.75M14.75 9.25 19 5c-2.25-.5-5.5.5-7.75 2.75C9 10 8 13.25 8.5 15.5l4.25-4.25c.25-.25.75-.25 1 0 .25.25.25.75 0 1L9.5 16.5C11.75 17 15 16 17.25 13.75 19.5 11.5 20.5 8.25 20 6l-4.25 4.25'
}
</script>

<template>
  <section class="section-padding">
    <div class="container-shell">
      <div class="max-w-3xl" v-reveal>
        <span class="eyebrow">Process</span>
        <h2 class="section-title">A simple process that keeps projects clear, collaborative, and moving fast.</h2>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-5 sm:mt-14 lg:grid-cols-3">
        <article
          v-for="(step, index) in steps"
          :key="step.title"
          class="surface-card relative overflow-hidden p-5 sm:p-8"
          v-reveal="{ delay: 120 + index * 100 }"
        >
          <div class="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent" />
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" fill="none" class="h-5 w-5">
              <path
                :d="iconPaths[step.icon]"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
              />
            </svg>
          </div>
          <p class="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 sm:mt-6 sm:text-sm sm:tracking-[0.24em]">
            Step {{ index + 1 }}
          </p>
          <h3 class="mt-3 text-xl font-semibold text-slate-950 sm:mt-4 sm:text-2xl">{{ step.title }}</h3>
          <p class="mt-3 text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base">{{ step.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
