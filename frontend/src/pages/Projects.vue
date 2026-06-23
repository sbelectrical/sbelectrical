<script setup>
const projects = [
  {
    title: 'Service Upgrade - Alberta',
    location: 'Alberta, Canada',
    description: 'Residential panel upgrade with safer capacity for modern home loads.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80',
  },
  {
    title: 'Office Lighting Retrofit',
    location: 'Alberta, Canada',
    description: 'Energy-conscious lighting refresh for a busy commercial workspace.',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=900&q=80',
  },
  {
    title: 'EV Charging Installation',
    location: 'Alberta, Canada',
    description: 'Dedicated garage charger circuit with clean routing and final testing.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=900&q=80',
  },
  {
    title: 'Retail Service Repair',
    location: 'Alberta, Canada',
    description: 'Breaker troubleshooting and repair work completed outside business hours.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&q=80',
  },
  {
    title: 'Basement Wiring Rough-In',
    location: 'Alberta, Canada',
    description: 'New circuits, switches, and lighting preparation for a basement renovation.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80',
  },
  {
    title: 'Warehouse Safety Upgrade',
    location: 'Alberta, Canada',
    description: 'Fixture replacement and electrical maintenance for safer daily operations.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
  },
]
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
        <article
          v-for="project in projects"
          :key="project.title"
          class="group flex flex-col overflow-hidden rounded-md border border-white/10 bg-[#111] transition hover:-translate-y-1 hover:border-[#FFD600]/70"
        >
          <div class="h-[320px] overflow-hidden border-t-4 border-transparent transition group-hover:border-[#FFD600]">
            <img :src="project.image" :alt="project.title" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
          </div>
          <div class="flex flex-1 flex-col p-6">
            <p class="text-xs font-black uppercase tracking-[0.22em] text-[#FFD600]">{{ project.location }}</p>
            <h2 class="mt-4 text-2xl font-black leading-tight text-white">{{ project.title }}</h2>
            <p class="mt-4 text-sm leading-7 text-[#9ca3af]">{{ project.description }}</p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
