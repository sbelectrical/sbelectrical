<script setup>
const services = [
  {
    icon: 'M4 12L12 5L20 12M6 10.5V20H18V10.5M9 20V14H15V20M9 8.5C10.8 7.2 13.2 7.2 15 8.5',
    title: 'Custom House Wiring',
    description: 'We handle complete electrical wiring for new custom homes across Alberta. Every install meets code with clean routing and safe connections throughout.',
  },
  {
    icon: 'M4 20H20M6 20V10L12 4L18 10V20M9 20V14H15V20',
    title: 'Renovations',
    description: 'Upgrading or rewiring during a renovation? We handle all electrical work safely and on schedule. From panel changes to new circuits, we keep your project moving.',
  },
  {
    icon: 'M7 2H17M8 2V8H16V2M9 22H15C17.2 22 19 20.2 19 18V12C19 9.8 17.2 8 15 8H9C6.8 8 5 9.8 5 12V18C5 20.2 6.8 22 9 22ZM10 15H14',
    title: 'EV Charging',
    description: 'We install Level 2 EV chargers for homes and commercial properties across Alberta. Fast, safe installation with proper load assessment and circuit setup.',
  },
  {
    icon: 'M5 3H19V21H5V3ZM9 7H15M9 11H15M9 15H12',
    title: 'Service Upgrade',
    description: 'Older panels holding you back? We upgrade electrical services to handle modern power demands. Safe, code-compliant work with minimal disruption.',
  },
  {
    icon: 'M3 21H21M5 21V7H11V21M13 21V3H19V21M7 11H9M15 7H17M15 11H17M15 15H17',
    title: 'Multiplex Units',
    description: 'We wire duplexes, triplexes and multiplex buildings from ground up. Each unit gets proper load distribution, metering and code-compliant installation.',
  },
  {
    icon: 'M3 21H21M5 21V5H19V21M8 9H10M14 9H16M8 13H10M14 13H16M8 17H10M14 17H16',
    title: 'Commercial Complex',
    description: 'From retail spaces to office buildings, we deliver reliable commercial electrical solutions. We handle large-scale wiring, lighting and panel work professionally.',
  },
  {
    icon: 'M4 20H20M6 20V8H18V20M9 8V5H15V8M9 14H15M12 11V17',
    title: 'Pharmacy Wiring',
    description: 'Pharmacies require precise, code-strict electrical work - we deliver exactly that. Specialized circuits, lighting and safety systems installed to health facility standards.',
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
  'All of Alberta',
  'Calgary',
  'Edmonton',
  'Red Deer',
  'Lethbridge',
  'Medicine Hat',
  'Grande Prairie',
  'Airdrie',
  'Cochrane',
  'Chestermere',
  'Okotoks',
  'And Surrounding Areas',
]
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white">
    <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD600]">Services</p>
          <h2 class="mt-4 text-3xl font-black sm:text-4xl">Electrical work done right.</h2>
          <p class="mt-4 max-w-2xl text-white/70">From custom wiring to service upgrades, SB Electrical delivers high-quality installations and fast responsive service for Alberta homes and businesses.</p>
        </div>
        <router-link class="rounded-md border border-white/10 px-5 py-3 text-sm font-bold text-white/75 transition hover:border-[#FFD600] hover:text-[#FFD600]" to="/contact">
          Get an estimate
        </router-link>
      </div>

      <div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="service in services"
          :key="service.title"
          class="group flex min-h-72 flex-col justify-between rounded-lg border border-white/10 border-l-2 border-l-[#FFD600] border-t-transparent bg-[#111111] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-t-[#FFD600] hover:bg-[#1a1a1a]"
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
            Get a Quote -&gt;
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
        <h2 class="text-3xl font-black leading-tight text-white sm:text-4xl">Serving All of Alberta &amp; Surrounding Areas</h2>
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
