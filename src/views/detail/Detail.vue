<template>
  <div id="detail">
    <NavBar>
      <div slot="center">订单详情</div>
    </NavBar>
    <div class="detail_tb">
      <!-- 车辆信息 -->
      <div class="car_msg"><CarDetail></CarDetail></div>
      <!-- 取车时间 -->
      <div class="pick_car">
        <div>
          <p>
            <span>取车时间：郑州</span>
            <span>取车门店：金水路</span>
          </p>
          <p>
            <span>还车时间：洛阳</span>
            <span>还车门店：皇城公园店</span>
          </p>
        </div>
        <p>取车时间：01月24日 周四 15:30</p>
        <p>还车时间：01月24日 周四 15:30</p>
      </div>
      <!-- 定金 -->
      <div class="money">应付定金：<span>￥2000元</span></div>
      <!-- 支付方式 -->
      <van-radio-group
        v-model="radio"
        class="pay"
        style="background-color: #eee"
      >
        <van-cell>
          <div>
            <img src="./images/wallet.png" alt="" />
            账户余额
          </div>
          <van-radio name="1" icon-size="32" />
        </van-cell>
        <van-cell>
          <div>
            <img src="./images/alipay.png" alt="" />
            支付宝
          </div>
          <van-radio name="2" icon-size="32" />
        </van-cell>
        <van-cell>
          <div>
            <img src="./images/wechat.png" alt="" />
            微信
          </div>
          <van-radio name="3" icon-size="32" />
        </van-cell>
      </van-radio-group>
      <div class="agree">
        <van-checkbox v-model="checked" shape="square"
          ><i>同意</i><span>《平价分时租车租贷协议》</span></van-checkbox
        >
      </div>
    </div>
    <div class="btn">
      <van-button type="primary" size="large" color="#4395ff" @click='orderover'
        ><span>账户余额</span></van-button>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar";

import CarDetail from "@/components/content/CarDetail";

export default {
  props: {},
  data() {
    return {
      radio: "",
      checked: true,
    };
  },
  methods: {
    orderover(){
      this.$router.push('/detailover');
    }
  },
  components: { NavBar, CarDetail },
};
</script>

<style scoped lang="less">
#detail {
  > .detail_tb {
    padding: 0.2rem 0.24rem 0 0.24rem;
    background-color: #eee;
    > .car_msg {
      margin-bottom: 0.12rem;
      > .car_message {
        height: 2.6rem;
        padding: 0.3rem 0 0.5rem 0.34rem;
        border-radius: 0.08rem;
        box-shadow: 0 4px 2px 2px #e7e7e7;
      }
    }
    > .pick_car {
      // height: 3.25rem;
      padding: 0.31rem 0.28rem 0.42rem 0.15rem;
      margin-bottom: 0.05rem;
      line-height: 0.63rem;
      font-size: 0.26rem;
      color: #666;
      background-color: #fff;
      border-radius: 0.08rem;
      box-shadow: 0 5px 2px 1px #e4e4e4;
      > div {
        display: flex;
        justify-content: space-between;
        > p {
          line-height: 0.63rem;
          > span {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
    > .money {
      line-height: 0.73rem;
      padding-left: 0.15rem;
      background-color: #fff;
      border-radius: 0.08rem;
      font-size: 0.26rem;
      font-weight: 600;
      color: #333;
      box-shadow: 0 5px 2px 1px #e4e4e4;
      > span {
        color: #f0230e;
      }
    }
    > .pay {
      > .van-cell {
        padding: 0;
        padding-top: 0.4rem;
        padding-right: 0.28rem;
        font-size: 0.26rem;
        color: #333;
        background: #eee;
        > .van-cell__value {
          display: flex;
          align-items: center;
          justify-content: space-between;
          > div {
            display: flex;
            align-items: center;
            > img {
              margin-right: 0.26rem;
            }
          }
        }
      }
    }
    > .agree {
      padding: 0.37rem 0 0.7rem;
      i {
        font-size: 0.22rem;
        color: #666;
      }
      span {
        font-size: 0.24rem;
        color: #4395ff;
      }
    }
  }
  > .btn {
    > .van-button--large {
      height: 0.81rem;
    }
    span {
      color: #fff;
      font-size: 0.28rem;
      font-weight: 500;
    }
  }
}
</style>
