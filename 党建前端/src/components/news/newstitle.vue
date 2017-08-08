<template>
    <div>
      <mt-header fixed class="top" :title="title">
      <span slot="left" @click="back">
        <i class="icon iconfont icon-fanhui"></i>
      </span>
      </mt-header>
      <div class="content">
        <ul v-for="item in items">
          <li>
            <router-link :to="{name:'newsdetail',query:{newsid:item.newsId}}">
              <div class="picture div">
                <img class="new" :src=item.pic alt="">
              </div>
              <div class="detail div" >
                <h4 class="title">{{item.title}}</h4>
                <div class="down">
                  <div class="author">{{item.author}}</div>
                  <div class="time">{{item.currentTime}}</div>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
        <div class="xian" v-if="!items.length">
          <div class="wu">暂时没有任何消息</div>
        </div>
      </div>
    </div>
</template>

<script>
  import{getNewsList,allNewsType} from "../../api/api"
  import { Indicator } from 'mint-ui';
    export default {
        data(){
            return{
              title:'',
              items:[],
              type:this.$route.query.type
            }
        },
      created(){
            this.getdata();
      },
      methods:{
        back(){
          this.$router.go(-1) ;
          Indicator.close();
        },
        getdata(){
            var _this=this;
          Indicator.open('加载中...');
            getNewsList({page:1,rows:10,type:this.type}).then(function (res) {
              Indicator.close();
              if(res.data.code==1){
                  _this.items=res.data.rows;
                  var num=parseFloat(_this.type);
                  _this.title=allNewsType.map(function (item) {
                    if(item.type==num){
                        return item.text
                    }
                  }).toString();
                 _this.title= _this.title.replace(/,/g,'');
              }
            }).catch(function () {
            })
        }
      }
    }
</script>

<style scoped lang="less">
  @import "../../css/public";
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
    a{
      display: flex;
      padding: 5px 0;
      text-decoration: none;
      .div{
        margin:0 10px;
      }
    }
    .picture{
      width:35%;
      .new{
        height: 85px;
        width:100%;
      }
    }
    .detail{
      position: relative;
      width:60%;
      margin-top: -10px;
      .down{
        display: flex;
        font-size: 10px;
        position: absolute;
        width: 168px;
        bottom:0;
        justify-content:space-between;
      }
    }
  }
</style>
