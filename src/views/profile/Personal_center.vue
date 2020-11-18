<template>
  <div class="Personal_center">
    <div class="Personal_center_top">
      <div class="Personal_center_top_c">
        <div>
          <van-image
            round
            width="1.28rem"
            height="1.28rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <div>
          <p>李先生</p>
          <p>176********</p>
        </div>
        <div class="icon">
          <van-icon color="white" size=".18rem" name="arrow" />
        </div>
      </div>
    </div>
    <div class="Personal_ul">
      <ul>
        <li @click='mywallet'>
          <span>
            <img src="./../../assets/images/wallet.jpg" alt />
          </span>
          <p>我的钱包</p>
        </li>
        <li @click="myorder">
          <span>
            <img src="./../../assets/images/Myorder.gif" alt />
          </span>
          <p>我的订单</p>
        </li>
        <li @click='evaluate'>
          <span>
            <img src="./../../assets/images/Userfeedback.gif" alt />
          </span>
          <p>用户反馈</p>
        </li>
        <li @click="center">
          <span>
            <img src="./../../assets/images/Helpcenter.gif" alt />
          </span>
          <p>帮助中心</p>
        </li>
        <li @click="set">
          <span>
            <img src="./../../assets/images/set.gif" alt />
          </span>
          <p>设置</p>
        </li>
        <li>
          <span>
            <img src="./../../assets/images/Versionchecking.gif" alt />
          </span>
          <p>版本检测</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    mywallet(){
      this.$router.push('/mywallet');
    },
    myorder(){
      this.$router.push('/profile');
    },
    evaluate(){
      this.$router.push('/evaluate');
    },
    center(){
      this.$router.push('/servicecenter');
    },
    set(){
      this.$router.push('/set');
    }
  },
  components: {},
};
</script>

<style scoped lang="less">
.Personal_center {
  background-color: white;
  width: 5rem;
  height: 100%;
  .Personal_center_top {
    height: 2.66rem;
    background-color: #4391ff;
    border-top-right-radius: 0.3rem;
    .Personal_center_top_c {
      padding-left: 0.23rem;
      height: 4.48rem;
      font-size: 0.32rem;
      color: white;
      padding-top: 0.87rem;
      display: flex;
      height: 1.29rem;
      p {
        height: 0.75rem;
        line-height: 0.75rem;
        padding-left: 0.3rem;
      }
      p:nth-of-type(2) {
        font-size: 0.24rem;
      }
      div:nth-of-type(3) {
        position: relative;
        top: 0.47rem;
        left: 1.4rem;
      }
    }
  }
  .Personal_ul {
    ul {
      height: 100%;
      li:nth-of-type(1) {
        margin-top: 0.5rem;
      }
      li {
        height: 0.99rem;
        border-bottom: 0.02rem solid #f0f0f0;
        display: flex;
        flex-direction: row;
        line-height: 0.99rem;
        padding-left: 0.24rem;
        p {
          font-size: .28rem;
          font-weight: 550;
          padding-left: 0.37rem;
        }
        span {
          padding-top: 0.3rem;
        }
      }
    }
    img {
      height: 0.38rem;
      width: 0.44rem;
    }
  }
}
</style>
