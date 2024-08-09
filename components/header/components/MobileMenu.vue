<script setup lang="ts">
import GroupButtons from '~/components/header/components/GroupButtons.vue';
import BaseButton from '~/components/ui/BaseButton.vue';
import Logo from '~/components/ui/Logo.vue';

const emit = defineEmits<{
  (event: 'closeMenu'): void
}>();

const onClickOutside = (event: Event) => {
  if (event.currentTarget !== event.target) {
    return;
  }

  emit('closeMenu');
};
</script>

<template>
  <div
    class="fixed left-0 top-0 bg-black-qtim/65 w-full h-full z-50 lg:hidden"
    @click="onClickOutside"
  >
    <div class="w-full flex justify-between absolute top-0 left-0 px-10 bg-white pt-9 pb-[58px]">
      <div class="flex flex-col gap-y-10">
        <Logo />
        <GroupButtons is-mobile />
      </div>
      <BaseButton
        style-btn="flex items-center justify-center size-10 rounded-full relative cursor-pointer border-2 border-gray-qtim"
        hover="hover:bg-gray-qtim-light"
        @click="emit('closeMenu')"
      >
        <Icon
          class="absolute text-black w-6 h-6"
          name="material-symbols:close"
        />
      </BaseButton>
    </div>
  </div>
</template>
