<template>
   <van-rate
    v-model="value"
    :size="size"
    color="#ffae3a"
    void-icon="star"
    void-color="#eee"
    allow-half
    gutter="39"
  />
</template>

<script>
export default {
  props: {},
  data() {
    return {
      value: 0,
      size:'50'
    };
  },
  mounted(){
    this.size=window.innerWidth*50/750;
  }
};
</script>

<style scoped lang="less">
// div.van-rate{
//   width: 67%;
// }
</style>
