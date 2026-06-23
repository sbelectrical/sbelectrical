<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import adminDashboardBg from '../assets/admin-dashboard-bg.png'
import { loadJobs, saveJobs } from '../utils/adminCareerStore'

const router = useRouter()
const jobs = ref(loadJobs())
const jobCount = computed(() => jobs.value.length)

const logout = () => router.push('/me-admin')
const goToAdd = () => router.push('/me-admin/career/add')
const editJob = (id) => router.push({ path: '/me-admin/career/add', query: { id } })
const deleteJob = (id) => {
  jobs.value = jobs.value.filter((job) => job.id !== id)
  saveJobs(jobs.value)
}
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-[#050505] text-white">
    <div class="fixed inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${adminDashboardBg})` }" aria-hidden="true"></div>
    <div class="fixed inset-0 bg-black/78" aria-hidden="true"></div>
    <div class="relative grid min-h-screen grid-rows-[auto_1fr]">
      <header class="flex items-center justify-between border-b border-white/10 bg-black/70 px-4 py-4 shadow-2xl backdrop-blur-md sm:px-6 lg:px-8">
        <router-link to="/me-admin/projects" class="text-xs font-black uppercase tracking-[0.35em] text-[#FFD600]">SB Electrical</router-link>
        <button @click="logout" class="inline-flex items-center justify-center rounded-lg bg-[#FFD600] px-4 py-3 text-sm font-black text-black transition hover:bg-white" type="button">Logout</button>
      </header>

      <div class="grid min-h-0 lg:grid-cols-[260px_1fr]">
        <aside class="border-b border-white/10 bg-black/60 p-4 backdrop-blur-md lg:border-b-0 lg:border-r lg:p-5">
          <div class="flex gap-3 lg:block lg:space-y-3">
            <button @click="router.push('/me-admin/projects')" class="w-full rounded-lg border border-white/10 bg-black/35 px-4 py-3 text-left text-sm font-semibold text-white transition hover:border-[#FFD600] hover:bg-[#FFD600]/10" type="button">Projects</button>
            <button class="w-full rounded-lg border border-[#FFD600] bg-[#FFD600]/15 px-4 py-3 text-left text-sm font-black text-white" type="button">Career</button>
          </div>
        </aside>

        <section class="min-w-0 bg-black/45 p-4 backdrop-blur-sm sm:p-6 lg:p-8">
          <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 class="text-3xl font-black">Job List</h1>
              <p class="mt-2 text-sm text-white/55">{{ jobCount }} jobs available</p>
            </div>
            <button @click="goToAdd" class="inline-flex items-center justify-center rounded-lg bg-[#FFD600] px-5 py-3 text-sm font-black text-black shadow-[0_14px_34px_rgba(255,214,0,0.2)] transition hover:bg-white" type="button">Add Job</button>
          </div>

          <div class="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-black/70 shadow-2xl backdrop-blur-md">
            <table class="min-w-full divide-y divide-white/10 text-left text-sm">
              <thead class="border-b border-white/10 bg-white/5 text-[#cbd5e1]">
                <tr>
                  <th class="px-6 py-4 font-semibold">Title</th>
                  <th class="px-6 py-4 font-semibold">Type</th>
                  <th class="px-6 py-4 font-semibold">Pay</th>
                  <th class="px-6 py-4 font-semibold">Location</th>
                  <th class="px-6 py-4 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/10">
                <tr v-for="job in jobs" :key="job.id" class="transition hover:bg-white/5">
                  <td class="px-6 py-4 align-top font-bold text-white">{{ job.title }}</td>
                  <td class="px-6 py-4 align-top text-[#cbd5e1]">{{ job.type }}</td>
                  <td class="px-6 py-4 align-top text-[#cbd5e1]">{{ job.pay || '-' }}</td>
                  <td class="px-6 py-4 align-top text-[#cbd5e1]">{{ job.location }}</td>
                  <td class="px-6 py-4 align-top">
                    <div class="flex gap-2">
                      <button @click="editJob(job.id)" class="rounded-lg bg-[#FFD600] px-3 py-2 text-xs font-black text-black transition hover:bg-white" type="button">Edit</button>
                      <button @click="deleteJob(job.id)" class="rounded-lg bg-[#ff4d4f] px-3 py-2 text-xs font-black text-white transition hover:bg-[#ff6b72]" type="button">Delete</button>
                    </div>
                  </td>
                </tr>
                <tr v-if="jobs.length === 0">
                  <td class="px-6 py-8 text-center text-[#cbd5e1]" colspan="5">No jobs found. Click Add Job to create one.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
