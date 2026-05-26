<script setup>
const services = [
  'Electrical repairs',
  'Panel upgrades',
  'Lighting installs',
  'EV chargers',
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
        <router-link class="rounded-md border border-white/10 px-5 py-3 text-sm font-bold text-white/75 transition hover:border-[#FFD600] hover:text-[#FFD600]" to="/contact-us">
          Get an estimate
        </router-link>
      </div>

      <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="service in services" :key="service" class="rounded-md border border-white/10 bg-white/[0.05] p-6 transition hover:-translate-y-1 hover:border-[#FFD600]/60">
          <div class="mb-6 h-1 w-12 bg-[#FFD600]"></div>
          <p class="text-lg font-black">{{ service }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
