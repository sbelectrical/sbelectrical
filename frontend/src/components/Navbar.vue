<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'Services', href: '#services' },
  { label: 'Contact Us', href: '#contact-us' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/90 text-white shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <a class="group flex items-center gap-3" href="#home" @click="isOpen = false">
        <span class="flex h-12 w-12 items-center justify-center rounded-md bg-[#FFD600] text-xl font-black text-[#0a0a0a] shadow-[0_0_30px_rgba(255,214,0,0.35)] transition group-hover:bg-white">
          SB
        </span>
        <span>
          <span class="block text-lg font-black leading-tight tracking-wide">SB Electrical</span>
          <span class="block text-xs font-semibold uppercase tracking-[0.22em] text-[#FFD600]">Calgary Electricians</span>
        </span>
      </a>

      <button
        class="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#FFD600]/50 bg-white/5 text-xl font-bold text-[#FFD600] md:hidden"
        type="button"
        aria-label="Toggle menu"
        @click="isOpen = !isOpen"
      >
        <span v-if="isOpen">X</span>
        <span v-else class="grid gap-1">
          <span class="block h-0.5 w-5 bg-[#FFD600]"></span>
          <span class="block h-0.5 w-5 bg-[#FFD600]"></span>
          <span class="block h-0.5 w-5 bg-[#FFD600]"></span>
        </span>
      </button>

      <div class="hidden items-center gap-8 md:flex">
        <a
          v-for="item in menuItems"
          :key="item.href"
          class="text-sm font-semibold text-white/75 transition hover:text-[#FFD600]"
          :href="item.href"
        >
          {{ item.label }}
        </a>
        <a class="rounded-md bg-[#FFD600] px-5 py-3 text-sm font-black text-[#0a0a0a] shadow-[0_0_28px_rgba(255,214,0,0.25)] transition hover:bg-white" href="tel:+14035550187">
          Call Now
        </a>
      </div>
    </nav>

    <div v-if="isOpen" class="border-t border-white/10 px-4 pb-4 md:hidden">
      <a
        v-for="item in menuItems"
        :key="item.href"
        class="block border-b border-white/10 py-3 text-sm font-semibold text-white/75"
        :href="item.href"
        @click="isOpen = false"
      >
        {{ item.label }}
      </a>
      <a class="mt-4 block rounded-md bg-[#FFD600] px-5 py-3 text-center text-sm font-black text-[#0a0a0a]" href="tel:+14035550187">
        Call Now
      </a>
    </div>
  </header>
</template>
