<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { loadJobs } from '../utils/adminCareerStore'

const route = useRoute()
const jobs = loadJobs()
const job = computed(() => jobs.find((item) => item.id === Number(route.params.id)))
// Set to true when the company is ready to show open positions again.
const isHiring = false
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white">
    <section v-if="!isHiring" class="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <p class="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD600]">Careers</p>
      <h1 class="mt-4 text-3xl font-black">We are not hiring at the moment</h1>
      <p class="mx-auto mt-5 max-w-xl leading-7 text-[#9ca3af]">Thank you for your interest in S.B. Electrical. We appreciate you taking the time to visit and invite you to check back when new opportunities become available.</p>
      <router-link class="mt-8 inline-flex rounded-md bg-[#FFD600] px-6 py-4 text-sm font-black text-black transition hover:bg-white" to="/careers">Back to careers</router-link>
    </section>

    <section v-else-if="job" class="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <router-link to="/careers" class="text-sm font-bold text-[#FFD600] transition hover:text-white">Back to jobs</router-link>

      <div class="mt-8 border-b border-white/10 pb-8">
        <h1 class="text-3xl font-black leading-tight sm:text-4xl">{{ job.title }}</h1>
        <p class="mt-3 text-[#cbd5e1]">{{ job.location }}</p>
        <p v-if="job.pay" class="mt-2 text-lg font-semibold text-white">{{ job.pay }}</p>
      </div>

      <div class="mt-6 flex flex-wrap gap-3">
        <span class="rounded-md bg-[#FFD600] px-3 py-2 text-sm font-black text-black">{{ job.type }}</span>
        <span v-if="job.hoursPerWeek" class="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80">Hours/Week: {{ job.hoursPerWeek }}</span>
        <span v-if="job.schedule" class="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80">{{ job.schedule }}</span>
      </div>

      <div class="mt-10 space-y-10 text-[#d1d5db]">
        <section>
          <h2 class="text-xl font-black text-white">Job Overview</h2>
          <p class="mt-4 leading-7">{{ job.summary }}</p>
        </section>

        <section v-if="job.responsibilities?.length">
          <h2 class="text-xl font-black text-white">Responsibilities</h2>
          <ul class="mt-4 space-y-3">
            <li v-for="item in job.responsibilities" :key="item" class="flex gap-3">
              <span class="text-[#FFD600]">✓</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </section>

        <section v-if="job.qualifications?.length">
          <h2 class="text-xl font-black text-white">Qualifications</h2>
          <ul class="mt-4 space-y-3">
            <li v-for="item in job.qualifications" :key="item" class="flex gap-3">
              <span class="text-[#FFD600]">✓</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </section>

        <section v-if="job.benefits?.length">
          <h2 class="text-xl font-black text-white">Benefits</h2>
          <ul class="mt-4 space-y-3">
            <li v-for="item in job.benefits" :key="item" class="flex gap-3">
              <span class="text-[#FFD600]">✓</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </section>
      </div>

      <router-link class="mt-10 inline-flex rounded-md bg-[#FFD600] px-6 py-4 text-sm font-black text-black transition hover:bg-white" to="/contact">
        Apply to this Job
      </router-link>
    </section>

    <section v-else class="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <h1 class="text-3xl font-black">Job not found</h1>
      <router-link class="mt-6 inline-flex rounded-md bg-[#FFD600] px-6 py-4 text-sm font-black text-black" to="/careers">Back to jobs</router-link>
    </section>
  </div>
</template>
