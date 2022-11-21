// 普通ajax方式，使用xml文档传递数据
var thisPage = 0;
function read(page) {
    thisPage = thisPage + page;
    if (thisPage < 0) {
        thisPage = 0;
        var h = $("#middle").height();
        alert('已经是第一页了！');
    }
    if (thisPage > 3) {
        thisPage = 3;
        alert('没有更多了！');
    }
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", "content/poetry.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    // 将从xml文档中读取的数据写入html
    document.getElementById("title").innerHTML =
        xmlDoc.getElementsByTagName("title")[thisPage].childNodes[0].nodeValue;
    document.getElementById("time").innerHTML =
        xmlDoc.getElementsByTagName("time")[thisPage].childNodes[0].nodeValue;
    document.getElementById("author").innerHTML =
        xmlDoc.getElementsByTagName("author")[thisPage].childNodes[0].nodeValue;
    document.getElementById("poetry").innerHTML =
        xmlDoc.getElementsByTagName("body")[thisPage].childNodes[0].nodeValue;
}