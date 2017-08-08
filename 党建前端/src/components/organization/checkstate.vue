<template>
    <div>
      <mt-header fixed class="top" title="审核状态">
      <span slot="left" @click="back">
        <i class="icon iconfont icon-fanhui"></i>
      </span>
      </mt-header>
      <div class="content">
        <div class="picture">
          <div v-if="type==0">
            <img class="img" src="../../img/审核中.png" alt="">
            <div class="wenzi">
              正在审核中
            </div>
          </div>
          <div v-if="type==1">
            <img class="img" src="../../img/通过.png" alt="">
            <div class="wenzi">
              审核通过
            </div>
          </div>
          <div v-if="type==2">
            <img class="img" src="../../img/失败.png" alt="">
            <div class="wenzi">
              审核失败
            </div>
          </div>
        </div>
        <div class="tijiao">
          <router-link :to="{name:'seekorgan'}" >关闭</router-link>
        </div>
      </div>
    </div>
</template>

<script>
  import{checkByUserId,reportInfo}from"../../api/api"
    export default {
        data(){
            return{
                type:0
            }
        },
      created(){
        this.getdata();
      },
      methods:{
        back(){
          this.$router.go(-1)
        },
        getdata(){
          var _this=this;
          reportInfo('').then(function (res) {
            _this.type=res.data.type
          })
        }
      }
    }
</script>

<style lang="less" scoped>
  @import "../../css/public";
  .content{
    .tijiao{
      height: 50px;
      line-height: 50px;
      width: 80%;
      background: red;
      margin: 50px 10%;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      a{
        color: #ffffff;
      }
    }
    img{
      height: 140px;
    }
    .picture{
      text-align: center;
      padding: 50px;
    }
    .wenzi{
      font-size: 16px;
      margin:25px auto;
    }
  }
</style>
