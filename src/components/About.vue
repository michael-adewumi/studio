<template>
  <section id="about" class="section-padding">
    <div class="container-shell grid gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div v-reveal="{ origin: 'left' }">
        <span class="eyebrow">About</span>
        <h2 class="section-title">Design that makes your business easier to trust and easier to choose.</h2>
      </div>

      <div class="space-y-6" v-reveal="{ origin: 'right', delay: 120 }">
        <div class="surface-card p-5 sm:p-10">
          <p class="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            I partner with founders and service businesses that need more than a pretty site. Every
            page is designed to clarify your value, guide visitors toward action, and create a more
            polished brand experience from the very first scroll.
          </p>
          <p class="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
            Whether you need a new website, a redesign, or a conversion-focused landing page, the
            goal stays the same: help your business look credible, communicate clearly, and win more
            customers.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div class="surface-card p-5 sm:p-6" v-reveal="{ delay: 180, origin: 'scale' }">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-sm sm:tracking-[0.22em]">Strategy-first</p>
            <p class="mt-3 text-base leading-7 text-slate-600">
              Messaging, structure, and conversion paths are planned before visuals take over.
            </p>
          </div>
          <div class="surface-card p-5 sm:p-6" v-reveal="{ delay: 260, origin: 'scale' }">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-sm sm:tracking-[0.22em]">Built for growth</p>
            <p class="mt-3 text-base leading-7 text-slate-600">
              Responsive layouts, performance, and clear CTAs help turn traffic into enquiries.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
