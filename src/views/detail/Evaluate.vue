<template>
  <div class="evaluate">
    <NavBar>
      <div slot="center">评价</div>
    </NavBar>
    <div class="content">
      <div><span> 手续办理：</span><Start /></div>
      <div><span>车辆情况：</span><Start /></div>
      <div>服务态度：<Start /></div>
    </div>
    <div class="val_text">
      <textarea
        type="text"
        placeholder="感谢您对平驾的支持，来说说您的评价之旅吧!"
        @input="valClick"
      />
      <van-button :color="color" :disabled="isText" type="primary"
        >匿名提交</van-button
      >
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar";
import Start from "@/components/common/Start";

export default {
  props: {},
  data() {
    return {
      isText: false,
      color: "#ddd",
    };
  },
  methods: {
    valClick(e) {
      // console.log(e.data);
      if (e.data.length > 1) {
        this.color = "#27aafc";
      } else {
        this.color = "#ddd";
      }
    },
  },
  components: { NavBar, Start },
};
</script>

<style scoped lang="less">
.evaluate {
  > .content {
    display: flex;
    flex-direction: column;
    padding: 0.64rem 0.81rem 0.27rem 0.73rem;
    font-size: 0.3rem;
    box-shadow: #f2f2f2 0 2px 2px 2px inset;
    > div {
      display: flex;
      align-items: center;
      margin-bottom: 0.4rem;
      font-weight: 600;
      color: #333;
    }
  }
  .val_text {
    display: flex;
    flex-direction: column;
    align-items: center;
    > textarea {
      display: block;
      width: 6.01rem;
      height: 2.01rem;
      line-height: 0.48rem;
      padding: 0.21rem 0.38rem 0 0.23rem;
      resize: none;
      background-color: #f7f7f7;
      border: 1px solid #ddd;
      border-radius: 0.08rem;
      font-size: 0.28rem;
      &::placeholder {
        color: #ccc;
        font-size: 0.28rem;
      }
    }
    > .van-button {
      width: 6rem;
      height: 1rem;
      margin-top: 0.3rem;
      border-radius: 0.08rem;
      font-size: 0.32rem;
      font-weight: 500;
    }
  }
}
</style>
