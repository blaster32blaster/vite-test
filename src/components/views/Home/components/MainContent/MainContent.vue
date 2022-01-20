<template>
    <div class="flex flex-row" @click="handleClick()">
        <div class=" w-1/2 h-full">
            <img alt="Vue logo" style="height: -webkit-fill-available; width: -webkit-fill-available; max-height:100%;" src="../../../../../assets/unsplash_ickPGVMMr98.svg" />
        </div>
        <div class=" w-1/2 h-full">
            <img alt="Vue logo" style="height: -webkit-fill-available; width: -webkit-fill-available; max-height:100%;" src="../../../../../assets/unsplash_WBM97UGM0QA.svg" />
        </div>
    </div>
</template>
<script>
export default {
  name: 'MainContent',
  methods: {
      handleClick() {
          alert('Main Content')
      }
  }
};
</script>
