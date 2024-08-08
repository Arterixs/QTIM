<script setup lang="ts">
import Subtitle from '~/components/pages/components/Subtitle.vue';
import WrapperMain from '~/components/pages/components/WrapperMain.vue';
import Posts from '~/components/pages/posts/index.vue';
</script>

<template>
  <WrapperMain>
    <section class="w-full flex flex-col max-md:items-center gap-y-10">
      <Subtitle title="Articles" />
      <Posts />
    </section>
  </WrapperMain>
</template>
