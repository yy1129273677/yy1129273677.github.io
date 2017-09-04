<template>
    <div>
      <mt-header fixed class="top" title="我的党建">
      </mt-header>
      <div class="content">
        <div class="up">
          <div class="picture">
            <form action="">
              <input type="file" id="file">
              <img class="img" v-if="!data.header" src="../../img/头像@2x.png" alt="">
              <img class="img" v-if="data.header" :src="data.header" alt="">
            </form>
          </div>
          <div class="wenzi" v-if="!data.username">
            <router-link to="">马上登陆，获取更多党建咨询</router-link>
          </div>
          <div class="wenzi" v-if="data.username">
            <router-link to="">{{data.username}}</router-link>
          </div>
        </div>
        <div class="down">
          <ul>
            <li>
              <router-link :to="{name:'personmsg'}" id="geren">
                <img class="shuoming" src="../../img/个人信息@2x.png" alt="">
                <div>个人信息</div>
                <img class="gengduo" src="../../img/形状-7-拷贝-5@2x.png" alt="">
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'personpoint'}" id="jifen">
                <img class="shuoming" src="../../img/量化积分icon@2x.png" alt="">
                <span>个人量化积分</span>
                <img class="gengduo" src="../../img/形状-7-拷贝-5@2x.png" alt="">
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'changepwd'}" id="xiugai">
                <img class="shuoming" src="../../img/修改密码icon@2x.png" alt="">
                <span>修改密码</span>
                <img class="gengduo" src="../../img/形状-7-拷贝-5@2x.png" alt="">
              </router-link>
            </li>
          </ul>
        </div>
        <input type="button" id="button" @click="logout" value="退出登录">
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
  import{getUserInfo}from"../../api/api"
    export default {
        data(){
            return{
                data:{},
              type:3
            }
        },
      created(){
            this.getdata();
      },
      methods:{
        selected(num){
          this.type=num;
          document.body.scrollTop=0;
        },
          getdata(){
            var _this=this;
            getUserInfo('').then(function (res) {
              if(res.data.code==1){
                  _this.data=res.data.data;
              }
            })
          },
        logout(){
          localStorage.setItem("token",'')
          location.reload();
          this.$router.push('/login')
        }
      }
    }
</script>

<style scoped lang="less">
@import "../../css/public";
  .content{
    .up{
      width:100%;
      height:40%;
      background: red;
      border-top: 1px solid #ffffff;
      text-align: center;
      padding: 20px;
      a{
        color: #ffffff;
        font-size: 16px;
      }
      input{
        display: none;
      }
      .wenzi{
        margin-top: -40px;
      }
      .img{
        height: 136px;
        width: 136px;
        border-radius: 50%;
      }
    }
    .down{
      li a{
        display: flex;
        text-decoration: none;
        color: #0f0f0f;
        height: 85px;
        line-height: 85px;
        border:1px solid #cccccc;
        position: relative;
        .shuoming{
          padding: 10px;
        }
        .gengduo{
          height: 20px;
          position: absolute;
          top:0;
          bottom: 0;
          margin:auto;
          right: 10px;
        }
      }
    }
    #button{
      height: 34px;
      width:80%;
      margin: 10px 10%;
      background: indianred;
      border-radius: 5px;
      border:1px solid indianred;
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
