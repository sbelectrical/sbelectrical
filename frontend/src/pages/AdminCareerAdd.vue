<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import adminDashboardBg from '../assets/admin-dashboard-bg.png'
import { loadJobs, saveJobs } from '../utils/adminCareerStore'

const router = useRouter()
const route = useRoute()
const jobs = ref(loadJobs())
const jobId = route.query.id ? Number(route.query.id) : null
const isEdit = !!jobId

const form = ref({
  title: '',
  location: '',
  type: 'Full-time',
  pay: '',
  hoursPerWeek: '',
  schedule: '',
  summary: '',
  responsibilities: '',
  qualifications: '',
  benefits: '',
})

const toLines = (value) => (Array.isArray(value) ? value.join('\n') : value || '')
const fromLines = (value) => value.split('\n').map((item) => item.trim()).filter(Boolean)

onMounted(() => {
  if (!isEdit) return

  const existing = jobs.value.find((job) => job.id === jobId)
  if (existing) {
    form.value = {
      ...existing,
      responsibilities: toLines(existing.responsibilities),
      qualifications: toLines(existing.qualifications),
      benefits: toLines(existing.benefits),
    }
  }
})

const cancel = () => router.push('/me-admin/career')

const saveJob = () => {
  if (!form.value.title || !form.value.location || !form.value.type || !form.value.summary) {
    return
  }

  const payload = {
    title: form.value.title,
    location: form.value.location,
    type: form.value.type,
    pay: form.value.pay,
    hoursPerWeek: form.value.hoursPerWeek,
    schedule: form.value.schedule,
    summary: form.value.summary,
    responsibilities: fromLines(form.value.responsibilities),
    qualifications: fromLines(form.value.qualifications),
    benefits: fromLines(form.value.benefits),
  }

  if (isEdit) {
    const index = jobs.value.findIndex((job) => job.id === jobId)
    if (index !== -1) {
      jobs.value[index] = { id: jobId, ...payload }
    }
  } else {
    const nextId = jobs.value.length ? Math.max(...jobs.value.map((job) => job.id)) + 1 : 1
    jobs.value.push({ id: nextId, ...payload })
  }

  saveJobs(jobs.value)
  router.push('/me-admin/career')
}
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-[#050505] text-white">
    <div class="fixed inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${adminDashboardBg})` }" aria-hidden="true"></div>
    <div class="fixed inset-0 bg-black/78" aria-hidden="true"></div>
    <div class="relative grid min-h-screen grid-rows-[auto_1fr]">
      <header class="flex items-center justify-between border-b border-white/10 bg-black/70 px-4 py-4 shadow-2xl backdrop-blur-md sm:px-6 lg:px-8">
        <router-link to="/me-admin/projects" class="text-xs font-black uppercase tracking-[0.35em] text-[#FFD600]">SB Electrical</router-link>
        <button @click="cancel" class="rounded-lg border border-white/10 bg-black/35 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#FFD600] hover:bg-[#FFD600]/10" type="button">Back</button>
      </header>

      <div class="grid min-h-0 lg:grid-cols-[260px_1fr]">
        <aside class="border-b border-white/10 bg-black/60 p-4 backdrop-blur-md lg:border-b-0 lg:border-r lg:p-5">
          <div class="flex gap-3 lg:block lg:space-y-3">
            <button @click="router.push('/me-admin/projects')" class="w-full rounded-lg border border-white/10 bg-black/35 px-4 py-3 text-left text-sm font-semibold text-white transition hover:border-[#FFD600] hover:bg-[#FFD600]/10" type="button">Projects</button>
            <button @click="router.push('/me-admin/career')" class="w-full rounded-lg border border-[#FFD600] bg-[#FFD600]/15 px-4 py-3 text-left text-sm font-black text-white" type="button">Career</button>
          </div>
        </aside>

        <main class="bg-black/45 p-4 backdrop-blur-sm sm:p-6 lg:p-8">
          <div class="w-full max-w-5xl">
            <h1 class="text-3xl font-black">{{ isEdit ? 'Edit Job' : 'Add Job' }}</h1>

            <form @submit.prevent="saveJob" class="mt-6 grid gap-4 rounded-xl border border-white/10 bg-black/70 p-4 shadow-2xl backdrop-blur-md sm:grid-cols-2 sm:p-6">
              <div>
                <label class="mb-2 block text-sm font-semibold text-white/80">Job Title</label>
                <input v-model="form.title" class="w-full rounded-lg border border-white/10 bg-[#080808]/85 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#FFD600] focus:ring-2 focus:ring-[#FFD600]/25" placeholder="Residential Electrician" />
              </div>
              <div>
                <label class="mb-2 block text-sm font-semibold text-white/80">Location</label>
                <input v-model="form.location" class="w-full rounded-lg border border-white/10 bg-[#080808]/85 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#FFD600] focus:ring-2 focus:ring-[#FFD600]/25" placeholder="Alberta, Canada" />
              </div>
              <div>
                <label class="mb-2 block text-sm font-semibold text-white/80">Employment Type</label>
                <input v-model="form.type" class="w-full rounded-lg border border-white/10 bg-[#080808]/85 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#FFD600] focus:ring-2 focus:ring-[#FFD600]/25" placeholder="Full-time" />
              </div>
              <div>
                <label class="mb-2 block text-sm font-semibold text-white/80">Pay</label>
                <input v-model="form.pay" class="w-full rounded-lg border border-white/10 bg-[#080808]/85 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#FFD600] focus:ring-2 focus:ring-[#FFD600]/25" placeholder="$40.00 - $46.00 Hourly" />
              </div>
              <div>
                <label class="mb-2 block text-sm font-semibold text-white/80">Hours/Week</label>
                <input v-model="form.hoursPerWeek" class="w-full rounded-lg border border-white/10 bg-[#080808]/85 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#FFD600] focus:ring-2 focus:ring-[#FFD600]/25" placeholder="44" />
              </div>
              <div>
                <label class="mb-2 block text-sm font-semibold text-white/80">Schedule</label>
                <input v-model="form.schedule" class="w-full rounded-lg border border-white/10 bg-[#080808]/85 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#FFD600] focus:ring-2 focus:ring-[#FFD600]/25" placeholder="Monday-Friday daytime hours" />
              </div>
              <div class="sm:col-span-2">
                <label class="mb-2 block text-sm font-semibold text-white/80">Summary</label>
                <textarea v-model="form.summary" rows="4" class="w-full resize-none rounded-lg border border-white/10 bg-[#080808]/85 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#FFD600] focus:ring-2 focus:ring-[#FFD600]/25" placeholder="Short job overview" />
              </div>
              <div>
                <label class="mb-2 block text-sm font-semibold text-white/80">Responsibilities</label>
                <textarea v-model="form.responsibilities" rows="6" class="w-full resize-none rounded-lg border border-white/10 bg-[#080808]/85 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#FFD600] focus:ring-2 focus:ring-[#FFD600]/25" placeholder="One item per line" />
              </div>
              <div>
                <label class="mb-2 block text-sm font-semibold text-white/80">Qualifications</label>
                <textarea v-model="form.qualifications" rows="6" class="w-full resize-none rounded-lg border border-white/10 bg-[#080808]/85 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#FFD600] focus:ring-2 focus:ring-[#FFD600]/25" placeholder="One item per line" />
              </div>
              <div class="sm:col-span-2">
                <label class="mb-2 block text-sm font-semibold text-white/80">Benefits</label>
                <textarea v-model="form.benefits" rows="5" class="w-full resize-none rounded-lg border border-white/10 bg-[#080808]/85 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#FFD600] focus:ring-2 focus:ring-[#FFD600]/25" placeholder="One item per line" />
              </div>
              <div class="flex justify-end gap-3 pt-3 sm:col-span-2">
                <button @click="cancel" type="button" class="rounded-lg border border-white/10 bg-black/35 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#FFD600] hover:bg-[#FFD600]/10">Cancel</button>
                <button type="submit" class="rounded-lg bg-[#FFD600] px-5 py-3 text-sm font-black text-black transition hover:bg-white">Save</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
