<script setup lang="ts">
import { ref } from 'vue'
// components
import ContactInfo from './ContatoInfo.vue'

const email = ref('')
const nome = ref('')
const empresa = ref('')
const telefone = ref('')
const mensagem = ref('')
const loading = ref(false)
const successMessage = ref('')
</script>

<template>
  <UFooter id="app-footer">
    <template #top>
      <div class="footer-grid w-full">
        <ContactInfo />

        <div class="contact-form">
          <form @submit.prevent="">
            <UFormGroup label="Entre em contato">
              <div class="grid grid-cols-2 gap-4">
                <UInput
                  v-model="nome"
                  placeholder="Nome"
                  required
                />
                <UInput
                  v-model="email"
                  placeholder="Email"
                  type="email"
                  required
                />
                <UInput
                  v-model="empresa"
                  placeholder="Empresa"
                />
                <UInput
                  v-model="telefone"
                  placeholder="Telefone"
                />
              </div>
              <UInput
                v-model="mensagem"
                placeholder="Mensagem"
                type="textarea"
                class="mt-4"
                required
              />

              <div class="mt-4">
                <UCheckbox
                  label="Li e concordo com a Política de Privacidade"
                  required
                />
                <URecaptcha class="mt-4" />
              </div>

              <UButton
                type="submit"
                class="mt-4"
                :label="loading ? 'Enviando...' : 'Enviar mensagem'"
                :loading="loading"
                block
              />

              <!-- Exibe a mensagem de sucesso -->
              <p
                v-if="successMessage"
                class="text-green-500 mt-4"
              >
                {{ successMessage }}
              </p>
            </UFormGroup>
          </form>
        </div>
      </div>
    </template>

    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        <NuxtLink to="/termos">
          Copyright © 2020. Todos os direitos reservados.
        </NuxtLink>
      </p>
    </template>

    <template #right>
      <UColorModeButton size="sm" />
    </template>
  </UFooter>
</template>

<!-- Styles -->
<style scoped>
.footer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem 0;
  width: 100%;
}

.contact-form {
  max-width: 50rem;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
</style>
