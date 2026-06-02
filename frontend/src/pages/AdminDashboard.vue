<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  router.push('/me-admin')
}

const goToProjects = () => {
  router.push('/me-admin/projects')
}

const goToCareer = () => {
  router.push('/me-admin/career')
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
              @click="goToProjects"
              class="w-full rounded-2xl border border-[#FFD600] bg-[#111] px-4 py-3 text-left text-sm font-semibold text-white"
              type="button"
            >
              Projects
            </button>
            <button
              @click="goToCareer"
              class="w-full rounded-2xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-left text-sm font-semibold text-white transition hover:border-[#FFD600] hover:bg-[#111]"
              type="button"
            >
              Career
            </button>
          </div>
        </aside>

        <section class="rounded-3xl border border-white/10 bg-[#111] p-8">
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-[#FFD600]">Overview</p>
          <h2 class="mt-4 text-3xl font-black">Welcome back, admin</h2>
          <p class="mt-4 max-w-2xl text-sm leading-7 text-[#cbd5e1]">
            Select Projects to view the project list and add new entries on a dedicated page.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>
