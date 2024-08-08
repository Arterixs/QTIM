<script setup lang="ts">
import Card from '~/components/pages/posts/components/Card.vue';
</script>

<template>
  <div class="flex flex-col gap-y-[50px]">
    <div
      class="grid gap-x-8 gap-y-11 w-full max-md:justify-center grid-cols-[280px] grid-rows-[430px] md:grid-cols-2
      lg:grid-cols-[repeat(3,_minmax(280px,_500px))] mlg:grid-cols-4"
    >
      <Card
        v-for="card of 10"
        :key="card"
      />
    </div>
  </div>
</template>
