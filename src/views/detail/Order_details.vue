<template>
  <div class="order_details">
    <NavBar>
    <div slot='center'>订单详情</div></NavBar>
    <div class="order_number">
      <p>
        <span>订单号：</span>
        <span>0012011409783921已完成</span>
      </p>
      <p>请及时到店取车</p>
    </div>
    <div class="order_map">
      <p class="address">
        <van-icon name="map-marked" size=".3rem" />
        <span>金水路未来路交叉路口南500米路西</span>
      </p>
      <p class="phone">
        <van-icon name="phone" size=".3rem" />
        <span>0371-13765477413</span>
      </p>
      <button class="send">立即发送</button>
    </div>
    <div class="return_home">
      <button @click="back">返回首页</button>
    </div>
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
    back(){
      this.$router.push('/home');
    }
  },
  components: {NavBar},
};
</script>

<style scoped lang="less">
.order_details {
  background-color: #cccccc;
  height: 100%;
  font-size: 0.3rem;
  padding-top: 0.2rem;
  .order_number {
    height: 2.05rem;
    background-color: white;
    padding-top: 0.52rem;
    padding-left: 0.14rem;
    border-radius: 0.07rem;
    margin: 0rem 0.24rem 0.16rem 0.24rem;
    p:nth-of-type(1) {
      font-size: 0.3rem;
      padding-bottom: 0.35rem;
      font-weight: 600;
      span {
        font-weight: normal;
      }
    }
    p:nth-of-type(2) {
      font-size: 0.3rem;
      padding-left: 1.2rem;
    }
  }
  .order_map {
    margin: 0rem 0.24rem 0.16rem 0.24rem;
    background-color: white;
    height: 3.39rem;
    border-radius: 0.07rem;
    .send {
      width: 2.01rem;
      height: 0.6rem;
      color: white;
      background-color: #4395ff;
      border-radius: 0.27rem;
      position: relative;
      left: 4.77rem;
      bottom: -0.6rem;
    }
    .address {
      padding-top: 0.7rem;
      padding-left: 0.42rem;
      padding-bottom: 0.4rem;
      span {
        padding-left: 0.2rem;
      }
    }
    .phone {
      padding-left: 0.42rem;
      span {
        padding-left: 0.2rem;
      }
    }
  }
  .return_home {
    position: fixed;
    bottom: 0px;
    height: 0.81rem;
    width: 100%;
    color: white;

    
    button {
      font-size: .3rem;
      width: 100%;
      height: 100%;
      background-color: #4395ff;
      line-height: 0.81rem;
      text-align: center;
    }
  }
}
</style>
