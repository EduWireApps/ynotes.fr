<template>
  <footer
    class="mt-auto border-t border-gray-300 bg-white px-2 py-4 text-gray-500"
  >
    <div
      class="custom-container flex flex-col md:flex-row justify-between items-center"
    >
      <div class="span mb-4 md:mb-0">
        &copy; {{ new Date().getFullYear() }} - Tous droits réservés
      </div>
      <div class="flex flex-col sm:flex-row sm:space-x-4 items-center">
        <a
          href="/legal/pdc.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-gray-700"
          >Politique de confidentialité</a
        >
        <a
          href="/legal/cgu.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-gray-700"
          >Conditions d'utilisation</a
        >
      </div>
    </div>
  </footer>
</template>
