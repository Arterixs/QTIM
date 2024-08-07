<script setup lang="ts">
import BaseButton from '~/components/UI/BaseButton.vue';

</script>

<template>
  <div class="pt-8 sm:pt-[75px] w-full sm:w-1/3 lg:pr-32 xl:pr-[232px]">
    <ul class="flex flex-col gap-y-9 max-w-[170px] text-base">
      <li>
        <p class="mb-3">
          For all questions
        </p>
        <a
          href="tel:+79202780068"
          class="mb-1 hover:text-gray-qtim"
        >
          +7 (920) 278—00—68
        </a>
        <a
          href="mailto:qtim@agency.com"
          class="transition hover:text-gray-qtim"
        >
          qtim@agency.com
        </a>
      </li>
      <li>
        <p class="mb-3">
          Office in Russia
        </p>
        <address class="mb-1 not-italic">
          139 Ruben Station Lake Drew, NM 52678
        </address>
        <BaseButton style-btn="rounded-full bg-black-qtim p-3">
          <img
            src="/assets/svg/telegram.svg"
            alt=""
            width="9"
            height="9"
          >
        </BaseButton>
      </li>
      <li>
        <p class="mb-3">
          Office in Dubai
        </p>
        <address class="mb-1 not-italic">
          139 Ruben Station Lake Drew, NM 52678
        </address>
        <BaseButton style-btn="rounded-full bg-black-qtim p-3">
          <img
            src="/assets/svg/telegram.svg"
            alt=""
            width="9"
            height="9"
          >
        </BaseButton>
      </li>
    </ul>
  </div>
</template>
