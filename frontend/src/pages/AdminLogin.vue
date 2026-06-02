<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')

const handleSubmit = (event) => {
  event.preventDefault()
  error.value = ''

  if (username.value === 'admin' && password.value === '123456') {
    router.push('/me-admin/dashboard')
    return
  }

  error.value = 'Invalid username or password.'
}
</script>

<template>
  <div class="min-h-screen bg-[#090909] text-white flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
    <div class="w-full max-w-md rounded-[2rem] border border-white/10 bg-[#111] p-8 shadow-2xl">
      <div class="text-center">
        <h1 class="text-3xl font-black uppercase tracking-[0.22em] text-[#FFD600]">Login to admin</h1>
      </div>

      <form @submit="handleSubmit" class="mt-10 space-y-6">
        <div>
          <label for="username" class="sr-only">Username</label>
          <input
            id="username"
            type="text"
            v-model="username"
            autocomplete="username"
            class="w-full rounded-2xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none transition focus:border-[#FFD600] focus:ring-2 focus:ring-[#FFD600]/25"
            placeholder="Username"
          />
        </div>

        <div>
          <label for="password" class="sr-only">Password</label>
          <input
            id="password"
            type="password"
            v-model="password"
            autocomplete="current-password"
            class="w-full rounded-2xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none transition focus:border-[#FFD600] focus:ring-2 focus:ring-[#FFD600]/25"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          class="w-full rounded-2xl bg-[#FFD600] px-4 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-[#e6c900]"
        >
          Login
        </button>

        <p v-if="error" class="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">{{ error }}</p>
      </form>
    </div>
  </div>
</template>
