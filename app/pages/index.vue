<script setup lang="ts">
// Components
import HeroSection from '~/components/home/hero/HeroSection.vue'
import FeaturesSection from '~/components/home/features/FeaturesSection.vue'
import ClinuxSection from '~/components/home/clinux/ClinuxSection.vue'
import TeleradiologySection from '~/components/home/teleradiology/TeleradiologySection.vue'
import BlogSection from '~/components/blog/BlogSection.vue'

const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>

<template>
  <div>
    <!-- HeroSection -->
    <HeroSection />

    <!-- FeaturesSection -->
    <FeaturesSection />

    <!-- ClinuxSection -->
    <ClinuxSection />

    <!-- TeleradioSection -->
    <TeleradiologySection />

    <!-- BlogSection -->
    <BlogSection />

    <ULandingSection
      :title="page.testimonials.title"
      :description="page.testimonials.description"
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
          <ULandingTestimonial v-bind="testimonial" />
        </div>
      </UPageColumns>
    </ULandingSection>
  </div>
</template>
