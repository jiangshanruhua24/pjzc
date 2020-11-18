<template>
  <div class="register">
    <NavBar>
      <div slot="center">注册</div>
    </NavBar>
    <div class="list">
      <span>手机号</span>
      <div class="input">
        <van-field v-model="value1" placeholder="请输入手机号" />
      </div>
    </div>
    <div class="list">
      <span>验证码</span>
      <div class="input input2">
        <input type="text" class="yzm" placeholder="请输入验证码" />
        <van-button type="primary">获取验证码</van-button>
      </div>
    </div>
    <div class="list">
      <span>请输入新密码</span>
      <div class="input">
        <van-field
          v-model="value3"
          type="password"
          placeholder="请输入新密码"
          right-icon="browsing-history-o"/>
      </div>
    </div>
    <div class="list">
      <span>再次输入密码</span>
      <div class="input">
        <van-field
          v-model="value4"
          type="password"
          placeholder="再次输入新的密码"
          right-icon="browsing-history-o"/>
      </div>
    </div>
    <van-button class="sub" type="primary">提交</van-button>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar";
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
    };
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped lang='less'>
div.register{
  height: 100%;

div.list {
  font-size: 0.28rem;
  display: flex;
  height: 0.74rem;
  align-items: center;
  padding: 0 0.25rem;
  justify-content: space-between;
  margin-top: 0.46rem;
  div.input {
    display: flex;
    width: 5rem;
    border: 1px solid #cccccc;
    input {
      height: 0.68rem;
    }
    input.yzm {
      width: 2.5rem;
      height: 0.9rem;
      border: none;
      border: 1px solid #ccc;
      text-indent: 0.35rem;
    }
    input.yzm::-webkit-input-placeholder {
      color: #C8C9CF;
    }
    justify-content: space-between;
  }
  div.input2 {
    border: none;
    width: 5rem;
    button {
      background-color: #f2f2f2;
      color: #999999;
      border: none;
    }
  }
}
button.sub {
  color: #999999;
  width: 75%;
  margin: 1.3rem auto;
  height: 1rem;
  background-color: #f2f2f2;
  border: none;
  margin-left: 50%;
  transform: translate(-50%);
}
}
</style>