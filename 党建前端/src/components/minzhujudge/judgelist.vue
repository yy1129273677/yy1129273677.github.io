<template>
    <div>
      <mt-header fixed class="top" title="参评党员">
      <span slot="left" @click="back">
        <i class="icon iconfont icon-fanhui"></i>
      </span>
      </mt-header>
      <div class="content">
        <ul v-for="item in rows">
          <li @click="skip(item.id)">
            <div class="left">
              <div class="pic"><img :src="item.header" alt=""></div>
              <div class="name">{{item.username}}</div>
            </div>
            <div class="right">
              {{item.branchName}}
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import{getUserList,isComment,judgeComment}from "../../api/api"
  import { Toast } from 'mint-ui';
    export default {
        data(){
            return{
              id:this.$route.query.id,
              rows:[],
              commentid:'',
              otherid:''
            }
        },
      created(){
        this.getdata()
      },
      methods:{
        back(){
          this.$router.go(-1)
        },
        skip(el){
          var _this=this;
          this.otherid=el;
          isComment({comment_id:this.commentid,other_user_id:this.otherid}).then(function (res) {
            if(res.data.code==1){
                _this.$router.push('/othersummary?userid='+_this.otherid+'&commentid='+_this.commentid)
            }else{
              Toast({
                message: res.data.msg,
              });
            }
          })
        },
        getdata(){
          var _this=this;
          getUserList({page:1,rows:10,select_branch:this.id}).then(function (res) {
              console.log(res);
            if(res.data.code==1){
              _this.rows=res.data.rows
            }
          });
          judgeComment('').then(function (res) {
              console.log(res);
            _this.commentid="CEBBD1A4FF2147C8B9ED0CEA6AE90BCF";
          })
        }
      }
    }
</script>

<style lang="less" scoped>
  @import "../../css/public";
  .content{
    li{
      display: flex;
      align-items: center;
      border-bottom:1px solid #0f0f0f;
      justify-content: space-between;
      padding: 5px 20px;
      font-size: 16px;
      .left{
        display: flex;
        align-items: center;
        margin-right: 10px;
      }
    }
    img{
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }
    .pic{
      height: 44px;
      width: 44px;
      border:1px solid #cccccc;
      margin-right: 10px;
    }

  }
</style>
