<template>
  <div class="index">
    <NavBar>
      <div slot="left" @click="go">
        <img src="./../../assets/images/首页2_03.png" alt="" />
      </div>
      <div slot="center">平价租车</div>
      <div slot="right">
        <img src="./../../assets/images/首页2_06.png" alt="" />
      </div>
    </NavBar>
    <baidu-map
      class="bm-view"
      :zoom="15"
      :pinch-to-zoom="true"
      ak="7O5xjogyqIsfG1unmgQwGAEA7tGwcvGy"
      center="郑州市金水区"
    >
    </baidu-map>
    <van-tabs>
      <van-tab title="国内租车">
        <div class="list">
          <div class="line1">
            <div class="tit1">取还车城市</div>
            <div class="tit2">取还车地点</div>
            <div class="tit3">异地还车</div>
          </div>
          <div class="line1">
            <van-dropdown-menu class="sec1">
              <van-dropdown-item v-model="value1" :options="option1" />
            </van-dropdown-menu>
            <van-dropdown-menu class="sec2">
              <van-dropdown-item v-model="value2" :options="option2" />
            </van-dropdown-menu>
            <van-switch v-model="checked" size="24" />
          </div>
        </div>
        <div class="list">
          <div class="line1">
            <div class="tit1">今天</div>
            <div class="tit3">周一</div>
          </div>
          <div class="line1 line2">
            <div class="tit1">11月20日</div>
            <div class="tit2">19:30 <span>⇋</span>11月23日</div>
            19:30
          </div>
        </div>
        <div class="list list2">
          <div class="line1">
            <van-checkbox v-model="checked2">送车上门</van-checkbox>
          </div>
        </div>
      </van-tab>
      <van-tab title="境外租车">内容 2</van-tab>
    </van-tabs>
    <van-button class="sub" type="primary" @click="rent">我要租车</van-button>
    <van-popup v-model="show" position="left" round :style="{ height: '100%' }">
      <personcenter></personcenter>
    </van-popup>
  </div>
</template>
<script>
import NavBar from "./../../components/common/NavBar";
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import personcenter from "@/views/profile/Personal_center";
export default {
  methods: {
    go() {
      // this.$router.push('/personcenter');
      this.show = true;
    },
    rent() {
      this.$router.push("/selectcar");
    },
  },
  data() {
    return {
      value1: 0,
      value2: 0,
      checked: true,
      checked2: false,
      show: false,
      option1: [
        { text: "郑州", value: 0 },
        { text: "信阳", value: 1 },
        { text: "安阳", value: 2 },
      ],
      option2: [
        { text: "阿里木坚果世家", value: 0 },
        { text: "xxxxxx", value: 1 },
        { text: "xxxxxxx", value: 2 },
      ],
    };
  },
  components: {
    NavBar,
    BaiduMap,
    personcenter,
  },
};
</script>
<style scoped lang='less'>
div.index {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  div.van-tabs {
    height: 6rem;
  }
  div.list {
    width: 86%;
    margin: 0 auto;
    padding: 0.24rem 0 0.24rem 0.23rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    div.line1 {
      font-size: 0.24rem;
      color: #999999;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div.tit1 {
        flex-grow: 1;
      }
      div.tit2 {
        flex-grow: 2;
      }
    }
    div.line2 {
      font-size: 0.36rem;
    }
  }
  .left img {
    width: 75%;
    position: relative;
    left: 0.15rem;
  }
  .right img {
    width: 70%;
    position: relative;
    right: 0.15rem;
  }
  .bm-view {
    width: 100%;
    height: 6rem;
  }
  button.sub {
    width: 80%;
    height: 0.93rem;
    transform: translate(-50%);
    background-color: #26a8fc;
    border-radius: 0.14rem;
    border: none;
    position: relative;
    top: -0.6rem;
    left: 50%;
    font-size: 0.34rem;
    font-weight: 550;
  }
}
</style>