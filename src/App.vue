<template>

  <div id="app">
    <!-- 顶部 -->
    <NavBar>
      <div slot="center">11111</div>
    </NavBar>
    <!-- 我的订单 -->
    <!-- <My_order></My_order> -->
    <!-- 设置 -->
    <!-- <Set></Set> -->
    <!-- 订单详情2.0 -->
    <Order_details></Order_details>
    <router-view></router-view>
  <div id="app">
    
    <router-view/>
  </div>
</template>


  </div>
</template>

<script>
//顶部
import NavBar from "./views/NavBar";
//我的订单
import My_order from "./views/My_order";
/* 设置 */
import Set from "./views/Set";
/* 订单详情2.0 */
import Order_details from "./views/Order_details";
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: { Order_details,NavBar, My_order, Set },
};
</script>

<style scoped lang="less">
html {
  body {
    height: 100%;
    width: 100%;
    #app {
      font-size: 0.16rem;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
