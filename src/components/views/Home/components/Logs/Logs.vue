<template>
    <img alt="Vue logo" @click="handleClick()" class="max-w-lg" src="../../../../../assets/Frame523.svg" />
    <img alt="Vue logo" @click="handleClick()" class=" w-full h-full" src="../../../../../assets/Frame521.svg" />
</template>
<script>
export default {
  name: 'Logs',
  methods: {
      handleClick() {
          alert('Logs')
      }
  }
};
</script>
