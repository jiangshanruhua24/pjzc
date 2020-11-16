<template>
  <div>
    <h6 @click="detailClick">详情页</h6>
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
