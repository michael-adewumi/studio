<script setup>
import { featuredProject, projects } from "@/data/projects.js";

defineEmits(["open-case-study"]);
</script>

<template>
  <section id="work" class="section-padding">
    <div class="container-shell">
      <div class="max-w-3xl" v-reveal="{ origin: 'left' }">
        <span class="eyebrow">Selected Work</span>
        <h2 class="section-title">Applications and websites I've worked on.</h2>
        <p class="section-copy">
          A selection of projects across product development, business websites,
          and frontend architecture.
        </p>
      </div>

      <article
        class="mt-12 overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-gradient-to-br from-slate-900 to-slate-950 text-white shadow-soft dark:border-slate-700/50 sm:mt-14 sm:rounded-[2rem]"
        v-reveal="{ delay: 100 }"
      >
        <div
          class="flex flex-wrap items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-3.5 sm:px-8"
        >
          <div class="flex items-center gap-2">
            <span class="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span class="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span class="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            <span
              class="ml-3 hidden font-mono text-xs tracking-wider text-slate-400 sm:inline-block"
            >
              ipos / sales-operations / workflow-engine
            </span>
          </div>
          <div class="flex items-center gap-2">
            <span class="relative flex h-2 w-2">
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
              />
              <span
                class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"
              />
            </span>
            <span class="font-mono text-xs text-slate-400">
              Production System · Enterprise Workflows
            </span>
          </div>
        </div>

        <div
          class="hidden border-b border-white/5 bg-white/[0.015] px-6 py-2.5 font-mono text-[11px] text-slate-400 sm:flex sm:items-center sm:gap-3"
        >
          <span class="text-slate-500">Modules:</span>
          <span class="rounded bg-white/5 px-2 py-0.5 text-slate-300"
            >Invoicing Engine</span
          >
          <span class="text-slate-600">→</span>
          <span class="rounded bg-white/5 px-2 py-0.5 text-slate-300"
            >Inventory Sync</span
          >
          <span class="text-slate-600">→</span>
          <span class="rounded bg-white/5 px-2 py-0.5 text-slate-300"
            >Payment Processing</span
          >
          <span class="text-slate-600">→</span>
          <span class="rounded bg-white/5 px-2 py-0.5 text-slate-300"
            >RBAC Security</span
          >
        </div>

        <div class="p-6 sm:p-10">
          <div class="flex flex-col gap-8 lg:flex-row lg:gap-12">
            <div class="flex-1">
              <span
                class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400"
              >
                {{ featuredProject.category }}
              </span>
              <h3
                class="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                {{ featuredProject.title }}
              </h3>
              <p
                class="mt-4 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
              >
                {{ featuredProject.description }}
              </p>
              <p class="mt-4 text-sm leading-7 text-slate-400">
                {{ featuredProject.role }}
              </p>
              <div class="mt-6 flex flex-wrap gap-2">
                <span
                  v-for="tech in featuredProject.technologies"
                  :key="tech"
                  class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="lg:w-80">
              <p
                class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
              >
                Key contributions
              </p>
              <ul class="mt-4 space-y-3">
                <li
                  v-for="item in featuredProject.contributions"
                  :key="item"
                  class="flex items-start gap-3 text-sm leading-6 text-slate-300"
                >
                  <svg
                    class="mt-1 h-4 w-4 shrink-0 text-brand-400"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                    />
                  </svg>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-white/[0.02] px-6 py-4 text-xs text-slate-400 sm:px-10"
        >
          <div class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-emerald-400" />
            <span class="font-mono text-slate-300">
              Internal Business Application · Core Workflows
            </span>
          </div>
          <button
            type="button"
            @click="$emit('open-case-study', 'ipos')"
            class="group/btn inline-flex items-center gap-1.5 rounded-full border border-brand-500/40 bg-brand-500/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-brand-300 transition duration-200 hover:border-brand-400 hover:bg-brand-500/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          >
            View Case Study
            <span
              class="transition-transform duration-200 group-hover/btn:translate-x-0.5"
              aria-hidden="true"
              >→</span
            >
          </button>
        </div>
      </article>

      <div class="mt-8 grid gap-6 md:grid-cols-2">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="surface-card group overflow-hidden shadow-md shadow-slate-200/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/40 dark:shadow-slate-900/40 dark:hover:shadow-slate-900/60"
          v-reveal="{ delay: 120 + index * 80, origin: 'scale' }"
        >
          <div class="relative overflow-hidden">
            <img
              :src="project.image"
              :alt="`${project.title} project preview`"
              loading="lazy"
              decoding="async"
              class="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.02] sm:h-72"
            />
            <div
              v-if="project.demoUrl || project.hasCaseStudy"
              class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
            >
              <div
                class="absolute inset-x-6 bottom-6 flex items-center gap-3 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              >
                <button
                  v-if="project.hasCaseStudy"
                  type="button"
                  @click="$emit('open-case-study', project.id)"
                  class="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-brand-50"
                >
                  View Case Study →
                </button>
                <a
                  v-if="project.demoUrl"
                  :href="project.demoUrl"
                  :aria-label="`View live demo for ${project.title}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  tabindex="-1"
                  aria-hidden="true"
                  class="inline-flex rounded-full border border-white/30 bg-white/20 px-3.5 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-slate-950"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>
          </div>

          <div class="flex flex-1 flex-col justify-between p-5 sm:p-7">
            <div>
              <span
                class="text-xs font-medium uppercase tracking-wider text-brand-600 dark:text-brand-400"
              >
                {{ project.category }}
              </span>
              <h3
                class="mt-2 text-xl font-semibold text-slate-950 dark:text-white sm:text-2xl"
              >
                {{ project.title }}
              </h3>
              <p
                class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:mt-4 sm:text-base"
              >
                {{ project.description }}
              </p>

              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-400"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div
              v-if="project.hasCaseStudy"
              class="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5 dark:border-slate-700 sm:mt-6 sm:pt-6"
            >
              <button
                type="button"
                @click="$emit('open-case-study', project.id)"
                class="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700 transition hover:border-brand-500 hover:bg-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-brand-500/30 dark:bg-brand-950/40 dark:text-brand-300 dark:hover:border-brand-400 dark:hover:bg-brand-900/50 dark:hover:text-white"
              >
                View Case Study
                <span aria-hidden="true">→</span>
              </button>

              <a
                v-if="project.demoUrl"
                :href="project.demoUrl"
                :aria-label="`View live demo for ${project.title}`"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 transition hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:text-slate-400 dark:hover:text-white"
              >
                Live Demo
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="h-3 w-3"
                  aria-hidden="true"
                >
                  <path
                    d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z"
                  />
                </svg>
              </a>
            </div>

            <div
              v-else
              class="mt-5 border-t border-slate-100 pt-5 dark:border-slate-700 sm:mt-6 sm:pt-6"
            >
              <a
                v-if="project.demoUrl"
                :href="project.demoUrl"
                :aria-label="`View live demo for ${project.title}`"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 rounded text-sm font-semibold text-brand-600 transition hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:text-brand-400 dark:hover:text-brand-300"
              >
                View Demo
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path
                    d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z"
                  />
                </svg>
              </a>
              <span
                v-else
                class="inline-flex items-center gap-2 text-xs font-medium text-slate-400 dark:text-slate-500"
              >
                <span
                  class="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-600"
                />
                Client Website · Design Concept
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
