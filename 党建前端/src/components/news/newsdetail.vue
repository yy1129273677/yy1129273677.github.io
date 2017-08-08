<template>
    <div>
      <mt-header fixed class="top" :title="title">
      <span slot="left" @click="back">
        <i class="icon iconfont icon-fanhui"></i>
      </span>
      </mt-header>
      <div class="content">
        <div class="title">{{data.title}}</div>
        <div class="picture">
          <img :src="data.pic" alt="">
        </div>
        <div class="detail" v-html="data.content"></div>
      </div>
    </div>
</template>

<script>
  import{getNewsContent,allNewsType}from"../../api/api"
    export default {
        data(){
            return{
              title:'',
              newsId:this.$route.query.newsid,
              data:{},
            }
        },
      created(){
            this.getdata()
      },
      methods:{
        back(){
            this.$router.go(-1)
        },
        getdata(){
            var _this=this;
          getNewsContent({newsId:this.newsId},localStorage.getItem("token")).then(function (res) {
            if(res.data.code==1){
                _this.data=res.data.data;
              var num=parseFloat(res.data.data.type);
              _this.title=allNewsType.map(function (item) {
                if(item.type==num){
                  return item.text
                }
              }).toString();
              _this.title= _this.title.replace(/,/g,'');
            }
          })
        }
      }
    }
</script>

<style scoped lang="less">
  @import "../../css/public";
  .content{
    .picture{
      img{
        width: 100%;
        height: 300px;
      }
    }
    img{
      width: 100%;
      height: 300px;
    }
    .title{
      text-align: center;
      font-size: 28px;
    }
    .detail{
      line-height: 30px;
      font-size: 16px;
    }
  }
</style>
