<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const sendInquiry = () => {
  const recipient = 'info@sbelectrical.com'
  const subject = encodeURIComponent(`SB Electrical Inquiry from ${form.name || 'Customer'}`)
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
  )
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
}
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white">
    <section class="border-t border-white/10 bg-[#FFD600] px-4 py-16 text-[#0a0a0a] sm:px-6 lg:px-8">
      <div class="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <p class="text-sm font-black uppercase tracking-[0.3em]">Contact Us</p>
          <h2 class="mt-4 text-3xl font-black sm:text-5xl">Call SB Electrical at (403) 555-0187.</h2>
          <p class="mt-4 max-w-2xl text-sm leading-6 text-[#0a0a0a]/80">
            Reach out for service, estimates, or questions. Use the form to send an email inquiry and we will follow up quickly.
          </p>
          <a class="mt-6 inline-block rounded-md bg-[#0a0a0a] px-6 py-4 text-sm font-black text-white transition hover:bg-white hover:text-[#0a0a0a]" href="tel:+14035550187">
            Call Now
          </a>
        </div>

        <div class="rounded-3xl bg-white p-8 shadow-2xl shadow-black/20">
          <form @submit.prevent="sendInquiry" class="space-y-5 text-[#0a0a0a]">
            <div>
              <label class="block text-sm font-semibold">Name</label>
              <input v-model="form.name" type="text" class="mt-2 w-full rounded-2xl border border-[#0a0a0a]/10 bg-[#f7f7f7] px-4 py-3 outline-none" placeholder="Your name" required />
            </div>
            <div>
              <label class="block text-sm font-semibold">Email</label>
              <input v-model="form.email" type="email" class="mt-2 w-full rounded-2xl border border-[#0a0a0a]/10 bg-[#f7f7f7] px-4 py-3 outline-none" placeholder="you@example.com" required />
            </div>
            <div>
              <label class="block text-sm font-semibold">Phone</label>
              <input v-model="form.phone" type="tel" class="mt-2 w-full rounded-2xl border border-[#0a0a0a]/10 bg-[#f7f7f7] px-4 py-3 outline-none" placeholder="(403) 555-0187" />
            </div>
            <div>
              <label class="block text-sm font-semibold">Message</label>
              <textarea v-model="form.message" rows="5" class="mt-2 w-full rounded-2xl border border-[#0a0a0a]/10 bg-[#f7f7f7] px-4 py-3 outline-none" placeholder="Tell us what you need." required></textarea>
            </div>
            <button type="submit" class="w-full rounded-2xl bg-[#0a0a0a] px-5 py-4 text-sm font-black text-white transition hover:bg-[#111111]">
              Send Inquiry by Email
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
