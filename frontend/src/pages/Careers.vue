<script setup>
const jobs = [
  {
    title: 'Licensed Electrician',
    type: 'Full-time',
    location: 'Calgary, AB',
    description: 'Lead residential and commercial service work with clean workmanship and strong customer communication.',
  },
  {
    title: 'Apprentice Electrician',
    type: 'Full-time',
    location: 'Calgary, AB',
    description: 'Support installations, repairs, and site preparation while building practical field experience.',
  },
  {
    title: 'Site Supervisor',
    type: 'Full-time',
    location: 'Calgary, AB',
    description: 'Coordinate job sites, support crews, maintain safety standards, and keep projects moving clearly.',
  },
]
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white">
    <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD600]">Careers</p>
          <h1 class="mt-4 text-4xl font-black leading-tight sm:text-5xl">Join Our Team</h1>
        </div>
        <p class="max-w-3xl text-lg leading-8 text-[#9ca3af]">
          We are always looking for skilled electricians in Calgary who care about safe work, clear communication, and a clean finish.
        </p>
      </div>

      <div class="mt-10 grid gap-5 lg:grid-cols-3">
        <article
          v-for="job in jobs"
          :key="job.title"
          class="flex min-h-80 flex-col justify-between rounded-md border border-white/10 bg-[#111] p-6 transition hover:-translate-y-1 hover:border-[#FFD600]/70"
        >
          <div>
            <div class="mb-6 h-1 w-16 rounded-full bg-[#FFD600]"></div>
            <h2 class="text-2xl font-black">{{ job.title }}</h2>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="rounded-md bg-[#FFD600]/10 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#FFD600]">{{ job.type }}</span>
              <span class="rounded-md border border-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/70">{{ job.location }}</span>
            </div>
            <p class="mt-5 text-sm leading-6 text-[#9ca3af]">{{ job.description }}</p>
          </div>

          <router-link class="mt-8 rounded-md bg-[#FFD600] px-5 py-4 text-center text-sm font-black text-[#0a0a0a] transition hover:bg-white" to="/contact">
            Apply Now
          </router-link>
        </article>
      </div>
    </section>
  </div>
</template>
