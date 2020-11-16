<template>
  <van-rate
    v-model="value"
    :size="54"
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
    };
  },
  methods: {},
  components: {},
};
</script>

<style scoped lang="less">
</style>
