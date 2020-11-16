<template>
  <div id="login">
    <div class="logo">
      <img src="../../assets/images/登录和注册_03.png" alt="" />
      <img src="../../assets/images/登录和注册_07.png" alt="" />
    </div>
    <div class="user">
      <div><span>账号</span><input type="text" placeholder="请输入账号" /></div>
      <div class="password">
        <span>密码</span
        ><input
          :type="[isShow ? 'text' : 'password']"
          placeholder="请输入密码"
        />
        <img src="../../assets/images/eye.png" alt="" @click="toggleClick" />
        <img
          v-show="isShow"
          src="../../assets/images/eye-active.png"
          alt=""
          @click="toggleClick"
        />
      </div>
    </div>
    <div class="btn">
      <van-button type="info">登录</van-button>
      <p>
        <span @click="registerClick">注册</span
        ><span @click="forgetClick">忘记密码</span>
      </p>
      <img src="../../assets/images/登录和注册_11.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    toggleClick() {
      this.isShow = !this.isShow;
    },
    registerClick() {
      this.$router.push("reg");
    },
    forgetClick() {
      this.$router.push("forgetpwd");
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
#login {
  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.86rem 0 1.58rem 0;
    > img {
      &:first-child {
        width: 0.94rem;
        height: 1.02rem;
        margin-bottom: 0.09rem;
      }
      &:last-child {
        width: 1.03rem;
        height: 0.34rem;
      }
    }
  }
  .user {
    > div {
      padding-left: 0.24rem;
      margin-bottom: 0.28rem;
      > span {
        color: #333;
        font-size: 0.26rem;
        font-weight: 600;
      }
      > input {
        width: 5.52rem;
        height: 0.9rem;
        margin-left: 0.87rem;
        text-indent: 0.2rem;
        border: 2px solid #e4e4e4;
        border-radius: 0.04rem;
        &::placeholder {
          color: #999;
        }
      }
    }
    > .password {
      position: relative;
      > img {
        position: absolute;
        top: 0.32rem;
        right: 0.54rem;
      }
    }
  }
  .btn {
    margin-top: 1.14rem;
    text-align: center;
    > .van-button {
      width: 7rem;
      height: 1rem;
      background-color: #43a5ff;
      border-radius: 0.08rem;
      font-size: 0.32rem;
      font-weight: 500;
    }
    > p {
      display: flex;
      justify-content: space-between;
      padding: 0.18rem 0.26rem 1.2rem 0.25rem;
      color: #3d88f7;
    }
    > img {
      width: 100%;
    }
  }
}
</style>
