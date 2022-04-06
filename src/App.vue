<template>
  <div
    class="flex min-h-screen flex-col bg-gradient-to-bl from-white to-primary-100/50"
  >
    <Header />
    <div class="">
      <div class="py-16 bg-gradient-to-tr from-primary-500 to-primary-400">
        <div class="custom-container text-5xl font-bold text-white mb-24">
          <h1>yNotes, votre application scolaire connectée</h1>
        </div>
        <div
          class="prose prose-invert custom-container prose-lg text-primary-100"
        >
          <TheEnd />
          <div class="italic mt-16">
            <span class="text-2xl font-semibold text-primary-200"
              >Josselin (aka JsonLines),</span
            ><span class="text-primary-200"> 03 avril 2022</span>
          </div>
          <div class="w-32 h-1 mt-2 rounded-full bg-primary-300"></div>
        </div>
      </div>
      <div class="py-16 bg-white">
        <div class="custom-container">
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
                loading="lazy"
                width="96px"
                height="96px"
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
      <div class="py-16 bg-primary-400">
        <div class="custom-container">
          <h2 class="text-5xl text-white font-bold mb-12">Chronologie</h2>
          <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
            <div
              v-for="(e, i) in events"
              :key="i"
              class="flex md:contents"
              :class="{ 'flex-row-reverse': i % 2 === 0 }"
            >
              <div
                v-if="i % 2 !== 0"
                class="relative col-start-5 col-end-6 mr-7 md:mx-auto"
              >
                <div class="flex items-center justify-center w-6 h-full">
                  <div
                    class="w-1 h-full"
                    :class="[
                      i === 0 ? 'rounded-t-full bg-gradient-to-b' : '',
                      i === events.length - 1
                        ? 'rounded-b-full bg-gradient-to-t'
                        : '',
                      i === 0 || i === events.length - 1
                        ? 'from-primary-400 to-primary-300'
                        : 'bg-primary-300',
                    ]"
                  ></div>
                </div>
                <div
                  class="absolute w-6 h-6 -mt-3 bg-white border-4 border-primary-400 rounded-full top-1/2"
                ></div>
              </div>
              <div
                class="relative p-4 my-6 text-gray-800 bg-white rounded-xl"
                :class="
                  i % 2 === 0
                    ? 'col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto'
                    : 'col-start-6 col-end-10 mr-auto'
                "
              >
                <h3
                  class="text-lg font-semibold lg:text-xl"
                  v-html="e.title"
                ></h3>
                <p
                  v-if="e.content"
                  class="mt-2 leading-6"
                  v-html="e.content"
                ></p>
                <span
                  class="absolute text-sm text-primary-300 -top-5 left-2 whitespace-nowrap"
                  v-html="e.date"
                ></span>
              </div>
              <div
                v-if="i % 2 === 0"
                class="relative col-start-5 col-end-6 mr-7 md:mx-auto"
              >
                <div class="flex items-center justify-center w-6 h-full">
                  <div
                    class="w-1 h-full bg-primary-300"
                    :class="[
                      i === 0 ? 'rounded-t-full bg-gradient-to-b' : '',
                      i === events.length - 1
                        ? 'rounded-b-full bg-gradient-to-t'
                        : '',
                      i === 0 || i === events.length - 1
                        ? 'from-primary-400 to-primary-300'
                        : 'bg-primary-300 ',
                    ]"
                  ></div>
                </div>
                <div
                  class="absolute w-6 h-6 -mt-3 bg-white border-4 border-primary-400 rounded-full top-1/2"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-16 bg-primary-400">
        <div class="custom-container">
          <h2 class="text-5xl text-white font-bold mb-8">Nous contacter</h2>
          <a
            target="_blank"
            href="mailto:contact@ynotes.fr"
            class="text-white hover:underline text-xl"
          >
            contact@ynotes.fr</a
          >
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import TheEnd from "./assets/theEnd.md";
import contributors from "./assets/contributors.json";
import events from "./assets/events.json";
</script>
