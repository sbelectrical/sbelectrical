<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const services = [
  'Electrical repairs',
  'Panel upgrades',
  'Lighting installs',
  'EV chargers',
]

const currentSlide = ref(0)

const slides = [
  {
    title: 'Trusted Calgary electricians',
    subtitle: 'Experienced residential and commercial wiring, panel upgrades, and repair work.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&q=80',
  },
  {
    title: 'Safe electrical installations',
    subtitle: 'Code-compliant service with clean workmanship and reliable results.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
  },
  {
    title: 'Smart lighting upgrades',
    subtitle: 'Brighten your home or business with modern lighting solutions.',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=1600&q=80',
  },
  {
    title: 'Panel and meter service',
    subtitle: 'Reliable panel repair, replacement, and electrical system inspections.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80',
  },
  {
    title: 'Emergency electrical support',
    subtitle: 'Fast response for outages, breaker trips, and wiring hazards.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80',
  },
]

let intervalId = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const setSlide = (index) => {
  currentSlide.value = index
}

onMounted(() => {
  intervalId = window.setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  if (intervalId) window.clearInterval(intervalId)
})
</script>

<template>
  <div class="min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
    <section class="px-4 py-10 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <div class="relative overflow-hidden rounded-[2rem] bg-[#111] shadow-2xl">
          <div class="relative aspect-[16/7] min-h-[420px]">
            <template v-for="(slide, index) in slides" :key="slide.title">
              <div
                class="absolute inset-0 transition-opacity duration-700"
                :class="currentSlide === index ? 'opacity-100' : 'opacity-0'"
              >
                <img :src="slide.image" :alt="slide.title" class="absolute inset-0 h-full w-full object-cover block" loading="lazy" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
                <div class="absolute bottom-8 left-8 right-8 text-white md:bottom-12 md:left-12">
                  <p class="text-sm uppercase tracking-[0.3em] text-[#FFD600]">SB Electrical</p>
                  <h2 class="mt-3 text-3xl font-black sm:text-4xl lg:text-5xl">{{ slide.title }}</h2>
                  <p class="mt-4 max-w-2xl text-sm leading-6 text-white/80">{{ slide.subtitle }}</p>
                </div>
              </div>
            </template>
          </div>

          <div class="absolute left-4 top-1/2 flex -translate-y-1/2 gap-2 md:left-6">
            <button
              @click="setSlide((currentSlide + slides.length - 1) % slides.length)"
              class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition hover:bg-black/70"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              @click="setSlide((currentSlide + 1) % slides.length)"
              class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition hover:bg-black/70"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>

          <div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            <button
              v-for="(_, index) in slides"
              :key="index"
              @click="setSlide(index)"
              :class="[
                'h-3 w-3 rounded-full transition',
                currentSlide === index ? 'bg-white' : 'bg-white/40',
              ]"
              aria-label="Select slide"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <section class="relative">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,214,0,0.18),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_34%)]"></div>
      <div class="relative mx-auto grid min-h-[76vh] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD600]">Calgary electrical contractor</p>
          <h1 class="mt-5 max-w-4xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">SB Electrical</h1>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Professional residential and commercial electrical service with responsive support, clean workmanship, and code-conscious installs.
          </p>
          <div class="mt-8 flex flex-col gap-4 sm:flex-row">
            <router-link class="rounded-md bg-[#FFD600] px-6 py-4 text-center font-black text-[#0a0a0a] shadow-[0_0_35px_rgba(255,214,0,0.28)] transition hover:bg-white" to="/contact-us">
              Request Service
            </router-link>
            <router-link class="rounded-md border border-[#FFD600] px-6 py-4 text-center font-black text-[#FFD600] transition hover:bg-[#FFD600] hover:text-[#0a0a0a]" to="/services">
              View Services
            </router-link>
          </div>
        </div>

        <div class="grid gap-4">
          <div class="rounded-md border border-[#FFD600]/35 bg-white/[0.06] p-6 shadow-2xl backdrop-blur">
            <p class="text-4xl font-black text-[#FFD600]">24/7</p>
            <p class="mt-2 font-semibold text-white">Emergency electrical support</p>
            <p class="mt-3 text-sm leading-6 text-white/60">
              Fast help for outages, breaker issues, unsafe wiring, and urgent troubleshooting.
            </p>
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
  </div>
</template>
