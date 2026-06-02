<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const logout = () => router.push('/me-admin')
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
              class="w-full rounded-lg border border-white/10 bg-[#211d14] px-4 py-3 text-left text-sm font-semibold text-white transition hover:border-[#FFD600] hover:bg-[#2b2518]"
              type="button"
            >
              Projects
            </button>
            <button
              class="w-full rounded-lg border border-[#FFD600] bg-[#FFD600]/10 px-4 py-3 text-left text-sm font-black text-white"
              type="button"
            >
              Career
            </button>
          </div>
        </aside>

        <section class="min-w-0 bg-[linear-gradient(135deg,#14120d_0%,#19160f_48%,#0f1414_100%)] p-4 sm:p-6 lg:p-8">
          <div class="rounded-xl border border-white/10 bg-[#17140d] p-6 shadow-2xl">
            <h1 class="text-3xl font-black">Career</h1>
            <p class="mt-4 max-w-2xl text-sm leading-7 text-[#cbd5e1]">
              This section is reserved for career management. You can add career content or job listings here later.
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
