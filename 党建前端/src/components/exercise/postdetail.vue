<template>
    <div>
      <mt-header fixed class="top" title="帖子详情">
      <span slot="left" @click="back">
        <i class="icon iconfont icon-fanhui"></i>
      </span>
      </mt-header>

      <div class="content">
        <div class="detail">
          <div class="up">
            <div class="picture">
              <img class="img" :src="data.header" alt="">
            </div>
            <div class="right">
              <div class="name">作者：{{data.username}}</div>
              <div class="time">{{data.currentTime}}</div>
            </div>
          </div>
          <div class="down">{{data.content}}</div>
          <div class="shuoming">回复的内容：</div>
        </div>
        <div class="detail">
          <ul v-for="item in rows">
            <li>
              <div class="up">
                <div class="picture">
                  <img class="img" :src="item.header" alt="">
                </div>
                <div class="right">
                  <div class="name">留言人：{{item.username}}</div>
                  <div class="time">{{item.timeFormat}}</div>
                </div>
              </div>
              <div class="down">{{item.comment}}</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="huifu">
        <input type="text" name="comment" v-model="comment" id="input" placeholder="请输入回复的内容">
       <input type="button" id="button" value="回复" @click="reply">
      </div>
      <a name="maodian"></a>
    </div>
</template>

<script>
  import{forumDetail,addComment}from"../../api/api"
  import { Toast } from 'mint-ui';
    export default {
        data(){
            return{
              data:{},
              forumid:this.$route.query.forumId,
              rows:[],
              comment:''
            }
        },
      created(){
        this.getdata();
      },
      methods:{
          back(){
              this.$router.go(-1)
          },
        reply(){
          this.addgata();
        },
        getdata(){
              var _this=this;
              forumDetail({forum_id:this.forumid}).then(function (res) {
                if(res.data.code==1){
                    _this.data=res.data;
                    _this.rows=res.data.commentList
                }
              })
        },
        addgata(){
          var _this=this;
          var data=new FormData();
          data.append("forum_id",this.forumid);
          data.append("comment",this.comment);
          addComment(data).then(function (res) {
            if(res.data.code==1){
              Toast({
                message: res.data.msg,
                position:'top',
                iconClass: 'icon iconfont icon-chenggong',
              });
              _this.getdata();
              _this.comment='';
              document.body.scrollTop=document.body.scrollHeight;
            }else{
              Toast({
                message: res.data.msg,
                position:'top',
                iconClass:'icon iconfont icon-8',
              });
            }
          })
        }
      }
    }
</script>

<style lang="less" scoped>
@import "../../css/public";
  .content{
    .detail{
      img{
        height: 70px;
        width: 70px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .up{
        display: flex;
        align-items: center;
        padding: 10px;
        border-bottom:1px solid #cccccc;
        font-size: 16px;
      }
      .down{
        font-size: 20px;
        border-bottom: 5px solid red;
        padding: 20px;
        height: 125px;
      }
      .shuoming{
        padding: 10px;
        font-size: 20px;
      }
    }
  }
  .huifu{
    display: flex;
    position: fixed;
    bottom:0;
    width:100%;
    input{
      border:1px solid red;
      height: 44px;
    }
  }
  #input{
    width:90%;
  }
#button{
  width:10%;
  background: red;
}
</style>
