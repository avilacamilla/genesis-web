<script setup lang="ts">
// Carregar o conteúdo de texto de institucional.yml
// const { data: page } = await useAsyncData('clinux', () => queryContent('/clinux').findOne())
</script>

<template>
  <!-- Seção Hero com imagem de background -->
  <UContainer class="mx-auto relative h-screen max-w-full text-white">
    <NuxtImg
      src="/images/clinux-bg2.png"
      alt="Background"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <UContainer
      class="
        absolute inset-0
        flex
        flex-col
        justify-center
        items-center
        text-center
        z-10
      "
    >
      Preparando container clinux
      <!-- <ULandingSection
        :title="page.clinuxHeroSection.title"
        :description="page.clinuxHeroSection.description"
        class="text-white override-text-color"
      />

      <ULandingSection
        :subtitle="page.clinuxHeroSection.subtitle"
        class="text-white override-text-color"
      /> -->
    </UContainer>
  </UContainer>
</template>

<style scoped>
  .override-text-color * {
    color: white !important;
  }
</style>
