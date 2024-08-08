<script setup lang="ts">
import Subtitle from '~/components/pages/components/Subtitle.vue';
import WrapperMain from '~/components/pages/components/WrapperMain.vue';
import Post from '~/components/pages/post/index.vue';

</script>

<template>
  <WrapperMain>
    <section class="w-full flex flex-col gap-y-[73px]">
      <Subtitle title="At Test & Code, you can learn about software design" />
      <Post />
    </section>
  </WrapperMain>
</template>
