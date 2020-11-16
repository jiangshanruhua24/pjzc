<template>
  <div class="perinfo">
      <NavBar>
          <div slot="center">个人信息</div>
      </NavBar>
      <div class="list">
          <div><span class="text">头像</span>
          <van-image round width=".8rem" height=".8rem"
  src="https://img.yzcdn.cn/vant/cat.jpeg"/>
          <span class="sanjiao"></span></div>
      </div>
      <div class="list">
          <div><span class="text">账号</span>
          <span>PJ-123456</span></div>
      </div>
       <div class="list">
          <div><span class="text">姓名</span>
          <span>李云龙</span></div>
      </div>
       <div class="list">
          <div><span class="text">证件</span>
          <span>身份证</span></div>
      </div>
       <div class="list">
          <div><span class="text">证件号</span>
          <span>43026********123</span></div>
      </div>
       <div class="list">
          <div><span class="text">手机号</span>
          <span>176****5689</span></div>
      </div>
      <div class="foot">
          <van-icon name="warning" color="#ee1d1d" size="18" />
          <span>手机号变更需本人携带身份证到门店办理</span>
      </div>
        <van-button class="sub" type="primary">退出登录</van-button>    
  </div>
</template>

<script>
import NavBar from './NavBar'
export default {
    components:{
        NavBar
    }
}
</script>

<style scoped lang='less'>
    div.list{
        border-bottom: 1px solid #e0e0e0;
        div{
            width: 7.04rem;
            margin: 0 auto;
            font-size: .28rem;
        height: 1rem;
        display: flex;
        padding-left:  .24rem;
        padding-right:  .24rem;
        justify-content: space-between;
        align-items: center;
       span.text{
           flex-grow: 1;
           font-weight: 600;
       }
        span.sanjiao{
            width: .255rem;
            height: .255rem;
            display: inline-block;
            border-top: 2px solid #333;
            border-right: 2px solid #333;
            transform: rotate(45deg);
        }
        }
    }
     button.sub{
        color: #fff;
        width: 75%;
        margin: 0 auto;
        height: 1rem;
        background-color: #43a5ff;
        border: none;
        margin-left: 50%;
        transform: translate(-50%);
    }
    div.foot{
        width: 93.3%;
        margin: 0 auto;
        display: flex;
        justify-content: flex-end;
        font-size: .18rem;
         height: 1rem;
         align-items: center;
    }
</style>