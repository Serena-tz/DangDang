// 设置头部顶部图片的出现、延迟和渐变效果
toppic();
function toppic() {
    var header_top = document.getElementById("header_top");
    setTimeout(function () {
        header_top.style.display = "block";
    }, 1000);
    setTimeout(function () {
        header_top.style.height = "200px";
        header_top.style.transition = "height 1s";
    }, 2000);
};

// 设置头部导航条的位置的地点切换
position("position", "positionul");
// 设置全部分类下拉选项框的切换
position("category", "category_div");
function position(ele1, ele2) {
    var position = document.getElementById(ele1);
    var positionul = document.getElementById(ele2);
    var positionul_li = positionul.children;
    for (var i = 0; i < positionul_li.length; i++) {
        positionul_li[i].onclick = function () {
            position.innerText = this.innerText
        };
    };
};

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
    // 获取每个三级菜单框
    var nav_three_wrapper = document.querySelectorAll("#nav_three_wrapper .nav-three");
    var main_top = document.getElementById("main_top");
    main_top.onmouseout = function () {
        for (var t = 0; t < header_left_nav.length; t++) {
            header_left_nav[t].className = ""
        }
    }
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
                    for (var z = 0; z < nav_three_wrapper.length; z++) {
                        nav_three_wrapper[_this.index].style.display = "none";
                    }
                    _this.className = "";
                })
                this.addEventListener("mouseout", function () {
                    for (var c = 0; c < nav_three_wrapper.length; c++) {
                        nav_three_wrapper[c].style.display = "none";
                    }
                })
            })
        })
    }
};

// 设置轮播大图
Rotationchart1(".screen-big", ".picList img", ".btn", ".dots li", -33);
function Rotationchart1(slide, li, btns, dots, num) {
    var slide = document.querySelector(slide);
    var li = slide.querySelectorAll(li);
    var btns = slide.querySelectorAll(btns);
    var dots = slide.querySelectorAll(dots);
    var index = 0;
    // 指示器移动函数
    function dotsmove() {
        for (var j = 0; j < dots.length; j++) {
            dots[j].className = "bgcolor4";
            dots[index].className = "on";
        }
    }
    // 给左边的按钮绑定单击事件
    btns[1].onclick = function () {
        for (var j = 0; j < li.length; j++) {
            li[j].style.opacity = 0
        }
        index++
        if (index > li.length - 1) {
            index = 0
        }
        li[index].style.transition = "all 0.5s linear"
        li[index].style.opacity = 1;
        // 让指示器跟着当前图片走
        dotsmove()
    }
    // 给右边的按钮绑定单击事件
    btns[0].onclick = function () {
        for (var j = 0; j < li.length; j++) {
            li[j].style.opacity = 0
        }
        index--
        if (index < 0) {
            index = li.length - 1
        }
        li[index].style.transition = "all 0.5s linear"
        li[index].style.opacity = 1;
        // 让指示器跟着当前图片走
        dotsmove()
    }
    // 给指示器绑定事件
    for (var i = 0; i < dots.length; i++) {
        dots[i].setAttribute("index", i);
        dots[i].onmouseover = function () {
            index = this.getAttribute("index");
            for (var j = 0; j < li.length; j++) {
                li[j].style.opacity = 0
            }
            li[index].style.transition = "all 0.5s linear"
            li[index].style.opacity = 1;
            // 让指示器跟着当前图片走
            dotsmove()
        };
    }
    // 通过定时器实现自动轮播
    function automatic() {
        btns[1].onclick();
    }
    var timer = setInterval(automatic, 2000);
    // 鼠标移入到轮播图区域时，暂停播放
    slide.onmouseover = function () {
        clearInterval(timer);
        // 实现左右按钮的显示与隐藏
        btns[0].style.left = 0;
        btns[0].style.transition = "left 0.1s";
        btns[1].style.right = 0;
        btns[1].style.transition = "right 0.1s";
    }
    // 鼠标离开轮播图区域时，恢复播放
    slide.onmouseout = function () {
        timer = setInterval(automatic, 2000);
        // 实现左右按钮的显示与隐藏
        btns[0].style.left = num + "px";
        btns[0].style.transition = "left 0.1s";
        btns[1].style.right = num + "px";
        btns[1].style.transition = "right 0.1s";
    }
}

