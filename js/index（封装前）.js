/**
 * Created by Administrator on 2016/7/22.
 */
//����������ɫ���� ��ʼ
$(function () {
//�Ȼ�� ͼƬ�ĸ߶�
    var picHeight = document.querySelector(".banner").offsetHeight;
//console.log(picHeight);
//����scroll�¼�
    $(window).scroll(function (event) {
//alert("������");
//���ҳ�汻�����ĸ߶�
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
//����������ɫ���� ����

//�ֲ�ͼ��ʼ��js��=��=��
window.onload= function () {
    //�Ȼ��Ҫ������Ԫ��
    var lunBo = document.querySelector(".lunbo");
    var picWidth = lunBo.children[0].offsetWidth;
    //console.log(picWidth);
    var index = 1;
    //���䶨λ�ڵڶ���
    lunBo.style.transition="none";
    lunBo.style.webkitTransition="none";
    lunBo.style.transform="translateX("+(-index*picWidth)+"px)";
    lunBo.style.webkitTransform="translateX("+(-index*picWidth)+"px)";


    //������ʱ��
    var timerId = null;
    timerId=setInterval(function () {
        index++;
        //��ӹ���Ч��
        lunBo.style.transition="all 0.5s";
        lunBo.style.webkitTransition="all 0.5s";
        //��ӱ任Ч��
        lunBo.style.transform="translateX("+(-index*picWidth)+"px)";
        lunBo.style.webkitTransform="translateX("+(-index*picWidth)+"px)";
    },1000);



//��Ӽ�����,���ֲ�ͼѭ������
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

//������Ƽ���
    lunBo.addEventListener("touchstart", function (e) {
        //console.log(e);
        starX= e.touches[0].pageX;
        //�ö�ʱ��ֹͣ
        clearInterval(timerId);
        //�ж���ǰ��index����Ϊ��ǰ/���һ�ţ���͵�컻��
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
        //���ֲ�ͼ������ָ���ƶ����ƶ�
        lunBo.style.transition="none";
        lunBo.style.webkitTransition="none";
        lunBo.style.transform="translateX("+(-index*picWidth+distanceX)+"px)";
        lunBo.style.transform="webkitTranslateX("+(-index*picWidth+distanceX)+"px)";
    });
    lunBo.addEventListener("touchend", function (e) {
        //console.log(e);
        //�ж�����ָ�����ľ��� ����ͼƬ��ȵ�1/3��ʱ��ֱ��ת������һ��ͼƬ
        //���� ����������ǰͼƬ
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
        //������ʱ��
        timerId=setInterval(function () {
            index++;
            //��ӹ���Ч��
            lunBo.style.transition="all 0.5s";
            lunBo.style.webkitTransition="all 0.5s";
            //��ӱ任Ч��
            lunBo.style.transform="translateX("+(-index*picWidth)+"px)";
            lunBo.style.webkitTransform="translateX("+(-index*picWidth)+"px)";
        },1000);
    });

//С����ɫ��index�仯���仯���¼�
    //�Ȼ��С��
    //var dots=document.querySelector(".dots").children;
    ////ѭ������dots���Ƴ�dots-bg
    //for(var i=0;i<dots.length;i++){
    //    dots[i].classList.remove("dots-bg");
    //}
    //if(index>0){
    //    dots[index-1].classList.add("dots-bg");
    //}


}
//�ֲ�ͼ����