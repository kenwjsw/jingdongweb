/**
 * Created by Administrator on 2016/7/20.
 */
//搜索栏背景色渐变 开始
//$(function () {
    //先获得 图片的高度
    //var picHeight = document.querySelector(".banner").offsetHeight;
    //console.log(picHeight);
//建立scroll事件
//    $(window).scroll(function (event) {
        //alert("滚动了");
        //获得页面被蜷曲的高度
        //var pageScrollH=document.body.scrollTop;
        //console.log(pageScrollH);
        //console.log(pageScrollH/picHeight);
        //if(pageScrollH<picHeight){
        //    $("header").css("background-color","rgba(233,35,34,"+pageScrollH/picHeight+")");
        //}else{
        //    $("header").css("background-color","rgba(233,35,34,1)");
        //}
    //});

//搜索栏背景色渐变 结束
//轮播图 开始
//获得图片的宽度
//    var picWidth=document.querySelector(".banner").offsetWidth;
//    //console.log(picWidth);
//    var ul = $(".banner>ul:eq(0)");
//    var index=1;
//    //设置定时器
//    setInterval(function () {
//
//        index++;
//        ul.css({
//            "transition":"all .3s",
//            "webkitTransition":"all .5s",
//            "transform":"translateX("+(-index*picWidth)+"px)",
//            "webkitTransform":"translateX("+(-index*picWidth)+"px)",
//        }, 500);
//        ul.addEventListener("transitionEnd", function () {
//            if(index==ul.find("a").length-1) {
//                console.log(ul.find("a").length-1);
//                index = 1;
//                ul.css({
//                    "transition": "none",
//                    "webkitTransition": "none",
//                    "transform":"translateX("+(-index*picWidth)+"px)",
//                    "webkitTransform":"translateX("+(-index*picWidth)+"px)",
//                });
//            }
//        })



        //让小白点跟随图片变化而变化
        //console.log(index)
    //    $(".dots").find("li").eq(index).addClass("dots-bg").siblings().removeClass("dots-bg");
    //    if(index==ul.find("a").length-1){
    //        $(".dots").find("li").eq(0).addClass("dots-bg").siblings().removeClass("dots-bg");
    //    }
    //},1000);






    //记录ul当前的marginleft值
    //var marginL = ul.css("margin-left");
    //console.log(marginL);
    ////新建一个空白的全局变量
    //var startClientX = 0;
    ////监听手指触摸开始的事件
    //document.querySelector(".dots").addEventListener("touchstart", function (event) {
    //    //记录触摸开始时 手指在目标上的位置
    //    startClientX=event.targetTouch[0].clientX;
    //});
    //
    ////监听手指触摸过程的事件
    //document.querySelector(".dots").addEventListener("touchmove", function (event) {
    //    //记录触摸时候的
    //    if(event.targetTouches.length==1){
    //        var touchEvent = event.targetTouch[0];
    //        //记录手指位移的距离
    //        var changeClientX=touchEvent.clientX-startClientX;
    //        //ul随手指的滑动 而变化属性
    //        this.style.marginLeft=marginL+changeClientX+"px";
    //    }
    //});





//轮播图 结束
//})