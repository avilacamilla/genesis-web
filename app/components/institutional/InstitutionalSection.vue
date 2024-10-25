<script setup lang="ts">
// Carregar o conteúdo de texto de clinux.yml
const { data: page } = await useAsyncData('institutional', () => queryContent('/institutional').findOne())
</script>

<template>
  <!-- Seção Hero com imagem de background -->
  <UContainer
    class="relative h-screen max-w-full bg-cover bg-center"
    style="background-image: url('/images/clinux-bg2.png');"
  >
    <div class="flex h-full justify-end items-center">
      <div class="w-full text-center text-dark-blue">
        <h2 class="text-4xl font-bold mb-4">
          {{ page.title }}
        </h2>
      </div>
    </div>
  </UContainer>
</template>

<style scoped>
  .text-dark-blue {
    color: #236b97;
  }
</style>
