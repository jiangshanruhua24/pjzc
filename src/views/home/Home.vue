<template>
  <div>
    <h1>首页</h1>
    <button @click="detailClick">我要租车</button>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    detailClick() {
      this.$router.push("/detail");
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
</style>
