<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

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
  to: '/pacs-dicomvix',
  icon: 'i-heroicons-question-mark-circle'
}, {
  label: 'Blog',
  to: 'https://blog.gtecnologia.com.br/', // Desenvolver Blog dentro do projeto
  icon: 'i-heroicons-document-text'
}, {
  label: 'Suporte',
  to: '/suporte',
  icon: 'i-heroicons-lifebuoy'
}, {
  label: 'Contato',
  to: '/contato',
  icon: 'i-heroicons-phone',
  active: activeHeadings.value.includes('contato')
}])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#contact')
  ])
})
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <img
        src="/icons/logo-genesis.png"
        alt="Logo Genesis"
        class="h-8"
      >
    </template>

    <template #right>
      <UButton
        label="Sign in"
        color="white"
        variant="ghost"
        trailing-icon="i-heroicons-arrow-right-20-solid"
        class="hidden lg:flex bg-primary text-white"
      />
    </template>

    <template #panel>
      <UAsideLinks :links="links" />

      <UDivider class="my-6" />

      <UButton
        label="Sign in"
        color="white"
        block
        class="mb-3 bg-secondary text-white"
      />
      <UButton
        label="Get started"
        block
        class="bg-primary text-white"
      />
    </template>
  </UHeader>
</template>
