<template>
  <div class="car_message">
    <h4>车辆信息</h4>
    <div class="car_th">
      <img src="@/assets/images/car.png" alt="" />
      <div class="car_right">
        <h3>丰田汉兰达</h3>
        <div>
          SUV
          <div class="three"></div>
          2.7自动
          <div class="four"></div>
          乘坐5人
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar";

import CarDetail from "@/components/content/CarDetail";

export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: { NavBar },
};
</script>

<style scoped lang="less">
.car_message {
  padding: 0.33rem 0 0.46rem 0.39rem;
  border-bottom: 1px solid #e0e0e0;
  background-color: #fff;
  > h4 {
    font-size: 0.3rem;
    color: #333;
    font-weight: 600;
    padding-bottom: 0.22rem;
  }
  > .car_th {
    display: flex;
    > img {
      width: 2.2rem;
      height: 1.3rem;
      background-color: pink;
    }
    > .car_right {
      display: flex;
      flex-direction: column;
      padding: 0.2rem 0 0 0.3rem;
      > h3 {
        font-size: 0.34rem;
        color: #333;
        font-weight: 600;
      }
      > div {
        display: flex;
        align-items: center;
        font-size: 0.26rem;
        color: #999;
        padding-top: 0.14rem;
        > .three {
          width: 0.03rem;
          height: 0.28rem;
          margin: 0 0.21rem;
          background-color: #ddd;
          border-left: 1px solid #e6e6e6;
          border-right: 1px solid #e6e6e6;
        }
        > .four {
          width: 0.04rem;
          height: 0.28rem;
          margin: 0 0.21rem;
          background-color: #ddd;
          border-left: 1px solid #f6f6f6;
          border-right: 1px solid #f6f6f6;
        }
      }
    }
  }
}
</style>
