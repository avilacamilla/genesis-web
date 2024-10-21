<script setup>
const blogPosts = [
  {
    date: '27 JUN',
    title: 'Conheça os tipos de atestado médico e o que saber sobre eles',
    description:
      'A formalização da condição e estado de saúde de um paciente, feita pelo profissional responsável para fins de afastamento, é...',
    buttonLabel: 'Leia mais',
    image: '/images/blog-post-1.jpg'
  },
  {
    date: '16 JUN',
    title: 'Segurança do paciente: informações que você não pode deixar de saber',
    description:
      'A segurança do paciente é um dos princípios básicos do atendimento em qualquer unidade de saúde. Seja em hospitais, seja...',
    buttonLabel: 'Leia mais',
    image: '/images/blog-post-2.jpg'
  },
  {
    date: '09 JUN',
    title: '3 funcionalidades do Clinux que você não pode deixar de usar',
    description:
      'Um bom sistema de gestão para clínicas médicas pode resolver diversos problemas e gerar economia de tempo e dinheiro...',
    buttonLabel: 'Leia mais',
    image: '/images/blog-post-3.jpg'
  }
]
</script>

<template>
  <section class="blog-section py-16 px-1">
    <h2 class="text-4xl font-bold text-center py-8 mb-8">
      Últimas postagens do nosso blog
    </h2>
    <UBlogList orientation="horizontal" class="gap-x-0">
      <div
        v-for="(post, index) in blogPosts"
        :key="index"
        class="flex flex-col items-start bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-3/4 mx-4"
      >
        <div class="relative">
          <NuxtImg :src="post.image" alt="Blog post image" class="w-full h-48 object-cover" />
          <div class="absolute top-0 left-0 bg-white text-blue-900 font-bold text-center p-4">
            <span class="block text-2xl">{{ post.date.split(' ')[0] }}</span>
            <span class="block text-sm">{{ post.date.split(' ')[1] }}</span>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-lg font-bold text-blue-900 mb-2">
            {{ post.title }}
          </h3>
          <p class="text-gray-600 mb-4">
            {{ post.description }}
          </p>
          <UButton
            :label="post.buttonLabel"
            class="bg-white text-blue-900 border border-blue-900 px-4 py-2 rounded-md"
          />
        </div>
      </div>
    </UBlogList>
  </section>
</template>

<style scoped>
.mx-4 {
  margin: 0 auto;
}
</style>
