<script setup>
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
</script>

<template>
  <!-- Container principal com background image -->
  <div class="relative w-full h-full">
    <NuxtImg
      src="/images/clinux-bg2.png"
      alt="Background image"
      class="absolute inset-0 w-full h-full object-cover z-0"
    />
    <!-- Conteúdo do componente -->
    <div class="relative z-10 bg-opacity-75">
      <ULandingSection
        :title="page.testimonials.title"
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
            <ULandingTestimonial
              v-bind="testimonial"
            />
          </div>
        </UPageColumns>
      </ULandingSection>
    </div>
  </div>
</template>
