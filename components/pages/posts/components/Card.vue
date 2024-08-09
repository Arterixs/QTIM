<script setup lang="ts">
import ImageBlock from '~/components/ui/ImageBlock.vue';

interface CardProps {
  image: string | null,
  description: string | null,
  id: string
}

const props = defineProps<CardProps>();

</script>

<template>
  <article class="relative flex flex-col gap-y-6 w-full text-xl pb-1 group hover:transition transition hover:-translate-y-5 cursor-pointer">
    <ImageBlock :image="props.image" />
    <section class="flex flex-col justify-between gap-y-3 h-full overflow-hidden">
      <h3 class="max-h-[84px] h-full overflow-hidden text-ellipsis line-clamp-3">
        {{ props.description }}
      </h3>
      <NuxtLink
        :to="`/posts/${props.id}`"
        class="before:absolute before:content-[''] before:inset-0 before:z-10"
      >
        <span class="text-pink-qtim opacity-0 group-hover:opacity-100 group-hover:transition transition">Read more</span>
      </NuxtLink>
    </section>
  </article>
</template>
