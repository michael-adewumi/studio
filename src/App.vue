<script setup>
import { ref } from 'vue'
import { useDarkMode } from './composables/useDarkMode'
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Services from '@/components/Services.vue'
import Portfolio from '@/components/Portfolio.vue'
import Process from '@/components/Process.vue'
import Testimonials from '@/components/Testimonials.vue'
import CTA from '@/components/CTA.vue'
import SiteFooter from '@/components/Footer.vue'
import Modal from '@/components/Modal.vue'

const { isDark, toggle } = useDarkMode()

const newsletterEmails = ref([])

const handleEmailCapture = (email) => {
  if (!newsletterEmails.value.includes(email)) {
    newsletterEmails.value.push(email)
  }
}
</script>

<template>
  <div class="relative min-h-screen bg-[#f8f7f4] text-slate-900 dark:bg-[#0d1117] dark:text-slate-100">
    <div class="pointer-events-none fixed inset-0 overflow-hidden">
      <div class="absolute -left-28 top-0 h-72 w-72 rounded-full bg-brand-100/70 blur-3xl dark:bg-brand-600/15" />
      <div class="absolute right-0 top-48 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl dark:bg-sky-600/10" />
      <div class="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-slate-200/60 blur-3xl dark:bg-slate-700/30" />
    </div>

    <Navbar :is-dark="isDark" @toggle-dark="toggle" />

    <main class="relative z-10">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTA />
    </main>

    <SiteFooter :captured-emails="newsletterEmails.length" />
    <Modal @submit-email="handleEmailCapture" />
  </div>
</template>
