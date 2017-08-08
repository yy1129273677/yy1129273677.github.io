<template>
    <div>
      <mt-header fixed class="top" title="该党员的个人总结">
      <span slot="left" @click="back">
        <i class="icon iconfont icon-fanhui"></i>
      </span>
      </mt-header>
      <div class="content">
        <div class="picture">
          <ul v-for="item in rows">
            <li>
              <img :src="item.picUrl" alt="">
            </li>
          </ul>
        </div>
        <div class="down">
          <form action="">
            <div class="left">
              <input type="radio" @click="type=0" name="dengji" class="radio">优
              <input type="radio" @click="type=1" name="dengji" class="radio" >良
              <input type="radio" @click="type=2" name="dengji" class="radio">中
              <input type="radio" @click="type=3" name="dengji" class="radio">差
            </div>
            <div class="right">
              <input type="button" value="提交" class="tijiao" @click="submit">
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
  import{getUserSummary,submitSummaryTwo}from "../../api/api"
    export default {
        data(){
            return{
              userid:this.$route.query.userid,
              commentid:this.$route.query.commentid,
              rows:[],
              id:'',
              type:''
            }
        },
      created(){
        this.getdata()
      },
      methods:{
            back(){
                this.$router.go(-1)
            },
        submit(){
          var _this=this;
          console.log(this.type);
          submitSummaryTwo({
            id:this.id,
            other_user_id:this.userid,
            type:this.type,
          }).then(function (res) {
              console.log(res)
              if(res.data.code==1){
                  _this.$router.go(-1)
              }
          })
        },
        getdata(){
          var _this=this;
          getUserSummary({comment_id:this.commentid,user_id:this.userid}).then(function (res) {
              console.log(res);
            _this.rows=res.data.picList;
            _this.id=res.data.tbCommentUser.id;
          })
        }
      }
    }
</script>

<style lang="less" scoped>
  @import "../../css/public";
.content{
  overflow: scroll;
  margin-top: 0;
  ul{
    margin-top: 100px;
  }
  li{
    border:1px solid #0f0f0f;
    height:100px;
    margin:10px ;
    display: flex;
  }
  img{
    height:80px ;
    margin:auto;
    border: 1px solid #cccccc;
  }
  .down{
    font-size: 16px;
    border:1px solid #cccccc;
    height: 50px;
    line-height: 50px;
    background: #cccccc;
    position: fixed;
    bottom: 10px;
    width:100%;
    form{
      display: flex;
      justify-content: space-between;
      .left{
        margin-left: 10px;
        input{
          margin-left: 10px;
        }
      }
      .right{
        margin-right: 10px;
        .tijiao{
          padding: 10px;
          background: red;
          border:none;
        }
      }
    }
  }
}
</style>
