<script setup lang="ts">
interface BaseButtonProps {
  text?: string
  styleBtn?: string,
  hover?: string
}

const props = withDefaults(defineProps<BaseButtonProps>(), {
  text: 'btn',
  styleBtn: 'p-2 bg-black text-white',
  hover: 'hover:bg-gray-qtim',
});

</script>

<template>
  <button
    class="transition"
    :class="[props.styleBtn, props.hover]"
  >
    <slot>
      {{ props.text }}
    </slot>
  </button>
</template>