// 设置轮播小图的切换
Rotationchart2(".screen-small", ".screen-small-pic", ".btn2", ".dots li", -40);
function Rotationchart2(slide, li, btns, dots, num) {
    var slide = document.querySelector(slide);
    var li = slide.querySelectorAll(li);
    var btns = slide.querySelectorAll(btns);
    var dots = slide.querySelectorAll(dots);
    var index = 0;
    // 指示器移动函数
    function dotsmove() {
        for (var j = 0; j < dots.length; j++) {
            dots[j].className = "bgcolor4";
            dots[index].className = "on";
        }
    }
    // 给左边的按钮绑定单击事件
    btns[1].onclick = function () {
        for (var j = 0; j < li.length; j++) {
            li[j].style.opacity = 0
        }
        index++
        if (index > li.length - 1) {
            index = 0
        }
        li[index].style.transition = "all 0.5s linear"
        li[index].style.opacity = 1;
        // 让指示器跟着当前图片走
        dotsmove()
    }
    // 给右边的按钮绑定单击事件
    btns[0].onclick = function () {
        for (var j = 0; j < li.length; j++) {
            li[j].style.opacity = 0
        }
        index--
        if (index < 0) {
            index = li.length - 1
        }
        li[index].style.transition = "all 0.5s linear"
        li[index].style.opacity = 1;
        // 让指示器跟着当前图片走
        dotsmove()
    }
    // 给指示器绑定事件
    for (var i = 0; i < dots.length; i++) {
        dots[i].setAttribute("index", i);
        dots[i].onmouseover = function () {
            index = this.getAttribute("index");
            for (var j = 0; j < li.length; j++) {
                li[j].style.opacity = 0
            }
            li[index].style.transition = "all 0.5s linear"
            li[index].style.opacity = 1;
            // 让指示器跟着当前图片走
            dotsmove()
        };
    }
    // 通过定时器实现自动轮播
    function automatic() {
        btns[1].onclick();
    }
    var timer = setInterval(automatic, 2000);
    // 鼠标移入到轮播图区域时，暂停播放
    slide.onmouseover = function () {
        clearInterval(timer);
        // 实现左右按钮的显示与隐藏
        btns[0].style.left = 0;
        btns[0].style.transition = "left 0.1s";
        btns[1].style.right = 0;
        btns[1].style.transition = "right 0.1s";
    }
    // 鼠标离开轮播图区域时，恢复播放
    slide.onmouseout = function () {
        timer = setInterval(automatic, 2000);
        // 实现左右按钮的显示与隐藏
        btns[0].style.left = num + "px";
        btns[0].style.transition = "left 0.1s";
        btns[1].style.right = num + "px";
        btns[1].style.transition = "right 0.1s";
    }
};

