<template>
  <div class="servicecenter">
       <NavBar>
          <div slot="center">客服中心</div>
      </NavBar>
        <img src="./../../assets/images/客服中心_03.png" alt="">
        <div class="list">
          <div><span class="text">账号</span>
          <span class="sanjiao"></span></div>
      </div>
      <div class="list">
          <div><span class="text">常见问题</span>
          <span class="sanjiao"></span></div>
      </div>
      <div class="list">
          <div @click="service"><span class="text">服务规则</span>
          <span class="sanjiao"></span></div>
      </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
export default {
    methods:{
        service(){
            this.$router.push('/service');
        }
    },
components:{
    NavBar
}
}
</script>

<style scoped lang='less'>
img{
    width: 100%;
}
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
</style>