<script setup>
// Nenhum comportamento dinâmico necessário
</script>

<template>
  <section class="teleradiology-section flex justify-between items-center pl-8 py-16 text-white">
    <!-- Texto da seção com UPageHero -->
    <UPageHero
      title="NOVIDADE Telerradiologia"
      description="Com a nova solução Clinux Telerradiologia, o médico pode laudar exames de forma remota de onde estiver. Mais produtividade e inovação para a área da radiologia!"
      class="upagehero py-8"
    />

    <!-- Imagem e Botão -->
    <div class="teleradiology-image">
      <NuxtImg
        src="/images/arm.jpg"
        alt="Imagem de um braço com raios X"
        class="w-[800px] h-auto"
      />

      <UButton
        label="Conheça a solução"
        class="bg-white text-black py-4 px-6 text-lg mt-4"
      />
    </div>
  </section>
</template>

<style scoped>
    .teleradiology-section {
        background-color: #00001A;
    }

    .upagehero * {
        color: #fff !important;
    }

    @media (max-width: 768px) {
        .teleradiology-section {
            flex-direction: column;
            text-align: center;
        }
    }
</style>
