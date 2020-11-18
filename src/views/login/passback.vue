<template>
  <div class="passback">
      <NavBar>
          <div slot="center">密码找回</div>
      </NavBar>
       <div class="list">
          <span>手机号</span>
          <div class="input"><van-field v-model="value1"  placeholder="请输入手机号" /></div>
      </div>
       <div class="list">
          <span>验证码</span>
          <div class="input input2">
             <input type="text" class="yzm" placeholder="请输入验证码">
               <van-button class="yzm" @click='getyzm' type="primary" :disabled='yzm1' :color='active1'>{{text1}}</van-button>     
          </div>
      </div>
      <div class="list">
          <span>新密码</span>
          <div class="input eye">
              <van-field v-model="value3" :type="tag1"  placeholder="请输入新密码" />
              <van-icon name="eye-o" :color="color1" @click="change(1)"/>
          </div>
      </div>
      <div class="list">
          <span>确认</span>
          <div class="input eye">
              <van-field v-model="value4" :type="tag2" placeholder="再次输入新的密码" />
              <van-icon name="eye-o" :color="color2" @click="change(2)"/>
          </div>
      </div>
       <van-button class="sub" type="primary" :color="color3">提交</van-button>    
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
export default {
    components:{
        NavBar
    },
    data(){
        return{
             value1:'',
            value2:'',
            value3:'',
            value4:'',
            yzm1:false,
            active1:'#f2f2f2'// 43a5ff
            ,active2:'#f2f2f2',
            text1:'获取验证码',
            timerid:'',
            time:0,
            color1:'#999999',
            color2:'#999999',
            tag1:'password',
            tag2:'password',
            color3:'#f2f2f2'
        }
    },
    methods:{
        getyzm(){
            let reg1=/^1[3-9]\d{9}$/;
            if(reg1.test(this.value1)==false){
                 this.$toast.fail('请输入正确的手机号');
                 return;
            }
                this.time=60;
                this.yzm1=true;
                this.timerid=setInterval(()=>{
                    this.text1=`重新获取(${this.time})`;
                    if(this.time==1){
                        this.time==0;
                        clearInterval(this.timerid);
                        this.text1='获取验证码';
                        this.yzm1=false;
                    }
                    this.time--;
                },1000)
        },
        change(v){
            if(v==1){
                if(this.color1=='#999999'){
                    this.color1='#43a5ff';
                    this.tag1='text';
                }else{
                    this.color1='#999999';
                    this.tag1='password';
                }
            }
            if(v==2){
                if(this.color2=='#999999'){
                    this.color2='#43a5ff';
                    this.tag2='text';
                }else{
                   this.tag2='password';
                    this.color2='#999999';
                }
            }
        }
    },
    beforeUpdate(){
       let reg1=/^1[3-9]\d{9}$/;
       if(reg1.test(this.value1)==true){
           this.active1='#43a5ff';
        if(this.value3==this.value4){
            this.color3='#43a5ff';
        }
       }else if(reg1.test(this.value1)==false){
           this.active1='#f2f2f2';
       }
    }
}
</script>
<style scoped lang='less'>
div.passback{
    height: 100%;
  div.list{
        font-size:.28rem;
        display: flex;
        height: .74rem;
        align-items: center;
        padding: 0 .25rem;
        justify-content: space-between;
        margin-top: .46rem;
        div.input{
            display: flex;
            width: 5rem;
            border: 1px solid #cccccc;
            input{
                height: .68rem;
            }
            input.yzm{
                width: 2.5rem;
                height: .9rem;
                border: none;
                border: 1px solid #ccc;
                text-indent: .35rem;
            }
            input.yzm::-webkit-input-placeholder{
                color: #C8C9CF;
            }
            justify-content: space-between;
        }
            div.input2{
                border: none;
                width: 5rem;
                button{
                    background-color: #f2f2f2;
                    color: #999999;
                    border: none;
                }
            }
            div.eye{
                padding-right: .02rem;
                align-items: center;
            }
    }
    button.sub{
        color: #999999;
        width: 75%;
        margin: 1.3rem auto;
        height: 1rem;
        background-color: #f2f2f2;
        border: none;
        margin-left: 50%;
        transform: translate(-50%);
         div.van-button__content{
       width: 100%;
            text-align: center;
    }
    }
    div.van-button__content{
        width: 80.9px;
    text-align: center;
    }
}
</style>