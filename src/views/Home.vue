<template>
  <div class="">
    <div class="py-16 bg-gradient-to-tr from-primary-500 to-primary-400">
      <div class="max-w-4xl mx-auto text-5xl font-bold text-white mb-24">
        <h1>yNotes, votre application scolaire connectée</h1>
      </div>
      <div
        class="prose prose-invert mx-auto max-w-4xl prose-lg text-primary-100"
      >
        <TheEnd />
        <div class="italic mt-16">
          <span class="text-2xl font-semibold text-primary-200"
            >JsonLinesCode,</span
          ><span class="text-primary-200"> 03 avril 2022</span>
        </div>
        <div class="w-32 h-1 mt-2 rounded-full bg-primary-300"></div>
      </div>
    </div>
    <div class="py-16 bg-white">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-5xl text-gray-800 font-bold">Contributeurs</h2>
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap gap-y-8 gap-x-2 mt-8"
        >
          <a
            v-for="c in contributors"
            :href="c.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col items-center space-y-4 py-2 hover:bg-primary-100/50 transition-colors rounded-xl"
          >
            <img
              :src="c.image"
              class="block w-24 h-24 rounded-full shadow-md"
              :alt="`${c.name} avatar`"
            />
            <div class="text-center font-semibold">
              <div class="text-gray-800 text-lg">{{ c.name }}</div>
              <div class="text-primary-300">
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
