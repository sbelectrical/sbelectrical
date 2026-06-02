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
  <div class="min-h-screen bg-[#12110c] text-white">
    <div class="grid min-h-screen grid-rows-[auto_1fr]">
      <header class="flex items-center justify-between border-b border-[#FFD600]/15 bg-[#17140d] px-4 py-4 shadow-2xl sm:px-6 lg:px-8">
        <router-link to="/me-admin/projects" class="text-xs font-black uppercase tracking-[0.35em] text-[#FFD600]">
          SB Electrical
        </router-link>
        <button
          @click="logout"
          class="inline-flex items-center justify-center rounded-lg bg-[#FFD600] px-4 py-3 text-sm font-black text-black transition hover:bg-white"
          type="button"
        >
          Logout
        </button>
      </header>

      <div class="grid min-h-0 lg:grid-cols-[260px_1fr]">
        <aside class="border-b border-[#FFD600]/15 bg-[#17140d] p-4 lg:border-b-0 lg:border-r lg:p-5">
          <div class="flex gap-3 lg:block lg:space-y-3">
            <button
              @click="router.push('/me-admin/projects')"
              class="w-full rounded-lg border border-[#FFD600] bg-[#FFD600]/10 px-4 py-3 text-left text-sm font-black text-white"
              type="button"
            >
              Projects
            </button>
            <button
              @click="router.push('/me-admin/career')"
              class="w-full rounded-lg border border-white/10 bg-[#211d14] px-4 py-3 text-left text-sm font-semibold text-white transition hover:border-[#FFD600] hover:bg-[#2b2518]"
              type="button"
            >
              Career
            </button>
          </div>
        </aside>

        <section class="min-w-0 bg-[linear-gradient(135deg,#14120d_0%,#19160f_48%,#0f1414_100%)] p-4 sm:p-6 lg:p-8">
          <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 class="text-3xl font-black">Project List</h1>
              <p class="mt-2 text-sm text-white/55">{{ projectCount }} projects available</p>
            </div>
            <button
              @click="goToAdd"
              class="inline-flex items-center justify-center rounded-lg bg-[#FFD600] px-5 py-3 text-sm font-black text-black transition hover:bg-white"
              type="button"
            >
              Add Project
            </button>
          </div>

          <div class="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-[#17140d] shadow-2xl">
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
                    <img :src="project.image" :alt="project.title" class="h-16 w-24 rounded-lg object-cover" />
                  </td>
                  <td class="px-6 py-4 align-top font-semibold text-white">{{ project.title }}</td>
                  <td class="max-w-[340px] px-6 py-4 align-top text-[#cbd5e1]">{{ truncatedDescription(project.description) }}</td>
                  <td class="px-6 py-4 align-top text-[#cbd5e1]">{{ project.location }}</td>
                  <td class="px-6 py-4 align-top">
                    <div class="flex gap-2">
                      <button
                        @click="editProject(project.id)"
                        class="rounded-lg bg-[#FFD600] px-3 py-2 text-xs font-black text-black transition hover:bg-white"
                        type="button"
                      >
                        Edit
                      </button>
                      <button
                        @click="deleteProject(project.id)"
                        class="rounded-lg bg-[#ff4d4f] px-3 py-2 text-xs font-black text-white transition hover:bg-[#ff6b72]"
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
