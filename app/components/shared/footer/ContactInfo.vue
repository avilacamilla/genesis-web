<script setup lang="ts">
// Carregar os dados do arquivo footer.yml
const { data: footerData } = await useAsyncData('footer', () => queryContent('footer').findOne())
</script>

<template>
  <UContainer class="ucard-container">
    <h3 class="text-lg font-bold mb-4">
      {{ footerData.title }}
    </h3>

    <div class="text-sm">
      <p v-for="(item, index) in footerData.contact" :key="index">
        <strong>{{ item.label }}:</strong> {{ item.value }}
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
</style>
