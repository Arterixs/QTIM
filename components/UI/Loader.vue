<script setup lang="ts">

interface LoaderProps {
  additionalStyle?: string,
  height?: string
}

const props = withDefaults(defineProps<LoaderProps>(), {
  additionalStyle: '',
  height: 'h-[50vh]',
});
</script>

<template>
  <div
    class="flex justify-center items-center w-full z-20"
    :class="[props.additionalStyle, props.height]"
  >
    <div class="preloader" />
  </div>
</template>

<style scoped>
  @-webkit-keyframes rotating {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .preloader {
    margin: auto auto;
    width: 70px;
    height: 70px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 10px solid transparent;
    border-top: 10px solid var(--blue);
    border-left: 10px solid var(--blue);
    border-bottom: 10px solid var(--blue);
    -webkit-animation: rotating 2s linear infinite;
    -moz-animation: rotating 2s linear infinite;
    -ms-animation: rotating 2s linear infinite;
    -o-animation: rotating 2s linear infinite;
    animation: rotating 2s linear infinite;
  }

  .stop {
    -webkit-animation: rotating 0s linear;
    -moz-animation: rotating 0s linear;
    -ms-animation: rotating 0s linear;
    -o-animation: rotating 0s linear;
    animation: rotating 0s linear;
  }

  @media (max-width: 768px) {
    .preloader {
      width: 44px;
      height: 44px;
      border: 7px solid transparent;
      border-top: 7px solid var(--blue);
      border-left: 7px solid var(--blue);
      border-bottom: 7px solid var(--blue);
    }
  }

  @media (max-width: 500px) {
    .preloader {
      width: 22px;
      height: 22px;
      border: 3px solid transparent;
      border-top: 3px solid var(--blue);
      border-left: 3px solid var(--blue);
      border-bottom: 3px solid var(--blue);
    }
  }
</style>
