/**
 * Created by Administrator on 2016/7/23.
 */
/**
 * ��ӹ���Ч��
 * @param dom
 */
function startTransition(dom,parameter){
    dom.style.transition=parameter;
    dom.style.webkitTransition=parameter;
}
/**
 * �رչ���Ч��
 * @param dom
 */
function stopTransition(dom){
    dom.style.transition="none";
    dom.style.webkitTransition="none";
}
/**
 * ��ӱ任Ч��
 * @param dom
 * @param target
 */
function startTransform(dom,target){
    dom.style.transform="translateX("+target+"px)";
    dom.style.webkitTransform="translateX("+target+"px)";
}
//�ص�����
//�ȶ���һ���µ�window���� itcast
window.itcast={}
//���½���itcast�����У��ٶ���һ������(����ÿһ��transition���ж�����������index)
itcast.addTransitionEnd= function (dom,callback) {
    if(dom && typeof dom=="object"){//�ж������dom�����Ƿ����
        dom.addEventListener("transitionEnd",function () {
            callback&&callback();
        });
        dom.addEventListener("webkitTransitionEnd",function () {
            callback&&callback();
        });
    }
}

