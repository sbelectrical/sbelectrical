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
      </div>

      <div>
        <p class="font-bold text-[#FFD600]">Menu</p>
        <div class="mt-4 grid gap-2 text-sm text-white/65">
          <router-link class="hover:text-[#FFD600]" to="/">Home</router-link>
          <router-link class="hover:text-[#FFD600]" to="/who-we-are">Who We Are</router-link>
          <router-link class="hover:text-[#FFD600]" to="/services">Services</router-link>
          <router-link class="hover:text-[#FFD600]" to="/contact-us">Contact Us</router-link>
        </div>
      </div>

      <div>
        <p class="font-bold text-[#FFD600]">Contact</p>
        <div class="mt-4 grid gap-2 text-sm text-white/65">
          <a class="hover:text-[#FFD600]" href="tel:+14035550187">(403) 555-0187</a>
          <a class="hover:text-[#FFD600]" href="mailto:hello@sbelectrical.ca">hello@sbelectrical.ca</a>
          <p>Calgary, Alberta</p>
        </div>
      </div>
    </div>

    <div class="border-t border-white/10 px-4 py-5 text-center text-xs text-white/45">
      Copyright 2026 SB Electrical. All rights reserved.
    </div>
  </footer>
</template>
