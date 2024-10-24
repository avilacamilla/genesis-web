<script setup lang="ts">
import AppHeader from './components/shared/header/AppHeader.vue'
import AppFooter from './components/shared/footer/AppFooter.vue'
import AppCopy from './components/shared/copyright/AppCopy.vue'

useHead({
  title: 'Genesis Tecnologia - Soluções para gestão de clínicas!',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'pt'
  }
})
</script>

<template>
  <AppHeader />

  <UMain>
    <NuxtPage />
  </UMain>

  <AppFooter />

  <AppCopy />

  <UNotifications />
</template>
