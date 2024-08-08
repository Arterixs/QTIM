<script setup lang="ts">

import BaseButton from '~/components/UI/BaseButton.vue';

const handlePrevBtn = () => {
};

const handleNextBtn = () => {

};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleClickBtn = (page: number) => {
};

</script>

<template>
  <div class="grid gap-2 grid-cols-5 sm:grid-cols-7">
    <BaseButton
      style-btn="size-11 rounded-xl bg-gray-white text-base border border-qtim-hover col-start-1 max-sm:row-start-2 flex justify-center items-center"
      hover="hover:bg-gray-qtim-hover hover:transition"
      @click="handlePrevBtn"
    >
      <Icon
        name="iconamoon:arrow-left-2-thin"
        class="size-6"
      />
    </BaseButton>
    <BaseButton
      v-for="page of 5"
      :key="page"
      :text="page"
      style-btn="size-11 rounded-xl bg-gray-qtim-light text-base"
      hover="hover:bg-gray-qtim-hover hover:transition"
      @click="handleClickBtn(page)"
    />
    <BaseButton
      style-btn="size-11 rounded-xl bg-gray-white text-base border border-qtim-hover max-sm:col-start-5 max-sm:row-start-2 flex justify-center items-center"
      hover="hover:bg-gray-qtim-hover hover:transition"
      @click="handleNextBtn"
    >
      <Icon
        name="iconamoon:arrow-right-2-thin"
        class="size-6"
      />
    </BaseButton>
  </div>
</template>
