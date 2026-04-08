<template>
  <section
    id="hero"
    class="relative overflow-hidden bg-hero-grid bg-[size:28px_28px] bg-center pt-6 sm:pt-10"
  >
    <div class="container-shell section-padding grid items-center gap-10 sm:gap-14 lg:grid-cols-[1.05fr_0.95fr]">
      <div v-reveal="{ origin: 'left' }">
        <span class="eyebrow">Web Designer</span>
        <h1 class="mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight text-slate-950 sm:mt-7 sm:text-6xl lg:text-7xl dark:text-white">
          I build websites that bring you customers
        </h1>
        <p class="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-xl sm:leading-8 dark:text-slate-300">
          Premium websites designed to turn attention into trust, and trust into real business
          growth. I help service brands look sharper, load faster, and convert better.
        </p>

        <div class="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="#work" class="btn-primary w-full sm:w-auto">View My Work</a>
          <a href="#contact" class="btn-secondary w-full sm:w-auto">Get a Free Strategy Call</a>
        </div>

        <div class="mt-12 grid gap-4 sm:grid-cols-3">
          <div class="surface-card p-5" v-reveal="{ delay: 100, origin: 'scale' }">
            <p class="text-2xl font-semibold text-slate-950 sm:text-3xl">32+</p>
            <p class="mt-2 text-sm leading-6 text-slate-600">launches delivered for founders and local businesses</p>
          </div>
          <div class="surface-card p-5" v-reveal="{ delay: 200, origin: 'scale' }">
            <p class="text-2xl font-semibold text-slate-950 sm:text-3xl">3.1x</p>
            <p class="mt-2 text-sm leading-6 text-slate-600">average increase in qualified leads after redesigns</p>
          </div>
          <div class="surface-card p-5" v-reveal="{ delay: 300, origin: 'scale' }">
            <p class="text-2xl font-semibold text-slate-950 sm:text-3xl">14d</p>
            <p class="mt-2 text-sm leading-6 text-slate-600">typical turnaround for focused landing page projects</p>
          </div>
        </div>
      </div>

      <div class="relative" v-reveal="{ origin: 'right', delay: 120 }">
        <div class="surface-card relative overflow-hidden p-4 sm:p-6">
          <div class="absolute inset-x-6 top-6 h-32 rounded-full bg-brand-100/70 blur-3xl" />
          <div class="relative rounded-[1.25rem] border border-slate-200/80 bg-slate-950 p-4 text-white shadow-2xl shadow-slate-900/10 sm:rounded-[1.75rem] sm:p-5">
            <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div class="flex items-center gap-2">
                <span class="h-3 w-3 rounded-full bg-rose-400" />
                <span class="h-3 w-3 rounded-full bg-amber-400" />
                <span class="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <p class="text-[10px] uppercase tracking-[0.2em] text-slate-400 sm:text-xs sm:tracking-[0.28em]">
                Conversion Dashboard
              </p>
            </div>

            <div class="mt-8 grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
              <div class="rounded-[1.25rem] bg-white p-4 text-slate-900 sm:rounded-[1.5rem] sm:p-5">
                <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p class="text-sm font-medium text-slate-500">Homepage conversion rate</p>
                    <p class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">5.8%</p>
                  </div>
                  <div class="w-fit rounded-2xl bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-600">
                    +124%
                  </div>
                </div>
                <div class="mt-6 flex h-32 items-end gap-2 sm:mt-8 sm:h-40 sm:gap-3">
                  <div class="h-14 w-full rounded-t-3xl bg-slate-200" />
                  <div class="h-24 w-full rounded-t-3xl bg-slate-300" />
                  <div class="h-20 w-full rounded-t-3xl bg-brand-200" />
                  <div class="h-32 w-full rounded-t-3xl bg-brand-400" />
                  <div class="h-36 w-full rounded-t-3xl bg-brand-600" />
                </div>
              </div>

              <div class="space-y-4">
                <div class="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 sm:rounded-[1.5rem] sm:p-5">
                  <p class="text-sm text-slate-400">Ideal for</p>
                  <p class="mt-2 text-base font-semibold leading-7 sm:mt-3 sm:text-lg">
                    Consultants, agencies, wellness and service brands
                  </p>
                </div>
                <div class="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 sm:rounded-[1.5rem] sm:p-5">
                  <p class="text-sm text-slate-400">What clients feel</p>
                  <p class="mt-2 text-base font-semibold leading-7 sm:mt-3 sm:text-lg">
                    More trust, clearer offers, stronger positioning
                  </p>
                </div>
                <div class="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 sm:rounded-[1.5rem] sm:p-5">
                  <p class="text-sm text-slate-400">Built for</p>
                  <p class="mt-2 text-base font-semibold leading-7 sm:mt-3 sm:text-lg">
                    Fast pages, sharp messaging, mobile conversions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
