<template>
    <img alt="Vue logo" class=" w-full h-full" @click="handleClick()" src="../../../../../assets/BodyPicker.svg" />
</template>
<script>
export default {
  name: 'LogControls',
  methods: {
      handleClick() {
          alert('Log Controls')
      }
  }
};
</script>
