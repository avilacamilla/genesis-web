<script setup lang="ts">
import { ref } from 'vue'

const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

// Controle do menu hambúrguer
const isMenuOpen = ref(false)

// Função para alternar o menu
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

// Função para rolar até o footer
function scrollToFooter() {
  const footer = document.getElementById('app-footer')
  if (footer) {
    footer.scrollIntoView({ behavior: 'smooth' })
    isMenuOpen.value = false // Fechar o menu após o clique
  }
}

const links = computed(() => [{
  label: 'Início',
  to: '/',
  icon: 'i-heroicons-cube-transparent'
}, {
  label: 'Institucional',
  to: '/institutional',
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
  to: '/support',
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
  <div class="bg-white py-2 flex md:justify-center justify-between items-center px-4">
    <img
      src="/icons/logo-genesis.png"
      alt="Logo Genesis"
      class="h-16 w-auto"
    >
    <!-- Botão do menu hambúrguer para dispositivos móveis -->
    <button
      class="md:hidden text-2xl focus:outline-none text-accent p-2 rounded"
      @click="toggleMenu"
    >
      ☰
    </button>
  </div>

  <!-- Barra de navegação com fundo azul -->
  <nav
    :class="[
      'bg-accent text-white py-4 px-6 shadow-lg md:flex md:justify-center md:space-x-8',
      { block: isMenuOpen, hidden: !isMenuOpen }
    ]"
  >
    <ul class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
      <li
        v-for="link in links"
        :key="link.label"
      >
        <NuxtLink
          v-if="!link.clickHandler"
          :to="link.to"
          class="hover:underline"
          @click="isMenuOpen = false"
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

  @media (min-width: 800px) {
    nav {
      display: flex !important;
    }
  }
</style>
