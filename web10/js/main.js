$(document).ready(function () {
    // 返回页面顶部
    $("#backtotop").click(function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    });

    // 鼠标悬浮显示微信二维码
    $("#weixin").hide();

    $("#weixincontact").mouseenter(function () {
        $("#weixin").show();
        $("#weixincontact").hide();
        setTimeout('$("#weixin").hide();$("#weixincontact").show();', 5000);
    });
    
    
});
