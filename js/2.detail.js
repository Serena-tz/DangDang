// 设置搜索输入框的获焦和失焦效果
search_input();
function search_input() {
    var search_input = document.getElementById("search_input");
    var search_input_value = search_input.value;
    search_input.onfocus = function () {
        search_input.value = "";
    };
    search_input.onblur = function () {
        search_input.value = search_input_value;
    };
};

// 设置主菜单三级导航的显示和隐藏
nav_three();
function nav_three() {
    // 获取每个li标签
    var header_left_nav = document.querySelectorAll("#header_left_nav li");
    var header_left_nav2 = document.querySelectorAll("#header_left_nav");
    // 获取每个三级菜单框
    var nav_three_wrapper = document.querySelectorAll("#nav_three_wrapper .nav-three");
    var main_top = document.getElementById("main_top");
    for (var i = 0; i < nav_three_wrapper.length; i++) {
        header_left_nav[i].index = i;
        header_left_nav[i].addEventListener("mouseover", function () {
            // 二级菜单控制三级菜单的显示和隐藏
            for (var j = 0; j < header_left_nav.length; j++) {
                nav_three_wrapper[j].style.display = "none";
            }
            nav_three_wrapper[this.index].style.display = "block";
            for (var a = 0; a < nav_three_wrapper.length; a++) {
                header_left_nav[a].className = "";
            }
            this.className = "listyle pl20";
        })
        header_left_nav[i].addEventListener("mouseout", function () {
            for (var x = 0; x < nav_three_wrapper.length; x++) {
                nav_three_wrapper[x].style.display = "none";
            }
            var _this = this;
            // 三级菜单自己控制自己的显示
            nav_three_wrapper[this.index].addEventListener("mouseover", function () {
                for (var y = 0; y < nav_three_wrapper.length; y++) {
                    nav_three_wrapper[y].style.display = "none";
                }
                this.style.display = "block";
                for (var s = 0; s < nav_three_wrapper.length; s++) {
                    header_left_nav[s].className = "";
                }
                _this.className = "listyle pl20";
                // 离开二级菜单以后，三级菜单消失
                _this.addEventListener("mouseout", function () {
                    console.log(11)

                    // console.log(_this)
                    for (var z = 0; z < nav_three_wrapper.length; z++) {
                        nav_three_wrapper[_this.index].style.display = "none";
                    }
                    _this.className = "";
                })
                // console.log(this)
                // 离开三级菜单后三级菜单消失
                this.addEventListener("mouseout", function () {
                    console.log(12)
                    for (var c = 0; c < nav_three_wrapper.length; c++) {
                        nav_three_wrapper[c].style.display = "none";
                        // header_left_nav2.style.display = "none";
                    }
                })
            })
        })
    }
    main_top.onmouseout = function (e) {
        e.cancelBubble=true;
        for (var t = 0; t < header_left_nav.length; t++) {
            header_left_nav[t].className = "";
            // header_left_nav2.style.display = "none";

        }

    }
};

// 设置二级菜单的显示和隐藏
all_class();
function all_class() {
    var all = document.querySelector(".all-class");
    var header_left_nav2 = document.querySelector("#header_left_nav");
    // var nav_three_wrapper2 = document.querySelectorAll("#nav_three_wrapper");
    all.onmouseover = function () {
        header_left_nav2.style.display = "block";
    }
}

