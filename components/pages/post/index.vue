<script setup lang="ts">

interface PostProps {
  image?: string | null,
  description?: string | null
}

const props = defineProps<PostProps>();
</script>

<template>
  <section class="flex flex-col gap-y-10 sm:gap-y-20">
    <img
      :src="props.image ?? ''"
      alt="image"
      width="1216"
      height="700"
      class="bg-orange-500"
    >
    <div class="flex flex-col gap-y-8 w-full max-w-[695px]">
      <h3 class="text-base">
        About
      </h3>
      <p class="text-2xl md:text-4xl">
        {{ props.description ?? 'Текст не найден' }}
      </p>
    </div>
  </section>
</template>
