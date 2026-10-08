<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useDarkMode } from "./composables/useDarkMode";
import UnderConstruction from "@/components/UnderConstruction.vue";
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Portfolio from "@/components/Portfolio.vue";
import Capabilities from "@/components/Capabilities.vue";
import Approach from "@/components/Approach.vue";
import About from "@/components/About.vue";
import CTA from "@/components/CTA.vue";
import SiteFooter from "@/components/Footer.vue";
import IposCaseStudy from "@/components/IposCaseStudy.vue";
import RapidFlowCaseStudy from "@/components/RapidFlowCaseStudy.vue";
import SolidBuildCaseStudy from "@/components/SolidBuildCaseStudy.vue";

const showUnderConstruction = false;

const { isDark, toggle } = useDarkMode();

const activeCaseStudy = ref(null);

const openCaseStudy = (id) => {
  activeCaseStudy.value = id;
  window.location.hash = `#case-study-${id}`;
  window.scrollTo({ top: 0, behavior: "instant" });
};

const closeCaseStudy = () => {
  activeCaseStudy.value = null;
  if (window.location.hash.startsWith("#case-study")) {
    history.replaceState(null, "", "#work");
  }
  const workEl = document.getElementById("work");
  if (workEl) {
    workEl.scrollIntoView({ behavior: "smooth" });
  }
};

const checkHash = () => {
  if (window.location.hash === "#case-study-ipos") {
    activeCaseStudy.value = "ipos";
  } else if (window.location.hash === "#case-study-rapidflow") {
    activeCaseStudy.value = "rapidflow";
  } else if (window.location.hash === "#case-study-solidbuild") {
    activeCaseStudy.value = "solidbuild";
  } else if (activeCaseStudy.value) {
    activeCaseStudy.value = null;
  }
};

onMounted(() => {
  checkHash();
  window.addEventListener("hashchange", checkHash);
});

onUnmounted(() => {
  window.removeEventListener("hashchange", checkHash);
});
</script>

<template>
  <UnderConstruction v-if="showUnderConstruction" />
  <IposCaseStudy
    v-else-if="activeCaseStudy === 'ipos'"
    :is-dark="isDark"
    @toggle-dark="toggle"
    @close="closeCaseStudy"
  />

  <RapidFlowCaseStudy
    v-else-if="activeCaseStudy === 'rapidflow'"
    :is-dark="isDark"
    @toggle-dark="toggle"
    @close="closeCaseStudy"
    @open-case-study="openCaseStudy"
  />

  <SolidBuildCaseStudy
    v-else-if="activeCaseStudy === 'solidbuild'"
    :is-dark="isDark"
    @toggle-dark="toggle"
    @close="closeCaseStudy"
    @open-case-study="openCaseStudy"
  />

  <div
    v-else
    class="relative min-h-screen bg-[#f8f7f4] text-slate-900 dark:bg-[#0d1117] dark:text-slate-100"
  >
    <div
      class="pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        class="absolute -left-28 top-0 h-72 w-72 rounded-full bg-brand-100/70 blur-3xl dark:bg-brand-600/15"
      />
      <div
        class="absolute right-0 top-48 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl dark:bg-sky-600/10"
      />
      <div
        class="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-slate-200/60 blur-3xl sm:h-96 sm:w-96 dark:bg-slate-700/30"
      />
    </div>

    <Navbar :is-dark="isDark" @toggle-dark="toggle" />

    <main class="relative z-10">
      <Hero />
      <Portfolio @open-case-study="openCaseStudy" />
      <Capabilities />
      <Approach />
      <About />
      <CTA />
    </main>

    <SiteFooter />
  </div>
</template>
