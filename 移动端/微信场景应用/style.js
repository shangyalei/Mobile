/**
 * Created by think on 2017/7/1.
 */
//->解决click的300ms延迟
FastClick.attach(document.body);

//->动态计算REM的值
~function () {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / 640 * 100 + "px";
}();

//初始化Swiper
var mySwiper=new Swiper(".swiper-container",{
    // Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
    direction: "vertical",
    loop: true,
    //->向上切换结束:swiper->当前本次初始化new Swiper创建出来的实例
    onSlidePrevEnd: changeEnd,
    //->向下切换结束:swiper.activeIndex当前活动块的索引
    onSlideNextEnd: changeEnd
});

//->当切换结束的时候,我们需要做的事情:清除所有slide块的ID,
// 在让当前活动块拥有对应的ID即可,拥有对应的ID才会有对应的动画
function changeEnd1(swiper) {
    //当前展示这个区域的索引
    var n = swiper.activeIndex,
        slideAry = swiper.slides;//->获取当前所有的活动块(获取的结果是一个数组)
    console.log(n);
    [].forEach.call(slideAry, function (slide, index) {
        if (n === index) {
            slide.id = (n == 1 || n == 3) ? "page1" : "page2";
            return;
        }
        slide.id = null;
    });
}


function changeEnd(swiper){
    var n=swiper.activeIndex;
    var slideAry=swiper.slides;
    var total=slideAry.length;
    var targetId='page';
    switch(n){
        case 0:
            targetId+=total-2;
            break;
        case total-1:
            targetId+=1;
            break;
        default:
            targetId+=n;
    }

    [].forEach.call(slideAry,function (item, index) {
        if(n===index){
            item.id=targetId;
            return;
        }
        item.id=null;
    })
}



/*
*
* 关于Swiper轮播图loop模式下，图片索引的原理如下
* 它会把第一张放在末尾，最后一张放在开头，比如三张会变为5张
* 那么第一张其实就是最后一张它的索引应该是length-2,因为length-1是第一张，因为把第一张放在了最后面
* 最后一张其实就是第一张，那么它的索引应该是length-1
*
*
* */





