<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>表单验证</title>
    <link rel="stylesheet" href="css/index.css">
    <script src="js/FormValidate.js"></script>
</head>

<body>
    <form action="FormValidate.php" name="login" method="post" onsubmit="return validateForm()">
        姓名：<input type="text" name="uname" id="uname"><span id="wuname" class="warn"></span><br>
        邮箱：<input type="text" name="email" id="email"><span id="wemail" class="warn"></span><br>
        密码：<input type="password" name="pwd" id="pwd"><span id="wpwd" class="warn"></span><br>
        确认：<input type="password" name="vpwd" id="vpwd"><span id="wvpwd" class="warn"></span><br>
        <input type="submit" name="submit" id="submit" value="submit">
        <script>
            var name = document.getElementById("uname");
            document.write(name);
        </script>
    </form>
</body>

</html>

<?php
if (isset($_POST["uname"]) && isset($_POST["pwd"]) && isset($_POST["email"])) {
    $name = $_POST["uname"];
    $email = $_POST["email"];
    $pwd = $_POST["pwd"];
    if($name === 'addmin' && $pwd === '12345678'){
        echo "Welcome, ".$name.", "."your email is ".$email.",and your password is ".$pwd."!";
    }else{
        echo "Sorry, your username or password is not correct!";
    }
}
