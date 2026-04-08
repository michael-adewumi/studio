<script setup>
const services = [
  {
    title: 'Website Design',
    description:
      'Custom brochure and service websites crafted to position your brand professionally and convert new visitors.',
    icon: 'layout'
  },
  {
    title: 'Website Redesign',
    description:
      'Refresh outdated pages, improve messaging clarity, and upgrade the user journey so the site works harder.',
    icon: 'refresh'
  },
  {
    title: 'Landing Pages',
    description:
      'Focused campaign pages built for launches, paid traffic, and lead generation with strong conversion structure.',
    icon: 'cursor'
  },
  {
    title: 'Optimization',
    description:
      'Speed, mobile UX, and content refinements that remove friction and improve the quality of incoming leads.',
    icon: 'spark'
  }
]

const iconPaths = {
  layout:
    'M4.75 5.25h14.5v4.5H4.75zm0 7h6.5v6.5h-6.5zm9 0h5.5v6.5h-5.5z',
  refresh:
    'M6 8.5A6.5 6.5 0 0 1 18 6m0 0V3.75m0 2.25h-2.25M18 15.5A6.5 6.5 0 0 1 6 18m0 0v2.25M6 18h2.25',
  cursor:
    'm5 4 11 7-4 1.2 1.8 4.8-2.7 1L9.3 13 5 14z',
  spark:
    'M12 3.75 13.8 8.2l4.45 1.8-4.45 1.8L12 16.25l-1.8-4.45L5.75 10l4.45-1.8z'
}
</script>

<template>
  <section id="services" class="section-padding">
    <div class="container-shell">
      <div class="max-w-3xl" v-reveal>
        <span class="eyebrow">Services</span>
        <h2 class="section-title">Everything you need to launch a site that looks premium and sells clearly.</h2>
        <p class="section-copy">
          Pick the engagement that fits your stage, from a focused landing page to a complete brand-led redesign.
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-5 sm:mt-14 md:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="(service, index) in services"
          :key="service.title"
          class="surface-card group p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-slate-200/40 sm:p-7 dark:hover:shadow-slate-900/60"
          v-reveal="{ delay: 100 + index * 100, origin: 'scale' }"
        >
          <div class="icon-badge transition duration-300 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white">
            <svg viewBox="0 0 24 24" fill="none" class="h-5 w-5">
              <path
                :d="iconPaths[service.icon]"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
              />
            </svg>
          </div>
          <h3 class="mt-5 text-lg font-semibold text-slate-950 sm:mt-6 sm:text-xl">{{ service.title }}</h3>
          <p class="mt-3 text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base">{{ service.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
