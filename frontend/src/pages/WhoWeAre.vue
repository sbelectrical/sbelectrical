<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white">
    <section class="border-y border-white/10 bg-white/[0.03] px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.3em] text-[#FFD600]">Who We Are</p>
          <h2 class="mt-4 text-3xl font-black leading-tight sm:text-4xl">Local electricians serving Calgary homes and businesses.</h2>
          <p class="mt-6 max-w-3xl text-base leading-8 text-white/70">
            SB Electrical provides dependable electrical services with safety-first workmanship, transparent pricing, and a commitment to excellent customer care. We serve residential and commercial customers across Calgary.
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-3">
          <div class="group relative min-h-72 overflow-hidden rounded-md border border-white/10 bg-[#050505] p-5 transition hover:-translate-y-1 hover:border-[#FFD600]/60">
            <div class="absolute inset-x-0 top-0 h-2 bg-[#FFD600]"></div>
            <div class="absolute bottom-0 right-0 h-28 w-28 border-l border-t border-[#FFD600]/20"></div>
            <div class="absolute bottom-8 right-8 h-10 w-10 border border-[#FFD600]/30"></div>
            <span class="absolute right-5 top-8 text-xs font-black uppercase tracking-[0.22em] text-white/25">Safety</span>
            <div class="relative flex min-h-[15rem] flex-col justify-between">
              <div>
                <div class="inline-flex h-16 w-16 items-center justify-center rounded-md border-2 border-[#FFD600] bg-[#FFD600]/10 text-[#FFD600] shadow-[0_0_30px_rgba(255,214,0,0.18)]">
                  <svg class="h-9 w-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3L19 6V11C19 15.5 16.1 19.1 12 21C7.9 19.1 5 15.5 5 11V6L12 3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                    <path d="M8.5 12L11 14.5L16 9.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <p class="mt-5 text-xl font-black">Licensed</p>
                <p class="mt-3 text-sm leading-6 text-white/65">Reliable electrical work completed with safety first.</p>
              </div>
              <div class="mt-8 border-t border-white/10 pt-4">
                <p class="text-xs font-black uppercase tracking-[0.2em] text-[#FFD600]">Built to code</p>
              </div>
            </div>
          </div>
          <div class="group relative min-h-72 overflow-hidden rounded-md border border-white/10 bg-[#050505] p-5 transition hover:-translate-y-1 hover:border-[#FFD600]/60">
            <div class="absolute inset-x-0 top-0 h-2 bg-[#FFD600]"></div>
            <div class="absolute bottom-0 right-0 h-28 w-28 border-l border-t border-[#FFD600]/20"></div>
            <div class="absolute bottom-8 right-8 h-10 w-10 border border-[#FFD600]/30"></div>
            <span class="absolute right-5 top-8 text-xs font-black uppercase tracking-[0.22em] text-white/25">Respect</span>
            <div class="relative flex min-h-[15rem] flex-col justify-between">
              <div>
                <div class="inline-flex h-16 w-16 items-center justify-center rounded-md border-2 border-[#FFD600] bg-[#FFD600]/10 text-[#FFD600] shadow-[0_0_30px_rgba(255,214,0,0.18)]">
                  <svg class="h-9 w-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M13 3L11.4 8.1L7 10L11.4 11.9L13 17L14.6 11.9L19 10L14.6 8.1L13 3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                    <path d="M5 15L4.2 17.2L2 18L4.2 18.8L5 21L5.8 18.8L8 18L5.8 17.2L5 15Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                    <path d="M19 16L18.4 17.4L17 18L18.4 18.6L19 20L19.6 18.6L21 18L19.6 17.4L19 16Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                  </svg>
                </div>
                <p class="mt-5 text-xl font-black">Clean</p>
                <p class="mt-3 text-sm leading-6 text-white/65">Protected work areas, tidy job sites, and careful finishing.</p>
              </div>
              <div class="mt-8 border-t border-white/10 pt-4">
                <p class="text-xs font-black uppercase tracking-[0.2em] text-[#FFD600]">Leave it tidy</p>
              </div>
            </div>
          </div>
          <div class="group relative min-h-72 overflow-hidden rounded-md border border-white/10 bg-[#050505] p-5 transition hover:-translate-y-1 hover:border-[#FFD600]/60">
            <div class="absolute inset-x-0 top-0 h-2 bg-[#FFD600]"></div>
            <div class="absolute bottom-0 right-0 h-28 w-28 border-l border-t border-[#FFD600]/20"></div>
            <div class="absolute bottom-8 right-8 h-10 w-10 border border-[#FFD600]/30"></div>
            <span class="absolute right-5 top-8 text-xs font-black uppercase tracking-[0.22em] text-white/25">Pricing</span>
            <div class="relative flex min-h-[15rem] flex-col justify-between">
              <div>
                <div class="inline-flex h-16 w-16 items-center justify-center rounded-md border-2 border-[#FFD600] bg-[#FFD600]/10 text-[#FFD600] shadow-[0_0_30px_rgba(255,214,0,0.18)]">
                  <svg class="h-9 w-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M7 3H17L20 6V21H4V3H7Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                    <path d="M16 3V7H20" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                    <path d="M8 12H13" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    <path d="M8 16H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    <path d="M14 16L16 18L20 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <p class="mt-5 text-xl font-black">Clear</p>
                <p class="mt-3 text-sm leading-6 text-white/65">Straight estimates, practical recommendations, and no confusing surprises.</p>
              </div>
              <div class="mt-8 border-t border-white/10 pt-4">
                <p class="text-xs font-black uppercase tracking-[0.2em] text-[#FFD600]">Know the plan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#FFD600] px-4 py-16 text-[#0a0a0a] sm:px-6 lg:px-8">
      <div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
        <div class="flex flex-col justify-between">
          <div>
            <p class="text-sm font-black uppercase tracking-[0.3em]">Why Choose Us</p>
            <h2 class="mt-4 text-4xl font-black leading-tight sm:text-5xl">No guesswork. No mess. Just solid electrical work.</h2>
            <p class="mt-6 max-w-xl text-base font-semibold leading-8 text-black/70">
              We keep every job simple for you: clear answers before work starts, safe installation while we are there, and a clean space when we leave.
            </p>
          </div>

          <div class="mt-10 grid grid-cols-3 gap-3">
            <div class="border-l-4 border-[#0a0a0a] pl-4">
              <p class="text-3xl font-black">01</p>
              <p class="mt-1 text-xs font-black uppercase tracking-[0.18em] text-black/65">Inspect</p>
            </div>
            <div class="border-l-4 border-[#0a0a0a] pl-4">
              <p class="text-3xl font-black">02</p>
              <p class="mt-1 text-xs font-black uppercase tracking-[0.18em] text-black/65">Explain</p>
            </div>
            <div class="border-l-4 border-[#0a0a0a] pl-4">
              <p class="text-3xl font-black">03</p>
              <p class="mt-1 text-xs font-black uppercase tracking-[0.18em] text-black/65">Complete</p>
            </div>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-md bg-[#0a0a0a] p-4 text-white shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-6">
          <div class="absolute left-10 top-10 hidden h-[calc(100%-5rem)] w-px bg-[#FFD600]/30 sm:block"></div>

          <div class="relative grid gap-5">
            <div class="grid gap-4 rounded-md border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-[auto_1fr] sm:items-start">
              <span class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#FFD600] bg-[#0a0a0a] text-[#FFD600]">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                  <path d="M14 6L20 12L14 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              <div>
                <p class="text-lg font-black text-[#FFD600]">Straight answers before the work starts</p>
                <p class="mt-2 text-sm leading-6 text-white/65">We explain the issue, the safest fix, and what the job needs without pushing unnecessary upgrades.</p>
              </div>
            </div>

            <div class="grid gap-4 rounded-md border border-white/10 bg-white/[0.03] p-5 sm:ml-8 sm:grid-cols-[auto_1fr] sm:items-start">
              <span class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#FFD600] bg-[#0a0a0a] text-[#FFD600]">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 19L19 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                  <path d="M7 7H7.01" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
                  <path d="M17 17H17.01" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
                  <path d="M14 10H14.01" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
                </svg>
              </span>
              <div>
                <p class="text-lg font-black text-[#FFD600]">Careful work that respects your property</p>
                <p class="mt-2 text-sm leading-6 text-white/65">We protect the work area, handle wiring cleanly, and pay attention to the details that matter after the panel is closed.</p>
              </div>
            </div>

            <div class="grid gap-4 rounded-md border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-[auto_1fr] sm:items-start">
              <span class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#FFD600] bg-[#0a0a0a] text-[#FFD600]">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M8 12L11 15L17 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" stroke-width="2" />
                </svg>
              </span>
              <div>
                <p class="text-lg font-black text-[#FFD600]">A clean finish and practical next steps</p>
                <p class="mt-2 text-sm leading-6 text-white/65">When the job is done, we leave the area tidy and make sure you know what was completed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
