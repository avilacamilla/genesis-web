<script setup lang="ts">
// Carregar o conteúdo de texto de index.yml
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

const items = [
  {
    title: 'Agendamento Web',
    icon: '/icons/agendamento-web.png',
    description: 'Agende consultas de forma rápida e simples.'
  },
  {
    title: 'Questionário Digital',
    icon: '/icons/questionario-digital.png',
    description: 'Preencha questionários online com facilidade.'
  },
  {
    title: 'Portal de Laudos',
    icon: '/icons/portal-laudos.png',
    description: 'Acesse os laudos diretamente no portal.'
  },
  {
    title: 'Gestão à vista',
    icon: '/icons/gestao-a-vista.png',
    description: 'Gerencie a clínica com transparência.'
  },
  {
    title: 'Teleradiologia',
    icon: '/icons/telerradiologia.png',
    description: 'Envie e receba exames radiológicos online.'
  }
]
</script>

<template>
  <UContainer class="mx-auto relative min-h-screen max-w-full p-16">
    <NuxtImg
      src="/images/clinux-bg.png"
      alt="Background"
      class="absolute inset-0 w-full h-full object-cover brightness-75"
    />
    <UContainer
      class="
        relative
        flex
        flex-col
        justify-center
        items-center
        text-center
        gap-6
        z-10
        w-screen-lg
      "
    >
      <!-- Título e descrição dentro de uma div com controle de largura -->
      <div class="flex flex-col items-center gap-4 mb-8 text-white max-w-full">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">
          {{ page.clinuxSection.subtitle2 }}
        </h2>
        <p class="text-base md:text-lg">
          {{ page.clinuxSection.description }}
        </p>
        <NuxtImg
          src="/icons/cog.svg"
          alt="Ícone de engrenagens"
          class="w-[4rem] mt-[2rem] mb-[2rem]"
        />
        <p class="text-base md:text-lg">
          {{ page.clinuxSection.description2 }}
        </p>
        <div class="flex flex-col items-center py-6">
          <h1 class="text-5xl md:text-7xl lg:text-9xl font-bold italic">
            {{ page.clinuxSection.title }}
          </h1>
          <p class="text-base md:text-lg">
            {{ page.clinuxSection.subtitle }}
          </p>
        </div>
      </div>

      <!-- Ajuste de tamanho em ULandingCard -->
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="transform scale-105"
        >
          <ULandingCard
            :title="item.title"
            :description="item.description"
            :icon="item.icon"
            color="primary"
            class="w-50 h-full cursor-pointer"
          />
        </div>
      </div>

      <!-- Botões -->
      <div class="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0 mt-10">
        <!-- Rota para Conheça o Clinux -->
        <NuxtLink to="/clinux">
          <UButton
            label="Conheça o Clinux"
            class="bg-white text-accent py-4 px-16 text-base md:text-xl"
          />
        </NuxtLink>
        <!-- Rota para Agende uma Demonstração com target _blank -->
        <a href="/contactRequest" target="_blank">
          <UButton
            label="Agende uma Demonstração"
            class="bg-white text-accent py-4 px-6 text-base md:text-xl"
          />
        </a>
      </div>
    </UContainer>
  </UContainer>
</template>

<style scoped>
  .override-text-color * {
    color: white !important;
  }

  p {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    h1 {
        font-size: 2.5rem;
    }
    p {
        font-size: 1rem;
    }
  }
</style>
