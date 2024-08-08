<script setup lang="ts">
import { useRoute } from '#app';

import { getPost } from '~/services/getPosts';

import { getValidId } from '~/components/pages/post/helpers/getValidId';

import Subtitle from '~/components/pages/components/Subtitle.vue';
import WrapperMain from '~/components/pages/components/WrapperMain.vue';
import Post from '~/components/pages/post/index.vue';
import Error from '~/components/UI/Error.vue';
import Loader from '~/components/UI/Loader.vue';

const route = useRoute();

const postId = getValidId(route.params.id);

const { data, error, status } = getPost(postId);

</script>

<template>
  <WrapperMain>
    <Error v-if="error" />
    <section
      v-else
      class="w-full flex flex-col gap-y-[73px]"
    >
      <Loader v-if="status === 'pending'" />
      <template v-else>
        <Subtitle :title="data?.title" />
        <Post
          :image="data?.image"
          :description="data?.description"
        />
      </template>
    </section>
  </WrapperMain>
</template>
