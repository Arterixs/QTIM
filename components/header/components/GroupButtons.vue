<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue';

interface GroupButtonsProps {
  isMobile?: boolean
}

const props = withDefaults(defineProps<GroupButtonsProps>(), {
  isMobile: false,
});
</script>

<template>
  <div
    class="flex gap-x-[91px]"
    :class="{
      'items-center max-lg:hidden': !props.isMobile,
      'flex-col gap-y-10': props.isMobile
    }"
  >
    <nav>
      <ul
        class="flex gap-x-14 text-xl font-normal"
        :class="props.isMobile && 'flex-col gap-y-5'"
      >
        <li class="transition hover:text-gray-qtim">
          <NuxtLink
            to="/works"
            active-class="text-blue-qtim"
          >
            Works
          </NuxtLink>
        </li>
        <li class="transition hover:text-gray-qtim">
          <NuxtLink
            to="/about"
            active-class="text-blue-qtim"
          >
            About
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <div
      class="flex"
      :class="props.isMobile ? 'flex-col-reverse gap-y-5 items-start' : 'items-center gap-x-4'"
    >
      <BaseButton
        style-btn="rounded-full border-2 border-gray-qtim p-3"
        hover="hover:border-purple-qtim hover:bg-blue-qtim"
      >
        <img
          src="/assets/svg/uk.svg"
          width="24"
          height="24"
          alt="English"
        >
      </BaseButton>
      <BaseButton
        text="Let's work"
        style-btn="py-4 px-8 bg-black-qtim text-xl font-normal text-white rounded-full"
      />
    </div>
  </div>
</template>
