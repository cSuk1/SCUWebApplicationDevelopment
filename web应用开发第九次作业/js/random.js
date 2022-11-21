// 用于防止点击换句过快，造成DOM紊乱
var ajaxFinished = false;

// 普通ajax，页面载入时获取随机一句诗词
function getPoem() {
    var xmlhttp;
    var poem;
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("hd").innerHTML = "";
            poem = xmlhttp.responseText;
            // 打字对象，实现随机诗词打字特效
            var typed = new Typed("#hd", {
                strings: [poem],
                startDelay: 200,
                backDelay: 2000,
                typeSpeed: 60,
                loop: false,
                backSpeed: 20
            })
        }
        setTimeout("ajaxFinished = true", 3988);
    }
    // 发送get请求
    xmlhttp.open("GET", "getPoem.php", true);
    xmlhttp.send();
}

// jquery的ajax
$(document).ready(function () {
    $("#hd").click(function () {
        if (ajaxFinished === true) {
            $.get("getPoem.php", function (data) {
                document.getElementById("hd").innerHTML = "";
                var typed = new Typed("#hd", {
                    strings: [data],
                    startDelay: 200,
                    backDelay: 2000,
                    typeSpeed: 60,
                    loop: false,
                    backSpeed: 20
                })
                ajaxFinished =  false;
            });
            // 等待一段时间后才可重新点击，防止同时操作同一DOM造成DOM文档紊乱
            setTimeout("ajaxFinished = true", 3988);
        }
        else{
            alert("点击的太快了！！！")
        }
    });
});