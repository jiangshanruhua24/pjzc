<template>
  <div class="service">
    <NavBar>
      <div slot="center">服务规则</div>
    </NavBar>
    <div class="list">
      <div><span>服务时间</span> <span class="sanjiao"></span></div>
    </div>
    <div class="list">
      <div><span>租车时限</span> <span class="sanjiao"></span></div>
    </div>
    <div class="list">
      <div><span>数量限制</span> <span class="sanjiao"></span></div>
    </div>
    <div class="list">
      <div><span>租车资格</span> <span class="sanjiao"></span></div>
    </div>
    <div class="list">
      <div><span>信用卡担保规则</span> <span class="sanjiao"></span></div>
    </div>
    <div class="list">
      <div><span>租车流程</span> <span class="sanjiao"></span></div>
    </div>
    <div class="list">
      <div><span>可选服务</span> <span class="sanjiao"></span></div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped lang='less'>
div.service {
  height: 100%;
  div.list {
    border-bottom: 1px solid #e0e0e0;
    div {
      width: 7.04rem;
      margin: 0 auto;
      font-size: 0.28rem;
      height: 1rem;
      display: flex;
      padding-left: 0.24rem;
      padding-right: 0.24rem;
      justify-content: space-between;
      align-items: center;
      span.van-icon {
        display: inline-block;
      }
      span.sanjiao {
        width: 0.255rem;
        height: 0.255rem;
        display: inline-block;
        border-top: 2px solid #333;
        border-right: 2px solid #333;
        transform: rotate(45deg);
      }
    }
  }
}
</style>