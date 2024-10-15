<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

// Função para rolar até o footer
function scrollToFooter() {
  const footer = document.getElementById('app-footer')
  if (footer) {
    footer.scrollIntoView({ behavior: 'smooth' })
  }
}

const links = computed(() => [{
  label: 'Início',
  to: '/',
  icon: 'i-heroicons-cube-transparent'
}, {
  label: 'Institucional',
  to: '/institucional',
  icon: 'i-heroicons-credit-card'
}, {
  label: 'Clinux',
  to: '/clinux',
  icon: 'i-heroicons-academic-cap',
  active: activeHeadings.value.includes('testimonials')
}, {
  label: 'PACS DICOMVIX',
  to: '/pacsDicomvix',
  icon: 'i-heroicons-question-mark-circle'
}, {
  label: 'Blog',
  to: 'https://blog.gtecnologia.com.br/',
  icon: 'i-heroicons-document-text'
}, {
  label: 'Suporte',
  to: '/suporte',
  icon: 'i-heroicons-lifebuoy'
}, {
  label: 'Contato',
  to: '#',
  icon: 'i-heroicons-phone',
  clickHandler: scrollToFooter // Associa a função de scroll ao link
}])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#contato')
  ])
})
</script>

<template>
  <!-- Cabeçalho com fundo branco para a logo -->
  <div class="bg-white py-2 flex justify-center">
    <img
      src="/icons/logo-genesis.png"
      alt="Logo Genesis"
      class="h-16 w-auto"
    >
  </div>

  <!-- Barra de navegação com fundo azul -->
  <nav class="bg-accent text-white py-4 px-6 shadow-lg">
    <ul class="flex justify-center space-x-8">
      <li
        v-for="link in links"
        :key="link.label"
      >
        <NuxtLink
          v-if="!link.clickHandler"
          :to="link.to"
          class="hover:underline"
        >
          {{ link.label }}
        </NuxtLink>
        <button
          v-else
          class="hover:underline focus:outline-none"
          @click="link.clickHandler"
        >
          {{ link.label }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<!-- Styles -->
<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li a,
  li button {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  li a:hover,
  li button:hover {
    text-decoration: underline;
  }
</style>
