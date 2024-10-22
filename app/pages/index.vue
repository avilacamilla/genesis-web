<script setup lang="ts">
// Components
import HeroSection from '~/components/home/hero/HeroSection.vue'
import FeaturesSection from '~/components/home/features/FeaturesSection.vue'
import ClinuxSection from '~/components/home/clinux/ClinuxSection.vue'
import TeleradiologySection from '~/components/home/teleradiology/TeleradiologySection.vue'
import BlogSection from '~/components/home/blog/BlogSection.vue'
import InformationsSection from '~/components/home/informations/InformationsSection.vue'
import TestemonialsSection from '~/components/home/testemonials/TestemonialsSection.vue'

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

    <!-- InformationsSection -->
    <InformationsSection />

    <!-- TestemonialsSection -->
    <TestemonialsSection />
  </div>
</template>
