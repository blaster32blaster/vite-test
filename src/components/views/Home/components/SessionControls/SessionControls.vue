<template>
    <img alt="Vue logo" class=" w-full" @click="handleClick()" src="../../../../../assets/SessionViewerHeader.svg" />    
</template>
<script>
export default {
  name: 'SessionControls',
  methods: {
      handleClick() {
          alert('Session Controls')
      }
  }
};
</script>
