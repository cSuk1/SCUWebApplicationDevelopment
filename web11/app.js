var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

//创建服务，监听端口8888
let server = http.createServer(fileServer).listen(8888);

var host = server.address().address
var port = server.address().port
console.log("应用实例，访问地址为 http://%s:%s", host, port)


//响应请求的函数
function fileServer(req, res) {
    //mime类型
    var mime = {
        "html": "text/html",
        "css": "text/css",
        "js": "text/javascript",
        "gif": "image/gif",
        "ico": "image/x-icon",
        "jpeg": "image/jpeg",
        "jpg": "image/jpeg",
        "png": "image/png",
        "svg": "image/svg+xml",
        "json": "application/json",
        "pdf": "application/pdf",
        "swf": "application/x-shockwave-flash",
        "tiff": "image/tiff",
        "txt": "text/plain",
        "wav": "audio/x-wav",
        "wma": "audio/x-ms-wma",
        "wmv": "video/x-ms-wmv",
        "xml": "text/xml"
    };

    //获取请求的资源地址
    var reqUrl = req.url;
    //解析请求的资源地址，返回文件路径
    var pathName = url.parse(reqUrl).pathname;
    //如果请求的资源路径存在特殊字符，则会被url编码，因此对路径url解码
    pathName = decodeURI(pathName);

    //获取资源文件的绝对路径
    var filePath = path.resolve(__dirname + pathName);

    //获取对应文件的扩展名
    var ftype = path.extname(pathName);
    //对于没有后缀名的文件，我们一律认为是default。
    // 使用slice(1)截取扩展名.之后的字符串
    ftype = ftype ? ftype.slice(1) : 'default';

    //其他的类型使用用"text/plain"类型
    var mimeType = mime[ftype] || "text/plain";


    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.log(err);
            res.writeHead(404, { "content-type": "text/html" });
            res.end("404 Not Found");
        }
        //文件存在，则返回文件
        if (!err && stats.isFile()) {
            sendFile(filePath, mimeType);
        }
        //如果路径是目录
        if (!err && stats.isDirectory()) {
            var html = '<head><meta charset = "utf-8"/></head><link rel="stylesheet" href="style.css"><body><h1>文件服务器</h1><div>';
            //读取该路径下文件
            fs.readdir(filePath, (err, files) => {
                let className = "file";
                if (err) {
                    console.log(err);
                } else {
                    // 将所有文件作为超链接
                    if (pathName == '/') {
                        for (i in files) {
                            if (!path.extname(files[i])) {
                                className = "dic";
                                html += "<a href=/" + files[i] + " class='" + className + "'>" + files[i] + "</a><br>";
                            } else {
                                className = "file";
                                html += "<a href=/" + files[i] + " class='" + className + "'>" + files[i] + "</a><br>";
                            }
                        }
                    } else {
                        for (i in files) {
                            if (!path.extname(files[i])) {
                                className = "dic";
                                html += "<a href='" + pathName + '/' + files[i] + "'class='" + className + "'>" + files[i] + "</a><br>";
                            } else {
                                className = "file";
                                html += "<a href='" + pathName + '/' + files[i] + "'class='" + className + "'>" + files[i] + "</a><br>";
                            }
                        }
                    }

                    html += '</div><h1>浅绿色的为文件夹，深绿色的为文件</h1></body>';
                    // 响应状态码200，mime类型为text/html
                    res.writeHead(200, { "content-type": "text/html" });
                    // 返回响应
                    res.end(html);

                }
            });
        }

        //读取文件的函数
        function sendFile(filePath, mimeType) {
            res.writeHead(200, { "content-type": mimeType });
            // 新建文件流读取文件
            var stream = fs.createReadStream(filePath);
            //错误处理
            stream.on('error', function () {
                res.writeHead(500, { "content-type": mimeType });
                res.end("500 Server Error");
            });
            // 将读取的文件流通入响应
            stream.pipe(res);
        }
    });
}