<template>
    <div>
      <mt-header fixed class="top" title="通知早知道">
      </mt-header>

      <div class="content">
        <div class="xian" v-if="!rows.length">
          <div class="wu">暂时没有任何消息</div>
        </div>
        <ul v-for="item in rows">
          <li>
            <router-link :to="{name:'newsdetail',query:{newsid:item.newsId}}" class="router">
              <div class="picture">
                <img src="../../img/iconfont_grey.png" alt="">
              </div>
              <div class="detail">
                <h4 class="title">{{item.title}}</h4>
                <div class="time">{{item.currentTime}}</div>
                <div class="neirong">{{item.author}}</div>
              </div>
            </router-link>
          </li>
        </ul>
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
  import{getNewsList}from"../../api/api"
    export default {
      data(){
          return{
              rows:[],
            type:2
          }
      },
      created(){
          this.getdata()
      },
      methods:{
        selected(num){
          this.type=num;
          document.body.scrollTop=0;
        },
          getdata(){
              var _this=this;
            getNewsList({page:1,rows:10,type:2}).then(function (res) {
              console.log(res);
              if(res.data.code==1){
                  _this.rows=res.data.rows;
              }
            })
          }
      }
    }
</script>

<style scoped lang="less">
@import "../../css/public.less";
  .content{
    .xian{
      position: relative;
      top: 50px;
      border-bottom: 1px solid #cccccc;
      height: 44px;
      .wu{
        position: absolute;
        font-size: 20px;
        left: 108px;
        bottom: -10px;
        z-index: 100;
        width: 180px;
        background: #ffffff;
        text-align: center;
      }
    }
    .router{
      text-decoration: none;
      color: #0f0f0f;
      display: flex;
      padding: 10px;
      border-bottom: 1px solid #cccccc;
      .detail{
        margin: 5px 0 0 30px;
        .time{
          margin-top: 10px;
        }
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
