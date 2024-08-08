<script setup lang="ts">

</script>

<template>
  <article class="relative flex flex-col gap-y-6 w-full text-xl pb-1 group cursor-pointer">
    <img
      src=""
      alt="image"
      width="280"
      height="280"
      class="bg-orange-500 min-h-[280px] w-full"
    >
    <section class="flex flex-col justify-between gap-y-3 h-full overflow-hidden">
      <h3 class="max-h-[84px] h-full overflow-hidden text-ellipsis line-clamp-3">
        The guys from Qtim rewrote the entire site from scratch in a couple of months.
        In the process of development they offered ideas to solve our "pains".
        We are still working with them. Everything is great!
      </h3>
      <NuxtLink
        :to="`/posts/${1}`"
        class="text-pink-qtim group-hover:text-purple-qtim group-hover:transition transition
            before:absolute before:content-[''] before:inset-0 before:z-10"
      >
        Read more
      </NuxtLink>
    </section>
  </article>
</template>