// 设置公告的tab页自动切换
table(".bulletin-tab-title li", ".bulletin-tab-pal", "fl titleli", "fl titleon");
// 设置厂商周tab页切换
table(".firm_week_ul li", ".week-tab .item", "bgcolor5", "on");
// 设置服装的tab页的切换
table(".head-title ul li", ".clo-r", "fl", "on6 fl");
// 设置图书的tab页的切换
table(".book-head-title ul li", ".book-right-item", "fl", "on6 fl");
// 设置图书右边的手风琴的tab页的切换
table(".tab_aa li", ".list_ab", "", "sfqon");
function table(li, tab_pal, name1, name2) {
    // 面板标题
    var li = document.querySelectorAll(li)
    // 面板
    var tab_pal = document.querySelectorAll(tab_pal)
    for (var i = 0; i < li.length; i++) {
        li[i].setAttribute("index", i);
        // 绑定响应函数
        li[i].onmouseover = function () {
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
        li[i].onmouseover();
        // },2000)
    }
}

// 实现公告页下方轮播图的切换
Rotationchart(".lastpic-wrapper", ".lastpic-list li", ".btn3", ".dots3 li", -40);
function Rotationchart(slide, li, btns, dots, num) {
    var slide = document.querySelector(slide);
    var li = slide.querySelectorAll(li);
    var btns = slide.querySelectorAll(btns);
    var dots = slide.querySelectorAll(dots);
    var index = 0;
    // 指示器移动函数
    function dotsmove() {
        for (var j = 0; j < dots.length; j++) {
            dots[j].className = "bgcolor5";
            dots[index].className = "on3";
        }
    }
    // 给左边的按钮绑定单击事件
    btns[1].onclick = function () {
        for (var j = 0; j < li.length; j++) {
            li[j].style.opacity = 0
        }
        index++
        if (index > li.length - 1) {
            index = 0
        }
        li[index].style.transition = "all 0.5s linear"
        li[index].style.opacity = 1;
        // 让指示器跟着当前图片走
        dotsmove()
    }
    // 给右边的按钮绑定单击事件
    btns[0].onclick = function () {
        for (var j = 0; j < li.length; j++) {
            li[j].style.opacity = 0
        }
        index--
        if (index < 0) {
            index = li.length - 1
        }
        li[index].style.transition = "all 0.5s linear"
        li[index].style.opacity = 1;
        // 让指示器跟着当前图片走
        dotsmove()
    }
    // 给指示器绑定事件
    for (var i = 0; i < dots.length; i++) {
        dots[i].setAttribute("index", i);
        dots[i].onmouseover = function () {
            index = this.getAttribute("index");
            for (var j = 0; j < li.length; j++) {
                li[j].style.opacity = 0
            }
            li[index].style.transition = "all 0.5s linear"
            li[index].style.opacity = 1;
            // 让指示器跟着当前图片走
            dotsmove()
        };
    }
    // 通过定时器实现自动轮播
    function automatic() {
        btns[1].onclick();
    }
    var timer = setInterval(automatic, 2000);
    // 鼠标移入到轮播图区域时，暂停播放
    slide.onmouseover = function () {
        clearInterval(timer);
        // 实现左右按钮的显示与隐藏
        btns[0].style.left = 0;
        btns[0].style.transition = "left 0.1s";
        btns[1].style.right = 0;
        btns[1].style.transition = "right 0.1s";
    }
    // 鼠标离开轮播图区域时，恢复播放
    slide.onmouseout = function () {
        timer = setInterval(automatic, 2000);
        // 实现左右按钮的显示与隐藏
        btns[0].style.left = num + "px";
        btns[0].style.transition = "left 0.1s";
        btns[1].style.right = num + "px";
        btns[1].style.transition = "right 0.1s";
    }
};

// 实现左右移动的轮播图
Rotationchart3(".clo-r1 .clo-slide", ".clo-r1 .clo-slide ul", ".clo-r1 #btns .btn5", ".slideul li", -40);
Rotationchart3(".clo-r2 .clo-slide", ".clo-r2 .clo-slide ul", ".clo-r2 #btns .btn5", ".slideul li", -40);
Rotationchart3(".clo-r3 .clo-slide", ".clo-r3 .clo-slide ul", ".clo-r3 #btns .btn5", ".slideul li", -40);
Rotationchart3(".clo-r4 .clo-slide", ".clo-r4 .clo-slide ul", ".clo-r4 #btns .btn5", ".slideul li", -40);
Rotationchart3(".clo-r5 .clo-slide", ".clo-r5 .clo-slide ul", ".clo-r5 #btns .btn5", ".slideul li", -40);
function Rotationchart3(slide, picList, btn, dots, num) {
    var slide = document.querySelector(slide);
    var picList = document.querySelector(picList);
    var li = picList.children;
    var btns = document.querySelectorAll(btn);
    var dots = slide.querySelectorAll(dots);
    var index = 0;
    // 指示器移动函数
    // function dotsmove() {
    //     for (var j = 0; j < li.length-1 ; j++) {
    //         dots[j].className = "";
    //         console.log(dots[j])
    //         dots[index].className = "curent";
    //     }
    // }
    // 给左边的按钮绑定单击事件
    btns[1].onclick = function () {
        index++
        if (index > li.length - 1) {
            li[0].style.left = '0px';
            index = 0
        }
        picList.style.left = -383 * index + "px";
        picList.style.transition = "left 0.5s linear";
        // 让指示器跟着当前图片走
        for (var j = 0; j < dots.length; j++) {
            dots[j].className = "";
            // console.log(dots[j])
            // dots[index].className = "curent";
        }
    }
    // 给右边的按钮绑定单击事件
    btns[0].onclick = function () {
        index--
        if (index < 0) {
            index = li.length - 1
        }
        picList.style.left = -383 * index + "px";
        picList.style.transition = "left 0.5s linear";
        // 让指示器跟着当前图片走
        for (var j = 0; j < dots.length; j++) {
            dots[j].className = "";
            // console.log(dots[j])
            // dots[index].className = "curent";
        }
    }
    // 给指示器绑定事件
    for (var i = 0; i < dots.length; i++) {
        dots[i].setAttribute("index", i);
        dots[i].onmouseover = function () {
            index = this.getAttribute("index");
            // for (var j = 0; j < li.length; j++) {
            //     li[j].style.opacity = 0
            // }
            picList.style.left = -383 * index + "px";
            picList.style.transition = "left 0.5s linear";
            // 让指示器跟着当前图片走
            for (var j = 0; j < dots.length; j++) {
                dots[j].className = "";
                console.log(dots[j])
                // dots[index].className = "curent";
            }
        };
    }
    // 通过定时器实现自动轮播
    function automatic() {
        btns[1].onclick();
    }
    var timer = setInterval(automatic, 2000);
    // 鼠标移入到轮播图区域时，暂停播放
    slide.onmouseover = function () {
        clearInterval(timer);
        // 实现左右按钮的显示与隐藏
        btns[0].style.left = 0;
        btns[0].style.transition = "left 0.1s";
        btns[1].style.right = 0;
        btns[1].style.transition = "right 0.1s";
    }
    // 鼠标离开轮播图区域时，恢复播放
    slide.onmouseout = function () {
        timer = setInterval(automatic, 2000);
        // 实现左右按钮的显示与隐藏
        btns[0].style.left = num + "px";
        btns[0].style.transition = "left 0.1s";
        btns[1].style.right = num + "px";
        btns[1].style.transition = "right 0.1s";
    }
};

// 设置手风琴效果
sfq(".list_ab1 .bar", ".list_ab1 .item");
// 设置第二个页面的手风琴的切换效果
sfq(".list_ab2 .bar", ".list_ab2 .item");
function sfq(ele1, ele2) {
    // 获取第一没有图片的项目
    var bar = document.querySelectorAll(ele1);
    // 获取有图片的项目
    var item = document.querySelectorAll(ele2);
    for (var i = 0; i < bar.length; i++) {
        bar[i].index = i;
        bar[i].onmouseover = function () {
            for (var x = 0; x < bar.length; x++) {
                bar[x].style.display = "block";
            }
            this.style.display = "none";
            for (var j = 0; j < bar.length; j++) {
                item[j].style.display = "none";
            }
            item[this.index].style.display = "block";
        }
    }
}

// 设置顶部导航条的吸附效果
fixed();
function fixed() {
    var grand = document.getElementById("logo-nav");
    var ddlogo = document.getElementById("ddlogo");
    var shopcart_order = document.getElementById("shopcart-order");
    var search_wrapper = document.getElementById("search-wrapper");
    var search_bottom = document.getElementById("search-bottom");
    var search_top = document.getElementById("search-top");
    var search_select = document.getElementById("search-select");
    var search_input = document.getElementById("search_input");
    var search_button = document.getElementById("search-button");
    var miao_wrapper = document.getElementById("miao-wrapper");
    document.onscroll = function () {
        // 短路运算
        // top代表的是此时此刻网页被卷去的高度
        var top = document.documentElement.scrollTop || document.body.scrollTop;
        // 盒子底部到浏览器的垂直高度，80
        var t = getPos(miao_wrapper).top;
        if (top > t) {
            // getPos(grand)
            shopcart_order.style.display="none";
            search_bottom.style.display="none";
            search_select.style.display="none";
            grand.className = "xf logo-nav clearfix wt1200";
            ddlogo.src = "images/ddlogo.png";
            logo_first.className = "wt1200";
            grand.style.paddingTop = "7px";
            grand.style.paddingBottom = "7px";
            search_wrapper.style.marginTop = "0"
            search_wrapper.style.marginLeft = "80px"
            search_input.style.width = "700px"
        } else {
            shopcart_order.style.display="inline-block";
            search_bottom.style.display="block";
            search_select.style.display="inline-block";
            grand.className = "logo-nav clearfix wt1200";
            ddlogo.src = "images/DDlogoNEW.gif";
            logo_first.className = "";
            grand.style.paddingTop = "";
            grand.style.paddingBottom = "";
            search_wrapper.style.marginTop = ""
            search_wrapper.style.marginLeft = ""
            search_input.style.width = ""
        }
    }
}

// 获取绝对距离的函数
function getPos(ele) {
    var l = 0;//21,21,8
    var t = 0;
    while (ele.offsetParent) {
        l += ele.offsetLeft + ele.offsetParent.clientLeft;
        t += ele.offsetTop + ele.offsetParent.clientTop;
        ele = ele.offsetParent;
    }
    return {
        'left': l,
        'top': t
    };
}

// 删除横条广告
close_icon();
function close_icon() {
    var close_icon = document.getElementById("close_icon");
    var bottom_fixed = document.getElementById("bottom_fixed");
    close_icon.onclick = function () {
        bottom_fixed.style.display = "none";
    }
}

// 设置右侧悬浮按钮
left_btn();
function left_btn() {
    var btn = document.querySelectorAll(".right-to-left");
    var btn_inner = document.querySelectorAll(".right-to-left span");
    for (var i = 0; i < btn.length; i++) {
        btn[i].index = i;
        btn[i].onmouseover = function () {
            for (var j = 0; j < btn.length; j++) {
                btn_inner[j].style.left = "40px";
                btn_inner[j].style.transition = "left .3s";
                // btn_inner[j].style.display = "none";
            }
            // btn_inner[this.index].style.display = "block";
            btn_inner[this.index].style.left = "-79px";
            btn_inner[this.index].style.transition = "left .3s";
        }
        btn[i].onmouseout = function () {
            for (var j = 0; j < btn.length; j++) {
                btn_inner[j].style.left = "40px";
                btn_inner[j].style.transition = "left .3s";
                // btn_inner[j].style.display = "none";
            }
        }
    }
}

// 设置秒杀的倒计时函数
timer();
function timer() {
    function djs() {
        //不加参数即为当前时间
        var now = new Date();
        // 添加参数，表示未来或过去时间
        var future = new Date("2020-09-13 11:00:00");
        // console.log(future-now);
        // 两者时间差，因为得到的是毫秒数，将其转为秒数
        var cha = (future - now) / 1000;
        // var day=parseInt(cha/3600/24); //所得秒数 ,一天有多少秒？是3600*24秒，所以相除即可
        var hours = parseInt(cha / 3600 % 24);//时间差除3600得到剩余小时数，但是因为满24为一天，所以要%24扣除天数才为剩余小时数
        var min = parseInt(cha % 3600 / 60);//同理，差模上3600得到剩余的分钟数，但余数可能超过60（超过60的部分被当做小时数了，不能算），所以要除以60
        var sec = parseInt(cha % 60);//最后所有除不下的部分即为剩余的秒数
        // 添加if判断，当倒计时结束时，停止计时器
        // if(now>=future){
        //     clearInterval(timer);
        //     alert("倒计时结束！");
        // }
        // console.info(day+"天"+hours+"时"+min+"分"+sec+"秒");
        function add(num) {
            if (num < 10) {
                return num = '0' + num;
            }
            else {
                return num
            }
        }
        var hour_w = document.getElementById("hour");
        var min_w = document.getElementById("min");
        var sec_w = document.getElementById("sec");
        hour_w.innerHTML = add(hours)
        min_w.innerHTML = add(min)
        sec_w.innerHTML = add(sec)
        // document.getElementById("box").innerText="距离2019年双十一还剩余："+day+"天"+hours+"时"+min+"分"+sec+"秒";
        // 启用定时器，每隔一秒刷新（重新生成）一次时间
    }
    setInterval(djs, 1000);
}

// // 获取绝对距离的函数
// function getPos(ele){
//     // 先设置一个接受从当前元素到定位父级的距离的计数器
//     // var pos={
//     var left = 0;
//     var top=0;
//     // };
//     // 先求出本身的边框粗细
//     var l=ele.clientLeft;
//     var t=ele.clientTop;
//     // 循环的条件就是看有没有到顶
//     // 再往HTML上面跳，则会返回null 
//    while(ele){
//        left += ele.offsetLeft;
//        top += ele.offsetTop;
//        // 要加上父级的边框粗细，不然有误差
//        left+=ele.clientLeft;
//        top+=ele.clientTop;
//        // 最后将对象本身迭代
//        ele=ele.offsetParent;

//    }
//    // 再将包含了绝对距离的对象返回出去，该对象包括了从起点出发到HTML的绝对距离（top,left）
//    // 最后返回出去减去本身的边框粗细
//    return { left: left-l,top:top-t};

// } 
// // 设置左侧锚点的切换
// left_nav();
// function left_nav() {
//     // 颜色#FF857F
//    // 获取导航//锚点的导航条条
//    var nav=document.querySelector("#navigation");
//    // 获取导航列表//锚点的每一个元素
//    var navLi=document.querySelectorAll("#navigation ul li");
//    // 获取导航对应的内容板块//楼层内容区域的每一个板块
//    var scrollBox=document.querySelectorAll(".wrapper .scroll");
//    // 计算当前nav到浏览器顶部的距离//也就是左边悬浮按钮到顶部的距离
//    // var t1=getPos(nav).top;
//    // console.log("t1:"+t1)
//    // window.onscroll=function(){
//    //     // 计算当前页面被卷去的高度
//    //     var t0=document.documentElement.scrollTop;
//    //     // 如果滚动的距离刚好到了nav所在位置，则让其悬浮
//    //     if(t0>=t1){
//    //         // nav.style.position = 'fixed';
//    //         nav.className="fixed";
//    //     }
//    //     // 如果不满足条件则还原
//    //     else{
//    //         // console.log(1)
//    //         nav.className="";
//    //     }
//    // }
//    // 点击导航按钮时，缓慢滑动到对应的面板中
//    // console.log(navLi)
//     for (var i = 0; i < navLi.length; i++) {
//         // console.log(1)
//         navLi[i].index = i;
//         navLi[i].onclick = function () {
//             // 首先要求出点击这个按钮时，对应面板的绝对距离，这样才能知道要滚动到哪个位置
//             var t3 = getPos(scrollBox[this.index]).top - nav.offsetHeight;
//             console.log("t3:" + t3);
//             // 设置定时器实现运动效果
//             var speed = 10;
//             // t4为当前位置滚动条位置
//             var t4 = document.documentElement.scrollTop;
//             // 如果是滚动条比面板低
//             if (t4 < t3) {
//                 var timer = setInterval(function () {
//                     // t3+=speed;
//                     t4 += speed;
//                     if (t4 >= t3) {
//                         clearInterval(timer);
//                         return false
//                     }
//                     document.documentElement.scrollTop = t4;
//                 }, 10)
//                 // console.log(t4)
//             } else {
//                 // 如果滚动条在面板的下面
//                 var timer = setInterval(function () {
//                     // t3+=speed;
//                     t4 -= speed;
//                     if (t4 <= t3) {
//                         clearInterval(timer);
//                         return false
//                     }
//                     document.documentElement.scrollTop = t4;
//                 }, 10)
//             }
//         }
//     }
// }

// 设置左侧锚点的切换
// left_nav();
function left_nav() {
    // 颜色#FF857F
    // 获取导航
    var nav = document.querySelector("#navigation");
    // 获取导航列表
    var navLi = document.querySelectorAll("#navigation .fix_screen_list  li");
    // 获取导航对应的内容板块
    var scrollBox = document.querySelectorAll(".left-nav");

    // 计算当前nav到浏览器顶部的距离
    var t1 = getPos(nav).top;

    // console.log("t1:"+t1)

    window.onscroll = function () {
        // 计算当前页面被卷去的高度
        var t0 = document.documentElement.scrollTop;

        // 如果滚动的距离刚好到了nav所在位置，则让其悬浮
        if (t0 >= t1) {
            // nav.style.position = 'fixed';
            nav.className = "fixed";
        }
        // 如果不满足条件则还原
        else {
            // console.log(1)
            nav.className = "";
        }

    }
    // 点击导航按钮时，缓慢滑动到对应的面板中
    // console.log(navLi)
    for (var i = 0; i < navLi.length; i++) {
        // console.log(1)
        navLi[i].index = i;
        navLi[i].onclick = function () {
            // 首先要求出点击这个按钮时，对应面板的绝对距离，这样才能知道要滚动到哪个位置
            var t3 = getPos(scrollBox[this.index]).top - nav.offsetHeight;
            console.log("t3:" + t3);
            // 设置定时器实现运动效果
            var speed = 10;
            // t4为当前位置滚动条位置
            var t4 = document.documentElement.scrollTop;
            // 如果是滚动条比面板低
            if (t4 < t3) {
                var timer = setInterval(function () {
                    // t3+=speed;
                    t4 += speed;
                    if (t4 >= t3) {
                        clearInterval(timer);
                        return false
                    }
                    document.documentElement.scrollTop = t4;
                }, 10)
                // console.log(t4)
            } else {
                // 如果滚动条在面板的下面
                var timer = setInterval(function () {
                    // t3+=speed;
                    t4 -= speed;
                    if (t4 <= t3) {
                        clearInterval(timer);
                        return false
                    }
                    document.documentElement.scrollTop = t4;
                }, 10)
            }
        }
    }

}

// 求绝对距离的函数
function getPos (ele) {
    // body... 
    // 初始值
    var l=0;//21,21,8
    var t=0;
    // l+=ele.offsetLeft;
    // l+=ele.offsetParent.offsetLeft
    while (ele.offsetParent) {
      // statement
      l+=ele.offsetLeft+ele.offsetParent.clientLeft;
      t+=ele.offsetTop+ele.offsetParent.clientTop;
      // 将元素替换为元素的定位父级（迭代）
      ele=ele.offsetParent;
      // console.log(ele);//father,grand,body,null
    }
    // 等上面的循环体结束后才会输出{}
    return {
        'left':l,
        'top':t
    };

}

//动画函数
function animate(element, json, fn) {
    clearInterval(element.timeId);//清理定时器
    //定时器,返回的是定时器的id
    element.timeId = setInterval(function () {
      var flag = true;//默认,假设,全部到达目标
      //遍历json对象中的每个属性还有属性对应的目标值
      for (var attr in json) {
        //判断这个属性attr中是不是opacity
        if (attr == "opacity") {
          //获取元素的当前的透明度,当前的透明度放大100倍
          var current = getStyle(element, attr) * 100;
          //目标的透明度放大100倍
          var target = json[attr] * 100;
          var step = (target - current) / 10;
          step = step > 0 ? Math.ceil(step) : Math.floor(step);
          current += step;//移动后的值
          element.style[attr] = current / 100;
        } else if (attr == "zIndex") { //判断这个属性attr中是不是zIndex
          //层级改变就是直接改变这个属性的值
          element.style[attr] = json[attr];
        } else {
          //普通的属性
          //获取元素这个属性的当前的值
          var current = parseInt(getStyle(element, attr));
          //当前的属性对应的目标值
          var target = json[attr];
          //移动的步数
          var step = (target - current)/20;
          step = step > 0 ? Math.ceil(step) : Math.floor(step);
          current += step;//移动后的值
          element.style[attr] = current + "px";
        }
        //是否到达目标
        if (current != target) {
          flag = false;
        }
      }
      if (flag) {
        //清理定时器
        clearInterval(element.timeId);
        //所有的属性到达目标才能使用这个函数,前提是用户传入了这个函数
        if (fn) {
          fn();
        }
      }
      //测试代码
      // console.log("目标:" + target + ",当前:" + current + ",每次的移动步数:" + step);
    }, 20);
}

//获取元素属性函数
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
     return window.getComputedStyle(obj, null)[attr];
    } else {
     return obj.currentStyle[attr];
    }
}

