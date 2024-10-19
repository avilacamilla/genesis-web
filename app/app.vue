<script setup lang="ts">
import AppHeader from './components/shared/header/AppHeader.vue'
import AppFooter from './components/shared/footer/AppFooter.vue'
import AppCopy from './components/shared/copyright/AppCopy.vue'

useHead({
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

useSeoMeta({
  ogImage: 'https://landing-template.nuxt.dev/social-card.png',
  twitterImage: 'https://landing-template.nuxt.dev/social-card.png',
  twitterCard: 'summary_large_image'
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
