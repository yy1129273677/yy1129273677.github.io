<template>
    <div>
      <mt-header fixed class="top" title="修改密码">
      <span slot="left" @click="back">
        <i class="icon iconfont icon-fanhui"></i>
      </span>
      </mt-header>
      <div class="content">
        <form action="" id="form">
          <div>旧密码:</div>
          <input type="password" name="oldPwd" v-model="oldpwd" placeholder="请输入旧密码">
          <div>新密码:</div>
          <input type="password" name="newPwd" id="new" v-model="newpwd1" placeholder="请输入新密码">
          <input type="password" id="twice" v-model="newpwd2" placeholder="请再次输入新密码">
          <input type="button" id="button" value="提交" @click="change">
        </form>
      </div>
    </div>
</template>

<script>
  import{updatePwd}from"../../api/api"
    export default {
        data(){
            return{
              oldpwd:'',
              newpwd1:'',
              newpwd2:''
            }
        },
      methods:{
            back(){
                this.$router.go(-1)
            },
        change(){
                var _this=this;
                var data=new FormData();
                data.append('oldPwd',this.oldpwd);
                data.append('newPwd',this.newpwd1);
                if(this.newpwd1==this.newpwd2){
                  updatePwd(data).then(function (res) {
                    console.log(res)
                    if(res.data.code==1){
                        alert("修改成功")
                    }else {
                        alert(res.data.msg)
                    }
                  })
                }else{
                    alert("两次输入的密码不一致")
                }
        }
      }
    }
</script>

<style lang="less" scoped>
  @import "../../css/public";
  .content{
    form{
      input{
        width:90%;
        height: 44px;
        border:1px solid #cccccc;
        margin:0 5%;
        padding: 10px;
        border-radius: 5px;
      }
      div{
        width:90%;
       margin-left: 5%;
        margin-top: 10px;
        margin-bottom: -20px;
        font-size: 16px;

      }
    }
    #button{
      height: 34px;
      width:40%;
      margin: 20px 100px;
      background: indianred;
      border-radius: 5px;
      border:1px solid indianred;
    }
  }
</style>
