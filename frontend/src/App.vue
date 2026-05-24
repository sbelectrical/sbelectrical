<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const services = [
  'Electrical repairs',
  'Panel upgrades',
  'Lighting installs',
  'EV chargers',
]
</script>

<template>
  <div class="min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
    <Navbar />

    <main>
      <section id="home" class="relative">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,214,0,0.18),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_34%)]"></div>
        <div class="relative mx-auto grid min-h-[76vh] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p class="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD600]">Calgary electrical contractor</p>
            <h1 class="mt-5 max-w-4xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              SB Electrical
            </h1>
            <p class="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Professional residential and commercial electrical service with responsive support, clean workmanship, and code-conscious installs.
            </p>
            <div class="mt-8 flex flex-col gap-4 sm:flex-row">
              <a class="rounded-md bg-[#FFD600] px-6 py-4 text-center font-black text-[#0a0a0a] shadow-[0_0_35px_rgba(255,214,0,0.28)] transition hover:bg-white" href="#contact-us">
                Request Service
              </a>
              <a class="rounded-md border border-[#FFD600] px-6 py-4 text-center font-black text-[#FFD600] transition hover:bg-[#FFD600] hover:text-[#0a0a0a]" href="#services">
                View Services
              </a>
            </div>
          </div>

          <div class="grid gap-4">
            <div class="rounded-md border border-[#FFD600]/35 bg-white/[0.06] p-6 shadow-2xl backdrop-blur">
              <p class="text-4xl font-black text-[#FFD600]">24/7</p>
              <p class="mt-2 font-semibold text-white">Emergency electrical support</p>
              <p class="mt-3 text-sm leading-6 text-white/60">Fast help for outages, breaker issues, unsafe wiring, and urgent troubleshooting.</p>
            </div>
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="rounded-md border border-white/10 bg-white/[0.05] p-6">
                <p class="text-3xl font-black">15+</p>
                <p class="mt-2 text-sm text-white/60">Years of experience</p>
              </div>
              <div class="rounded-md border border-white/10 bg-white/[0.05] p-6">
                <p class="text-3xl font-black">100%</p>
                <p class="mt-2 text-sm text-white/60">Safety focused work</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="who-we-are" class="border-y border-white/10 bg-white/[0.03] px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p class="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD600]">Who We Are</p>
            <h2 class="mt-4 text-3xl font-black leading-tight sm:text-4xl">Local electricians serving Calgary homes and businesses.</h2>
          </div>
          <div class="grid gap-4 sm:grid-cols-3">
            <div class="rounded-md border border-white/10 bg-[#0a0a0a] p-5">
              <p class="font-bold text-[#FFD600]">Licensed</p>
              <p class="mt-3 text-sm leading-6 text-white/60">Reliable electrical work completed with safety first.</p>
            </div>
            <div class="rounded-md border border-white/10 bg-[#0a0a0a] p-5">
              <p class="font-bold text-[#FFD600]">Clean</p>
              <p class="mt-3 text-sm leading-6 text-white/60">Respectful service and tidy job sites.</p>
            </div>
            <div class="rounded-md border border-white/10 bg-[#0a0a0a] p-5">
              <p class="font-bold text-[#FFD600]">Clear</p>
              <p class="mt-3 text-sm leading-6 text-white/60">Straight estimates and practical recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p class="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD600]">Services</p>
            <h2 class="mt-4 text-3xl font-black sm:text-4xl">Electrical work done right.</h2>
          </div>
          <a class="rounded-md border border-white/10 px-5 py-3 text-sm font-bold text-white/75 transition hover:border-[#FFD600] hover:text-[#FFD600]" href="#contact-us">
            Get an estimate
          </a>
        </div>

        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="service in services" :key="service" class="rounded-md border border-white/10 bg-white/[0.05] p-6 transition hover:-translate-y-1 hover:border-[#FFD600]/60">
            <div class="mb-6 h-1 w-12 bg-[#FFD600]"></div>
            <p class="text-lg font-black">{{ service }}</p>
          </div>
        </div>
      </section>

      <section id="contact-us" class="border-t border-white/10 bg-[#FFD600] px-4 py-16 text-[#0a0a0a] sm:px-6 lg:px-8">
        <div class="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p class="text-sm font-black uppercase tracking-[0.3em]">Contact Us</p>
            <h2 class="mt-4 text-3xl font-black sm:text-5xl">Call SB Electrical at (403) 555-0187.</h2>
          </div>
          <a class="rounded-md bg-[#0a0a0a] px-6 py-4 text-center font-black text-white transition hover:bg-white hover:text-[#0a0a0a]" href="tel:+14035550187">
            Call Now
          </a>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>
