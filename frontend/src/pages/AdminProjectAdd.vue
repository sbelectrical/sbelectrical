<script setup>
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import adminDashboardBg from '../assets/admin-dashboard-bg.png'
import { loadProjects, saveProjects } from '../utils/adminProjectStore'

const router = useRouter()
const route = useRoute()
const projects = ref(loadProjects())
const projectId = route.query.id ? Number(route.query.id) : null
const isEdit = !!projectId

const form = ref({
  title: '',
  location: '',
  description: '',
  image: '',
})

onMounted(() => {
  if (isEdit) {
    const existing = projects.value.find((project) => project.id === projectId)
    if (existing) {
      form.value = { ...existing }
    }
  }
})

const saveProject = () => {
  if (!form.value.title || !form.value.location || !form.value.description || !form.value.image) {
    return
  }

  if (isEdit) {
    const index = projects.value.findIndex((project) => project.id === projectId)
    if (index !== -1) {
      projects.value[index] = { id: projectId, ...form.value }
    }
  } else {
    const nextId = projects.value.length ? Math.max(...projects.value.map((project) => project.id)) + 1 : 1
    projects.value.push({ id: nextId, ...form.value })
  }

  saveProjects(projects.value)
  router.push('/me-admin/projects')
}

const cancel = () => {
  router.push('/me-admin/projects')
}

const handleImageUpload = (event) => {
  const file = event.target.files?.[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    form.value.image = reader.result
  }
  reader.readAsDataURL(file)
}
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-[#050505] text-white">
    <div class="fixed inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${adminDashboardBg})` }" aria-hidden="true"></div>
    <div class="fixed inset-0 bg-black/78" aria-hidden="true"></div>
    <div class="relative grid min-h-screen grid-rows-[auto_1fr]">
      <header class="flex items-center justify-between border-b border-white/10 bg-black/70 px-4 py-4 shadow-2xl backdrop-blur-md sm:px-6 lg:px-8">
        <router-link to="/me-admin/projects" class="text-xs font-black uppercase tracking-[0.35em] text-[#FFD600]">
          SB Electrical
        </router-link>
        <button
          @click="cancel"
          class="inline-flex items-center justify-center rounded-lg border border-white/10 bg-black/35 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#FFD600] hover:bg-[#FFD600]/10"
          type="button"
        >
          Back
        </button>
      </header>

      <div class="grid min-h-0 lg:grid-cols-[260px_1fr]">
        <aside class="border-b border-white/10 bg-black/60 p-4 backdrop-blur-md lg:border-b-0 lg:border-r lg:p-5">
          <div class="flex gap-3 lg:block lg:space-y-3">
            <button
              @click="router.push('/me-admin/projects')"
              class="w-full rounded-lg border border-[#FFD600] bg-[#FFD600]/15 px-4 py-3 text-left text-sm font-black text-white"
              type="button"
            >
              Projects
            </button>
            <button
              @click="router.push('/me-admin/career')"
              class="w-full rounded-lg border border-white/10 bg-black/35 px-4 py-3 text-left text-sm font-semibold text-white transition hover:border-[#FFD600] hover:bg-[#FFD600]/10"
              type="button"
            >
              Career
            </button>
          </div>
        </aside>

        <main class="bg-black/45 p-4 backdrop-blur-sm sm:p-6 lg:p-8">
          <div class="w-full max-w-5xl">
            <h1 class="text-3xl font-black">{{ isEdit ? 'Edit Project' : 'Add Project' }}</h1>

            <form @submit.prevent="saveProject" class="mt-6 grid gap-6 rounded-xl border border-white/10 bg-black/70 p-4 shadow-2xl backdrop-blur-md sm:p-6 lg:grid-cols-[1fr_320px]">
              <div class="grid gap-4 sm:grid-cols-2">
                <div class="sm:col-span-2">
                  <label class="mb-2 block text-sm font-semibold text-white/80">Title</label>
                  <input
                    v-model="form.title"
                    type="text"
                    placeholder="Project title"
                    class="w-full rounded-lg border border-white/10 bg-[#080808]/85 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#FFD600] focus:ring-2 focus:ring-[#FFD600]/25"
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-semibold text-white/80">Location</label>
                  <input
                    v-model="form.location"
                    type="text"
                    placeholder="Location name"
                    class="w-full rounded-lg border border-white/10 bg-[#080808]/85 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#FFD600] focus:ring-2 focus:ring-[#FFD600]/25"
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-semibold text-white/80">Project Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    class="block w-full cursor-pointer rounded-lg border border-white/10 bg-[#080808]/85 text-sm text-white/70 file:mr-4 file:border-0 file:bg-[#FFD600] file:px-4 file:py-3 file:text-sm file:font-black file:text-black hover:file:bg-white"
                    @change="handleImageUpload"
                  />
                </div>

                <div class="sm:col-span-2">
                  <label class="mb-2 block text-sm font-semibold text-white/80">Description</label>
                  <textarea
                    v-model="form.description"
                    rows="7"
                    placeholder="Project description"
                    class="w-full resize-none rounded-lg border border-white/10 bg-[#080808]/85 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#FFD600] focus:ring-2 focus:ring-[#FFD600]/25"
                  />
                </div>
              </div>

              <div class="flex flex-col">
                <p class="mb-2 text-sm font-semibold text-white/80">Preview</p>
                <div class="flex min-h-[240px] items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-[#080808]/85">
                  <img v-if="form.image" :src="form.image" alt="Project preview" class="h-full min-h-[240px] w-full object-cover" />
                  <div v-else class="px-6 text-center text-sm leading-6 text-white/45">
                    Upload an image to preview it here before saving.
                  </div>
                </div>
                <div class="mt-auto flex justify-end gap-3 pt-6">
                  <button
                    @click="cancel"
                    type="button"
                    class="rounded-lg border border-white/10 bg-black/35 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#FFD600] hover:bg-[#FFD600]/10"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="rounded-lg bg-[#FFD600] px-5 py-3 text-sm font-black text-black transition hover:bg-white"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
