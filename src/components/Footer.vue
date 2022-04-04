<template>
  <footer
    class="mt-auto border-t border-gray-300 bg-white px-2 py-4 text-gray-500"
  >
    <div class="custom-container flex justify-between">
      <div class="span">
        &copy; {{ new Date().getFullYear() }} - Tous droits réservés
      </div>
      <div class="flex space-x-4">
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
