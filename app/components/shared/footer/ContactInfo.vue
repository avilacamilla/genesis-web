<script setup lang="ts">
// Carregar os dados do arquivo footer.yml
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
</script>

<template>
  <UContainer class="ucard-container">
    <h3 class="text-lg font-bold mb-4">
      {{ page.footer.title }}
    </h3>

    <div class="text-sm">
      <p v-for="(item, index) in page.footer.contact" :key="index">
        <strong>{{ item.label }}:</strong> {{ item.value }}
      </p>
      <p class="flex flex-col">
        <strong>HORÁRIO DE FUNCIONAMENTO:</strong>
        <strong>Segunda à Sexta de 8h às 18h</strong>
      </p>
    </div>
  </UContainer>
</template>

<!-- Styles -->
<style scoped>
  .ucard-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 30rem;
    padding: 1rem;
  }
  .text-sm {
    font-size: 0.9rem;
    line-height: 1.8;
  }
  @media screen and (max-width: 760px) {
    .ucard-container {
      padding: 1rem 0;
    }
  }
</style>
