<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const services = [
  {
    title: 'Electrical repairs',
    copy: 'Troubleshooting for outlets, breakers, switches, fixtures, and wiring issues that need a careful fix.',
    tag: 'Repair',
  },
  {
    title: 'Panel upgrades',
    copy: 'Panel replacement, breaker upgrades, meter service, and safer capacity for modern electrical loads.',
    tag: 'Power',
  },
  {
    title: 'Lighting installs',
    copy: 'Indoor, outdoor, security, and efficiency-focused lighting installed cleanly for homes and businesses.',
    tag: 'Lighting',
  },
  {
    title: 'EV chargers',
    copy: 'Home charger wiring, circuit checks, and practical setup guidance for electric vehicles.',
    tag: 'EV Ready',
  },
]

const processSteps = [
  {
    label: 'Listen',
    title: 'Tell us what is happening',
    copy: 'We start with the issue, location, urgency, and any safety concerns so the visit is planned properly.',
  },
  {
    label: 'Inspect',
    title: 'Check the electrical system',
    copy: 'We look for the real cause, explain what we find, and outline the safest repair or upgrade path.',
  },
  {
    label: 'Complete',
    title: 'Finish cleanly and clearly',
    copy: 'The work is completed with care, the area is left tidy, and you know exactly what was done.',
  },
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
    <section class="px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <div class="relative overflow-hidden rounded-2xl bg-[#111] shadow-2xl sm:rounded-[2rem]">
          <div class="relative aspect-[4/3] min-h-[300px] sm:aspect-[16/7] sm:min-h-[420px]">
            <template v-for="(slide, index) in slides" :key="slide.title">
              <div
                class="absolute inset-0 transition-opacity duration-700"
                :class="currentSlide === index ? 'opacity-100' : 'opacity-0'"
              >
                <img :src="slide.image" :alt="slide.title" class="absolute inset-0 block h-full w-full object-cover object-center" loading="lazy" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/5 sm:from-black/85 sm:via-black/10 sm:to-transparent"></div>
                <div class="absolute bottom-10 left-5 right-5 text-white sm:bottom-8 sm:left-8 sm:right-8 md:bottom-12 md:left-12">
                  <p class="text-xs font-bold uppercase tracking-[0.28em] text-[#FFD600] sm:text-sm sm:tracking-[0.3em]">SB Electrical</p>
                  <h2 class="mt-2 max-w-[16rem] text-2xl font-black leading-tight sm:mt-3 sm:max-w-none sm:text-4xl lg:text-5xl">{{ slide.title }}</h2>
                  <p class="mt-3 max-w-[18rem] text-xs leading-5 text-white/80 sm:mt-4 sm:max-w-2xl sm:text-sm sm:leading-6">{{ slide.subtitle }}</p>
                </div>
              </div>
            </template>
          </div>

          <div class="absolute left-5 top-5 flex gap-2 sm:left-4 sm:top-1/2 sm:-translate-y-1/2 md:left-6">
            <button
              @click="setSlide((currentSlide + slides.length - 1) % slides.length)"
              class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/45 text-sm text-white transition hover:bg-black/70 sm:h-11 sm:w-11 sm:text-base"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              @click="setSlide((currentSlide + 1) % slides.length)"
              class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/45 text-sm text-white transition hover:bg-black/70 sm:h-11 sm:w-11 sm:text-base"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>

          <div class="absolute bottom-4 left-5 flex gap-2 sm:left-1/2 sm:-translate-x-1/2">
            <button
              v-for="(_, index) in slides"
              :key="index"
              @click="setSlide(index)"
              :class="[
                'h-2.5 w-2.5 rounded-full transition sm:h-3 sm:w-3',
                currentSlide === index ? 'bg-white' : 'bg-white/40',
              ]"
              aria-label="Select slide"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y border-white/10 bg-[#0a0a0a] px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD600]">Who We Are</p>
          <h2 class="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">Local electricians serving Calgary homes and businesses</h2>
          <p class="mt-6 max-w-2xl text-base leading-8 text-[#9ca3af]">
            SB Electrical provides dependable residential and commercial electrical service with safety-first workmanship, clear communication, and practical recommendations for Calgary customers.
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-3">
          <div class="rounded-md border border-[#FFD600]/35 bg-[#111] p-5 transition hover:-translate-y-1 hover:border-[#FFD600]">
            <div class="flex h-12 w-12 items-center justify-center rounded-md bg-[#FFD600]/10 text-[#FFD600]">
              <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 3L19 6V11C19 15.5 16.1 19.1 12 21C7.9 19.1 5 15.5 5 11V6L12 3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                <path d="M8.5 12L11 14.5L16 9.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <p class="mt-5 text-lg font-black">Licensed</p>
            <p class="mt-3 text-sm leading-6 text-[#9ca3af]">Qualified electrical work completed with safety and code requirements in mind.</p>
          </div>
          <div class="rounded-md border border-[#FFD600]/35 bg-[#111] p-5 transition hover:-translate-y-1 hover:border-[#FFD600]">
            <div class="flex h-12 w-12 items-center justify-center rounded-md bg-[#FFD600]/10 text-[#FFD600]">
              <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 11V7C7 4.8 8.8 3 11 3H13C15.2 3 17 4.8 17 7V11" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <path d="M5 11H19V21H5V11Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                <path d="M12 15V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
            </div>
            <p class="mt-5 text-lg font-black">Insured</p>
            <p class="mt-3 text-sm leading-6 text-[#9ca3af]">Professional service with responsible job planning and respect for your property.</p>
          </div>
          <div class="rounded-md border border-[#FFD600]/35 bg-[#111] p-5 transition hover:-translate-y-1 hover:border-[#FFD600]">
            <div class="flex h-12 w-12 items-center justify-center rounded-md bg-[#FFD600]/10 text-[#FFD600]">
              <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 21C12 21 19 14.8 19 9C19 5.1 15.9 2 12 2C8.1 2 5 5.1 5 9C5 14.8 12 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                <path d="M12 11.5C13.4 11.5 14.5 10.4 14.5 9C14.5 7.6 13.4 6.5 12 6.5C10.6 6.5 9.5 7.6 9.5 9C9.5 10.4 10.6 11.5 12 11.5Z" stroke="currentColor" stroke-width="2" />
              </svg>
            </div>
            <p class="mt-5 text-lg font-black">Local</p>
            <p class="mt-3 text-sm leading-6 text-[#9ca3af]">Calgary-focused support for homes, businesses, renovations, and urgent repairs.</p>
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
            <router-link class="rounded-md bg-[#FFD600] px-6 py-4 text-center font-black text-[#0a0a0a] shadow-[0_0_35px_rgba(255,214,0,0.28)] transition hover:bg-white" to="/contact">
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

    <section class="border-y border-white/10 bg-white/[0.03] px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p class="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD600]">What we handle</p>
            <h2 class="mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">Practical electrical help for everyday problems and planned upgrades.</h2>
          </div>
          <p class="max-w-3xl text-base leading-8 text-white/65 lg:justify-self-end">
            Whether something stopped working or you are preparing a bigger improvement, SB Electrical keeps the work clear, safe, and organized from the first call.
          </p>
        </div>

        <div class="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="service in services"
            :key="service.title"
            class="group relative min-h-64 overflow-hidden rounded-md border border-white/10 bg-[#0a0a0a] p-5 transition hover:-translate-y-1 hover:border-[#FFD600]/70"
          >
            <div class="absolute right-0 top-0 h-24 w-24 border-b border-l border-[#FFD600]/20"></div>
            <div class="relative flex h-full flex-col justify-between">
              <div>
                <span class="inline-flex rounded-md bg-[#FFD600] px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#0a0a0a]">{{ service.tag }}</span>
                <h3 class="mt-6 text-xl font-black">{{ service.title }}</h3>
                <p class="mt-4 text-sm leading-6 text-white/62">{{ service.copy }}</p>
              </div>
              <router-link class="mt-8 inline-flex items-center gap-2 text-sm font-black text-[#FFD600] transition group-hover:text-white" to="/services">
                View service
                <span aria-hidden="true">-&gt;</span>
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div class="rounded-md bg-[#FFD600] p-6 text-[#0a0a0a] shadow-[0_24px_70px_rgba(255,214,0,0.12)] sm:p-8">
          <p class="text-sm font-black uppercase tracking-[0.3em]">How we work</p>
          <h2 class="mt-4 text-4xl font-black leading-tight sm:text-5xl">A simpler visit, from first call to final check.</h2>
          <p class="mt-6 text-base font-semibold leading-8 text-black/70">
            Electrical work can feel stressful when the problem is hidden behind walls or inside a panel. Our process is built to make the next step clear before tools come out.
          </p>
        </div>

        <div class="relative">
          <div class="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-[#FFD600]/35 sm:block"></div>
          <div class="grid gap-5">
            <div
              v-for="step in processSteps"
              :key="step.label"
              class="relative grid gap-4 rounded-md border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-[auto_1fr] sm:items-start"
            >
              <span class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#FFD600] bg-[#0a0a0a] text-xs font-black uppercase tracking-[0.12em] text-[#FFD600]">
                {{ step.label.slice(0, 2) }}
              </span>
              <div>
                <p class="text-xs font-black uppercase tracking-[0.22em] text-[#FFD600]">{{ step.label }}</p>
                <h3 class="mt-2 text-xl font-black">{{ step.title }}</h3>
                <p class="mt-3 text-sm leading-6 text-white/62">{{ step.copy }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="px-4 pb-16 sm:px-6 lg:px-8">
      <div class="mx-auto grid max-w-7xl overflow-hidden rounded-md border border-[#FFD600]/30 bg-[#FFD600] text-[#0a0a0a] lg:grid-cols-[1fr_auto]">
        <div class="p-6 sm:p-8 lg:p-10">
          <p class="text-sm font-black uppercase tracking-[0.3em]">Need an electrician?</p>
          <h2 class="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">Book reliable electrical service for your Calgary home or business.</h2>
          <p class="mt-5 max-w-2xl text-base font-semibold leading-7 text-black/70">
            Send the details once and we will follow up with practical next steps, timing, and the information needed to move forward.
          </p>
        </div>
        <div class="flex flex-col justify-center gap-3 border-t border-black/10 p-6 sm:flex-row sm:items-center lg:border-l lg:border-t-0 lg:p-10">
          <router-link class="rounded-md bg-[#0a0a0a] px-6 py-4 text-center font-black text-white transition hover:bg-white hover:text-[#0a0a0a]" to="/contact">
            Request Service
          </router-link>
          <a class="rounded-md border border-[#0a0a0a] px-6 py-4 text-center font-black text-[#0a0a0a] transition hover:bg-[#0a0a0a] hover:text-white" href="tel:+14035606052">
            Call Now
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
