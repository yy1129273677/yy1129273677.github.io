<template>
    <div class="choose">
      <mt-header fixed class="top" title="民主评议">
      <span slot="left" @click="back">
        <i class="icon iconfont icon-fanhui"></i>
      </span>
      </mt-header>
      <div class="content">
        <div class="up">
          <div class="title">{{data.titleDesc}}</div>
          <div class="neirong" v-html="data.content"></div>
        </div>
        <div class="down">
          <select class="box xuanze1 xuanzhe" v-model="value">
            <option value="0" name="" >请选择</option>
            <option :value="item.id" v-for="item in rows">{{item.branch}}</option>
          </select>
          <input type="button" class="next" value="下一步" @click="next">
        </div>
      </div>
    </div>
</template>

<script>
  import{findAll,getComment}from "../../api/api"
    export default {
        data(){
            return{
              data:{},
              rows:[],
              value:0
            }
        },
      created(){
            this.getdata();
      },
      methods:{
        back(){
            this.$router.go(-1)
        },
        next(){
          if(this.value!=0){
            this.$router.push('/judgelist?id='+this.value)
          }
        },
        getdata(){
            var _this=this;
          getComment('').then(function (res) {
            _this.data=res.data
          });
          findAll('').then(function (res) {
            if(res.data.code==1){
                _this.rows=res.data.rows;
            }
          })
        }
      }
    }
</script>

<style lang="less" scoped>
  @import "../../css/public";

  .content{
    .up{
      margin:70px 10%;
      .title{
        font-size: 20px;
        text-align: center;
        margin-bottom: 30px;
      }
      .neirong {
        font-size: 16px;
      }
    }
    .down{
      margin:100px 35px;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
    }
    .next{
      border:1px solid red;
      background: red;
      color: #ffffff;
      border-radius: 5px;
      height:44px ;
      line-height: 44px;
      margin: 10px;
      padding:0 10px;
      text-align: center;
    }
    .xuanzhe{
      width: 60%;
      text-align: left;
      padding-left: 25px;
      margin-left: 10%;
      height: 44px;
      border-radius: 5px;
      line-height: 44px;
      background: red;
      color: #ffffff;
    }
  }
</style>
