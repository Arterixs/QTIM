<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';

import { getPosts } from '~/services/getPosts';

import { createPaginateData } from '~/components/pages/posts/helpers/createPaginateData';

import { AMOUNT_ARTICLES_ON_PAGE } from '~/components/pages/posts/constants';

import Subtitle from '~/components/pages/components/Subtitle.vue';
import WrapperMain from '~/components/pages/components/WrapperMain.vue';
import PostsContent from '~/components/pages/posts/Index.vue';
import Error from '~/components/ui/Error.vue';
import Loader from '~/components/ui/Loader.vue';
import Pagination from '~/components/ui/Pagination.vue';

const { data, error, status } = getPosts();

const currentIndexPosts = ref(0);
const amountPagesPosts = ref(0);

watchEffect(() => {
  if (data.value) {
    amountPagesPosts.value = Math.ceil(data.value.length / AMOUNT_ARTICLES_ON_PAGE);
  }
});

const collectionOfPosts = computed(() => {
  if (!data.value) {
    return [];
  }

  return createPaginateData(data.value);
});

const currentSetOfPosts = computed(() => {
  if (!collectionOfPosts.value) {
    return [];
  }

  return collectionOfPosts.value[currentIndexPosts.value];
});

const onUpdateCurrentPage = (page: number) => {
  currentIndexPosts.value = page - 1;
};
</script>

<template>
  <WrapperMain>
    <Error v-if="error" />
    <section
      v-else
      class="w-full flex flex-col max-md:items-center gap-y-10"
    >
      <Subtitle title="Articles" />
      <div class="flex flex-col gap-y-[50px]">
        <Loader v-if="status === 'pending'" />
        <template v-else>
          <PostsContent :current-posts="currentSetOfPosts" />
          <Pagination
            :amount-pages="amountPagesPosts"
            @update-page="onUpdateCurrentPage"
          />
        </template>
      </div>
    </section>
  </WrapperMain>
</template>
