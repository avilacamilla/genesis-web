<script setup lang="ts">
// Carregar o conteúdo de texto de index.yml
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
</script>

<template>
  <UContainer class="text-center space-y-4 mt-[5rem] mb-[5rem]">
    <!-- Imagem central -->
    <NuxtImg
      src="/images/bg-features.svg"
      alt="Features Background"
      class="mx-auto w-[70%] md:w-[60%]"
    />

    <!-- Badges com texto principal -->
    <div class="flex justify-center space-x-[6%] md:space-x-[12%]">
      <div v-for="badge in page.featuresSection.badges" :key="badge.label" class="text-center">
        <UBadge :class="badge.style">{{ badge.label }}</UBadge>
      </div>
    </div>

    <!-- Badge com informação da Anvisa -->
    <div class="mt-4">
      <UBadge :class="page.featuresSection.anvisaBadge.style">
        {{ page.featuresSection.anvisaBadge.label }}
      </UBadge>
    </div>
  </UContainer>
</template>

<style scoped>
  .text-primary {
    color: #236b97;
  }
</style>
