<template>
    <div class="personpoint">
      <mt-header fixed class="top" title="个人量化积分">
      <span slot="left" @click="back">
        <i class="icon iconfont icon-fanhui"></i>
      </span>
      </mt-header>
      <div class="content">
        <div class="picture">
          <div class="sum">{{total}}</div>
        </div>
        <router-link class="mingxi" :to="{name:'jifendetail'}">
          <div><img src="../../img/积分明细icon@2x.png" alt="">
          </div>
          <div class="wenzi">积分明细</div>
        </router-link>
        <div class="guize">
          <div>积分规则</div>
          <div><img src="../../img/问号icon@2x.png" alt=""></div>
        </div>
        <div class="detail">
          <ul>
            <li>
              <div>查看通知</div>
              <div>1</div>
            </li>
            <li>
              <div>查看新闻眼</div>
              <div>0.1</div>
            </li>
            <li>
              <div>查看积分</div>
              <div>1</div>
            </li>
            <li>
              <div>互动发帖</div>
              <div>0.1</div>
            </li>
            <li>
              <div>参与民主评议</div>
              <div>2</div>
            </li>
            <li>
              <div>学习党建知识</div>
              <div>1</div>
            </li>
            <li>
              <div>登录app</div>
              <div>0.1</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import{getIntegralList}from"../../api/api"
    export default {
        data(){
            return{
                total:""
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
              getIntegralList({page:1,rows:10}).then(function (res) {
                if(res.data.code==1){
                    _this.total=res.data.total
                }
              })
            }
      }
    }
</script>

<style lang="less" scoped>
  @import "../../css/public";
  .personpoint{
    height:100%;
  }
  .content{
    height:100%;
    .picture{
      background: url("../../img/jifen.png") no-repeat;
      height: 22%;
      width:100%;
      background-size: cover;
      display: flex;
      font-size: 56px;
      color: #ffffff;
      .sum{
        margin:auto;
      }
    }
    .mingxi{
      display: flex;
      border:1px solid #cccccc;
      padding: 10px;
      align-items: center;
      font-size: 20px;
      .wenzi{
        margin:0 20px;
      }
    }
    .guize{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      background: #cccccc;
      font-size: 16px;
    }
    .detail{
      ul li{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        font-size: 16px;
        border-bottom: 1px solid #cccccc;
      }
    }
  }
</style>
