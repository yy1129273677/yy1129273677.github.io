<template>
    <div>
      <mt-header fixed class="top" title="个人党建信息">
      <span slot="left" @click="back">
        <i class="icon iconfont icon-fanhui"></i>
      </span>
        <div slot="right" @click="edit" v-if="show">编辑</div>
        <div slot="right" @click="baocun" v-if="!show">保存</div>
      </mt-header>
      <div class="content">
        <div class="detail">
          <form id="form" action="">
            <div class="div">
              <div>头像</div>
              <input type="file" id="file" disabled class="kexiu">
              <img id="img" :src="data.header" alt="" @click="img">
            </div>
            <div  class="div">
              <div>姓名</div>
              <input type="text" name="username" v-model="data.username" disabled   class="kexiu">
            </div>
            <div class="div">
              <div>身份证号</div>
              <input type="text" disabled="true" v-model="data.idCard">
            </div>
            <div  class="div">
              <div>当前身份</div>
              <input type="text" name="partyIdentity" v-model="data.partyIdentity" disabled class="kexiu">
            </div>
            <div  class="div">
              <div>民族</div>
              <input type="text" name="nation" disabled v-model="data.nation" class="kexiu">
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
  import{getUserInfo,modifyInfo,uploadBase64}from"../../api/api"
    export default {
        data(){
            return{
              data:{},
              show:true,
              userinfo:{
                username:'',
                partyIdentity:'',
                nation:''
              }
            }
        },
      created(){
        this.getdata();
      },
      methods:{
        back(){
          this.$router.go(-1)
        },
        img(){
            var _this=this;
            var input=document.getElementById("file");
            input.click();
            input.onchange=function () {
             var file=this.files[0];
             var fr=new FileReader();
             fr.readAsDataURL(file);
             fr.onload=function () {
               var str=this.result;
               _this.data.header=str;
               str=str.split(",")[1];
               var data=new FormData();
               data.append("myFile",str);
               uploadBase64(data).then(function (res) {
               var data=new FormData();
               data.append("header",res.data.url);
                 modifyInfo(data).then(function (res) {
                   console.log(res)
                 })
               })
             }

            }
        },
        edit(){
           this.show=!this.show;
          var input=document.getElementsByTagName("input");
          for(var i=0;i<input.length;i++){
              input[i].removeAttribute("disabled")
          }
        },
        baocun(){
          this.show=!this.show;
          var _this=this;
          var data=new FormData();
          for(var i in this.userinfo){
            data.append(i,this.data[i])
          }
        modifyInfo(data).then(function (res) {
           if(res.data.code==1){
               alert("修改成功")
           }else{
               alert(res.data.msg)
           }
        });
          var input=document.getElementsByTagName("input");
          for(var i=0;i<input.length;i++){
            input[i].setAttribute("disabled",'true')
          }
        },
        getdata(){
            var _this=this;
          getUserInfo('').then(function (res) {
            if(res.data.code==1){
                _this.data=res.data.data;
            }
          })
        }
      }
    }
</script>

<style lang="less" scoped>
  @import "../../css/public";
  .content{
    #file{
      display: none;
    }
    form{
      img{
        height: 60px;
        width: 60px;
        border-radius: 50%;
      }
      .div{
        font-size: 16px;
        line-height: 32px;
        display: flex;
        padding: 10px;
        align-items: center;
        border-bottom:1px solid #cccccc;
        justify-content: space-between;
      }
      input{
        width:80%;
        line-height: 32px;
        border: none;
      }
    }
  }
</style>
