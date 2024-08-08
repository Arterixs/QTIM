<script setup lang="ts">
import { defineAsyncComponent, ref, watch } from 'vue';
import { useRoute } from '#app';

import { toggleBodyScroll } from '~/utils/toggleBodyScroll';

import GroupButtons from '~/components/header/components/GroupButtons.vue';
import Title from '~/components/header/components/Title.vue';
import BaseButton from '~/components/UI/BaseButton.vue';

const route = useRoute();

const isOpenMenu = ref(false);

watch(isOpenMenu, (isOpen) => {
  toggleBodyScroll(isOpen);
});

watch(() => route.name, () => {
  if (isOpenMenu.value) {
    isOpenMenu.value = false;
  }
});

const lazyMobileMenu = defineAsyncComponent(() => import('~/components/header/components/MobileMenu.vue'));
</script>

<template>
  <div class="w-full flex justify-center">
    <header class="max-w-screen-mlg w-full flex items-center justify-between py-9 px-10">
      <Title />
      <Transition
        mode="out-in"
        name="slide-fade"
      >
        <lazyMobileMenu
          v-if="isOpenMenu"
          @close-menu="isOpenMenu = false"
        />
      </Transition>
      <BaseButton
        style-btn="flex lg:hidden items-center justify-center size-10 rounded-full relative cursor-pointer border-2 border-gray-qtim"
        hover="hover:bg-gray-qtim-light"
        @click="isOpenMenu = true"
      >
        <Icon
          class="absolute text-black w-6 h-6"
          name="ri:menu-3-fill"
        />
      </BaseButton>
      <GroupButtons />
    </header>
  </div>
</template>
