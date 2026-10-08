<script setup>
const capabilities = [
  {
    title: "Frontend Engineering",
    description:
      "Building performant, component-driven interfaces with modern frameworks and TypeScript.",
    technologies: [
      "Vue",
      "React",
      "TypeScript",
      "Next.js",
      "Component architecture",
    ],
    icon: "code",
  },
  {
    title: "API & Application Integration",
    description:
      "Connecting frontend applications to backend services with clean data flow and reliable state management.",
    technologies: [
      "REST APIs",
      "Axios",
      "Async data flows",
      "State management",
      "Pinia",
    ],
    icon: "api",
  },
  {
    title: "Product & Interface Development",
    description:
      "Translating business requirements into responsive, usable interfaces that serve real workflows.",
    technologies: [
      "Responsive interfaces",
      "Business workflows",
      "Usability",
      "Web experiences",
    ],
    icon: "layers",
  },
];

const iconPaths = {
  code: "m8 6-6 6 6 6M16 6l6 6-6 6",
  api: "M15 7h3a5 5 0 0 1 0 10h-3m-6 0H6A5 5 0 0 1 6 7h3M8 12h8",
  layers: "m12 2 10 5.5-10 5.5L2 7.5ZM2 17l10 5 10-5M2 12l10 5 10-5",
};
</script>

<template>
  <section id="capabilities" class="section-padding">
    <div class="container-shell">
      <div class="max-w-3xl" v-reveal>
        <span class="eyebrow">What I Build</span>
        <h2 class="section-title">Capabilities across the frontend stack.</h2>
        <p class="section-copy">
          From component architecture to API integration and responsive
          interfaces.
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-5 sm:mt-14 md:grid-cols-3">
        <article
          v-for="(cap, index) in capabilities"
          :key="cap.title"
          class="surface-card group p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-slate-200/40 dark:hover:shadow-slate-900/60 sm:p-7"
          v-reveal="{ delay: 100 + index * 100, origin: 'scale' }"
        >
          <div
            class="icon-badge transition duration-300 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              class="h-5 w-5"
              aria-hidden="true"
            >
              <path
                :d="iconPaths[cap.icon]"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
              />
            </svg>
          </div>

          <h3
            class="mt-5 text-lg font-semibold text-slate-950 dark:text-white sm:mt-6 sm:text-xl"
          >
            {{ cap.title }}
          </h3>
          <p
            class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:mt-4 sm:text-base"
          >
            {{ cap.description }}
          </p>

          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="tech in cap.technologies"
              :key="tech"
              class="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-400"
            >
              {{ tech }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
