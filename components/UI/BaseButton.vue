<script setup lang="ts">
interface BaseButtonProps {
  text?: string | number,
  styleBtn?: string,
  hover?: string,
  isDisabled?: boolean
}

const props = withDefaults(defineProps<BaseButtonProps>(), {
  text: 'btn',
  styleBtn: 'p-2 bg-black-qtim text-white',
  hover: 'hover:bg-gray-qtim hover:transition',
  isDisabled: false,
});

</script>

<template>
  <button
    class="transition"
    :class="[props.styleBtn, !props.isDisabled && props.hover]"
    :disabled="props.isDisabled"
  >
    <slot>
      {{ props.text }}
    </slot>
  </button>
</template>
