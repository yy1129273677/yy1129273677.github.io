<template>
    <div id="login">
      <mt-header fixed class="top" title="登录">
      <span slot="left" @click="back">
        <i class="icon iconfont icon-fanhui"></i>
      </span>
      </mt-header>
      <div class="content">
        <div class="picture">
          <img src="../../img/logo.png" alt="">
        </div>
        <form action="" id="form">
          <input class="shuru" type="text" name="id_card" v-model="username" placeholder="用户名：">
          <input class="shuru" type="password" name="password" v-model="pwd" placeholder="密码：">
          <input type="button" id="button" value="登录" @click="login">
        </form>
      </div>
    </div>
</template>

<script>
  import{userLogin}from"../../api/api"
  import { Toast } from 'mint-ui';
    export default {
        data(){
            return{
              username:'',
              pwd:''
            }
        },
      methods:{
        back(){
          this.$router.push('/home')
        },
        login(){
          var _this=this;
          var data=new FormData();
          data.append("id_card",this.username);
          data.append("password",this.pwd);
          userLogin(data).then(function (res) {
            console.log(res);
            if(res.data.code==1){
                localStorage.setItem("token",res.data.token);
                location.reload()
              _this.$router.push('/home')
            }else{
              Toast({
                message: res.data.msg,
                position:'top',
                iconClass:'icon iconfont icon-8',
              });
            }
          })
        }
      }
    }
</script>

<style lang="less" scoped>
  @import "../../css/public";
  #login{
    height:100%;
  }
  .content{
    background: red;
    height:100%;
    margin-bottom: 0;
    .picture{
      padding: 20px 10%;
      img{
        width:80%;
      }
    }
    .shuru{
      margin: 10px 10%;
      line-height: 44px;
      width:80%;
      border-radius: 5px;
      border:2px solid yellowgreen;
      background: red;
    }
  }
  #button{
    height: 34px;
    width:80%;
    margin: 10px 10%;
    background: indianred;
    border-radius: 5px;
    border:1px solid indianred;
  }
</style>
