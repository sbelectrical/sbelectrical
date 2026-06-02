<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const emailAddress = 'sbelectricalltd1@gmail.com'
const primaryPhone = '4035606052'
const secondaryPhone = '8255611260'
const address = '179 Corner Glen Drive NE, Calgary, Alberta T3N 2T7'
const mapUrl = 'https://www.google.com/maps?q=179%20Corner%20Glen%20Drive%20NE%2C%20Calgary%2C%20Alberta%20T3N%202T7&output=embed'

const sendInquiry = () => {
  const recipient = emailAddress
  const subject = encodeURIComponent(`SB Electrical Inquiry from ${form.name || 'Customer'}`)
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
  )
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
}
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white">
    <section class="border-t border-white/10 bg-[#0a0a0a] px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p class="text-sm font-black uppercase tracking-[0.3em] text-[#FFD600]">Contact Us</p>
          <h1 class="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">Call SB Electrical at <span class="whitespace-nowrap">403-560-6052.</span></h1>
          <p class="mt-5 max-w-2xl text-base leading-8 text-[#9ca3af]">
            Reach out for service, estimates, or questions. Use the form to send an email inquiry and we will follow up quickly.
          </p>

          <div class="mt-8 grid gap-4">
            <div class="rounded-md border border-white/10 bg-[#111] p-5">
              <p class="text-sm font-black uppercase tracking-[0.22em] text-[#FFD600]">Address</p>
              <p class="mt-3 text-base font-semibold text-white">{{ address }}</p>
            </div>
            <a class="rounded-md border border-white/10 bg-[#111] p-5 transition hover:border-[#FFD600]/70" :href="`mailto:${emailAddress}`">
              <p class="text-sm font-black uppercase tracking-[0.22em] text-[#FFD600]">Email</p>
              <p class="mt-3 break-words text-base font-semibold text-white">{{ emailAddress }}</p>
            </a>
            <div class="rounded-md border border-white/10 bg-[#111] p-5">
              <p class="text-sm font-black uppercase tracking-[0.22em] text-[#FFD600]">Phone</p>
              <div class="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-base font-semibold text-white">
                <a class="hover:text-[#FFD600]" :href="`tel:+1${primaryPhone}`">403-560-6052</a>
                <a class="hover:text-[#FFD600]" :href="`tel:+1${secondaryPhone}`">825-561-1260</a>
              </div>
            </div>
          </div>

          <a class="mt-8 inline-block rounded-md bg-[#FFD600] px-6 py-4 text-sm font-black text-[#0a0a0a] shadow-[0_0_35px_rgba(255,214,0,0.24)] transition hover:bg-white" href="tel:+14035606052">
            Call Now
          </a>
        </div>

        <div class="rounded-md border border-[#FFD600]/30 bg-[#111] p-5 shadow-2xl sm:p-8">
          <form @submit.prevent="sendInquiry" class="space-y-5">
            <div>
              <label class="block text-sm font-bold text-white">Name</label>
              <input v-model="form.name" type="text" class="mt-2 w-full rounded-md border border-white/10 bg-[#0a0a0a] px-4 py-3 text-white outline-none transition placeholder:text-[#9ca3af] focus:border-[#FFD600]" placeholder="Your name" required />
            </div>
            <div>
              <label class="block text-sm font-bold text-white">Email</label>
              <input v-model="form.email" type="email" class="mt-2 w-full rounded-md border border-white/10 bg-[#0a0a0a] px-4 py-3 text-white outline-none transition placeholder:text-[#9ca3af] focus:border-[#FFD600]" placeholder="you@example.com" required />
            </div>
            <div>
              <label class="block text-sm font-bold text-white">Phone</label>
              <input v-model="form.phone" type="tel" class="mt-2 w-full rounded-md border border-white/10 bg-[#0a0a0a] px-4 py-3 text-white outline-none transition placeholder:text-[#9ca3af] focus:border-[#FFD600]" placeholder="403-560-6052" />
            </div>
            <div>
              <label class="block text-sm font-bold text-white">Message</label>
              <textarea v-model="form.message" rows="5" class="mt-2 w-full rounded-md border border-white/10 bg-[#0a0a0a] px-4 py-3 text-white outline-none transition placeholder:text-[#9ca3af] focus:border-[#FFD600]" placeholder="Tell us what you need." required></textarea>
            </div>
            <button type="submit" class="w-full rounded-md bg-[#FFD600] px-5 py-4 text-sm font-black text-[#0a0a0a] transition hover:bg-white">
              Send Inquiry by Email
            </button>
          </form>
        </div>
      </div>
    </section>

    <section class="bg-[#0a0a0a]">
      <div class="px-4 pb-6 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl">
          <p class="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD600]">Our Location</p>
        </div>
      </div>
      <iframe
        class="h-[400px] w-full border-0"
        :src="mapUrl"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="SB Electrical location map"
      ></iframe>
    </section>
  </div>
</template>
