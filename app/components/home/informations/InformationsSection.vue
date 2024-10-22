<script setup>
</script>

<template>
  <div class="flex justify-center items-center bg-blue p-8">
    <UContainer class="flex flex-wrap justify-center w-full gap-6">
      <div class="flex flex-col items-center">
        <NuxtImg
          src="/icons/hands.svg"
          alt="Clientes"
          class="w-16 h-16 mb-4"
        />
        <span class="text-white font-bold text-center">+ de 600 clientes</span>
      </div>
      <div class="flex flex-col items-center">
        <NuxtImg
          src="/icons/brasil.svg"
          alt="Estados Brasileiros"
          class="w-16 h-16 mb-4"
        />
        <span class="text-white font-bold text-center">Presente em <strong>23</strong> estados brasileiros</span>
      </div>
      <div class="flex flex-col items-center">
        <NuxtImg
          src="/icons/exames.svg"
          alt="Exames"
          class="w-16 h-16 mb-4"
        />
        <span class="text-white font-bold text-center">10 milhões de exames</span>
      </div>
      <div class="flex flex-col items-center">
        <NuxtImg
          src="/icons/time.svg"
          alt="Pacientes"
          class="w-16 h-16 mb-4"
        />
        <span class="text-white font-bold text-center">+ de 3 milhões de pacientes atendidos</span>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
  .bg-blue {
    background-color: #2c7cb3;
  }
</style>
