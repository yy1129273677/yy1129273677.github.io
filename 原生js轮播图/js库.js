/**
 * Created by 喻洋 on 2017/4/20.
 */
function getByClass(parent, sClass) {
    var ele = parent.getElementsByTagName('*');
    var result = [];
    for (var i = 0; i < ele.length; i++) {
        if (ele[i].className == sClass) {
            result.push(ele[i])
        }
    }
    return result;
}
/*用class来选元素*/

function starMove(obj, styleName, iTarget, fnEnd) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var cur = 0;
        if (styleName == 'opacity') {
            cur = Math.round(parseFloat(getStyle(obj, styleName)) * 100)
        }
        else {
            cur = parseInt(getStyle(obj, styleName));
        }
        var speed = (iTarget - cur) / 6;
        speed = (speed > 0) ? Math.ceil(speed) : Math.floor(speed);
        if (cur == iTarget) {
            clearInterval(obj.timer);
            if (fnEnd) {
                fnEnd();
            }
        }

        if (styleName == 'opacity') {
            obj.style[styleName] = (cur + speed) / 100;
        }
        else {
            obj.style[styleName] = cur + speed + 'px'
        }

    }, 30)
}
/*改变任意值的运动框架*/
function starMoveUp(obj, json, fnEnd) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var bstop = true;//假设所有的值都已经到了
        for (var attr in json) {
            var cur = 0;
            if (attr == 'opacity') {
                cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            }
            else {
                cur = parseInt(getStyle(obj, attr));
            }
            var speed = (json[attr] - cur) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (cur != json[attr]) {
                bstop = false;
            }
            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
                obj.style.opacity = (cur + speed) / 100;
            }
            else {
                obj.style[attr] = cur + speed + 'px'
            }
        }
        if (bstop) {
            clearInterval(obj.timer);
            if (fnEnd) {
                fnEnd();
            }
        }
    }, 30)
}
//完美运动框架
function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    }
    else {
        return getComputedStyle(obj, false)[name];
    }
}
/*获取行间样式*/