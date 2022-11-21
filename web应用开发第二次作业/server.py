from flask import Flask, render_template, request

app = Flask(__name__)

# 主页路由
@app.route("/")
def index():
    return  render_template("index.html")

# 处理表单数据
@app.route("/result", methods = ["POST"])
def post_data():
    # 获取用户的数据
    user = request.form.get("user")
    pwd = request.form.get("pass")
    descr = request.form.get("descr")
    sex = request.form.get("sex")
    grade = request.form.get("grade")
    hobby = request.form.getlist("hobby")
    file = request.form.get("file")
    hobbys = ""
    for hb in hobby:
        hobbys +=  hb + " " 
    person = [
        {'key': '姓名', 'value': user},
        {'key': '密码', 'value': pwd},
        {'key': '个人描述', 'value': descr},
        {'key': '性别', 'value': sex},
        {'key': '年级', 'value': grade},
        {'key': '爱好', 'value': hobbys},
        {'key': '个人简历', 'value': file},
    ]
    # 将数据传给数据回显界面，经由模板引擎渲染后回显
    return  render_template("result.html", person=person)


if __name__=="__main__":
    app.run(debug=True, host='127.0.0.1', port=5000)