// 设置展示的商品的放大镜效果
tobig();
function tobig() {
    //当鼠标移入到缩略图时，才显示滑块和右边大图
    //小图盒子
    var sdiv = document.querySelector(".sdiv");
    // 小图图片
    var simg = document.querySelector(".sdiv img");
    // 滑块
    var oSpan = document.querySelector("#oSpan");
    // 大图盒子
    var bdiv = document.querySelector(".bdiv");
    // 大图的每张图片
    // var bdivimg = document.querySelectorAll(".bdiv img");
    // 大图图片
    var bimg = document.querySelector(".bdiv>img");
    var arr = ["images/2.detail/lar1.jpg", "images/2.detail/lar2.jpg", "images/2.detail/lar3.jpg", "images/2.detail/lar4.jpg"];

    // var barr=[,,,]
    // 设置缩略图
    var smallli = document.querySelectorAll(".small-pic-ul li");
    for (var i = 0; i < smallli.length; i++) {
        smallli[i].index = i;
        smallli[i].onmouseover = function () {
            // 设置缩略图的样式
            for (var j = 0; j < smallli.length; j++) {
                smallli[j].className = "fl ml20";
            }
            this.className = "fl ml20 smallli";
            // 设置小图的src
            simg.src = arr[this.index];
            // 设置大图的src
            bimg.src = arr[this.index]
        }
    }
    // 让滑块在缩略图盒子中跟随鼠标移动
    sdiv.onmousemove = function (e) {
        // 滑块的可移动范围：0-150px
        // l表示滑块的水平移动距离
        var l = e.pageX - getPos(this).left - oSpan.offsetWidth / 2;
        // t
        var t = e.pageY - getPos(this).top - oSpan.offsetHeight / 2;
        // 150
        // 滑块的可移动距离
        var L = sdiv.clientWidth - oSpan.offsetWidth;
        var T = sdiv.clientHeight - oSpan.offsetHeight;
        // 边界判断
        // 最左边时
        if (l < 0) {
            l = 0;
        }
        // 最右边时
        if (l > L) {
            l = L;
        }
        // 最下边时
        if (t < 0) {
            t = 0;
        }
        if (t > T) {
            t = T;
        }
        // l
        oSpan.style.left = l + "px";
        oSpan.style.top = t + "px";
        // 找比例
        // L/l=比例
        // 相当于是找当滑块在左边移动一个像素时，右边要移动多少个像素的问题
        // bx表示水平方向的比例
        var bx = (bimg.clientWidth - bdiv.clientWidth) / (sdiv.clientWidth - oSpan.offsetWidth);
        var by = (bimg.clientHeight - bdiv.clientHeight) / (sdiv.clientHeight - oSpan.offsetHeight);
        // 找到比例后，要将l*bx才是大图要移动的距离
        bimg.style.left = -l * bx + "px";
        bimg.style.top = -t * by + "px";
    }
    // 鼠标移入到缩略图时，显示大图和滑块
    sdiv.onmouseover = function () {
        oSpan.style.display = bdiv.style.display = "block";
    };
    // 鼠标离开到缩略图时，显示大图和滑块
    sdiv.onmouseout = function () {
        oSpan.style.display = "none";
        bdiv.style.display = "none";
    };

}
// 求绝对距离的函数
function getPos(ele) {
    // body... 
    // 初始值
    var l = 0;//21,21,8
    var t = 0;
    // l+=ele.offsetLeft;
    // l+=ele.offsetParent.offsetLeft
    while (ele.offsetParent) {
        // statement
        l += ele.offsetLeft + ele.offsetParent.clientLeft;
        t += ele.offsetTop + ele.offsetParent.clientTop;
        // 将元素替换为元素的定位父级（迭代）
        ele = ele.offsetParent;
        // console.log(ele);//father,grand,body,null
    }
    // 等上面的循环体结束后才会输出{}
    return {
        'left': l,
        'top': t
    };
}

// 设置商品详情和商品评论的tab页切换，绑定点击事件，第一页全部显示，第二页单个显示
table(".pro-detail .tab li", ".pro-detail-content", "fl", "hover fl");
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
            if (this.getAttribute("index") == 0) {
                for (var x = 0; x < tab_pal.length; x++) {
                    tab_pal[x].style.display = "block";
                }
            } else {
                for (var x = 0; x < tab_pal.length; x++) {
                    tab_pal[x].style.display = "none";
                }
                tab_pal[this.getAttribute("index")].style.display = "block";
            }
        }
        // setInterval(function(){
        // li[i].onmouseover();
        // },2000)
    }
}

// 设置购买数量的增减，数量的增减和按钮样式的切换
num();
function num() {
    var num_add = document.getElementById("num_add");
    var num_del = document.getElementById("num_del");
    var buy_num = document.getElementById("buy-num");
    num_add.onclick = function () {
        buy_num.value = +buy_num.value + 1;
        num_add.style.backgroundColor = "#646464";
        num_del.style.backgroundColor = "#646464";
    }
    num_del.onclick = function () {
        if (buy_num.value < 2) {
            return
        }
        num_del.style.backgroundColor = "#646464";
        buy_num.value = +buy_num.value - 1
        if (buy_num.value < 2) {
            num_del.style.backgroundColor = "#ccc";

        }
    }
}

// 设置经常一起购买的商品的汇总求和
choose();
function choose() {
    var unchoose2 = document.querySelectorAll(".unchoose2");
    var price_all_d = document.querySelectorAll(".price_all_d span");
    // 获取所有的子元素的价格
    var zhur = document.querySelectorAll(".zhur .price span");
    var num = document.querySelector(".group_info .num b");
    // 获取总价格
    var allp = document.querySelector(".group_info .price_all_d span");
    for (var i = 0; i < unchoose2.length; i++) {
        unchoose2[i].index = i;
        // 点击的时候切换按钮的样式
        unchoose2[i].onclick = function () {
            if (window.getComputedStyle(this).getPropertyValue("background-position") == "-25px -475px") {
                this.style.backgroundPosition = "-50px -475px";
                allp.innerText = (+(allp.innerText) + +(zhur[this.index].innerText)).toFixed(2);
            } else {
                this.style.backgroundPosition = "-25px -475px";
                allp.innerText = (+(allp.innerText) - +(zhur[this.index].innerText)).toFixed(2);
            }
            // 统计共买了几件商品
            var count = 1;
            for (var j = 0; j < unchoose2.length; j++) {
                if (window.getComputedStyle(unchoose2[j]).getPropertyValue("background-position") == "-50px -475px") {
                    count++;
                }
                num.innerText = +count;
                num.innerText == 1 ? num.className = "" : num.className = "red1";
            }

        }
    }
}