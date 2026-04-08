<script setup>
const testimonials = [
  {
    name: 'Maya Thompson',
    role: 'Founder, Bloom Wellness',
    quote:
      'Our website finally reflects the quality of our business. It feels premium, and enquiries started sounding more serious within weeks.',
    rating: 5
  },
  {
    name: 'Daniel Ross',
    role: 'Director, Crest Roofing',
    quote:
      'The redesign made our services easier to understand and gave us a much sharper first impression. It honestly changed how people saw our company.',
    rating: 5
  },
  {
    name: 'Lena Patel',
    role: 'Consultant, Atlas Legal',
    quote:
      'The process was organized, fast, and thoughtful. Every section had a purpose, and the final site feels like a real growth asset.',
    rating: 5
  }
]
</script>

<template>
  <section class="section-padding">
    <div class="container-shell">
      <div class="max-w-3xl" v-reveal="{ origin: 'left' }">
        <span class="eyebrow">Testimonials</span>
        <h2 class="section-title">Trusted by founders who needed a site that felt as strong as their service.</h2>
        <p class="section-copy">
          A premium website is often the first impression. These clients needed that impression to work harder.
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-5 sm:mt-14 lg:grid-cols-3">
        <article
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.name"
          class="surface-card p-5 transition duration-300 hover:-translate-y-0.8 hover:shadow-md hover:shadow-slate-200/40 sm:p-8 dark:hover:shadow-slate-900/60"
          v-reveal="{ delay: 100 + index * 100, origin: 'scale' }"
        >
          <div class="flex gap-1 text-amber-400" :aria-label="`${testimonial.rating} star review`">
            <svg
              v-for="star in testimonial.rating"
              :key="star"
              viewBox="0 0 20 20"
              class="h-5 w-5 fill-current"
            >
              <path
                d="m10 1.75 2.3 4.66 5.15.75-3.72 3.62.88 5.12L10 13.5 5.39 15.9l.88-5.12L2.55 7.16l5.15-.75Z"
              />
            </svg>
          </div>
          <p class="mt-5 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">"{{ testimonial.quote }}"</p>
          <div class="mt-6 sm:mt-8">
            <p class="text-base font-semibold text-slate-950">{{ testimonial.name }}</p>
            <p class="mt-1 text-sm text-slate-500">{{ testimonial.role }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
