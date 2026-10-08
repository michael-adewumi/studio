<script setup>
import { onMounted, onUnmounted } from "vue";
import projectTest2Img from "@/assets/project-test2.webp";

defineProps({
  isDark: Boolean,
});

const emit = defineEmits(["close", "toggle-dark", "open-case-study"]);

const technologies = [
  "Vue",
  "Tailwind CSS",
  "Responsive Layouts",
  "Information Architecture",
];

const projectMeta = [
  {
    label: "Role",
    value: "Frontend Developer",
    detail:
      "UI implementation, layout architecture & consultation inquiry flow",
  },
  {
    label: "Stack",
    value: "Vue & Tailwind CSS",
    detail: "Component driven SPA with structured content modules",
  },
  {
    label: "Objective",
    value: "Credibility & Inquiries",
    detail:
      "Demonstrate contractor credibility & guide remodeling consultation requests",
  },
];

const uxDecisions = [
  {
    title: "Credibility-First Hierarchy",
    subtitle: "Overcoming Homeowner Hesitation",
    desc: "The layout front loads contractor licensing, insurance credentials, and craftsmanship highlights right at the top to establish visitor trust from the first viewport.",
  },
  {
    title: "Structured Service Categorization",
    subtitle: "Transparent Scope Boundaries",
    desc: "Clear scope breakdowns across Kitchen Remodeling, Bathroom Renovation, Whole-Home Makeovers, and General Construction remove ambiguity and set clear project expectations.",
  },
  {
    title: "Visual Proof & Geographic Authority",
    subtitle: "Tangible Remodeling Evidence",
    desc: "The project showcases representative work with Houston neighborhood tags (Heights, Katy, Sugar Land, The Woodlands) and transformation displays demonstrating remodeling possibilities.",
  },
];

const technicalDecisions = [
  {
    title: "Lightweight Vue Composition",
    desc: "Built using modular Vue components for project galleries, service grids, and quote forms without heavy external UI dependencies or bundle bloat.",
  },
  {
    title: "Architectural Design Language",
    desc: "Styled with utility first Tailwind CSS using restrained slate surfaces, crisp structural borders, and confident typography that reflects solid construction foundations.",
  },
  {
    title: "Image Strategy & Aspect Protection",
    desc: "High resolution renovation photography utilizes fixed aspect ratios and lazy loading to prevent cumulative layout shift (CLS) across all screen sizes.",
  },
];

const responsivePoints = [
  {
    title: "Adaptive Grid Transitions",
    desc: "Multi-column desktop disclosures cleanly transition into single-column vertical cards on mobile viewports without layout clipping or text overlap.",
  },
  {
    title: "Touch-Friendly Consultation Flow",
    desc: "Quote forms, service selectors, and call triggers maintain 44px+ hit targets for easy completion on mobile devices.",
  },
  {
    title: "Accessibility & Semantic Structure",
    desc: "Strict heading hierarchy, high-contrast text ratios, visible focus indicators, and accessible keyboard navigation (<kbd>Esc</kbd> to return).",
  },
];

function handleKeyDown(e) {
  if (e.key === "Escape") {
    emit("close");
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
  window.scrollTo({ top: 0, behavior: "instant" });
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});
</script>

