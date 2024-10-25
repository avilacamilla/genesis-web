<script setup lang="ts">
// Carregar o conteúdo de texto de heroSection.yml
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

// Função para abrir a rota /contactRequest em uma nova aba
const openContactRequestInNewTab = () => {
  window.open('/contactRequest')
}
</script>

<template>
  <UContainer class="mx-auto relative h-screen max-w-full">
    <!-- Imagem de background -->
    <NuxtImg
      src="/images/bg-hero.jpg"
      alt="Background"
      class="absolute inset-0 w-full h-full object-cover brightness-75"
    />
    <!-- Container que agrega título, parágrafo e botão de ação -->
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
      <ULandingSection
        :title="page.heroSection.title"
        :description="page.heroSection.description"
        class="text-white override-text-color"
      />
      <UButton
        label="Nós ligamos para você"
        class="bg-white text-accent py-4 px-6 text-xl max-w-xs sm:max-w-none mt-6"
        @click="openContactRequestInNewTab"
      />
    </UContainer>
  </UContainer>
</template>

<style scoped>
  .override-text-color * {
    color: white !important;
  }
</style>
