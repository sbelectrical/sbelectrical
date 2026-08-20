<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../utils/projectsData'

const route = useRoute()
const project = computed(() => projects.find((item) => item.id === route.params.id))
const selectedImage = ref(null)

function openImage(image) {
  selectedImage.value = image
}

function closeImage() {
  selectedImage.value = null
}
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white">
    <section v-if="project" class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <router-link to="/projects" class="text-sm font-bold text-[#FFD600] transition hover:text-white">Back to projects</router-link>

      <div class="mt-8 border-b border-white/10 pb-8">
        <p class="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD600]">Project Detail</p>
        <h1 class="mt-4 text-3xl font-black leading-tight sm:text-4xl">{{ project.title }}</h1>
        <p class="mt-3 text-[#cbd5e1]">{{ project.location }}</p>
        <p class="mt-5 max-w-3xl leading-7 text-[#d1d5db]">{{ project.description }}</p>
      </div>

      <section class="mt-10">
        <h2 class="text-xl font-black text-white">Project Gallery</h2>
        <div v-if="project.images.length === 1" class="mt-5 overflow-hidden rounded-md border border-white/10 bg-[#111]">
          <button type="button" class="block w-full cursor-zoom-in" :aria-label="`View ${project.title} image`" @click="openImage(project.images[0])">
            <img :src="project.images[0]" :alt="project.title" class="h-auto w-full object-cover" />
          </button>
        </div>
        <div v-else class="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="(image, index) in project.images" :key="image" class="overflow-hidden rounded-md border border-white/10 bg-[#111]">
            <button type="button" class="block w-full cursor-zoom-in" :aria-label="`View ${project.title} image ${index + 1}`" @click="openImage(image)">
              <img :src="image" :alt="`${project.title} image ${index + 1}`" class="aspect-[4/3] h-full w-full object-cover transition duration-300 hover:scale-105" loading="lazy" />
            </button>
          </div>
        </div>
      </section>
    </section>

    <section v-else class="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <h1 class="text-3xl font-black">Project not found</h1>
      <router-link class="mt-6 inline-flex rounded-md bg-[#FFD600] px-6 py-4 text-sm font-black text-black" to="/projects">Back to projects</router-link>
    </section>

    <Teleport to="body">
      <div v-if="selectedImage" class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8" role="dialog" aria-modal="true" aria-label="Expanded project image" @click.self="closeImage">
        <button type="button" class="absolute right-4 top-4 rounded-md border border-white/20 bg-black/50 px-4 py-2 text-sm font-black text-white transition hover:border-[#FFD600] hover:text-[#FFD600] sm:right-8 sm:top-8" aria-label="Close expanded image" @click="closeImage">
          Close
        </button>
        <img :src="selectedImage" :alt="project?.title || 'Project image'" class="max-h-[85vh] max-w-full rounded-md object-contain shadow-2xl" />
      </div>
    </Teleport>
  </div>
</template>
