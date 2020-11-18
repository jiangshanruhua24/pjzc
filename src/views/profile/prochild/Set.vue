<template>
  <div class="set">
    <NavBar>
      <div slot="center">设置</div>
    </NavBar>
    <ul>
      <li @click="updpass">
        <span>修改密码</span>
        <span>></span>
      </li>
      <li @click="passback">
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
import NavBar from '@/components/common/NavBar'
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    updpass(){
      this.$router.push('/updpass');
    },
    passback(){
      this.$router.push('/passback');
    }
  },
  components: {NavBar},
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
