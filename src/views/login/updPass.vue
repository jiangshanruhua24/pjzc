<template>
  <div class="updpass">
       <NavBar>
          <div slot="center">修改密码</div>
      </NavBar>
      <div class="list">
          <span>旧密码</span>
          <div class="input eye">
              <van-field v-model="value1" type="text"  placeholder="请输入新密码" />
          </div>
      </div>
       <div class="list">
          <span>新密码</span>
          <div class="input eye">
              <van-field v-model="value2" :type="tag1"  placeholder="请输入新密码" />
              <van-icon name="eye-o" :color="color1" @click="change(1)"/>
          </div>
      </div>
      <div class="list">
          <span>确认</span>
          <div class="input eye">
              <van-field v-model="value3" :type="tag2" placeholder="再次输入新的密码" />
              <van-icon name="eye-o" :color="color2" @click="change(2)"/>
          </div>
      </div>
      <van-button class="sub" type="primary" @click="sub" :color="color3">提交</van-button>    
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
export default {
    data(){
        return{
            color1:'#999999',
            color2:'#999999',
            tag1:'password',
            tag2:'password',
            color3:'#f2f2f2',
            value1:'',
            value2:'',
            value3:'',
        }
    },
    methods:{
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
        },
        sub(){
            if(this.value1==this.value2){
                this.$toast.fail('新密码不能和旧密码相同');
                 return;
            }if(this.value2!=this.value3){
                this.$toast.fail('两次密码不一致');
            }
        }
    },
    beforeUpdate(){
        if(this.value1!=''&&this.value2!=''&&this.value2==this.value3){
            this.color3='#43a5ff';
        }else{
            this.color3='#f2f2f2';
        }
    },
components:{
    NavBar
}
}
</script>

<style scoped lang='less'>
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
                width: 5.05rem;
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
</style>