<template>
  <div
    class="relative min-h-screen bg-[#f8f7f4] text-slate-900 dark:bg-[#0d1117] dark:text-slate-100"
  >
    <header
      class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/80"
    >
      <div class="container-shell flex h-16 items-center justify-between">
        <button
          type="button"
          @click="$emit('close')"
          class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 sm:text-sm"
        >
          <svg
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Portfolio
        </button>

        <span
          class="hidden font-mono text-xs text-slate-500 dark:text-slate-400 sm:inline-block"
        >
          SolidBuild Construction · Business Website Case Study
        </span>

        <div class="flex items-center gap-3">
          <button
            type="button"
            @click="$emit('toggle-dark')"
            class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white"
            :aria-label="
              isDark ? 'Switch to light theme' : 'Switch to dark theme'
            "
          >
            <svg
              v-if="isDark"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <svg
              v-else
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>

          <a
            href="https://construction-demo-sigma.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary !px-4 !py-2 !text-xs sm:!text-sm inline-flex items-center gap-1.5"
          >
            Live Demo
            <svg
              class="h-3.5 w-3.5"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>

    <section class="section-padding !pb-10 !pt-12 sm:!pt-16">
      <div class="container-shell">
        <div class="max-w-4xl">
          <span class="eyebrow"
            >CASE STUDY · CONTRACTING & CONSTRUCTION WEBSITE</span
          >
          <h1
            class="mt-5 font-display text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl"
          >
            SolidBuild Construction Construction Website
          </h1>
          <p
            class="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl"
          >
            A structured, high-credibility website concept designed for a
            residential remodeling contractor, organizing complex service
            offerings, project showcases, and consultation inquiries.
          </p>

          <div class="mt-6 flex flex-wrap items-center gap-2">
            <span
              v-for="tech in technologies"
              :key="tech"
              class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {{ tech }}
            </span>
          </div>

          <div class="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://construction-demo-sigma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary inline-flex items-center gap-2"
            >
              <span>View Live Website</span>
              <svg
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <button type="button" @click="$emit('close')" class="btn-secondary">
              Back to Portfolio
            </button>
          </div>
        </div>

        <div
          class="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl dark:border-slate-800"
        >
          <div
            class="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-4 py-3"
          >
            <div class="flex items-center gap-2">
              <span class="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
              <span class="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <span class="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              <span class="ml-2 font-mono text-xs text-slate-400"
                >construction-demo-sigma.vercel.app</span
              >
            </div>
            <span class="font-mono text-xs text-slate-500"
              >Rendered Live Demo</span
            >
          </div>
          <img
            :src="projectTest2Img"
            alt="SolidBuild Construction desktop layout showcasing home renovation services and recent Houston remodeling projects"
            class="w-full object-cover"
            loading="eager"
          />
        </div>

        <div class="mt-8 grid gap-4 sm:grid-cols-3">
          <div
            v-for="meta in projectMeta"
            :key="meta.label"
            class="surface-card p-5"
          >
            <span
              class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
            >
              {{ meta.label }}
            </span>
            <p
              class="mt-1.5 text-base font-semibold text-slate-950 dark:text-white"
            >
              {{ meta.value }}
            </p>
            <p class="mt-1 text-xs text-slate-600 dark:text-slate-400">
              {{ meta.detail }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="border-t border-slate-200/80 bg-slate-50/50 py-16 dark:border-slate-800/80 dark:bg-slate-900/30 sm:py-20"
    >
      <div class="container-shell">
        <div class="max-w-3xl">
          <span class="eyebrow">The Challenge</span>
          <h2 class="section-title">
            Earning Trust in High-Investment Projects
          </h2>
          <p class="section-copy">
            Home remodeling represents a substantial financial and emotional
            commitment. Websites in this sector must overcome homeowner
            skepticism before a visitor will initiate an estimate consultation.
          </p>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <div class="surface-card p-6 sm:p-8">
            <div class="flex items-center gap-3">
              <span
                class="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-100 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400 font-bold text-sm"
                >✕</span
              >
              <h3 class="text-lg font-semibold text-slate-900 dark:text-white">
                Contractor Website Obstacles
              </h3>
            </div>
            <ul
              class="mt-5 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
            >
              <li class="flex items-start gap-2.5">
                <span class="text-rose-500 font-bold">·</span>
                <span
                  >Unverified contractor claims without visible licenses or
                  insured status proof.</span
                >
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-rose-500 font-bold">·</span>
                <span
                  >Ambiguous project scopes leaving homeowners unsure if their
                  room type is handled.</span
                >
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-rose-500 font-bold">·</span>
                <span
                  >Intimidating quote requests demanding heavy commitments
                  before discussing options.</span
                >
              </li>
            </ul>
          </div>

          <div class="surface-card p-6 sm:p-8">
            <div class="flex items-center gap-3">
              <span
                class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 font-bold text-sm"
                >✓</span
              >
              <h3 class="text-lg font-semibold text-slate-900 dark:text-white">
                The SolidBuild Approach
              </h3>
            </div>
            <ul
              class="mt-5 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
            >
              <li class="flex items-start gap-2.5">
                <span class="text-emerald-500 font-bold">·</span>
                <span
                  >Prominent contractor credentials: Structured licensing,
                  insurance, and experience signals.</span
                >
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-emerald-500 font-bold">·</span>
                <span
                  >Clear service taxonomy across Kitchens, Bathrooms, Full Home,
                  and Additions.</span
                >
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-emerald-500 font-bold">·</span>
                <span
                  >Collaborative, low-friction consultation pathways designed to
                  initiate discussions.</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section
      class="border-t border-slate-200/80 py-16 dark:border-slate-800/80 sm:py-20"
    >
      <div class="container-shell">
        <div class="max-w-3xl">
          <span class="eyebrow">Information Architecture</span>
          <h2 class="section-title">Key UX & Content Decisions</h2>
          <p class="section-copy">
            The concept uses a progressive disclosure structure that
            demonstrates craftsmanship and builds confidence before presenting
            inquiry forms.
          </p>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <div
            v-for="item in uxDecisions"
            :key="item.title"
            class="surface-card p-6"
          >
            <span
              class="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400"
            >
              {{ item.subtitle }}
            </span>
            <h3
              class="mt-2 text-lg font-semibold text-slate-950 dark:text-white"
            >
              {{ item.title }}
            </h3>
            <p
              class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
            >
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="border-t border-slate-200/80 bg-slate-50/50 py-16 dark:border-slate-800/80 dark:bg-slate-900/30 sm:py-20"
    >
      <div class="container-shell">
        <div class="max-w-3xl">
          <span class="eyebrow">Engineering</span>
          <h2 class="section-title">Technical Implementation</h2>
          <p class="section-copy">
            Clean component structure and responsive styling tailored to
            construction visual presentation.
          </p>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <div
            v-for="item in technicalDecisions"
            :key="item.title"
            class="surface-card p-6"
          >
            <div
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-400"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3
              class="mt-4 text-lg font-semibold text-slate-950 dark:text-white"
            >
              {{ item.title }}
            </h3>
            <p
              class="mt-2.5 text-sm leading-6 text-slate-600 dark:text-slate-300"
            >
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="border-t border-slate-200/80 py-16 dark:border-slate-800/80 sm:py-20"
    >
      <div class="container-shell">
        <div class="max-w-3xl">
          <span class="eyebrow">Quality & Accessibility</span>
          <h2 class="section-title">
            Responsive & Accessibility Considerations
          </h2>
          <p class="section-copy">
            Delivering consistent visual impact and seamless interaction across
            phones, tablets, and wide monitors.
          </p>
        </div>

        <div class="mt-10 grid gap-6 sm:grid-cols-3">
          <div
            v-for="item in responsivePoints"
            :key="item.title"
            class="surface-card p-6"
          >
            <h3 class="text-base font-semibold text-slate-950 dark:text-white">
              {{ item.title }}
            </h3>
            <p
              class="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300"
            >
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="border-t border-slate-200/80 bg-slate-50/50 py-16 dark:border-slate-800/80 dark:bg-slate-900/30 sm:py-20"
    >
      <div class="container-shell">
        <div class="surface-card mx-auto max-w-3xl p-8 text-center sm:p-12">
          <span class="eyebrow mx-auto">Live Demonstration</span>
          <h2
            class="mt-4 text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl"
          >
            Explore SolidBuild Construction
          </h2>
          <p
            class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base"
          >
            The interactive website demo is live on Vercel featuring residential
            project showcases and consultation inquiry flows.
          </p>

          <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://construction-demo-sigma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary inline-flex items-center gap-2"
            >
              <span>Open SolidBuild Demo</span>
              <svg
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <button
              type="button"
              @click="$emit('open-case-study', 'rapidflow')"
              class="btn-secondary"
            >
              ← View RapidFlow Case Study
            </button>
          </div>
        </div>
      </div>
    </section>

    <footer class="border-t border-slate-200/80 py-12 dark:border-slate-800/80">
      <div
        class="container-shell flex flex-col items-center justify-between gap-6 sm:flex-row"
      >
        <button
          type="button"
          @click="$emit('close')"
          class="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
        >
          ← Return to Selected Work
        </button>

        <p class="text-xs text-slate-500 dark:text-slate-400">
          Michael Adewumi · Frontend Engineer
        </p>

        <button
          type="button"
          @click="$emit('open-case-study', 'ipos')"
          class="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
        >
          View iPOS Engineering Case Study →
        </button>
      </div>
    </footer>
  </div>
</template>
