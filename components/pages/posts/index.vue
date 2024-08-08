<script setup lang="ts">
import { type Post } from '~/services/getPosts';

import Card from '~/components/pages/posts/components/Card.vue';

interface PostsProps {
  currentPosts: Post[]
}

const props = defineProps<PostsProps>();
</script>

<template>
  <div class="flex flex-col gap-y-[50px]">
    <div
      class="grid gap-x-8 gap-y-11 w-full max-md:justify-center grid-cols-[280px] grid-rows-[430px] md:grid-cols-2
      lg:grid-cols-[repeat(3,_minmax(280px,_500px))] mlg:grid-cols-4"
    >
      <Card
        v-for="post of props.currentPosts"
        :id="post.id"
        :key="post.id"
        :description="post.description"
        :image="post.image"
      />
    </div>
  </div>
</template>
