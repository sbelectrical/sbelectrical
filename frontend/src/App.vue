<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
    <Navbar />
    <main class="min-h-[calc(100vh-88px)]">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
