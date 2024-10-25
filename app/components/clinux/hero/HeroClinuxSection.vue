<script setup lang="ts">
// Carregar o conteúdo de texto de clinux.yml
const { data: page } = await useAsyncData('clinux', () => queryContent('/clinux').findOne())
</script>

<template>
  <!-- Seção Hero com imagem de background -->
  <UContainer
    class="relative h-screen max-w-full bg-cover bg-center"
    style="background-image: url('/images/clinux-bg3.png');"
  >
    <div class="flex h-full justify-end items-center">
      <div class="w-1/2 pr-16 text-right text-dark-blue">
        <h2 class="text-4xl font-bold mb-4">
          {{ page.clinuxHeroSection.title }}
        </h2>
        <p class="text-lg mb-6">
          {{ page.clinuxHeroSection.description }}
        </p>
        <p class="text-md">
          {{ page.clinuxHeroSection.subtitle }}
        </p>
      </div>
    </div>
  </UContainer>
</template>

<style scoped>
.text-dark-blue {
  color: #236b97;
}
</style>
