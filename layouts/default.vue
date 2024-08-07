<script setup lang="ts">
import BaseFooter from '~/components/footer/Index.vue';
import BaseHeader from '~/components/header/BaseHeader.vue';
</script>

<template>
  <div class="h-full flex flex-col">
    <BaseHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <BaseFooter />
  </div>
</template>
