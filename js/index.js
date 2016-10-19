
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

window.onload= function () {
    //获取要操作的元素
    var lunBo = document.querySelector(".lunbo");
    var picWidth = lunBo.children[0].offsetWidth;
    var index = 1;
    var timerId = null;
    var dots = document.querySelector(".dots").children;

    //设置小点颜色变化的方法
    var setIndicator = function () {
        for(var i=0;i<dots.length;i++){
            dots[i].classList.remove("dots-bg");
        }
        dots[index-1].classList.add("dots-bg");
    }
    //让其定位在第二张
    startTransform(lunBo,-index*picWidth);

    //封装 并 开启定时器
    function startTimer(){
        timerId=setInterval(function () {
            index++;
            startTransition(lunBo,"all,.5s");
            startTransform(lunBo,-index*picWidth);
        },2000);
    }
    startTimer();

    //定义回调函数
    var callback = function () {
        if(index==0){
            index=8;
            stopTransition(lunBo);
            startTransform(lunBo,-index*picWidth);
        }else if(index==9){
            index=1;
            stopTransition(lunBo);
            startTransform(lunBo,-index*picWidth);
        }
        //在这里让小点跟随图片移动
        setIndicator();
    }
    //监听每一次transition，判断条件，让轮播图循环播放
    //这里用到的是面向对象的内容，有点类似于jquery里面的on
    itcast.addTransitionEnd(lunBo,callback);

    //先新建几个变量
    var startX=0;
    var moveX=0;
    var distanceX=0;
    //监听手指的拖动事件
    lunBo.addEventListener("touchstart",function(event){
       //console.log(event);
       //记录点击时，X轴上面的位置
        startX=event.touches[0].clientX;
        //停止定时器
        clearInterval(timerId);
        //在点击的瞬间加个判断，如果已经到了头/尾部了，就让轮播图瞬间移动回来
        //由于之前已经封装好一个回调函数，在这里刚刚好能用上，调用即可
        callback();
    });
    lunBo.addEventListener("touchmove", function (event) {
        //console.log(event);
        //记录移动时，X轴上的位置，并算出移动的距离
        moveX=event.touches[0].clientX;
        distanceX=moveX-startX;
        //console.log(distanceX);
        //让轮播图随手指的移动而移动
        stopTransition(lunBo);
        startTransform(lunBo,-index*picWidth+distanceX);

    });
    lunBo.addEventListener("touchend", function (event) {
        //console.log(event);

        //当distanceX大于图片宽度的1/3时，轮播到下一张图片，否则 吸附回当前图片
        if(Math.abs(distanceX)>picWidth/3){
            if(distanceX<0){
                index++;
                startTransition(lunBo,"all 0.3s");
                startTransform(lunBo,-index*picWidth);
            }else if(distanceX>0){
                index--;
                startTransition(lunBo,"all 0.3s");
                startTransform(lunBo,-index*picWidth);
            }
        }else{
            startTransform(lunBo,-index*picWidth);
        }
        //重新开启定时器
        startTimer();
    });

    //掌上秒杀倒计时
    var timeId2=null;
    var nums =document.querySelector(".timer").children;
    //设定一个time，放置在定时器中，作为判断定时器的是否停止的条件
    var time2=10*60*60;
    timeId2=setInterval(function () {
        time2--;
        if(time2<=0){
            clearInterval(timeId2);
            alert("开抢啦！！！");
            return;
        }
        nums[0].innerHTML=Math.floor(time2/36000);
        nums[1].innerHTML=Math.floor(time2/3600);
        nums[3].innerHTML=Math.floor(time2%3600/600);
        nums[4].innerHTML=Math.floor(time2%600/60);
        nums[6].innerHTML=Math.floor(time2%60/10);
        nums[7].innerHTML=time2%10;
    },1000);
    //完美~！
}




























