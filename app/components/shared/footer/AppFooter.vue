<script setup lang="ts">
import { ref } from 'vue'
// components
import ContactInfo from './ContactInfo.vue'

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
      <div class="footer-grid w-full p-0 sm:px-0 sm:gap-4">
        <ContactInfo class="sm:px-0 sm:py-4" />

        <div class="contact-form p-0 sm:px-0">
          <form @submit.prevent="">
            <UFormGroup
              label="Entre em contato"
              class="p-0 sm:mt-4"
            >
              <div class="grid grid-cols-2 gap-4 sm:grid-cols-1">
                <UInput
                  v-model="nome"
                  placeholder="Nome"
                  required
                  class="p-0"
                />
                <UInput
                  v-model="email"
                  placeholder="Email"
                  type="email"
                  required
                  class="p-0"
                />
                <UInput
                  v-model="empresa"
                  placeholder="Empresa"
                  class="p-0"
                />
                <UInput
                  v-model="telefone"
                  placeholder="Telefone"
                  class="p-0"
                />
              </div>
              <UInput
                v-model="mensagem"
                placeholder="Mensagem"
                type="textarea"
                class="mt-4 p-0"
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
  </UFooter>
</template>

<!-- Styles -->
<style scoped>
  .footer-grid {
    display: flex;
    justify-content: center;
    gap: 20%;
  }

  @media screen and (max-width: 760px) {
    .footer-grid {
      flex-direction: column;
    }
  }
</style>
