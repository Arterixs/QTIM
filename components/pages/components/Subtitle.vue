<script setup lang="ts">
interface SubtitleProps {
  title?: string | null
}

const props = defineProps<SubtitleProps>();
</script>

<template>
  <h2 class="text-4xl sm:text-[84px] sm:leading-[84px]">
    {{ props.title ?? '' }}
  </h2>
</template>
