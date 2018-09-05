$(function () {
    var letao = new Letao();

    letao.mainScroll();
    letao.getCategory();
    letao.getBrand();
})

var Letao = function () {

}

Letao.prototype = {

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
    },
    getCategory: function () {

        $.ajax({
            url: '/category/queryTopCategory',
            success: function (data) {
              
                var html = template('categoryTmp', data);

                $('#main .main-left ul').html(html);
            }
        })
    },
    // 点击左侧获取右侧数据
    getBrand: function () {
        this.getData(1);
        var that=this;
        $('#main .main-left ul').on('tap', 'a', function () {
            var id = $(this).data('id');
            
            that.getData(id);
            $(this).parent().addClass('active').siblings().removeClass('active');
        })
    },
    // 获取右侧数据函数
    getData:function(id){
        $.ajax({
            url:'/category/querySecondCategory',
            data:{id:id},
            success:function(data){
               
                var html=template('branTmp',data);
                $('.main-right .mui-row').html(html);
            }
        })
    }
}