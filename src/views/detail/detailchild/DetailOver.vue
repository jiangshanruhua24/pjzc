<template>
  <div class="detail_over">
    <NavBar> <div slot="center">订单详情</div></NavBar>
    <div class="order_number" @click="ordermessage">
      <span>订单号：{{ message.order_number }}</span>
      <span>下单日期：{{ formatDate }}</span>
    </div>
    <!-- 车辆信息 -->
    <CarDetail></CarDetail>
    <div class="car_time">租车时长：<span>2</span>天</div>
    <div class="price">
      <ul>
        <li>
          <span>定金：{{ message.arr[0].moneny1 }}元</span>
        </li>
        <li>
          <span>使用费：{{ message.arr[1].moneny2 }}元</span>
        </li>
        <li>
          <span>基本保险：{{ message.arr[2].moneny3 }}元</span>
        </li>
        <li>
          <span>手续费：{{ message.arr[3].moneny4 }}元</span>
        </li>
      </ul>
      <ul>
        <li>
          <span>加油服务费：{{ message.arr[4].moneny5 }}元</span>
        </li>
        <li>
          <span>油费：{{ message.arr[5].moneny6 }}元</span>
        </li>
        <li>
          <span>车辆损失费：{{ message.arr[6].moneny7 }}元</span>
        </li>
      </ul>
    </div>
    <div class="total">
      合计：<span>{{ total }}</span
      >元
    </div>
    <div class="btn">
      <button>再次下单</button>
      <button @click="reserve">预定/评价</button>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar";

import CarDetail from "@/components/content/CarDetail";

import { obj } from "@/assets/js/utils";

export default {
  props: {},
  data() {
    return {
      message: {
        order_number: "0012011404082557",
        time: 1605432101588,
        arr: [
          { moneny1: 2000 },
          { moneny2: 600 },
          { moneny3: 100 },
          { moneny4: 30 },
          { moneny5: 0 },
          { moneny6: 0 },
          { moneny7: 0 },
        ],
      },
    };
  },
  computed: {
    formatDate() {
      return obj.formatTime(this.message.time);
    },
    total() {
      let sum = 0;
      for (let v of this.message.arr) {
        let [item] = Object.values(v);
        sum += item;
      }
      return sum;
    },
  },
  mounted() {},
  methods: {
    reserve() {
      this.$router.push("/evaluate");
    },
    ordermessage(){
      this.$router.push('/ordermessage');
    }
  },
  components: {
    NavBar,
    CarDetail,
  },
};
</script>

<style scoped lang="less">
.detail_over {
  > .order_number {
    display: flex;
    justify-content: space-between;
    height: 1rem;
    line-height: 1rem;
    padding: 0 0.29rem 0 0.38rem;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: #f2f2f2 0 2px 2px 2px inset;
  }
  > .car_time {
    height: 0.8rem;
    line-height: 0.8rem;
    padding-left: 0.38rem;
    border-bottom: 1px solid #e0e0e0;
    > span {
      padding: 0.12rem;
      color: #333;
      font-size: 0.28rem;
    }
  }
  > .price {
    display: flex;
    padding: 0.28rem 0 0.38rem 0.38rem;
    font-size: 0.22rem;
    border-bottom: 1px solid #e0e0e0;
    ul {
      flex: 1;
      li {
        line-height: 0.48rem;
      }
    }
  }
  > .total {
    color: #333;
    padding: 0.34rem 0 0 0.38rem;
    > span {
      padding-right: 0.08rem;
      font-size: 0.35rem;
      font-weight: 600;
    }
  }
  > .btn {
    padding: 0.69rem 1.05rem;
    font-size: 0.28rem;
    button {
      width: 2.5rem;
      height: 0.9rem;
      background-color: #eee;
      border: 1px solid #ccc;
      border-radius: 0.08rem;
      &:first-child {
        margin-right: 0.4rem;
      }
    }
  }
}
</style>
