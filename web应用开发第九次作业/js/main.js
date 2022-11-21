// jquery中的ajax，获取诗文页面数据
// 分页阅读模式，使用jquery的ajax，通过id获取txt文本内容
$(document).ready(function () {
    $("#start1").click(function () {
        var id = '#1st';
        var code = '/content/poetry_01.txt ' + id
        $("#poem").load(code);
    });

    $("#pageone").click(function () {
        var id = '#1st';
        var code = '/content/poetry_01.txt ' + id
        $("#poem").load(code);
    });

    $("#pagetwo").click(function () {
        var id = '#2nd';
        var code = '/content/poetry_01.txt ' + id
        $("#poem").load(code);
    });

    $("#pagethree").click(function () {
        var id = '#3rd';
        var code = '/content/poetry_01.txt ' + id
        $("#poem").load(code);
    });

    $("#pagefour").click(function () {
        var id = '#4th';
        var code = '/content/poetry_01.txt ' + id
        $("#poem").load(code);
    });
});