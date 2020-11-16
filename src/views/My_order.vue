<template>
  <div class="My_order">
    <ul>
      <li class="kong"></li>
      <li>
        <div class="left">
          <img src="./../assets/imgs/bg2.jpg" alt />
        </div>
        <div class="centet">
          <p>丰田汉兰达</p>
          <p>日租</p>
          <p>租车时间</p>
        </div>
        <div class="right">
          <p>订单详情></p>
        </div>
      </li>
  
       <li>
        <div class="left">
          <img src="./../assets/imgs/bg2.jpg" alt />
        </div>
        <div class="centet">
          <p>丰田汉兰达</p>
          <p>日租</p>
          <p>租车时间</p>
        </div>
        <div class="right">
          <p>订单详情></p>
        </div>
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
html {
  height: 100%;
  body {
    height: 100%;
    .My_order {
      height: 100%;
      font-size: 0.16rem;
      ul {
        height: 100%;
        width: 100%;
        background-color: #eeeeee;
        .kong {
          height: 0.2rem;
          width: 100%;
          background-color: #eeeeee;
        }
        li {
          height: 1.8rem;
          display: flex;
          background-color: #ffffff;
          width: 7.1rem;
          margin: 0 auto;
          border-radius: 0.08rem;
          margin-bottom: .20rem;
          .left {
            height: 100%;
            img {
              margin: 0.24rem 0.19rem 0.26rem 0.19rem;
              width: 2.2rem;
              height: 1.3rem;
            }
          }
          .centet {
            height: 1.3rem;
            flex: 1;
            margin-top: 0.24rem;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            p:nth-of-type(1) {
              flex: 1;
              font-size: 0.3rem;
              font-weight: 700;
            }
            p:nth-of-type(2) {
              font-size: 0.24rem;
              line-height: 0.5rem;
            }
            p:nth-of-type(3) {
              font-size: 0.24rem;
            }
          }
          .right {
            height: 1.3rem;
            margin-top: 0.24rem;
            margin-right: .21rem;
          }
        }
      }
    }
  }
}
</style>
