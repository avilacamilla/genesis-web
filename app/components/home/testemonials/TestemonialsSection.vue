<script setup>
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
</script>

<template>
  <!-- Container principal com background image -->
  <div class="relative w-full h-full">
    <NuxtImg
      src="/images/clinux-bg.png"
      alt="Background image"
      class="absolute inset-0 w-full h-full object-cover z-0"
    />
    <!-- Conteúdo do componente -->
    <div class="relative z-10 bg-opacity-75">
      <ULandingSection
        :title="page.testimonials.title"
        :description="page.testimonials.description"
        class="text-white p-8"
      >
        <UPageColumns
          id="testimonials"
          class="xl:columns-4 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
        >
          <div
            v-for="(testimonial, index) in page.testimonials.items"
            :key="index"
            class="break-inside-avoid"
          >
            <!-- Forçar a cor de texto dentro do ULandingTestimonial -->
            <ULandingTestimonial
              v-bind="testimonial"
              class="text-gray-900"
            />
          </div>
        </UPageColumns>
      </ULandingSection>
    </div>
  </div>
</template>

<style scoped>
/* Ajusta a cor de todos os elementos, mas exceto dentro do ULandingTestimonial */
.override-text-color *:not(.text-gray-900) {
  color: white !important;
}
</style>
