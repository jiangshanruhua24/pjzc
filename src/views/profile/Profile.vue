<template>
  <div class="profile">
    <!-- 顶部 -->
    <NavBar>
      <div slot="center">我的订单</div>
    </NavBar>
    <!-- 我的订单 -->
    <My_order></My_order>
    <!-- 设置 -->
    <!-- 订单详情2.0 -->
    <Order_details></Order_details>
  </div>
</template>

<script>
//顶部
import NavBar from "@/components/common/NavBar";
//我的订单
import My_order from "./prochild/My_order";
/* 订单详情2.0 */
import Order_details from "./prochild/Order_details";
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: { Order_details, NavBar, My_order, Set },
};
</script>

<style scoped lang="less">
div.profile{
  height: 100%;
}
</style>
