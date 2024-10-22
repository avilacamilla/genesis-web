<script setup>
</script>

<template>
  <div class="flex flex-row justify-center items-center bg-blue-500 p-8">
    <UContainer class="flex justify-around w-full">
      <div class="flex flex-col items-center">
        <UNuxtImg
          src="/icons/hands.svg"
          alt="Clientes"
          class="w-16 h-16 mb-4"
        />
        <span class="text-white font-bold">+ de 600 clientes</span>
      </div>
      <div class="flex flex-col items-center">
        <UNuxtImg
          src="/icons/brasil.svg"
          alt="Estados Brasileiros"
          class="w-16 h-16 mb-4"
        />
        <span class="text-white font-bold">Presente em <strong>23</strong> estados brasileiros</span>
      </div>
      <div class="flex flex-col items-center">
        <UNuxtImg
          src="/icons/times.svg"
          alt="Pacientes"
          class="w-16 h-16 mb-4"
        />
        <span class="text-white font-bold">+ de 3 milhões de pacientes atendidos</span>
      </div>
      <div class="flex flex-col items-center">
        <UNuxtImg
          src="/icons/exames.svg"
          alt="Exames"
          class="w-16 h-16 mb-4"
        />
        <span class="text-white font-bold">10 milhões de exames</span>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
  .bg-blue-500 {
    background-color: #2c7cb3; /* Azul da imagem */
  }
</style>
