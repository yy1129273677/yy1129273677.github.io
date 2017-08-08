<template>
    <div>
      <mt-header fixed class="top" title="我要发帖">
      <span slot="left" @click="back">
        <i class="icon iconfont icon-fanhui"></i>
      </span>
      </mt-header>
      <div class="content">
        <form action="">
          <div class="title">
            <div class="wenzi">
              标题:
            </div>
            <input class="biaoti" type="text" name="content" placeholder="请输入标题">
          </div>
          <textarea class="wenben" placeholder="我要发帖"  name="content" v-model="content"></textarea>
          <input type="button" id="button" value="发表" @click="publish">
        </form>
      </div>
    </div>
</template>

<script>
  import{saveForum}from"../../api/api"
  import { Toast } from 'mint-ui';
  import { Indicator } from 'mint-ui';

    export default {
        data(){
            return{
              content:'',
            }
        },
      methods:{
            back(){
                this.$router.go(-1)
            },
        publish(){
          var _this=this;
          Indicator.open('加载中...');
          var data=new FormData();
          data.append("content",this.content);
          saveForum(data).then(function (res) {
            Indicator.close();
              _this.load=false;
            if(res.data.code==1){
              Toast({
                message: res.data.msg,
                position:'top',
                iconClass: 'icon iconfont icon-chenggong',
              });
              _this.content='';
              _this.$router.push('/exercise')
            } else{
              Toast({
                message: res.data.msg,
                position:'top',
                iconClass:'icon iconfont icon-8',
              });
            }
          }).catch(function () {
            Indicator.close();
          })

        }
      }
    }
</script>

<style lang="less" scoped>
@import "../../css/public";
  .content{
    .title{
      display: flex;
      .biaoti{
        width: 70%;
        height: 44px;
        margin:10px 0 ;
        border:1px solid #cccccc;
        border-radius: 5px;
      }
      .wenzi{
        height: 44px;
        line-height: 44px;
        font-size: 16px;
        margin: 10px 20px 10px;
      }
    }
    .wenben{
      border:1px solid #cccccc;
      border-radius: 5px;
      height: 100px;
      width:90%;
      margin:10px 5%;
    }
    #button{
      height: 34px;
      width:40%;
      margin: 20px 30%;
      background: indianred;
      border-radius: 5px;
      border:1px solid indianred;
    }
  }

</style>
