<template>
    <div>
      <mt-header fixed class="top" title="积分明细">
      <span slot="left" @click="back">
        <i class="icon iconfont icon-fanhui"></i>
      </span>
      </mt-header>
      <div class="content">
        <div class="detail">
          <ul v-for="item in rows">
            <li>
              <div class="left">
                <div class="xiangmu">{{item.typeName}}</div>
                <div class="time">{{item.timeFormat}}</div>
              </div>
              <div class="right">+{{item.singleDesc}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import{getIntegralList}from"../../api/api"
    export default {
      data(){
          return{
              rows:[]
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
          getIntegralList({page:1,rows:10}).then(function (res) {
              console.log(res);
            if(res.data.code==1){
                  _this.rows=res.data.rows;
            }
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
      justify-content: space-between;
      padding: 15px;
      font-size: 16px;
      border-bottom: 1px solid #cccccc;
    }
  }
</style>
