<template>
    <div class="mywallet_out">
       <!-- top -->
      <NavBar><span slot="center">我的钱包</span></NavBar>
       <div class="content_out">
          <div class="wallet_img">
             <img src="./img/wallet_03.png" alt="">
             <span class="num_"><span>2030</span> 枚</span>
             <span class="wenhao" @click="show = true"></span>
         </div>
          <div class="wallet_img">
             <img src="./img/wallet_06.png" alt="">
             <span class="num_"><span>2030</span> 积分</span>
             <span class="wenhao" @click="show = true"></span>
         </div>
         <div class="edu_out">
            <p class="cz_tit">充值额度</p>
            <ul class="cz_list">
               <li :class="['cz_item',item.isactive?'border':'']" v-for="(item,index) in cz_list" :key="index" @click="xuanze(index)"><span class="cz_num">{{item.num}}枚</span><span class="cz_zs">送{{item.zsjf}}积分</span></li>
               <!-- <li class="cz_item"><span class="cz_num">1000枚</span><span class="cz_zs">送100积分</span></li>
               <li class="cz_item"><span class="cz_num">2000枚</span><span class="cz_zs">送500积分</span></li>
               <li class="cz_item"><span class="cz_num">5000枚</span><span class="cz_zs">送1000积分</span></li>
               <li class="cz_item"><span class="cz_num">10000枚</span><span class="cz_zs">送3000积分</span></li> -->
               <li class="cz_item"><span class="cz_num">其他金额</span></li>
            </ul>
         </div>
         <div :class="['cz_btn',czbtn?'czbtn':'']">立即充值</div>
       </div>
         <van-overlay :show="show" @click="show = false">
            <div class="wrapper" >
               <div class="block">
                  <p>使用说明</p>
                  <ul>
                     <li>1.1平驾币=1元</li>
                     <li>2.平驾币可用于冲抵租车消费</li>
                     <li>3.平驾币不可取现</li>
                     <li>4.1积分=1元，每单最高可使用积分冲抵40%的租车费用</li>
                  </ul>
               </div>
            </div>
         </van-overlay>
    </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
export default {
    props: {

    },
    data() {
        return {
           czbtn:false,
           show: false,
           cz_list:[
              {num:500,zsjf:50,isactive:false},
              {num:1000,zsjf:100,isactive:false},
              {num:2000,zsjf:500,isactive:false},
              {num:5000,zsjf:1000,isactive:false},
              {num:1000,zsjf:3000,isactive:false},
           ]
        };
    },
    methods: {
       xuanze(index){
          console.log(index);
          this.cz_list.forEach(i => {
            i.isactive=false;
          });
          this.cz_list[index].isactive=true;
          this.czbtn=true;
       }
    },
    components: {
      NavBar
    },
};
</script>

<style scoped lang="less">
.czbtn{
   background-color: #3d88f7 !important;
   color: #fff;
}
.border{
   border: .02rem solid #3d88f7;
   color: #3d88f7;
}
 .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 4.5rem;
    height: 3.28rem;
    background-color: #fff;
    padding: .3rem;
    &>p{
       font-size: .28rem;
       font-weight: 600;
       line-height: .5rem;
    }
    &>ul>li{
       font-size: .24rem;
       line-height: .36rem;
    }
  }
.content_out{
   padding: 0 .24rem;
   .wallet_img{
      width: 100%;
      position: relative;
      margin-bottom: .4rem;
      img{
         width: 100%;
      }
      .num_{
         position: absolute;
         top: .9rem;
         left: .5rem;
         color: #fff;
         font-size: .24rem;
         &>span{
            font-size: .48rem;
         }
      }
      .wenhao{
         position: absolute;
         width: .25rem;
         height: .25rem;
         // background-color: rebeccapurple;
         top: .5rem;
         left: 1.79rem;
      }
   }
}
.edu_out{
   .cz_tit{
      height: .86rem;
      line-height: .86rem;
      font-size: .28rem;
      font-weight: 600;
   }
   .cz_list{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .cz_item{
         width: 2.24rem;
         height: 1rem;
         background-color: #f2f2f2;
         margin-bottom: .1rem;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         border-radius: .07rem;
         .cz_num{
            font-size: .28rem;
            font-weight: 600;

         }
         .cz_zs{
            font-size: .24rem;
         }
      }
   }
}
.cz_btn{
   margin: 0 auto;
   margin-top: 1.2rem;
   width: 5rem;
   height: 1rem;
   text-align: center;
   line-height: 1rem;
   font-size: .36rem;
   background-color: #f2f2f2;
   border-radius: .09rem;
}
</style>
