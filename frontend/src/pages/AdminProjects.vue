<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { loadProjects, saveProjects } from '../utils/adminProjectStore'

const router = useRouter()
const projects = ref(loadProjects())
const projectCount = computed(() => projects.value.length)

const logout = () => router.push('/me-admin')
const goToAdd = () => router.push('/me-admin/projects/add')
const editProject = (id) => router.push({ path: '/me-admin/projects/add', query: { id } })
const deleteProject = (id) => {
  projects.value = projects.value.filter((project) => project.id !== id)
  saveProjects(projects.value)
}

const truncatedDescription = (text) => {
  const words = text.split(' ')
  return words.length > 18 ? `${words.slice(0, 18).join(' ')}...` : text
}
</script>

<template>
  <div class="min-h-screen bg-[#090909] text-white">
    <div class="mx-auto flex min-h-screen max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between rounded-3xl border border-white/10 bg-[#111] px-5 py-4 shadow-2xl">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.35em] text-[#FFD600]">Admin</p>
          <h1 class="mt-2 text-2xl font-black">Admin Dashboard</h1>
        </div>
        <button
          @click="logout"
          class="inline-flex items-center gap-2 rounded-2xl bg-[#FFD600] px-4 py-3 text-sm font-semibold text-black transition hover:bg-[#e6c900]"
          type="button"
        >
          <span class="text-lg">⏻</span>
          Logout
        </button>
      </div>

      <div class="grid flex-1 gap-6 lg:grid-cols-[260px_1fr]">
        <aside class="rounded-3xl border border-white/10 bg-[#111] p-5">
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD600]">Menu</p>
          <div class="mt-6 space-y-3">
            <button
              @click="router.push('/me-admin/projects')"
              class="w-full rounded-2xl border border-[#FFD600] bg-[#111] px-4 py-3 text-left text-sm font-semibold text-white"
              type="button"
            >
              Projects
            </button>
            <button
              @click="router.push('/me-admin/career')"
              class="w-full rounded-2xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-left text-sm font-semibold text-white transition hover:border-[#FFD600] hover:bg-[#111]"
              type="button"
            >
              Career
            </button>
          </div>
        </aside>

        <section class="rounded-3xl border border-white/10 bg-[#111] p-8">
          <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD600]">Projects</p>
              <h2 class="mt-4 text-3xl font-black">Project list</h2>
            </div>
            <button
              @click="goToAdd"
              class="inline-flex items-center justify-center rounded-2xl bg-[#FFD600] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#e6c900]"
              type="button"
            >
              Add Project
            </button>
          </div>

          <div class="mt-8 overflow-x-auto rounded-3xl border border-white/10 bg-[#0d0d0d]">
            <table class="min-w-full divide-y divide-white/10 text-left text-sm">
              <thead class="border-b border-white/10 bg-[#111] text-[#cbd5e1]">
                <tr>
                  <th class="px-6 py-4 font-semibold">Image</th>
                  <th class="px-6 py-4 font-semibold">Title</th>
                  <th class="px-6 py-4 font-semibold">Description</th>
                  <th class="px-6 py-4 font-semibold">Location</th>
                  <th class="px-6 py-4 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/10">
                <tr v-for="project in projects" :key="project.id" class="hover:bg-white/5">
                  <td class="px-6 py-4 align-top">
                    <img :src="project.image" :alt="project.title" class="h-16 w-24 rounded-2xl object-cover" />
                  </td>
                  <td class="px-6 py-4 align-top font-semibold text-white">{{ project.title }}</td>
                  <td class="px-6 py-4 align-top text-[#cbd5e1] max-w-[340px]">{{ truncatedDescription(project.description) }}</td>
                  <td class="px-6 py-4 align-top text-[#cbd5e1]">{{ project.location }}</td>
                  <td class="px-6 py-4 align-top">
                    <div class="flex gap-2">
                      <button
                        @click="editProject(project.id)"
                        class="rounded-2xl bg-[#FFD600] px-3 py-2 text-xs font-semibold text-black transition hover:bg-[#e6c900]"
                        type="button"
                      >
                        Edit
                      </button>
                      <button
                        @click="deleteProject(project.id)"
                        class="rounded-2xl bg-[#ff4d4f] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#ff6b72]"
                        type="button"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                <tr v-if="projects.length === 0">
                  <td class="px-6 py-8 text-center text-[#cbd5e1]" colspan="5">No projects found. Click Add Project to create one.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
