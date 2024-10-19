<script setup lang="ts">

</script>

<template>
  <div class="app-copy">
    <div class="left">
      <p class="text-gray-500 dark:text-white text-sm">
        <NuxtLink to="/terms">
          Copyright © 2020. Todos os direitos reservados.
        </NuxtLink>
      </p>
    </div>

    <div class="right">
      <UColorModeButton size="sm" />
    </div>
  </div>
</template>

<!-- Styles -->
<style scoped>
  .app-copy {
    display: flex;
    align-items: center;
    padding: 1rem 0;
  }

  .left {
    display: flex;
    justify-content: center;
    width: 50%;
  }
  .left p {
    font-size: .9rem;
  }
  .right {
    display: flex;
    justify-content: center;
    width: 50%;
  }
</style>
