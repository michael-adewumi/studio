<template>
  <section
    id="hero"
    class="relative overflow-hidden bg-hero-grid bg-[size:40px_40px] bg-center"
  >
    <div
      class="pointer-events-none absolute -top-32 left-1/2 h-[260px] w-[320px] -translate-x-1/2 rounded-full bg-brand-200/50 blur-[80px] sm:h-[400px] sm:w-[600px] sm:blur-[100px] dark:bg-brand-500/[0.08]"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute bottom-0 right-0 h-[200px] w-[260px] rounded-full bg-sky-200/40 blur-[80px] sm:h-[300px] sm:w-[400px] sm:blur-[100px] dark:bg-cyan-500/[0.05]"
      aria-hidden="true"
    />

    <div
      class="container-shell relative z-10 flex flex-col items-center text-center pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      <span class="eyebrow" v-reveal="{ origin: 'scale' }">
        Frontend Engineer
      </span>

      <h1
        class="mt-5 max-w-4xl break-words font-display text-3xl font-semibold leading-[1.18] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl"
        v-reveal="{ delay: 80 }"
      >
        I build modern web applications
        <span
          class="bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-600 bg-clip-text text-transparent dark:from-brand-400 dark:via-cyan-400 dark:to-brand-300 sm:block"
        >
          that solve real business problems.
        </span>
      </h1>

      <p
        class="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:mt-5 sm:text-lg sm:leading-8"
        v-reveal="{ delay: 160 }"
      >
        I build responsive, maintainable web applications with Vue, React,
        TypeScript and Next.js from business workflows and API integrations to
        polished customer facing interfaces.
      </p>

      <div
        class="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
        v-reveal="{ delay: 200 }"
      >
        <a href="#work" class="btn-primary w-full sm:w-auto">View my work</a>
        <a href="#contact" class="btn-secondary w-full sm:w-auto">
          Let's work together
        </a>
      </div>

      <p
        class="mt-6 text-xs font-medium tracking-[0.2em] text-slate-400 dark:text-slate-500 sm:mt-8 sm:text-sm"
        v-reveal="{ delay: 240 }"
      >
        Vue • React • TypeScript • Next.js
      </p>
    </div>
  </section>
</template>
