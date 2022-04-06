<template>
  <div class="border-b border-gray-300 bg-white px-2 py-4">
    <div class="custom-container flex items-center justify-between">
      <div
        class="font-bold text-2xl text-primary-500 flex items-center space-x-2"
      >
        <img
          src="../assets/logo.png"
          alt="Logo de yNotes"
          class="h-8 w-8 rounded-md"
          width="32px"
          height="32px"
        />
        <span>yNotes</span>
      </div>
      <div class="flex items-center space-x-4">
        <a
          href="https://github.com/EduWireApps/ynotes"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-500 hover:text-gray-700 hover:underline"
          >GitHub</a
        >
        <a
          href="https://archive.ynotes.fr"
          target="_blank"
          rel="noopener noreferrer"
          class="space-x-1 inline-flex items-center text-gray-500 hover:text-gray-700 hover:underline"
        >
          <span>Archive</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
            />
            <path
              d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
