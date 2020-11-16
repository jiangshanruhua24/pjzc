<template>
  <div class="set">
    <ul>
      <li>
        <span>修改密码</span>
        <span>></span>
      </li>
      <li>
        <span>忘记密码</span>
        <span>></span>
      </li>
      <li>
        <span>关于我们</span>
        <span>></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style scoped lang="less">
.set {
  ul {
    li {
      font-size: 0.36rem;
      font-weight: bold;
      height: 1rem;
      border-bottom: 1px solid #e0e0e0;
      line-height: 1rem;
      padding-left: 0.24rem;
      padding-right: 0.24rem;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
