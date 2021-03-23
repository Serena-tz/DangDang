// 设置注册页的新用户注册和企业用户的tab页的切换，绑定点击事件
table(".head>a", ".reg-tab", "head_a", "head_a1 head_a");
function table(li, tab_pal, name1, name2) {
    // 面板标题
    var li = document.querySelectorAll(li)
    // 面板
    var tab_pal = document.querySelectorAll(tab_pal)
    for (var i = 0; i < li.length; i++) {
        li[i].setAttribute("index", i);
        // 绑定响应函数
        li[i].onclick = function () {
            // 设置面板标题样式的切换
            for (var j = 0; j < li.length; j++) {
                li[j].className = name1;
            }
            this.className = name2;
            // 设置面板的切换
            for (var x = 0; x < tab_pal.length; x++) {
                tab_pal[x].style.display = "none";
            }
            tab_pal[this.getAttribute("index")].style.display = "block";
        }
        // setInterval(function(){
        // li[i].onmouseover();
        // },2000)
    }
}