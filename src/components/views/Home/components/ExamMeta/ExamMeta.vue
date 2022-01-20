<template>
    <img alt="Vue logo" class=" w-full h-full" @click="handleClick()" src="../../../../../assets/Guidelines.svg" />
</template>
<script>
export default {
  name: 'ExamMeta',
  methods: {
      handleClick() {
          alert('Exam Meta')
      }
  }
};
</script>
