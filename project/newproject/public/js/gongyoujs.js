/**
 * Created by 喻洋 on 2017/6/30.
 */
$("#tiaozhuan").click(function () {
   window.history.go(-1)
});
var web="http://192.168.1.110:8081/hhdj/";
function getId(key){
    var web=location.search;
    var behind=web.split("?")[1];
    var addr=behind.split("&");
    var obj={};
    addr.forEach(function (item) {
        var arr=item.split('=');
        obj[arr[0]]=arr[1];
    });
    return obj[key]
}
var i=0;
function tishi(data){
    var div = document.createElement('div');
    div.className = 'hidden_sum' + i;
    div.innerText = data.msg;
    var classname = 'hidden_sum' + i;
    $('body').append(div);
    $("."+classname).css({
        "text-align":"center",
        "bottom":"0",
        "position":"fixed",
        "z-index":"1000",
        "background":"black",
        "width":"80%",
        "height":"44px",
        "line-height":"44px",
        "margin":"0 10%",
        "color":"#fff"
    });
    $("."+classname).animate({bottom:'50%'},function(){
        setTimeout(function () {
            $("."+classname).remove();
        },1000);
    });
    i++;
}