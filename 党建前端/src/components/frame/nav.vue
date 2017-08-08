<template>
  <!--  <div>
      <router-view></router-view>

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
    </div>-->
</template>

<script>
    export default {
      data(){
        return{
          type:1
        }
      },
      methods:{
        selected(num){
          this.type=num;
        }
      }
    }
</script>

<style scoped lang="less">
  .content{
    margin-top: 44px;
    margin-bottom: 66px;
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
