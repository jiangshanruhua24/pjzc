<template>
  <div class="navbar">
    <div class="left">
      <slot name="left">
        <div class="arrow-left" @click="backClick"></div>
      </slot>
    </div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {},
  data() {
    return {};
  },
  methods: {
    backClick() {
      this.$router.go(-1);
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
.navbar {
  display: flex;
  height: 0.88rem;
  line-height: 0.88rem;
  text-align: center;
  > .left,
  > .right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0.6rem;
  }
  > .left {
    > .arrow-left {
      width: 0.22rem;
      height: 0.22rem;
      display: inline-block;
      border-bottom: 2px solid #333;
      border-left: 2px solid #333;
      transform: rotate(45deg);
    }
  }
  > .center {
    flex: 1;
    font-size: 0.34rem;
    font-weight: 600;
    color: #333;
  }
}
</style>