//自动导航
function ff(){
    var book=document.getElementById('book');
    var bookTop=getPos(book).top;//图书
    var clothes=document.getElementById('clothes');
    var clothesTop=getPos(clothes).top//服装
    var necessary=document.getElementById('necessary');
    var necessaryTop=getPos(necessary).top//百货
    var pregnant=document.getElementById('pregnant');
    var pregnantTop=getPos(pregnant).top//童装
    var recommend=document.getElementById('recommend');
    var recommendTop=getPos(recommend).top;//为你推荐
    var libojs=document.getElementById('uu').children;
    var arr=[bookTop,clothesTop,necessaryTop,pregnantTop,recommendTop,0];
    var doc=document.documentElement||document.body;
    console.log(arr)
    // 自动导航
    for(var i=0;i<libojs.length;i++){
        libojs[i].setAttribute('index',i);
        libojs[i].onclick=function(){
            clearInterval(doc.timer)
        var num=this.getAttribute('index');
        var curTop=document.documentElement.scrollTop||document.body.scrollTop;//当前浏览器的距离
        function anima(){
            step=curTop>arr[num]?-20:20
            if(curTop>=arr[num]){
            curTop+=step;
            doc.scrollTop=curTop; 
                if(curTop-arr[num]<0){
                    clearInterval(doc.timer)
                }
            }
            curTop+=step;
            doc.scrollTop=curTop; 
        }
            doc.timer=setInterval(anima,5);
        }
        }
    }
ff()