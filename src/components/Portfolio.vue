<script setup>
import projectTest from '@/assets/project-test.png'
import projectTest2 from '@/assets/project-test2.png'
import projectCrest from '@/assets/project-crest.svg'
import projectHaven from '@/assets/project-haven.svg'

const projects = [
  {
    title: 'RapidFlow Plumbing',
    description: 'A refined law firm site designed to build authority and increase qualified consultations.',
    image: projectTest,
    demoUrl: 'https://rapidflow-psi.vercel.app/'
  },
  {
    title: 'SolidBuild Construction',
    description: 'A calming service-led experience that helps a wellness studio convert local enquiries.',
    image: projectTest2,
    demoUrl: 'https://construction-demo-sigma.vercel.app/'
  },
  {
    title: 'Crest Roofing',
    description: 'A conversion-focused redesign for a home-service brand with clearer offers and faster paths.',
    image: projectCrest,
    demoUrl: 'https://example.com/crest-roofing-demo'
  },
  {
    title: 'Haven Interiors',
    description: 'An editorial-style portfolio site that showcases craftsmanship while driving discovery calls.',
    image: projectHaven,
    demoUrl: 'https://example.com/haven-interiors-demo'
  }
]
</script>

<template>
  <section id="work" class="section-padding">
    <div class="container-shell">

      <!-- Header row -->
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-3xl" v-reveal="{ origin: 'left' }">
          <span class="eyebrow">Selected Work</span>
          <h2 class="section-title">
            Recent websites built to feel premium, persuasive, and easy to navigate.
          </h2>
          <p class="section-copy">
            Every project balances clear messaging, clean visual hierarchy, and a confident brand presence.
          </p>
        </div>
        <a
          href="#contact"
          class="btn-primary animate-pulse-subtle self-start ring-2 ring-brand-200 ring-offset-2 lg:self-auto dark:ring-brand-700 dark:ring-offset-slate-950"
          v-reveal="{ origin: 'right', delay: 120 }"
        >
          Start Your Project →
        </a>
      </div>

      <!-- Project grid -->
      <div class="mt-12 grid gap-6 md:mt-14 md:grid-cols-2">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="surface-card group overflow-hidden
                 shadow-md shadow-slate-200/50 transition-all duration-300
                 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/40
                 dark:shadow-slate-900/40 dark:hover:shadow-slate-900/60"
          v-reveal="{ delay: 120 + index * 80, origin: 'scale' }"
        >
          <!-- Image + overlay -->
          <div class="relative overflow-hidden">
            <img
              :src="project.image"
              :alt="`${project.title} website preview`"
              class="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.02] sm:h-72"
            />
            </div>

            <!-- Hover overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent
                     opacity-0 transition duration-300 group-hover:opacity-100"
            >

            <!-- View Demo button on hover -->
            <div
              class="absolute inset-x-6 bottom-6 translate-y-3 opacity-0
                     transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            >
              <a
                :href="project.demoUrl"
                target="_blank"
                rel="noreferrer"
                class="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950
                       transition hover:bg-brand-50"
              >
                View Demo →
              </a>
            </div>
          </div>

          <!-- Card body -->
          <div class="p-5 sm:p-7">
            <h3 class="text-xl font-semibold text-slate-950 sm:text-2xl dark:text-white">
              {{ project.title }}
            </h3>
            <p class="mt-3 text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base dark:text-slate-300">
              {{ project.description }}
            </p>

            <!-- Divider -->
            <div class="mt-5 border-t border-slate-100 pt-5 dark:border-slate-700 sm:mt-6 sm:pt-6">
              <a
                :href="project.demoUrl"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600
                       transition hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
              >
                View Demo
                <svg viewBox="0 0 16 16" fill="currentColor" class="h-3.5 w-3.5">
                  <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z"/>
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>