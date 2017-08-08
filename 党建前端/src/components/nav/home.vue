<template>
    <div>
      <mt-header fixed class="top">
        <div class="left" slot="left">
          <img src="../../img/logo.png" alt="">
        </div>

        <router-link :to="{name:'login'}" slot="right" class="right" v-if="!token">
          登录
        </router-link>
      </mt-header>
      <div class="content">
        <mt-swipe :auto="3000" class="swiper">
          <mt-swipe-item>
            <img src="../../img/banner.png" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../../img/banner.png" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../../img/banner.png" alt="">
          </mt-swipe-item>
        </mt-swipe>
        <ul :style="{backgroundImage:'url('+bg1+')'}">
            <li>
              <router-link :to="{name:'newstitle',query:{type:0}}">
                <img src="../../img/icon_01.png" alt="">
                <div>信工新闻眼</div>
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'seekorgan'}">
                <img src="../../img/icon_02.png" alt="">
                <div>党员与组织</div>
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'exercise'}">
                <img src="../../img/icon_03.png" alt="">
                <div>党员与运动</div>
              </router-link>
            </li>
            <li>
              <router-link  :to="{name:'newstitle',query:{type:3}}">
                <img src="../../img/icon_04.png" alt="">
                <div>党建一点通</div>
              </router-link></li>
            <li>
              <router-link :to="{name:'newstitle',query:{type:5}}">
                <img src="../../img/icon_05.png" alt="">
                <div>党员风采录</div>
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'newstitle',query:{type:4}}">
                <img src="../../img/icon_06.png" alt="">
                <div>党建大事记</div>
              </router-link>
            </li>
          </ul>
        <div class="eight">
          <img src="../../img/banner01.png" alt="">
        </div>
        <div class="pic-nav" :style="{backgroundImage:'url('+bg+')'}">
          <router-link class="left div" :to="{name:'home'}"></router-link>
          <div class="right div">
            <router-link :to="{name:'newstitle',query:{type:6}}" class="up"></router-link>
            <router-link :to="{name:'discussion'}" class="down"></router-link>
          </div>
          <div class="right div">
            <router-link :to="{name:'newstitle',query:{type:7}}" class="up"></router-link>
            <router-link :to="{name:'newstitle',query:{type:8}}" class="down"></router-link>
          </div>
        </div>
      </div>
      <mt-tabbar fixed class="footer">
        <mt-tab-item  class="nav">
          <router-link :to="{name:'home'}">
            <div :class="{active:type==1}" @click="selected(1)">
              <i class="icon iconfont icon-party"></i>
              <div class="text">党</div>
            </div>
          </router-link>

        </mt-tab-item>

        <mt-tab-item class="nav" >
          <router-link :to="{name:'inform'}">
            <div :class="{active:type==2}" @click="selected(2)">
              <i class="icon iconfont icon-xiaoxi"></i>
              <div class="text">通知早知道</div>
            </div>
          </router-link>
        </mt-tab-item>

        <mt-tab-item  class="nav" >
          <router-link :to="{name:'my'}">
            <div :class="{active:type==3}" @click="selected(3)">
              <i class="icon iconfont icon-yonghu"></i>
              <div class="text">我的党建</div>
            </div>
          </router-link>
        </mt-tab-item>
      </mt-tabbar>
    </div>
</template>

<script>
    export default {
        data(){
            return{
              type:1,
              token:localStorage.token,
              bg:require("../../img/专栏.png"),
              bg1:require("../../img/bt_bg.png"),
            }
        },
      created(){
      },
      methods:{
            selected(num){
                this.type=num;
            }
      }
    }
</script>

<style scoped lang="less" >
.top{
  height: 44px;
  background-color: red;
  z-index: 100;
  .left{
    img{
      height: 40px;
    }
  }
  .right{
    padding-right: 10%;
  }
}
.content{
  margin-top: 44px;
  margin-bottom: 66px;
  .swiper{
    height: 200px;
    img{
      height: 100%;
      width:100%;
    }
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
   /* background: url("../../img/bt_bg.png") no-repeat;*/
    background-size: cover;
    li{
      margin:10px 20px;
      text-align: center;
    }
  }
  .eight{
    img{
      width:100%;
    }
  }
  .pic-nav{
    margin-top: -14px;
    width:100%;
    height: 164px;
    background-size: cover;
    display:flex;
    a{
      display: block;
    }
    .div{
      width:33.33%;
      height:100%;
    }
    .up{
      height:50%;
      width:100%;
    }
    .down{
      height:50%;
      width:100%;
    }
  }
}
.footer{
  .icon{
    font-size: 32px;
  }
  .text{
    font-size: 18px;
  }
  .nav{
    color: #404040;
    .active{
      color: red;
    }
  }
}
</style>
