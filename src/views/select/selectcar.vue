<template>
    <div class="selectcar_out">
       <!-- top -->
      <div class="top">
         <van-icon name="arrow-left" class="back" size='.34rem' @click="back" />
         <van-dropdown-menu :overlay='false' class="top_nav">
            <van-dropdown-item title="排序" :options="option2" />
            <van-dropdown-item title="租车公司" :options="option2" />
            <van-dropdown-item title="车辆品牌" :options="option2" />
            <van-dropdown-item title="筛选" :options="option2" />
         </van-dropdown-menu>
      </div>
      <div class="content">
         <ul class="left_nav">
            <li :class="['left_item',item.ischecked?'item_checked':'']" v-for="(item,index) in carlist" :key="item.text" @click="change(index)">
               <div class="left_item_">
                  <p>{{item.text}}</p>
                  <p>￥178起</p>
               </div> 
            </li>
         </ul>
         <div class="right_content">
            <div v-show="active == index" v-for="(item,index) in carlist" :key="index">
            <div class="car_item" v-for="ite in item.list" :key='ite.carname' @click='order'>
               <div class="item_l">
                  <p class="car_name">{{ite.carname}}</p>
                  <div class="car_img"><img src="./img/72135813.png" alt=""></div>
                  <div class="car_info"><span>自动挡</span> | <span>5座</span> | <span>微型轿车</span> <span>建议乘坐2人+1行李箱</span></div>
                  <div class="shouxuan"><van-icon name="good-job" color='#fff' /><span>安心首选</span></div>
               </div>
               <div class="item_r">
                  <p class="day_money"><span>158</span>/天起</p>
                  <div class="kan"><span>砍</span><span>￥400</span></div>
                  <div class="chehang"><span>3个车行</span></div>
               </div>
            </div>
        </div>
         </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
           active:0,
           ischecked:false,
           activeKey: 0,
           value1: 0,
           zidingyi:'租车公司',
            value2: 'a',
            option1: [
            { text: '全部商品', value: 0 },
            { text: '新款商品', value: 1 },
            { text: '活动商品', value: 2 },
            ],
            option2: [
            { text: '默认排序', value: 'a' },
            { text: '好评排序', value: 'b' },
            { text: '销量排序', value: 'c' },
            ],

            carlist:[
               {text:'全部',
               ischecked:true,
               list:[
                  {carname:'丰田1'},
                  {carname:'丰田2'},
                  {carname:'丰田3'},
                  {carname:'丰田4'},
                  {carname:'丰田5'}
               ]},
               {text:'新人',
               ischecked:false,
               list:[
                  {carname:'汉兰达1'},
                  {carname:'汉兰达2'},
                  {carname:'汉兰达3'},
                  {carname:'汉兰达4'},
                  {carname:'汉兰达5'}
               ]},
               {text:'无忧租',
               ischecked:false,
               list:[
                  {carname:'丰田汉兰达1'},
                  {carname:'丰田汉兰达2'},
                  {carname:'丰田汉兰达3'},
                  {carname:'丰田汉兰达4'},
                  {carname:'丰田汉兰达5'}
               ]},
            ]
    
        };
    },
    methods: {
       change(index){
          console.log(index);
          this.active=index;
          this.carlist.forEach(i => {
            i.ischecked=false;
          });

          this.carlist[index].ischecked=true;
         //  this.xuanze= this.list[ind].type;
       },
       back(){
          this.$router.go(-1);
       },
       order(){
          this.$router.push('/detail');
       }
    },
    components: {

    },
};
</script>

<style  lang="less">

.content .van-tree-select{
   height: 12.5rem !important;
}
#app{
   height: 100%;
}
html,body{
   width: 100%;
   height: 100%;
   
}

.top .van-dropdown-menu__bar{
   box-shadow: none !important;
}

.selectcar_out{
      display: flex;
      flex-direction: column;
   .content{
         flex: 1;
         
   }
}

.selectcar_out{
   height: 100%;
   background-color: #eeeeee !important;
   .top{
      width: 100%;
      
      height: .88rem;
      display: flex;
      .back{
         background-color: #fff;
         width: .64rem;
         display: flex;
         justify-content: center;
         align-items: center;
         // height: .88rem;
      }
      .top_nav{
         flex: 1;
         height: 100%;
         font-size: .26rem;

      }
   }
   .car_item{
      margin: .15rem 0;
      background-color: #fff;
      box-shadow: 0 .01rem 0.02rem .01rem #ebebeb;
      width: 5.78rem;
      padding: .28rem .2rem .26rem .45rem;
      display: flex;
      justify-content: space-between;
      border: 1px solid #e2e2e2;
      border-radius: .08rem;
      .item_l{
         width: 3.75rem;
         .car_name{
            font-size: .28rem;
            font-weight: 600;
            margin-bottom: .1rem;
         }
         .car_img{
            width: 3.5rem;
            height: 1.8rem;
            &>img{
               width: 100%;
               height: 100%;
            }
         }
         .car_info{
            font-size: .24rem;
            color: #8d8d8d;
            margin: .2rem 0;
         }
         .shouxuan{
            width: 1.43rem;
            height: .38rem;
            background-color: #ffa53d;
            font-size: .22rem;
            color: #fff;
            text-align: center;
            line-height: .38rem;
            border-radius: .04rem;
         }
      }
      .item_r{
         flex: 1;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         .day_money{
            &>span:nth-child(1){
               color: #f0230e;
               font-size: .4rem;
            }
            &>span:nth-child(2){
               color: #8d8d8d;
               font-size: .22rem;
            }
         }
         .kan{
            width: 1rem;
            height: .32rem;
            border: 2px solid #f0230e;
            box-sizing: border-box;
            border-radius: .04rem;
            display: flex;
            margin: .1rem 0;
            &>span:nth-child(1){
               width: .31rem;
               height: 100%;
               font-size: .22rem;
               color: #fff;
               background-color: #f0230e;
               text-align: center;
               // line-height: .32rem;
            }
            &>span:nth-child(2){
               flex: 1;
               color: #f0230e;
            }
         }
         .chehang{
            width: 1.24rem;
            height: .4rem;
            background-color: #fff7f5;
            color: #f0230e;
            text-align: center;
            line-height: .4rem;
            border-radius: .04rem;
         }
      }
   }
}
.item_checked{
   border-left: .05rem solid #4b7ce2 !important;
    background-color: #fff !important;
}
.content{
   display: flex;

   .left_nav{
      .left_item{
         width: 1.49rem;
         padding: .28rem 0;
         &>.left_item_{
            height: .53rem;
            // margin: .28rem 0;
            padding-left: .18rem;
            box-sizing: border-box;
            &>p:nth-child(1){
               font-size: .24rem;

            }
            &>p:nth-child(2){
               font-size: .18rem;
            }
         }
         
      }
   }
         &>.right_content{
            
            height: 12.46rem;
            overflow: hidden;
            overflow: scroll;
         }
}
.top_nav .van-ellipsis{
   font-size: .26rem;
   height: .4rem;
   line-height: .4rem;
}
.top_nav .van-dropdown-menu__item{
   height: .88rem;
}
.top_nav .van-dropdown-menu__bar{
   border: none;
   height: .88rem;
}
.van-dropdown-menu{
   border: none;
}
.top_nav .van-cell__title{
   font-size: .2rem;
}

</style>
