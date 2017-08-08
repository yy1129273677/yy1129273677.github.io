<template>
    <div class="minzhujudge">
      <mt-header fixed class="top" title="民主评议">
      <span slot="left" @click="back">
        <i class="icon iconfont icon-fanhui"></i>
      </span>
      </mt-header>
      <div class="content">
        <div class="zhong">
          <button class="zongjie" @click="person">个人总结</button>
          <button class="pingyi" @click="minzhu">民主评议</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
      methods:{
            back(){
                this.$router.go(-1)
            },
        person(){
          this.$router.push('/personsum')
        },
        minzhu(){
          this.$router.push('/choose')
        }
      }
    }
</script>

<style lang="less" scoped>
  @import "../../css/public";
  .minzhujudge{
    height:100%;
  }
  .content{
    height:80%;
    margin-top: 0;
    margin-bottom: 0;
    display: flex;
    .zhong{
      margin:auto;
      button{
        width: 80%;
        background: red;
        color: #ffffff;
        font-size: 16px;
        margin: 10px 10%;
        border-radius: 5px;
        border: none;
        padding: 10px;
      }
    }
  }
</style>
