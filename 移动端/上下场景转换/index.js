/**
 * Created by think on 2017/6/29.
 */

var main = document.querySelector('#main');
var oLis = document.querySelectorAll('#list>li');
var winW = document.documentElement.clientWidth;
var winH = document.documentElement.clientHeight;
var desW=640;
var desH=960;

if(winW/winH<desW/desH){
    main.style.webkitTransform="scale("+winH/desH+")";
}else{
    main.style.webkitTransform="scale("+winW/desW+")";
}

[].forEach.call(oLis,function(){
   var oLi= arguments[0];
   oLi.index=arguments[1];
   [].forEach.call(oLis,function(){
      arguments[0].className="";
   });
   oLi.addEventListener('touchstart',start,false);
   oLi.addEventListener('touchmove',move,false);
   oLi.addEventListener('touchend',end,false);

});

function start(e){
    this.startY = e.changedTouches[0].pageY;
}

function move(e) {
    var moveTouch=e.changedTouches[0].pageY;//move时的距离
    var movePos=moveTouch-this.startY; //移动距离
    var index=this.index;
    if(movePos>0){//往下滑
        //上一张的索引
        this.prevsIndex=(index===0?oLis.length-1:index-1)

    }else if(movePos<0){//往上滑
        //下一张的索引
        this.prevsIndex=(index===oLis.length-1?0:index+1);

    }

    oLis[this.prevsIndex].className='zIndex';
    oLis[this.prevsIndex].style.webkitTransform="translate(0,"+movePos+"px)";

}
function end(e) {

}













