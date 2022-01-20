<template>
    <img alt="Vue logo" @click="handleClick()" class=" w-full h-full" src="../../../../../assets/Timeline.svg" />
</template>
<script>
export default {
  name: 'MainControls',
  methods: {
      handleClick() {
          alert('Main Controls')
      }
  }
};
</script>
