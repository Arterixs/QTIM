<script setup lang="ts">
import type { ListData } from '~/components/footer/data/contactsInfo';

interface ListLinksProps {
  listData: ListData[]
}

const props = defineProps<ListLinksProps>();

</script>

<template>
  <ul class="max-lg:flex-col flex items-center gap-y-2 lg:gap-x-8 mb-[30px]">
    <li
      v-for="data of props.listData"
      :key="data.id"
      class="underline decoration-1 underline-offset-8"
    >
      <a
        :href="data.link"
        target="_blank"
        class="transition hover:text-gray-qtim"
      >
        {{ data.name }}
      </a>
    </li>
  </ul>
</template>
