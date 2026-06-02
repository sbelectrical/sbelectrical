<script setup>
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
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
</script>

<template>
  <div class="min-h-screen bg-[#090909] text-white flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
    <div class="w-full max-w-3xl rounded-[2rem] border border-white/10 bg-[#111] p-8 shadow-2xl">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD600]">{{ isEdit ? 'Edit project' : 'Add project' }}</p>
          <h1 class="mt-3 text-3xl font-black">{{ isEdit ? 'Edit project details' : 'Create a new project' }}</h1>
        </div>
        <button
          @click="cancel"
          class="rounded-2xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-sm font-semibold text-white transition hover:border-[#FFD600] hover:bg-[#111]"
          type="button"
        >
          Cancel
        </button>
      </div>

      <form @submit.prevent="saveProject" class="mt-8 grid gap-4 sm:grid-cols-2">
        <div class="sm:col-span-2">
          <label class="mb-2 block text-sm font-semibold text-white/80">Title</label>
          <input
            v-model="form.title"
            type="text"
            placeholder="Project title"
            class="w-full rounded-2xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none transition focus:border-[#FFD600] focus:ring-2 focus:ring-[#FFD600]/25"
          />
        </div>

        <div>
          <label class="mb-2 block text-sm font-semibold text-white/80">Location</label>
          <input
            v-model="form.location"
            type="text"
            placeholder="Location name"
            class="w-full rounded-2xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none transition focus:border-[#FFD600] focus:ring-2 focus:ring-[#FFD600]/25"
          />
        </div>

        <div>
          <label class="mb-2 block text-sm font-semibold text-white/80">Image URL</label>
          <input
            v-model="form.image"
            type="text"
            placeholder="Image URL"
            class="w-full rounded-2xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none transition focus:border-[#FFD600] focus:ring-2 focus:ring-[#FFD600]/25"
          />
        </div>

        <div class="sm:col-span-2">
          <label class="mb-2 block text-sm font-semibold text-white/80">Description</label>
          <textarea
            v-model="form.description"
            rows="5"
            placeholder="Project description"
            class="w-full resize-none rounded-2xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none transition focus:border-[#FFD600] focus:ring-2 focus:ring-[#FFD600]/25"
          />
        </div>

        <div class="sm:col-span-2 flex justify-end gap-3 pt-3">
          <button
            @click="cancel"
            type="button"
            class="rounded-2xl border border-white/10 bg-[#0d0d0d] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#FFD600] hover:bg-[#111]"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="rounded-2xl bg-[#FFD600] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#e6c900]"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
