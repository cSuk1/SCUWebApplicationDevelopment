// 等待DOM加载完毕再执行脚本
// 基本动画效果实现
$(document).ready(function(){
    // 隐藏一些元素
    $("#content").hide();
    $("#changePage").hide();
    $("#showpage").hide();
    var h;

    // 分篇阅读模式
    $("#start").click(function () {
        $("#start").hide();
        $("#start1").hide();
        $("#content").show();
        $("#changePage").show();
        $("#top").animate({ width: '650px' }, "slow");
        $("#bottom").animate({ width: '650px' }, "slow");
        h = $("#middle").height();
        $("#left").animate({ height: h }, "slow");
        $("#right").animate({ height: h }, "slow");
    })

    // 分页阅读模式
    $("#start1").click(function () {
        $("#start").hide();
        $("#start1").hide();
        $("#showpage").show();
        $("#content").show();
        $("#top").animate({ width: '650px' }, "slow");
        $("#bottom").animate({ width: '650px' }, "slow");
        $("#left").animate({ height: '428px' }, "slow");
        $("#right").animate({ height: '428px' }, "slow");
    })

    // 翻页时改变尺寸
    $("#pageone").click(function () {
        $("#middle").animate({height: '428px'}, "slow")
        $("#left").animate({ height: '428px' }, "slow");
        $("#right").animate({ height: '428px' }, "slow");
    })


    $("#pagetwo").click(function () {
        $("#middle").animate({height: '428px'}, "slow")
        $("#left").animate({ height: '428px' }, "slow");
        $("#right").animate({ height: '428px' }, "slow");
    })

    $("#pagethree").click(function () {
        $("#middle").animate({height: '708px'}, "slow")
        $("#left").animate({ height: '708px' }, "slow");
        $("#right").animate({ height: '708px' }, "slow");
    })

    $("#pagefour").click(function () {
        $("#middle").animate({height: '708px'}, "slow")
        $("#left").animate({ height: '708px' }, "slow");
        $("#right").animate({ height: '708px' }, "slow");
    })
});