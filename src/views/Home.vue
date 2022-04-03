<template>
  <div class="">
    <div class="py-16">
      <div class="prose mx-auto max-w-4xl">
        <TheEnd />
      </div>
    </div>
    <div class="py-16 bg-primary-500">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-5xl text-white font-semibold">Contributeurs</h2>
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap gap-y-8 gap-x-2 mt-8"
        >
          <a
            v-for="c in contributors"
            :href="c.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col items-center space-y-4 py-2 hover:bg-white/10 transition-colors rounded-xl"
          >
            <img
              :src="c.image"
              class="block w-24 h-24 rounded-full shadow-md"
              :alt="`${c.name} avatar`"
            />
            <div class="text-center font-semibold">
              <div class="text-white text-lg">{{ c.name }}</div>
              <div class="text-primary-200">
                {{ c.role }}
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheEnd from "../assets/theEnd.md";
import contributors from "../assets/contributors.json";
</script>
