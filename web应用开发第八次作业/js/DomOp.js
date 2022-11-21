var stu = ['James', 'Bruno', 'Hellen', 'Black', 'Dave', 'Frank', 'White'];
function initPer() {
    for (num in stu) {
        // 建立无序列表元素节点
        var Li = document.createElement("li");
        Li.classList.add("act");
        Li.id = stu[num];
        // 建立期中复选框节点
        var Ipt = document.createElement("input");
        Ipt.type = "checkbox";
        Ipt.value = stu[num];
        Ipt.classList.add("active");
        // 将元素拼接
        var element = document.getElementById("wait");
        Li.appendChild(Ipt);
        element.appendChild(Li);
        // 在复选框后添加学生名
        var el = document.getElementById(stu[num]);
        var node = document.createTextNode(stu[num]);
        el.appendChild(node);
    }
}

// 移入学生
function moveIn() {
    var inEl = document.getElementsByTagName("input");
    var arr = [];
    // 获取所有选中复选框
    for (num in inEl) {
        if (inEl[num].checked === true) {
            arr.push(inEl[num].value);
        }
    }
    for(num in arr){
        // 删除节点
        var parent = document.getElementById("wait");
        var child = document.getElementById(arr[num]);
        parent.removeChild(child);

        // 新增右边节点
        var Li = document.createElement("li");
        Li.classList.add("act1");
        Li.id = arr[num];
        var Ipt = document.createElement("input");
        Ipt.type = "checkbox";
        Ipt.value = arr[num];
        Ipt.classList.add("active1");
        var element = document.getElementById("join");
        Li.appendChild(Ipt);
        element.appendChild(Li);
        var el = document.getElementById(arr[num]);
        var node = document.createTextNode(arr[num]);
        el.appendChild(node);
    }
}


// 移出学生
function moveOut(){
    var inEl = document.getElementsByTagName("input");
    var arr = [];
    // 获取所有选中复选框
    for (num in inEl) {
        if (inEl[num].checked === true) {
            arr.push(inEl[num].value);
        }
    }
    for(num in arr){
        // 删除节点
        var parent = document.getElementById("join");
        var child = document.getElementById(arr[num]);
        parent.removeChild(child);

        // 新增做边节点
        var Li = document.createElement("li");
        Li.classList.add("act");
        Li.id = arr[num];
        var Ipt = document.createElement("input");
        Ipt.type = "checkbox";
        Ipt.value = arr[num];
        Ipt.classList.add("active");
        var element = document.getElementById("wait");
        Li.appendChild(Ipt);
        element.appendChild(Li);
        var el = document.getElementById(arr[num]);
        var node = document.createTextNode(arr[num]);
        el.appendChild(node);
    }
}