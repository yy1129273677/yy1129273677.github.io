/**
 * Created by xwy on 17/7/28.
 */
const baseUrl='http://192.168.1.110:8081/hhdj';
export default {
  //用户登录
  userLogin:`${baseUrl}/user/userLogin.do`,
  //修改用户密码
  updatePwd:`${baseUrl}/user/updatePwd.do`,
  //获取用户信息
  userInfo:`${baseUrl}/user/userInfo.do`,
  //修改用户信息
  modifyInfo:`${baseUrl}/user/modifyInfo.do`,
  //党员积分列表
  integralList:`${baseUrl}/integral/integralList.do`,
  //新闻列表
  newsList:`${baseUrl}/news/newsList.do`,
  //新闻详情
  newsContent:`${baseUrl}/news/newsContent.do`,
  //上传图片
  uploadBase64:`${baseUrl}/image/uploadBase64.do`,
  //上传心得总结
  saveImpress:`${baseUrl}/impress/saveImpress.do`,
  //心得总结审核状态
  checkByUserId:`${baseUrl}/impress/checkByUserId.do`,
  //上传思想汇报
  saveImpressTwo:`${baseUrl}/impress/saveImpress.do`,
  //思想汇报审核状态
  reportInfo:`${baseUrl}/report/reportInfo.do`,
  //判断是否有正在进行的民主评议
  judgeComment:`${baseUrl}/nationComment/judgeComment.do`,
  //提交个人总结
  submitSummary:`${baseUrl}/nationComment/submitSummary.do`,
  //党支部列表
  findAll:`${baseUrl}/branch/findAll.do`,
  //评议须知
  getComment:`${baseUrl}/nationComment/getComment.do`,
  //参评党员列表
  userList:`${baseUrl}/nationComment/userList.do`,
  //判断是否评议过某个党员
  isComment:`${baseUrl}/nationComment/isComment.do`,
  //获取参评党员的个人总结
  userSummary:`${baseUrl}/nationComment/userSummary.do`,
  //提交民主评议
  submitSummaryTwo:`${baseUrl}/nationComment/submitComment.do`,
  //党员云互动帖子列表
  forumList:`${baseUrl}/forum/forumList.do`,
  //帖子详情
  forumDetail:`${baseUrl}/forum/forumDetail.do`,
  //帖子回复
  addComment:`${baseUrl}/forum/addComment.do`,
  //发布帖子
  saveForum:`${baseUrl}/forum/saveForum.do`,


}
