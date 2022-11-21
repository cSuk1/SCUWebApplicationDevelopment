function addNum()
{
    var Num1 = document.forms["add"]["num1"].value;
    var Num2 = document.forms["add"]["num2"].value;
    var Op = document.forms["add"]["op"].value;
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("result").innerHTML=xmlhttp.responseText;
		}
	}
    // 发送get请求
	xmlhttp.open("GET","add.php?num1="+Num1+"&num2="+Num2+"&op="+Op,true);
	xmlhttp.send();
}