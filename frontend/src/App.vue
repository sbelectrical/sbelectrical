<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
const hideLayout = computed(() => route.meta.hideLayout === true)
</script>

<template>
  <div class="min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
    <Navbar v-if="!hideLayout" />
    <main :class="hideLayout ? 'min-h-screen' : 'min-h-[calc(100vh-88px)]'">
      <router-view />
    </main>
    <Footer v-if="!hideLayout" />
  </div>
</template>
