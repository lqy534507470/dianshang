$(function () {
    var letao = new Letao();
    letao.initSlide();
    letao.mainScroll();
})

var Letao = function () {

}

Letao.prototype = {
    // 导航栏重置
    initSlide: function () {
        //获得slider插件对象
        var gallery = mui('.mui-slider');
        gallery.slider({
            interval: 1500 //自动轮播周期，若为0则不自动播放，默认为0；
        });
    },
    mainScroll: function () {
        // options = {
        //     scrollY: true, //是否竖向滚动
        //     scrollX: false, //是否横向滚动
        //     startX: 0, //初始化时滚动至x
        //     startY: 0, //初始化时滚动至y
        //     indicators: true, //是否显示滚动条
        //     deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
        //     bounce: true //是否启用回弹
        // }
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            ,
            indicators: false
        });
    }
}