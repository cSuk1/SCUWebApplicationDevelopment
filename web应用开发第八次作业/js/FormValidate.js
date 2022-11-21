function validateForm() {
    // 表单数据
    var name = document.forms["login"]["uname"].value;
    var pwd = document.forms["login"]["pwd"].value;
    var vpwd = document.forms["login"]["vpwd"].value;
    var email = document.forms["login"]["email"].value;
    var regName = /[a-zA-Z].*/;
    // 邮箱格式正则匹配
    var regExp = /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/;
    // 没输入昵称
    if (name == null || name == "") {
        document.getElementById("wuname").innerHTML = "*昵称必须填写！";
        return false;
    }
    // 过短
    if (name.length < 6) {
        document.getElementById("wuname").innerHTML = "*昵称过短！";
        return false;
    }
    // 过长
    if (name.length > 20) {
        document.getElementById("wuname").innerHTML = "*昵称过长！";
        return false;
    }
    // 密码为空
    if (pwd == null || pwd == "") {
        document.getElementById("wpwd").innerHTML = "*密码必须填写！";
        return false;
    }
    // 没有确认密码
    if (vpwd == null || vpwd == "") {
        document.getElementById("wvpwd").innerHTML = "*请确认密码！";
        return false;
    }
    // 密码不能和用户名相同
    if (pwd === name) {
        document.getElementById("wpwd").innerHTML = "*密码不能和用户名相同！";
        return false;
    }
    // 密码过短
    if (pwd.length < 6) {
        document.getElementById("wpwd").innerHTML = "*密码过短！";
        return false;
    }
    // 密码过长
    if (pwd.length > 20) {
        document.getElementById("wpwd").innerHTML = "*密码过长！";
        return false;
    }
    // 两次密码不同
    if (pwd != null && pwd != "" && vpwd != null && vpwd != "") {
        if (pwd === vpwd) {

        } else {
            document.getElementById("wpwd").innerHTML = "*两次密码不同！";
            document.getElementById("wvpwd").innerHTML = "*两次密码不同！";
            return false;
        }
    }
    // 邮箱格式
    if (regExp.test(email)) {

    } else {
        document.getElementById("wemail").innerHTML = "*邮箱格式错误！";
        return false;
    }
    // 昵称格式
    if (regName.test(name)) {

    } else {
        document.getElementById("wname").innerHTML = "*用户名只能以字母开始！";
        return false;
    }
}