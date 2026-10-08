<script setup>
import { onMounted, onUnmounted } from "vue";
import projectTestImg from "@/assets/project-test.webp";

defineProps({
  isDark: Boolean,
});

const emit = defineEmits(["close", "toggle-dark", "open-case-study"]);

const technologies = [
  "Vue",
  "Tailwind CSS",
  "Responsive Design",
  "Semantic HTML",
];

const projectMeta = [
  {
    label: "Role",
    value: "Frontend Developer",
    detail:
      "UI implementation, layout architecture & conversion-focused structure",
  },
  {
    label: "Stack",
    value: "Vue & Tailwind CSS",
    detail: "Component driven SPA with utility first styling",
  },
  {
    label: "Objective",
    value: "Inquiry Generation",
    detail: "Fast service discovery & clear telephone call-to-action flow",
  },
];

const uxDecisions = [
  {
    title: "Instant Service Categorization",
    subtitle: "Clear Problem Discovery",
    desc: "Structured service cards for Emergency Plumbing, Leak Detection, Drain Cleaning, and Water Heater Repair allow users to immediately identify their need without wading through marketing jargon.",
  },
  {
    title: "Zero-Friction Contact Hierarchy",
    subtitle: "Prioritized Action Pathways",
    desc: "The concept provides a prominent header call button with local (832) Houston area code for one tap telephone dispatch during emergencies, alongside a structured quote form for non urgent service requests.",
  },
  {
    title: "Trust & Upfront Pricing Signals",
    subtitle: "Overcoming Caller Hesitation",
    desc: "The design incorporates upfront pricing pledges, response-time commitments, and Houston neighborhood tags (Heights, Katy, Sugar Land) to establish immediate local credibility before a customer reaches out.",
  },
];

const technicalDecisions = [
  {
    title: "Modular Vue Architecture",
    desc: "Built with isolated, reusable components for emergency callouts, service cards, and inquiry forms. Keeps UI logic modular, predictable, and easy to maintain.",
  },
  {
    title: "Tailwind Design System & Fast Paints",
    desc: "Leveraged utility-first CSS for minimal bundle overhead, zero unused styles, and immediate first contentful paint (FCP) on variable mobile cellular connections.",
  },
  {
    title: "Semantic HTML & Action Clarity",
    desc: "Structured with accessible landmark regions, native button/anchor semantics, and deliberate visual contrast guiding eye flow directly to conversion actions.",
  },
];

const responsivePoints = [
  {
    title: "One-Handed Mobile Use",
    desc: "Optimized for high-stress mobile visitors with persistent call triggers and 44px+ touch targets for effortless one-thumb operation.",
  },
  {
    title: "Zero Horizontal Overflow",
    desc: "Tested across 375px through 1440px viewports with fluid container padding, wrapping flex layouts, and responsive typographic scale.",
  },
  {
    title: "Accessibility & Contrast",
    desc: "Full keyboard navigation with visible focus rings, valid heading hierarchy, accessible SVG labels, and WCAG-compliant text contrast.",
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
          RapidFlow · Business Website Case Study
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
            href="https://rapidflow-psi.vercel.app/"
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
          <span class="eyebrow">CASE STUDY · SERVICE BUSINESS WEBSITE</span>
          <h1
            class="mt-5 font-display text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl"
          >
            RapidFlow Plumbing Services Website
          </h1>
          <p
            class="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl"
          >
            A conversion focused website concept designed to streamline
            emergency plumbing discovery, build local trust, and help guide
            visitors into direct service inquiries.
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
              href="https://rapidflow-psi.vercel.app/"
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
                >rapidflow-psi.vercel.app</span
              >
            </div>
            <span class="font-mono text-xs text-slate-500"
              >Rendered Live Demo</span
            >
          </div>
          <img
            :src="projectTestImg"
            alt="RapidFlow plumbing website desktop layout showcasing emergency plumbing services and Houston customer booking flow"
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
          <h2 class="section-title">Solving High Urgency Service Discovery</h2>
          <p class="section-copy">
            Plumbing emergencies create high-stress situations. Home owners
            typically search on mobile devices with water actively leaking,
            requiring immediate answers within seconds.
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
                The Friction Points
              </h3>
            </div>
            <ul
              class="mt-5 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
            >
              <li class="flex items-start gap-2.5">
                <span class="text-rose-500 font-bold">·</span>
                <span
                  >Buried telephone numbers requiring users to navigate multiple
                  pages.</span
                >
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-rose-500 font-bold">·</span>
                <span
                  >Vague service scopes leaving visitors unsure if emergency
                  repairs are handled.</span
                >
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-rose-500 font-bold">·</span>
                <span
                  >Hidden pricing and ambiguous dispatch times resulting in
                  caller hesitation.</span
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
                The RapidFlow Concept
              </h3>
            </div>
            <ul
              class="mt-5 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
            >
              <li class="flex items-start gap-2.5">
                <span class="text-emerald-500 font-bold">·</span>
                <span
                  >Persistent 24/7 emergency dispatch trigger with local (832)
                  Houston number.</span
                >
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-emerald-500 font-bold">·</span>
                <span
                  >Four distinct service offerings presented above the fold with
                  clear scope tags.</span
                >
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-emerald-500 font-bold">·</span>
                <span
                  >Upfront pricing pledges, response commitments, and clear
                  local credibility signals.</span
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
          <span class="eyebrow">User Experience</span>
          <h2 class="section-title">Key UX & Design Decisions</h2>
          <p class="section-copy">
            Every element was structured to reduce cognitive load and accelerate
            the path from arrival to direct contact.
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
            Clean, maintainable frontend choices focused on speed, bundle
            efficiency, and clear interaction hierarchy.
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
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
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
            Ensuring reliable performance, readability, and effortless touch
            interaction across mobile and desktop environments.
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
            Explore the RapidFlow Website
          </h2>
          <p
            class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base"
          >
            The interactive website demo is live on Vercel with responsive
            layouts, structured service modules, and localized copy.
          </p>

          <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://rapidflow-psi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary inline-flex items-center gap-2"
            >
              <span>Open RapidFlow Demo</span>
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
              @click="$emit('open-case-study', 'solidbuild')"
              class="btn-secondary"
            >
              Next: SolidBuild Construction →
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
          @click="$emit('open-case-study', 'solidbuild')"
          class="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
        >
          SolidBuild Construction Case Study →
        </button>
      </div>
    </footer>
  </div>
</template>
