<script setup lang="ts">
// const { data: page } = await useAsyncData('institucional', () => queryContent('/institucional').findOne())
</script>

<template>
  <div>
    <h1>Preparando rota/Institucional*</h1>
    <!-- <ULandingSection
      :title="page.features.title"
      :description="page.features.description"
      :headline="page.features.headline"
    >
      <UPageGrid
        id="features"
        class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
        <ULandingCard
          v-for="(item, index) in page.features.items"
          :key="index"
          v-bind="item"
        />
      </UPageGrid>
    </ULandingSection> -->
  </div>
</template>
