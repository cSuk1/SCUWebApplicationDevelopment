<?php 
//获取诗句文件的绝对路径
$path = dirname(__FILE__);
$file = file($path."/content/poem.txt");
//随机读取一行
$arr = mt_rand( 0, count( $file ) - 1 );
$str  = trim($file[$arr]);
//编码判断，用于输出相应的响应头部编码
if (isset($_GET['charset']) && !empty($_GET['charset'])) {
    $charset = $_GET['charset'];
    if (strcasecmp($charset,"gbk") == 0 ) {
        $str = mb_convert_encoding($str,'gbk', 'utf-8');
    }
} else {
    $charset = 'utf-8';
}
// 响应头
header("Content-Type: text/html; charset=$charset");
// 允许跨域请求
header("Access-Control-Allow-Origin:*");
header("Access-Control-All-Methods:GET,POST");
header("Access-Control-Allow-Headers:x-requested-with,content-type");
// 返回诗句
echo $str;
