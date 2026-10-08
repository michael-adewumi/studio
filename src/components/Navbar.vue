<script setup>
import { ref, onMounted, onUnmounted } from "vue";

defineProps({
  isDark: Boolean,
});

const emit = defineEmits(["toggle-dark"]);

const scrolled = ref(false);
const isOpen = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 10;
};

const closeMenu = () => {
  isOpen.value = false;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b backdrop-blur-xl transition-all duration-300"
    :class="
      scrolled
        ? 'border-slate-200/80 bg-slate-50/95 shadow-sm shadow-slate-200/80 dark:border-slate-700/60 dark:bg-slate-950/90 dark:shadow-slate-900/80'
        : 'border-transparent bg-slate-50/80 dark:bg-slate-950/50'
    "
  >
    <nav class="container-shell flex items-center justify-between py-3 sm:py-4">
      <a
        href="#hero"
        class="text-base font-semibold tracking-tight text-slate-950 transition hover:text-brand-600 sm:text-lg dark:text-white dark:hover:text-brand-400"
      >
        Michael Adewumi
      </a>

      <div class="hidden items-center gap-8 md:flex">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="rounded-lg text-sm font-medium text-slate-600 transition hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:text-slate-400 dark:hover:text-white"
        >
          {{ link.label }}
        </a>
      </div>

      <div class="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-white"
          @click="emit('toggle-dark')"
        >
          <svg
            v-if="isDark"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-4 w-4"
            aria-hidden="true"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.42 1.42l-.71.7a1 1 0 11-1.41-1.41l.7-.71zM18 9a1 1 0 110 2h-1a1 1 0 110-2h1zM4.22 15.78a1 1 0 001.42-1.42l-.71-.7a1 1 0 00-1.41 1.41l.7.71zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-5.78-.22a1 1 0 001.42 1.42l.7-.71a1 1 0 00-1.41-1.41l-.71.7zM4 10a1 1 0 110-2H3a1 1 0 100 2h1zm11.78 5.78a1 1 0 001.41-1.41l-.7-.71a1 1 0 00-1.42 1.42l.71.7zM10 6a4 4 0 100 8 4 4 0 000-8z"
            />
          </svg>
          <svg
            v-else
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-4 w-4"
            aria-hidden="true"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            />
          </svg>
        </button>

        <a
          href="#contact"
          class="btn-primary hidden px-5 py-2.5 md:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
        >
          Let's work together
        </a>

        <button
          type="button"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-brand-500 md:hidden dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-white"
          :aria-expanded="isOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          @click="isOpen = !isOpen"
        >
          <span class="relative h-4 w-5">
            <span
              class="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition duration-300"
              :class="isOpen ? 'translate-y-[7px] rotate-45' : ''"
            />
            <span
              class="absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition duration-300"
              :class="isOpen ? 'opacity-0' : ''"
            />
            <span
              class="absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition duration-300"
              :class="isOpen ? '-translate-y-[7px] -rotate-45' : ''"
            />
          </span>
        </button>
      </div>
    </nav>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <nav
        v-if="isOpen"
        id="mobile-menu"
        aria-label="Mobile navigation"
        class="container-shell relative z-50 border-t border-slate-200/80 pb-4 pt-3 md:hidden dark:border-slate-700/60"
      >
        <div
          class="surface-card flex flex-col gap-2 bg-white p-3 dark:bg-slate-900"
        >
          <a
            v-for="link in navLinks"
            :key="`${link.href}-mobile`"
            :href="link.href"
            class="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:text-slate-300 dark:hover:bg-slate-700/50 dark:hover:text-white"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
          <a
            href="#contact"
            class="btn-primary mt-2 w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            @click="closeMenu"
          >
            Let's work together
          </a>
        </div>
      </nav>
    </Transition>
  </header>
</template>
