<script setup lang="ts">
import { clearError } from 'nuxt/app';
import type { NuxtError } from '#app';

interface ErrorProps {
  error: NuxtError,
}

const props = defineProps<ErrorProps>();

const ERROR_404 = {
  STATUS: 'Страница не найдена',
  MESSAGE: 'Страница, на которую вы пытаетесь попасть, не существует или была удалена.',
};

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <div class="flex flex-col justify-around items-center">
    <h2 class="mt-32 font-extrabold text-8xl text-center">
      {{ props.error.statusCode }}
    </h2>

    <p class="text-2xl font-extrabold  text-center">
      {{ props.error.statusCode === 404 ? ERROR_404.STATUS : error.statusMessage }}
    </p>

    <p class="mt-12 mx-auto w-80 text-sm text-center text-gray-600">
      {{ props.error.statusCode === 404 ? ERROR_404.MESSAGE : error.message }}
    </p>
    <button
      v-if="props.error.statusCode !== 403"
      class="block mx-auto mt-7 py-3 md:py-5 px-7 md:px-12 text-white font-bold bg-yellow-500 rounded hover:bg-yellow-550"
      @click="handleError"
    >
      Вернуться на главную
    </button>
  </div>
</template>
