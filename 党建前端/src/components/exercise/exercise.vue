<template>
    <div>
      <mt-header fixed class="top" title="党员与运动">
      <span slot="left" @click="back">
        <i class="icon iconfont icon-fanhui"></i>
      </span>
      </mt-header>

      <div class="content">
        <form action="" class="form">
            <input type="text" placeholder="在党员云互动搜索">
            <img src="../../img/搜索_搜索_1_.png" alt="">
        </form>
        <div class="list">
          <ul v-for="item in items">
            <li>
              <router-link :to="{name:'postdetail',query:{forumId:item.forumId}}">
                <div class="up">
                  <div class="zhong">
                    <img class="touxiang" v-if="!item.header" src="../../img/头像.png" alt="">
                    <img class="touxiang" v-if="item.header" :src="item.header" alt="">
                    <div class="left">
                      <div class="xingming">姓名：{{item.username}}

                      </div>
                      <div class="shijian">
                        <img src="../../img/时间.png" alt="">
                        <div class="time">{{item.currentTime}}</div>
                        <img src="../../img/声音.png" alt="">
                        <div>公开</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="down">{{item.content}}</div>
                <img class="dangyuan" src="../../img/党员互动icon.png" alt="">
              </router-link>
            </li>
          </ul>
        </div>
        <div class="tianjia">
          <router-link :to="{name:'discussion'}">
            <img src="../../img/发布btn.png" alt="">
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
  import{forumList}from"../../api/api"
    export default {
      data(){
        return{
            items:[]
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
          forumList('').then(function (res) {
            console.log(res);
            if(res.data.code==1){
                _this.items=res.data.rows;
            }
          })
        }
      }
    }
</script>

<style scoped lang="less">
  @import "../../css/public";
  .content{
    background: #cccccc;
    .form{
      position: relative;
      input{
        border:1px solid #cccccc;
        width: 90%;
        margin: 20px 5%;
        height: 40px;
        border-radius: 5px;
        text-align: center;
      }
      img{
        position: absolute;
        top: 42px;
        left: 30%;
      }
    }
    .list li{
      position: relative;
      border:1px solid #cccccc;
      margin:10px 0;
      background: #ffffff;
      padding: 10px;
      .dangyuan{
        height: 22px;
        position: absolute;
        top: 10px;
        right: 20px;
      }
      .up{
        .touxiang{
          height: 50px;
          width: 50px;
          border-radius: 50%;
          margin-right: 10px;
        }
        .zhong{
          display: flex;
          align-items: center;
          .xingming{
            margin-left: 10px;
          }

          .shijian{
            display: flex;
            align-items: center;
            img{
              height: 14px;
              margin:3px 5px 0 2px;
            }
          }
        }
      }
      .down{
        height: 50px;
        margin-top: 10px;
      }
    }
    .tianjia{
      position: fixed;
      bottom: 10px;
      right: 10px;
    }
  }
</style>

