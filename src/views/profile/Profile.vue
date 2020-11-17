<template>
  <div>
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
  </div>
</template>

<script>
//顶部
import NavBar from "@/components/common/NavBar";
//我的订单
import My_order from "./prochild/My_order";
/* 设置 */
import Set from "./prochild/Set";
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
</style>
