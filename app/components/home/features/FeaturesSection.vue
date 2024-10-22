<script setup lang="ts">
</script>

<template>
  <UContainer class="text-center space-y-4 mt-[5rem] mb-[5rem]">
    <!-- Imagem central -->
    <NuxtImg
      src="/images/bg-features.svg"
      alt="Features Background"
      class="mx-auto w-[70%] md:w-[60%]"
    />

    <!-- Texto principal e subtítulo -->
    <div class="flex justify-center space-x-[6%] md:space-x-[12%]">
      <div class="text-center">
        <UBadge class="text-lg font-bold text-primary">PACS DICOMVIX</UBadge>
      </div>
      <div class="text-center">
        <UBadge class="text-lg font-bold text-primary">Clinux</UBadge>
      </div>
      <div class="text-center">
        <UBadge class="text-lg font-bold text-primary">E muito mais...</UBadge>
      </div>
    </div>

    <!-- Badge com informação da Anvisa -->
    <div class="mt-4">
      <UBadge class="bg-white border text-primary font-medium p-3 md:p-4 rounded-lg text-lg md:text-xl mt-[2%]">
        ANVISA - 80918190001
      </UBadge>
    </div>
  </UContainer>
</template>

<style scoped>
  .text-primary {
    color: #236b97;
  }
</style>
