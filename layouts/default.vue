<script setup lang="ts">
import BaseFooter from '~/components/footer/Index.vue';
import BaseHeader from '~/components/header/Index.vue';
</script>

<template>
  <div class="h-full flex flex-col">
    <BaseHeader />
    <div class="flex-grow flex justify-center">
      <slot />
    </div>
    <BaseFooter />
  </div>
</template>
