<template>
  <div
    class="flex min-h-screen flex-col bg-gradient-to-bl from-white to-primary-100/50"
  >
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
