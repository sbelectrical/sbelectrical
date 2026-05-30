<script setup>
const services = [
  {
    icon: 'M12 2V6M12 18V22M4.9 4.9L7.8 7.8M16.2 16.2L19.1 19.1M2 12H6M18 12H22M4.9 19.1L7.8 16.2M16.2 7.8L19.1 4.9',
    title: 'Electrical Repairs',
    description: 'Fast diagnosis and repair of faulty wiring, outlets, switches, and circuits.',
  },
  {
    icon: 'M5 3H19V21H5V3ZM9 7H15M9 11H15M9 15H12',
    title: 'Panel Upgrades',
    description: 'Safe and compliant electrical panel replacement and capacity upgrades.',
  },
  {
    icon: 'M9 18H15M10 22H14M12 2C8.7 2 6 4.7 6 8C6 10.2 7.2 11.8 8.8 13.2C9.6 13.9 10 14.8 10 16H14C14 14.8 14.4 13.9 15.2 13.2C16.8 11.8 18 10.2 18 8C18 4.7 15.3 2 12 2Z',
    title: 'Lighting Installs',
    description: 'Interior and exterior lighting installation for homes and businesses.',
  },
  {
    icon: 'M7 2H17M8 2V8H16V2M9 22H15C17.2 22 19 20.2 19 18V12C19 9.8 17.2 8 15 8H9C6.8 8 5 9.8 5 12V18C5 20.2 6.8 22 9 22ZM10 15H14',
    title: 'EV Charger Installation',
    description: 'Level 2 EV charger installation for residential and commercial properties.',
  },
  {
    icon: 'M13 2L4 14H11L10 22L20 9H13L13 2Z',
    title: 'Emergency Electrical',
    description: '24/7 emergency response for outages, tripped breakers, and wiring hazards.',
  },
  {
    icon: 'M4 12L12 5L20 12M6 10.5V20H18V10.5M9 20V14H15V20M9 8.5C10.8 7.2 13.2 7.2 15 8.5',
    title: 'Smart Home Wiring',
    description: 'Wiring and setup for smart switches, thermostats, and home automation systems.',
  },
]

const processSteps = [
  {
    title: 'Book',
    description: 'Call or fill the form to request service.',
  },
  {
    title: 'Assess',
    description: 'We review the job and give a clear estimate.',
  },
  {
    title: 'Work',
    description: 'Licensed electricians complete the job safely.',
  },
  {
    title: 'Done',
    description: 'Clean site, signed off, and ready to use.',
  },
]

const serviceAreas = [
  'NE Calgary',
  'NW Calgary',
  'SE Calgary',
  'SW Calgary',
  'Airdrie',
  'Chestermere',
  'Cochrane',
  'Okotoks',
]
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white">
    <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD600]">Services</p>
          <h2 class="mt-4 text-3xl font-black sm:text-4xl">Electrical work done right.</h2>
          <p class="mt-4 max-w-2xl text-white/70">From repairs to lighting upgrades, SB Electrical delivers high-quality installations and fast responsive service for Calgary homes and businesses.</p>
        </div>
        <router-link class="rounded-md border border-white/10 px-5 py-3 text-sm font-bold text-white/75 transition hover:border-[#FFD600] hover:text-[#FFD600]" to="/contact">
          Get an estimate
        </router-link>
      </div>

      <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="service in services"
          :key="service.title"
          class="group flex min-h-72 flex-col justify-between rounded-md border border-white/10 bg-[#111111] p-6 transition hover:-translate-y-1 hover:border-[#FFD600]/70"
        >
          <div>
            <div class="flex h-14 w-14 items-center justify-center rounded-md border border-[#FFD600]/50 bg-[#FFD600]/10 text-[#FFD600]">
              <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path :d="service.icon" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <h3 class="mt-6 text-xl font-black text-white">{{ service.title }}</h3>
            <p class="mt-4 text-sm leading-6 text-[#9ca3af]">{{ service.description }}</p>
          </div>
          <router-link class="mt-8 text-sm font-black text-[#FFD600] transition group-hover:text-white" to="/contact">
            Learn More -&gt;
          </router-link>
        </article>
      </div>
    </section>

    <section class="border-y border-white/10 bg-[#0a0a0a] px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <div class="max-w-3xl">
          <p class="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD600]">Our Process</p>
          <h2 class="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">Simple. Safe. Done right.</h2>
        </div>

        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="(step, index) in processSteps"
            :key="step.title"
            class="rounded-md border border-white/10 bg-[#111111] p-6"
          >
            <p class="text-5xl font-black leading-none text-[#FFD600]">{{ String(index + 1).padStart(2, '0') }}</p>
            <h3 class="mt-8 text-xl font-black text-white">{{ step.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-[#9ca3af]">{{ step.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-[#111111] px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <h2 class="text-3xl font-black leading-tight text-white sm:text-4xl">Serving Calgary &amp; Surrounding Areas</h2>
        <div class="mt-8 flex flex-wrap gap-3">
          <span
            v-for="area in serviceAreas"
            :key="area"
            class="rounded-full border border-[#FFD600]/60 px-5 py-3 text-sm font-bold text-[#FFD600]"
          >
            {{ area }}
          </span>
        </div>
      </div>
    </section>

    <section class="px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto grid max-w-7xl gap-6 rounded-md bg-[#FFD600] p-6 text-[#0a0a0a] sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
        <div>
          <h2 class="text-3xl font-black leading-tight sm:text-4xl">Ready to book an electrician?</h2>
          <p class="mt-3 text-base font-semibold text-black/70">Call us or send a message — we respond same day.</p>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row">
          <a class="rounded-md bg-[#0a0a0a] px-6 py-4 text-center font-black text-white transition hover:bg-white hover:text-[#0a0a0a]" href="tel:+14035606052">
            Call 403-560-6052
          </a>
          <router-link class="rounded-md border border-[#0a0a0a] px-6 py-4 text-center font-black text-[#0a0a0a] transition hover:bg-[#0a0a0a] hover:text-white" to="/contact">
            Send a Message
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
