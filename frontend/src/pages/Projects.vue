<script setup>
import { projects } from '../utils/projectsData'
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white">
    <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl">
        <p class="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD600]">Projects</p>
        <h1 class="mt-4 text-4xl font-black leading-tight sm:text-5xl">Our Completed Projects</h1>
        <p class="mt-5 text-lg leading-8 text-[#9ca3af]">Quality work across Alberta</p>
      </div>

      <div class="mt-10 grid gap-5 grid-cols-1 md:grid-cols-2">
        <router-link v-for="project in projects" :key="project.id" :to="`/projects/${project.id}`" class="block h-full">
          <article class="group flex h-full flex-col overflow-hidden rounded-md border border-white/10 bg-[#111] transition hover:-translate-y-1 hover:border-[#FFD600]/70">
            <div class="h-[320px] overflow-hidden border-t-4 border-transparent transition group-hover:border-[#FFD600]">
              <img :src="project.images[0]" :alt="project.title" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
            </div>
            <div class="flex flex-1 flex-col p-6">
              <p class="text-xs font-black uppercase tracking-[0.22em] text-[#FFD600]">{{ project.location }}</p>
              <h2 class="mt-4 text-2xl font-black leading-tight text-white">{{ project.title }}</h2>
              <p class="mt-4 text-sm leading-7 text-[#9ca3af]">{{ project.description }}</p>
            </div>
          </article>
        </router-link>
      </div>
    </section>
  </div>
</template>
