/**
 * Created by Administrator on 2016/7/22.
 */
//搜索栏背景色渐变 开始
$(function () {
//先获得 图片的高度
    var picHeight = document.querySelector(".banner").offsetHeight;
//console.log(picHeight);
//建立scroll事件
    $(window).scroll(function (event) {
//alert("滚动了");
//获得页面被蜷曲的高度
        var pageScrollH = document.body.scrollTop;
//console.log(pageScrollH);
//console.log(pageScrollH/picHeight);
        if (pageScrollH < picHeight) {
            $("header").css("background-color", "rgba(233,35,34," + pageScrollH / picHeight + ")");
        } else {
            $("header").css("background-color", "rgba(233,35,34,1)");
        }
    });
});
//搜索栏背景色渐变 结束

//轮播图开始（js版=。=）
window.onload= function () {
    //先获得要操作的元素
    var lunBo = document.querySelector(".lunbo");
    var picWidth = lunBo.children[0].offsetWidth;
    //console.log(picWidth);
    var index = 1;
    //让其定位在第二张
    lunBo.style.transition="none";
    lunBo.style.webkitTransition="none";
    lunBo.style.transform="translateX("+(-index*picWidth)+"px)";
    lunBo.style.webkitTransform="translateX("+(-index*picWidth)+"px)";


    //开启定时器
    var timerId = null;
    timerId=setInterval(function () {
        index++;
        //添加过渡效果
        lunBo.style.transition="all 0.5s";
        lunBo.style.webkitTransition="all 0.5s";
        //添加变换效果
        lunBo.style.transform="translateX("+(-index*picWidth)+"px)";
        lunBo.style.webkitTransform="translateX("+(-index*picWidth)+"px)";
    },1000);



//添加监视器,让轮播图循环播放
    lunBo.addEventListener("transitionEnd", function () {
        if(index==9){
            index=1;
            lunBo.style.transition="none";
            lunBo.style.transform="translate("+(-index*picWidth)+"px)";
        }else if(index==0) {
            index=9;
            lunBo.style.transition="none";
            lunBo.style.transform="translate("+(-index*picWidth)+"px)";
        }
    });
    lunBo.addEventListener("webkitTransitionEnd", function () {
        if(index==9){
            index=1;
            lunBo.style.webkitTransition="none";
            lunBo.style.webkitTransform="translate("+(-index*picWidth)+"px)";
        }else if(index==9){
            index=1;
            lunBo.style.webkitTransition="none";
            lunBo.style.webkitTransform="translate("+(-index*picWidth)+"px)";
        }
    });

    var starX=0;
    var moveX=0;
    var distanceX=0;

//添加手势监听
    lunBo.addEventListener("touchstart", function (e) {
        //console.log(e);
        starX= e.touches[0].pageX;
        //让定时器停止
        clearInterval(timerId);
        //判定当前的index，若为最前/最后一张，则偷天换日
        if(index==0){
            index=8;
            lunBo.style.transition="none";
            lunBo.style.webkitTransition="none";
            lunBo.style.transform="translateX("+(-index*picWidth)+"px)";
            lunBo.style.webkitTransform="translateX("+(-index*picWidth)+"px)";
        }
        if(index==9){
            index=1;
            lunBo.style.transition="none";
            lunBo.style.webkitTransition="none";
            lunBo.style.transform="translateX("+(-index*picWidth)+"px)";
            lunBo.style.webkitTransform="translateX("+(-index*picWidth)+"px)";
        }
    });
    lunBo.addEventListener("touchmove",function(e) {
        //console.log(e);
        moveX= e.touches[0].pageX;
        distanceX=moveX-starX;
        //让轮播图随着手指的移动而移动
        lunBo.style.transition="none";
        lunBo.style.webkitTransition="none";
        lunBo.style.transform="translateX("+(-index*picWidth+distanceX)+"px)";
        lunBo.style.transform="webkitTranslateX("+(-index*picWidth+distanceX)+"px)";
    });
    lunBo.addEventListener("touchend", function (e) {
        //console.log(e);
        //判定当手指触摸的距离 大于图片宽度的1/3的时候，直接转换到下一张图片
        //否则 则吸附到当前图片
        if(Math.abs(distanceX)>picWidth/3){
            if(distanceX>0){
                index--;
                lunBo.style.transition="all 0.5s";
                lunBo.style.webkitTransition="all 0.5s";
                lunBo.style.transform="translateX("+(-index*picWidth)+"px)";
                lunBo.style.webkitTransform="translateX("+(-index*picWidth)+"px)";
            }else if(distanceX<0){
                index++;
                lunBo.style.transition="all 0.5s";
                lunBo.style.webkitTransition="all 0.5s";
                lunBo.style.transform="translateX("+(-index*picWidth)+"px)";
                lunBo.style.webkitTransform="translateX("+(-index*picWidth)+"px)";
            }
        }else{
            lunBo.style.transition="none";
            lunBo.style.webkitTransition="none";
            lunBo.style.transform="translateX("+(-index*picWidth)+"px)";
            lunBo.style.webkitTransform="translateX("+(-index*picWidth)+"px)";
        }
        //开启定时器
        timerId=setInterval(function () {
            index++;
            //添加过渡效果
            lunBo.style.transition="all 0.5s";
            lunBo.style.webkitTransition="all 0.5s";
            //添加变换效果
            lunBo.style.transform="translateX("+(-index*picWidth)+"px)";
            lunBo.style.webkitTransform="translateX("+(-index*picWidth)+"px)";
        },1000);
    });

//小点颜色随index变化而变化的事件
    //先获得小点
    //var dots=document.querySelector(".dots").children;
    ////循环遍历dots，移除dots-bg
    //for(var i=0;i<dots.length;i++){
    //    dots[i].classList.remove("dots-bg");
    //}
    //if(index>0){
    //    dots[index-1].classList.add("dots-bg");
    //}


}
//轮播图结束