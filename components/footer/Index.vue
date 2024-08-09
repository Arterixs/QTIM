<script setup lang="ts">
import { firstListContacts, secondListContacts } from '~/components/footer/data/contactsInfo';

import AddressList from '~/components/footer/components/AddressList.vue';
import ContactsList from '~/components/footer/components/ContactsList.vue';
import Subtitle from '~/components/footer/components/Subtitle.vue';
import BaseButton from '~/components/ui/BaseButton.vue';

</script>

<template>
  <div class="bg-pink-qtim flex justify-center">
    <footer class="max-w-screen-mlg w-full px-11 xl:px-28 pt-16 md:pt-[140px]">
      <div class="flex max-sm:flex-col mb-20 sm:mb-36 justify-between">
        <Subtitle />
        <AddressList />
      </div>
      <div class="flex items-end justify-between relative overflow-hidden md:h-[179px]">
        <ContactsList :list-data="firstListContacts" />
        <BaseButton
          style-btn="flex text-2xl items-start justify-center text-white bg-black-qtim absolute rounded-full top-0 max-sm:hidden
          pt-[62px] md:pt-[122px]
          sm:size-[238px] md:size-[358px]
          left-[calc(50%-238px/2)] md:left-[calc(50%-358px/2)]"
          text="Go"
        />
        <ContactsList :list-data="secondListContacts" />
      </div>
    </footer>
  </div>
</template>
