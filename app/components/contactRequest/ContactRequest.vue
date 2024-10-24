<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const phone = ref('')
const company = ref('')
const position = ref('')
const captcha = ref('')
const agree = ref(false)
const formSubmitted = ref(false)

// Carrega os dados do contactRequest.yml
const { data: page } = await useAsyncData('contactRequest', () => queryContent('/contactRequest').findOne())

function submitForm() {
  formSubmitted.value = true // Marca como submetido

  if (!name.value || !email.value || !phone.value || !company.value || !captcha.value || !agree.value) {
    alert('Por favor, preencha todos os campos obrigatórios.')
  } else {
    // Lógica de envio do formulário
    console.log('Formulário enviado')
  }
}
</script>

<template>
  <div class="bg-primary flex justify-center items-center min-h-screen py-10">
    <div class="w-full max-w-md p-8 bg-white rounded shadow-lg">
      <div class="text-center mb-6">
        <UNuxtImg
          src="/icons/logo-genesis.png"
          alt="Genesis Logo"
          class="h-16 w-auto mx-auto"
        />
        <h2 class="text-2xl font-bold mt-4">{{ page?.title || 'Quero conhecer o Clinux!' }}</h2>
        <p class="text-sm mt-2">{{ page?.description || 'Preencha seus dados abaixo e entraremos em contato' }}</p>
      </div>

      <form @submit.prevent="submitForm">
        <!-- Nome -->
        <UFormGroup label="Nome*" :error="formSubmitted && !name && 'Campo obrigatório'">
          <UInput v-model="name" placeholder="Digite seu nome" />
        </UFormGroup>

        <!-- Email -->
        <UFormGroup label="Email*" :error="formSubmitted && !email && 'Campo obrigatório'">
          <UInput v-model="email" type="email" placeholder="Digite seu email" />
        </UFormGroup>

        <!-- Telefone -->
        <UFormGroup label="Telefone*" :error="formSubmitted && !phone && 'Campo obrigatório'">
          <UInput v-model="phone" type="tel" placeholder="Digite seu telefone" />
        </UFormGroup>

        <!-- Empresa -->
        <UFormGroup label="Empresa*" :error="formSubmitted && !company && 'Campo obrigatório'">
          <UInput v-model="company" placeholder="Digite sua empresa" />
        </UFormGroup>

        <!-- Cargo -->
        <UFormGroup label="Cargo">
          <UInput v-model="position" placeholder="Digite seu cargo" />
        </UFormGroup>

        <!-- Captcha -->
        <UFormGroup label="6 + 2 = ?">
          <UInput v-model="captcha" placeholder="Responda à pergunta" />
        </UFormGroup>

        <!-- Checkbox -->
        <div class="my-4">
          <UCheckbox v-model="agree" label="Eu concordo em receber comunicações." />
        </div>

        <!-- Submit Button -->
        <UButton type="submit" label="SOLICITAR CONTATO" color="primary" block />

        <p class="text-xs text-center mt-4">
          Ao informar meus dados, eu concordo com a
          <a href="#" class="underline">Política de Privacidade</a>.
        </p>
      </form>
    </div>
  </div>
</template>

<style scoped>
.bg-primary {
  background-color: #22608E; /* Cor de fundo principal */
}
</style>
