$(function () {
    var letao = new Letao();
    letao.searchHistory();
    letao.queryHistory();
    letao.removeHistory();
    letao.clearHistory();
})

var Letao = function () {

}
Letao.prototype = {

    searchHistory: function () {
        var that = this;
        // 给搜索点击事件
        $('.btn-search').on('tap', function () {
            var history = JSON.parse(localStorage.getItem('history')) || [];
            var search = $('.input-search').val();
            

            if (!search.trim()) {
                alert('请正确输入');
                return;
            }
            $('.input-search').val('');

            var obj = {
                id: 1,
                search: search
            };
            var history = JSON.parse(localStorage.getItem('history')) || [];

            if (history.length > 0) {
                obj.id = history[history.length - 1].id + 1;
            }
            
            for (var i = 0; i < history.length; i++) {                
                if (history[i].search == search) {
                    return;
                }
            }

            history.push(obj);

            localStorage.setItem('history', JSON.stringify(history));

            that.queryHistory();
        });

    },
    queryHistory: function () {

        var history = JSON.parse(localStorage.getItem('history')) || [];
        var html = template('searchTmp', history);

        $('.search-history .content ul').html(html);
    },
    removeHistory: function () {
        var that = this;
        $('.content ul ').on('tap', '.search-del', function () {
            var history = JSON.parse(localStorage.getItem('history')) || [];
            var id = $(this).data('id');
            // console.log(id);
            for (var i = 0; i < history.length; i++) {
                if (history[i].id == id) {
                    history.splice(i, 1);
                }
            }
            localStorage.setItem('history', JSON.stringify(history));
            that.queryHistory();
        })
    },
    clearHistory: function () {
        var that = this;
        $('.title .clear-all').on('tap', function () {
            var history = JSON.parse(localStorage.getItem('history')) || [];
            localStorage.removeItem('history');
            that.queryHistory();

        })
    }

}