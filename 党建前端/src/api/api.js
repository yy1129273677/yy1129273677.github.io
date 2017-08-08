/**
 * Created by xwy on 17/7/28.
 */
import config from './config'
import  axios from 'axios'
let token=localStorage.getItem('token');
axios.defaults.withCredentials=true;

export const allNewsType=[
  {
    type:0,
    text:"信工新闻眼"
  },
  {
    "type":1,
    "text":"特色活动"
  },{
    "type":2,
    "text":"通知早知道"
  },{
    "type":3,
    "text":"党建一点通"
  },{
    "type":4,
    "text":"制度建设"
  },{
    "type":5,
    "text":"党员风采"
  },{
    "type":6,
    "text":"随时随地学"
  },{
    "type":7,
    "text":"随时随地拍"
  },{
    "type":8,
    "text":"政治学习"
  }]
//用户登录
  export const userLogin=data=>{
  return axios.post(config.userLogin,data)
  }
//修改用户密码
export const updatePwd=data=>{
  return axios.post(config.updatePwd,data,{headers:{token:token}})
}
//获取用户信息
export const getUserInfo=(params)=>{
  return axios.get(config.userInfo,{params:params,headers:{token:token}})
}

//修改用户信息
export const modifyInfo=data=>{
  return axios.post(config.modifyInfo,data,{headers:{token:token}})
}
//党员积分列表

export const getIntegralList=params=>{
  return axios.get(config.integralList,{params:params,headers:{token:token}})
}
//新闻列表
export const getNewsList=(params)=>{
  return axios.get(config.newsList,{params:params,headers:{token:token}})
}
//新闻详情
export const getNewsContent=(params,headers)=>{
  return axios.get(config.newsContent,{params:params,headers:{token:token}})
}
//上传图片
export const uploadBase64=data=>{
  return axios.post(config.uploadBase64,data,{headers:{token:token}})
}
//上传心得总结
export const saveImpress=data=>{
  return axios.post(config.saveImpress,data,{headers:{token:token}})
}
//心得总结审核状态
export const checkByUserId=params=>{
  return axios.get(config.checkByUserId,{params:params,headers:{token:token}})
}
//上传思想汇报
export const saveImpressTwo=data=>{
  return axios.post(config.saveImpressTwo,data,{headers:{token:token}})
}
//思想汇报审核状态
export const reportInfo=data=>{
  return axios.post(config.reportInfo,data,{headers:{token:token}})
}
//判断是否有正在进行的民主评议
export const judgeComment=data=>{
  return axios.post(config.judgeComment,data,{headers:{token:token}})
}
//提交个人总结
export const submitSummary=data=>{
  return axios.post(config.submitSummary,data,{headers:{token:token}})
}
//党支部列表
export const findAll=params=>{
  return axios.get(config.findAll,{params:params,headers:{token:token}})
}
//评议须知
export const getComment=params=>{
  return axios.get(config.getComment,{params:params,headers:{token:token}})
}
//参评党员列表
export const getUserList=params=>{
  return axios.get(config.userList,{params:params,headers:{token:token}})
}
//判断是否评议过某个党员
export const isComment=params=>{
  return axios.get(config.isComment,{params:params,headers:{token:token}})
}
//获取参评党员的个人总结
export const getUserSummary=params=>{
  return axios.get(config.userSummary,{params:params,headers:{token:token}})
}
//提交民主评议
export const submitSummaryTwo=params=>{
  return axios.get(config.submitSummaryTwo,{params:params,headers:{token:token}})
}
//党员云互动帖子列表
export const forumList=params=>{
  return axios.get(config.forumList,{params:params,headers:{token:token}})
}
//帖子详情
export const forumDetail=params=>{
  return axios.get(config.forumDetail,{params:params,headers:{token:token}})
}
//帖子回复
export const addComment=data=>{
  return axios.post(config.addComment,data,{headers:{token:token}})
}
//发布帖子
export const saveForum=data=>{
  return axios.post(config.saveForum,data,{headers:{token:token}})
}







