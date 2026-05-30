<script setup>
const instagramUrl = 'https://www.instagram.com/sb_electric_ltd?igsh=djJ1ZmoxZWNnMW9k'
</script>

<template>
  <footer class="border-t border-white/10 bg-[#0a0a0a] text-white">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_0.8fr_0.9fr] lg:px-8">
      <div>
        <div class="flex items-center gap-3">
          <span class="flex h-11 w-11 items-center justify-center rounded-md bg-[#FFD600] text-lg font-black text-[#0a0a0a]">
            SB
          </span>
          <span class="text-lg font-black">SB Electrical</span>
        </div>
        <p class="mt-4 max-w-sm text-sm leading-6 text-white/65">
          Reliable residential and commercial electrical service for Calgary and nearby communities.
        </p>
        <a
          class="mt-6 inline-flex items-center gap-3 rounded-md border border-[#FFD600]/70 bg-[#FFD600]/10 px-4 py-3 text-sm font-black text-[#FFD600] shadow-[0_0_30px_rgba(255,214,0,0.16)] transition hover:border-white hover:bg-white hover:text-[#0a0a0a]"
          :href="instagramUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="flex h-9 w-9 items-center justify-center rounded-md bg-[#FFD600] text-[#0a0a0a]">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" stroke-width="2" />
              <circle cx="12" cy="12" r="3.5" stroke="currentColor" stroke-width="2" />
              <circle cx="17" cy="7" r="1" fill="currentColor" />
            </svg>
          </span>
          Follow on Instagram
        </a>
      </div>

      <div>
        <p class="font-bold text-[#FFD600]">Menu</p>
        <div class="mt-4 grid gap-2 text-sm text-white/65">
          <router-link class="hover:text-[#FFD600]" to="/">Home</router-link>
          <router-link class="hover:text-[#FFD600]" to="/services">Services</router-link>
          <router-link class="hover:text-[#FFD600]" to="/projects">Projects</router-link>
          <router-link class="hover:text-[#FFD600]" to="/careers">Careers</router-link>
          <router-link class="hover:text-[#FFD600]" to="/contact">Contact Us</router-link>
        </div>
      </div>

      <div>
        <p class="font-bold text-[#FFD600]">Contact</p>
        <div class="mt-4 grid gap-2 text-sm text-white/65">
          <a class="hover:text-[#FFD600]" href="tel:+14035606052">403-560-6052</a>
          <a class="hover:text-[#FFD600]" href="tel:+18255611260">825-561-1260</a>
          <a class="hover:text-[#FFD600]" href="mailto:sbelectricalltd1@gmail.com">sbelectricalltd1@gmail.com</a>
          <a class="font-bold text-[#FFD600] hover:text-white" :href="instagramUrl" target="_blank" rel="noopener noreferrer">@sb_electric_ltd</a>
          <p>179 Corner Glen Drive NE, Calgary, Alberta T3N 2T7</p>
        </div>
      </div>
    </div>

    <div class="border-t border-white/10 px-4 py-5 text-center text-xs text-white/45">
      Copyright 2026 SB Electrical. All rights reserved.
    </div>
  </footer>
</template>
