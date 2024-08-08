<script setup lang="ts">
import { watch } from 'vue';

import { usePagination } from '~/composables/usePagination';

import BaseButton from '~/components/UI/BaseButton.vue';

interface PaginationProps {
  amountPages: number,
}

const props = defineProps<PaginationProps>();

const emit = defineEmits<{
  (e: 'updatePage', page: number): void
}>();

const {
  buttonsInfo,
  currentPage,
  handlePrevBtn,
  handleNextBtn,
  handleClickBtn,
} = usePagination(5);

watch(currentPage, (page) => {
  emit('updatePage', page);
});

</script>

<template>
  <div class="grid gap-2 grid-cols-5 sm:grid-cols-[repeat(7,_44px)]">
    <BaseButton
      style-btn="size-11 rounded-xl bg-gray-white text-base border disabled:cursor-not-allowed disabled:bg-gray-qtim
      border-qtim-hover col-start-1 max-sm:row-start-2 flex justify-center items-center"
      hover="hover:bg-gray-qtim-hover hover:transition"
      :is-disabled="currentPage === 1"
      @click="handlePrevBtn"
    >
      <Icon
        name="iconamoon:arrow-left-2-thin"
        class="size-6"
      />
    </BaseButton>
    <BaseButton
      v-for="number of buttonsInfo"
      :key="number"
      :text="number"
      :style-btn="`size-11 rounded-xl text-base disabled:cursor-not-allowed ${currentPage === number ? 'bg-black-qtim text-white' : 'bg-gray-qtim-light'}`"
      :is-disabled="currentPage === number"
      hover="hover:bg-gray-qtim-hover hover:transition"
      @click="handleClickBtn(number)"
    />
    <BaseButton
      style-btn="size-11 rounded-xl bg-gray-white text-base border border-qtim-hover max-sm:col-start-5
      max-sm:row-start-2 disabled:cursor-not-allowed disabled:bg-gray-qtim flex justify-center items-center"
      hover="hover:bg-gray-qtim-hover hover:transition"
      :is-disabled="currentPage === props.amountPages"
      @click="handleNextBtn"
    >
      <Icon
        name="iconamoon:arrow-right-2-thin"
        class="size-6"
      />
    </BaseButton>
  </div>
</template>
