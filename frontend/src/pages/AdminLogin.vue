<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import adminLoginBg from '../assets/admin-login-bg.png'

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')

const handleSubmit = (event) => {
  event.preventDefault()
  error.value = ''

  if (username.value === 'admin' && password.value === '123456') {
    router.push('/me-admin/projects')
    return
  }

  error.value = 'Invalid username or password.'
}
</script>

<template>
  <div
    class="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-4 py-10 text-white sm:px-6 lg:px-8"
  >
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${adminLoginBg})` }"
      aria-hidden="true"
    ></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,214,0,0.16),transparent_30%),linear-gradient(90deg,rgba(0,0,0,0.82),rgba(0,0,0,0.52),rgba(0,0,0,0.88))]" aria-hidden="true"></div>
    <div class="absolute inset-0 backdrop-blur-[1px]" aria-hidden="true"></div>

    <div class="relative w-full max-w-md overflow-hidden rounded-xl border border-white/15 bg-black/70 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.68)] backdrop-blur-md sm:p-8 lg:p-10">
      <div class="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[#FFD600]" aria-hidden="true"></div>
      <div class="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#FFD600]/10 blur-3xl" aria-hidden="true"></div>

      <div class="relative">
        <div class="mb-8 flex items-center justify-between gap-4">
          <div>
            <p class="text-xs font-black uppercase tracking-[0.35em] text-[#FFD600]">SB Electrical</p>
          </div>

          <div class="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-[#FFD600]/40 bg-[#FFD600]/15 text-[#FFD600] shadow-[0_0_34px_rgba(255,214,0,0.22)]">
            <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M13 2L5 13h6l-1 9 9-13h-6l1-7z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
            </svg>
          </div>
        </div>

        <div>
          <h1 class="text-3xl font-black uppercase tracking-[0.12em] text-white sm:text-4xl">Admin Login</h1>
          <p class="mt-3 text-sm leading-6 text-white/60">Enter your credentials to continue.</p>
        </div>

        <form @submit="handleSubmit" class="mt-9 space-y-5">
          <div>
            <label for="username" class="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-white/55">Username</label>
            <div class="group flex items-center gap-3 rounded-lg border border-white/10 bg-[#080808]/85 px-4 py-3 transition focus-within:border-[#FFD600] focus-within:ring-2 focus-within:ring-[#FFD600]/20">
              <svg class="h-5 w-5 shrink-0 text-white/35 transition group-focus-within:text-[#FFD600]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 21a8 8 0 0 0-16 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" />
              </svg>
              <input
                id="username"
                type="text"
                v-model="username"
                autocomplete="username"
                class="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-white/35"
                placeholder="Enter username"
              />
            </div>
          </div>

          <div>
            <label for="password" class="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-white/55">Password</label>
            <div class="group flex items-center gap-3 rounded-lg border border-white/10 bg-[#080808]/85 px-4 py-3 transition focus-within:border-[#FFD600] focus-within:ring-2 focus-within:ring-[#FFD600]/20">
              <svg class="h-5 w-5 shrink-0 text-white/35 transition group-focus-within:text-[#FFD600]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" stroke-width="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
              <input
                id="password"
                type="password"
                v-model="password"
                autocomplete="current-password"
                class="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-white/35"
                placeholder="Enter password"
              />
            </div>
          </div>

          <button
            type="submit"
            class="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#FFD600] px-4 py-3.5 text-sm font-black uppercase tracking-[0.18em] text-black shadow-[0_16px_38px_rgba(255,214,0,0.24)] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#FFD600]/45"
          >
            Login
            <svg class="h-4 w-4 transition group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          <p v-if="error" class="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">{{ error }}</p>
        </form>
      </div>
    </div>
  </div>
</template>
