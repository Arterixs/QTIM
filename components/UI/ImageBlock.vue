<script setup lang="ts">
import { ref } from 'vue';

import Loader from '~/components/ui/Loader.vue';

interface ImageBlockProps {
  image?: string | null,
  width?: string,
  height?: string,
  styleImg?: string
}

const props = withDefaults(defineProps<ImageBlockProps>(), {
  image: '/assets/webp/search.webp',
  width: '280',
  height: '280',
  styleImg: 'h-[280px] w-full',
});

const isErrorLoadImage = ref(false);
const isLoadingImage = ref(true);
</script>

<template>
  <div class="relative">
    <img
      v-if="isErrorLoadImage"
      :width="props.width"
      :height="props.height"
      :class="props.styleImg"
      class="object-contain bg-purple-qtim"
      src="/assets/webp/search.webp"
      alt=""
      @load="isLoadingImage = false"
    >
    <img
      v-else
      :src="props.image ?? '/assets/webp/search.webp'"
      :width="props.width"
      :height="props.height"
      :class="props.styleImg"
      class="bg-gray-qtim-light"
      alt=""
      @error="isErrorLoadImage = true"
      @load="isLoadingImage = false"
    >
    <Loader
      v-if="isLoadingImage"
      height="h-full"
      additional-style="absolute top-0 left-0"
    />
  </div>
</template>
