/**
 * Created by Administrator on 2016/7/23.
 */
/**
 * 添加过渡效果
 * @param dom
 */
function startTransition(dom,parameter){
    dom.style.transition=parameter;
    dom.style.webkitTransition=parameter;
}
/**
 * 关闭过渡效果
 * @param dom
 */
function stopTransition(dom){
    dom.style.transition="none";
    dom.style.webkitTransition="none";
}
/**
 * 添加变换效果
 * @param dom
 * @param target
 */
function startTransform(dom,target){
    dom.style.transform="translateX("+target+"px)";
    dom.style.webkitTransform="translateX("+target+"px)";
}
//重点来了
//先定义一个新的window对象 itcast
window.itcast={}
//在新建的itcast对象中，再定义一个方法(监听每一个transition，判断条件，重置index)
itcast.addTransitionEnd= function (dom,callback) {
    if(dom && typeof dom=="object"){//判定输入的dom对象是否存在
        dom.addEventListener("transitionEnd",function () {
            callback&&callback();
        });
        dom.addEventListener("webkitTransitionEnd",function () {
            callback&&callback();
        });
    }
}

