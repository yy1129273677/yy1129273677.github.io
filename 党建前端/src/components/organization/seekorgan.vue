<template>
  <div>
    <mt-header fixed class="top" title="党员找组织">
      <span slot="left" @click="back">
        <i class="icon iconfont icon-fanhui"></i>
      </span>
    </mt-header>

    <div class="content">
      <div class="picture">
        <img src="../../img/banner1.png" alt="">
      </div>
      <ul>
        <li>
          <router-link :to="{name:'thinking'}">
            <img src="../../img/icon2.png" alt="">
            <div class="wenzi">思想汇报</div>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <img src="../../img/icon3.png" alt="">
            <div class="wenzi">党费缴纳</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'newstitle',query:{type:1}}">
            <img src="../../img/icon4.png" alt="">
            <div class="wenzi">掌上组织生活</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'minzhujudge'}">
            <img src="../../img/icon_01.png" alt="">
            <div class="wenzi">民主评议</div>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <img src="../../img/icon5.png" alt="">
          <div class="wenzi">流动党员找组织</div>
          </router-link>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {}
    },
    methods: {
      back(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../css/public";
  .content{
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        margin: 20px;
        width:21%;
        a{
          display: block;
          color: #000;
          font-size: 16px;
          text-decoration: none;
          text-align: center;
          img{
            height: 80px;
            width: 80px;
          }
        }
      }
    }
    .picture{
      img{
        width:100%;
      }
    }
  }
</style>

