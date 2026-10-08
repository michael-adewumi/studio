<script setup>
const principles = [
  {
    title: "Workflow First",
    description:
      "Understand the user and business workflow before writing code.",
    icon: "search",
  },
  {
    title: "Component Architecture",
    description: "Build reusable, maintainable component systems that scale.",
    icon: "grid",
  },
  {
    title: "API Integration",
    description: "Integrate cleanly with REST APIs and backend services.",
    icon: "plug",
  },
  {
    title: "State Management",
    description: "Manage application state deliberately and predictably.",
    icon: "database",
  },
  {
    title: "Error Handling",
    description: "Handle errors and edge cases for reliable user experiences.",
    icon: "shield",
  },
  {
    title: "Responsive & Maintainable",
    description:
      "Keep interfaces responsive, accessible, and easy to maintain.",
    icon: "device",
  },
];

const iconPaths = {
  search:
    "m15.5 15.5 4.25 4.25M10.75 17a6.25 6.25 0 1 1 0-12.5 6.25 6.25 0 0 1 0 12.5Z",
  grid: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",
  plug: "M12 22v-5m-5-5V2m10 10V2M7 7h10M7 12h10a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3Z",
  database:
    "M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4ZM4 12c0 2.21 3.58 4 8 4s8-1.79 8-4",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  device: "M10 17H4V5h16v4m1 8v4h-6v-4m0-4h6v4h-6Z",
};
</script>

<template>
  <section id="approach" class="section-padding">
    <div class="container-shell">
      <div class="max-w-3xl" v-reveal>
        <span class="eyebrow">Engineering Approach</span>
        <h2 class="section-title">How I approach frontend work.</h2>
        <p class="section-copy">
          Principles that guide how I build applications.
        </p>
      </div>

      <div
        class="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="(principle, index) in principles"
          :key="principle.title"
          class="surface-card p-5 sm:p-6"
          v-reveal="{ delay: 80 + index * 60, origin: 'scale' }"
        >
          <div class="flex items-start gap-4">
            <div class="icon-badge shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                class="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  :d="iconPaths[principle.icon]"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.8"
                />
              </svg>
            </div>
            <div>
              <h3
                class="text-base font-semibold text-slate-950 dark:text-white sm:text-lg"
              >
                {{ principle.title }}
              </h3>
              <p
                class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400"
              >
                {{ principle.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
