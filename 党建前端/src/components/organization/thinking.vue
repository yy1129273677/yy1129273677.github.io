<template>
    <div>
      <mt-header fixed class="top" title="思想汇报">
      <span slot="left" @click="back">
        <i class="icon iconfont icon-fanhui"></i>
      </span>
      </mt-header>
      <div class="content">
        <form action="">
          <input type="file" id="file">
          <div class="jia">
            <img id="img" src="../../img/图片.png" alt="" @click="img">
          </div>
          <div class="tijiao" @click="submit">提交审核</div>
        </form>
      </div>
    </div>
</template>

<script>
  import{uploadBase64,saveImpressTwo}from"../../api/api"
  let arr=[];
    export default {
        data(){
            return{

            }
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
              var img=document.createElement("img");
              var jia=document.getElementsByClassName("jia")[0];
              img.setAttribute("src",str);
              img.style.height="100px";
              img.style.width="100px";
              img.style.marginRight="12px";
              jia.prepend(img);
              str=str.split(",")[1];
              var data=new FormData();
              data.append("myFile",str);
              uploadBase64(data).then(function (res) {
                arr.unshift(res.data.url);
              })
            }

          }
        },
        submit(){
          var _this=this;
          var data=new FormData();
          data.append("pic_list",arr);
          saveImpressTwo(data).then(function (res) {
              console.log(res)
            if(res.data.code==1){
                alert(res.data.msg);
              _this.$router.push('/checkstate');
            }else{
              alert(res.data.msg)
            }
          })
        }
      }
    }
</script>

<style lang="less" scoped>
  @import "../../css/public";
  .content{
    input{
      display: none;
    }
    form{
      padding: 10px;
      img{
        height: 100px;
        width: 100px;
      }
      .tijiao{
        font-size: 20px;
        background: red;
        line-height: 44px;
        width:80%;
        margin-left: 10%;
        text-align: center;
        border-radius: 10px;
        position: fixed;
        bottom:10%;
      }
    }
  }
</style>
