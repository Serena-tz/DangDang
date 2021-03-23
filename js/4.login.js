// 设置二维码的刷新
refresh();
function refresh() {
    var two_code = document.querySelector(".two_code");
    var pic_code = document.querySelector(".pic_code");
    var tel_pic = document.querySelector(".tel_pic");
    var scan_false = document.querySelector(".scan_false");
    var false_remind = document.querySelector(".false_remind a");
    // 获取右边的切换图片
    var img = document.querySelectorAll(".hd-r a");
    // 获取切换的图片
    // var hd_r1=document.querySelector(".hd-r1");
    // var hd_r2=document.querySelector(".hd-r2");
    var pic = function () {
        pic_code.style.left = "0px";
        pic_code.style.transition = "all 1s";
        tel_pic.style.display = "block";
        tel_pic.style.transition = "all 0.5s";
    };
    var tel = function () {
        pic_code.style.left = "73px";
        pic_code.style.transition = "all 0.8s";
        tel_pic.style.display = "none";
        tel_pic.style.transition = "all 0.2s";
    };
    two_code.onmouseover = pic;
    two_code.onmouseout = tel;
    function set() {
        scan_false.style.display = "block";
        two_code.onmouseover = null;
        two_code.onmouseout = null;
        pic();
        tel();
    }
    img[0].addEventListener("click", function () {
        var timer = setInterval(set, 5000);
    })
    img[1].addEventListener("click", function () {
        clearInterval(timer);
    })
    // hd_r1.onclick=function(e){
    // e.cancelBubble=true;
    // setInterval(set, 5000);
    // }
    // hd_r2.onclick=function(e){
    //     e.cancelBubble=true;
    //     clearInterval(set, 5000);
    // }
    false_remind.onclick = function () {
        scan_false.style.display = "none";
        two_code.onmouseover = pic;
        two_code.onmouseout = tel;
    };
};

// 设置更多的百度网和人人网的显示和隐藏
more();
function more() {
    var more = document.getElementById("more");
    var share_more = document.querySelector(".share-more");
    var more_arrow = document.querySelector(".more-arrow");
    more.onclick = function () {
        if (share_more.style.display == "none") {
            share_more.style.display = "block";
        } else {
            share_more.style.display = "none";
        };
        if (more_arrow.style.backgroundPosition == "0px -350px") {
            more_arrow.style.backgroundPosition = "-32px -350px"
        } else {
            more_arrow.style.backgroundPosition = "0px -350px"
        }

    };
};

// 设置勾选的多选按钮
checkbox();
function checkbox() {
    var checkbox = document.getElementById("checkbox");
    var check_text = document.querySelectorAll(".check-text");
    checkbox.onclick = function () {
        if (checkbox.checked) {
            check_text[0].style.display = "none";
            check_text[1].style.display = "inline-block";
        }
        else {
            check_text[0].style.display = "inline-block";
            check_text[1].style.display = "none";
        }
    }
}

// 设置用户名的获得焦点和失去焦点
jiao(".username", "usernameinput", ".username_span", ".username-place", ".del-n", ".icon-n", 110);
jiao(".pw", "pwinput", ".pw_span", ".pw-place", ".del-p", ".icon-p", 150);
function jiao(ele1, ele2, ele3, ele4, ele5, ele6, ele7) {
    var username_w = document.querySelector(ele1);
    var username = document.getElementById(ele2);
    var username_span = document.querySelector(ele3);
    var username_place = document.querySelector(ele4);
    var text_del = document.querySelector(ele5);
    var icon = document.querySelector(ele6);
    var text = username_place.innerText;
    username.onfocus = function () {
        username_span.style.display = "inline-block";
        username_span.style.color = "#505050"
        username_place.innerText = "";
        username_w.style.border = "1px solid #505050";
        icon.style.backgroundPosition = "10px -" + ele7 + "px"
    }
    username.onblur = function () {
        username_span.style.display = "none";
        if (username.value.length > 0) {
            username_place.innerText = "";
        } else {
            username_place.innerText = text;
        }
        username_w.style.border = "1px solid #e6e6e6";
    }
    username.addEventListener("input", function () {
        if (username.value.length > 0) {
            text_del.style.display = "block"
        } else {
            text_del.style.display = "none"
        }
    });
    text_del.onclick = function () {
        username.value = "";
        text_del.style.display = "none";
        username_place.innerText = text;
    };
}

// 设置登录按钮的单击事件
loginbtn();
function loginbtn() {
    var login_btn = document.querySelector(".login-btn");
    var input_n = document.getElementById("usernameinput");
    var input_p = document.getElementById("pwinput");
    var border_n = document.querySelector(".username");
    var border_p = document.querySelector(".pw");
    var u_span = document.querySelector(".username_span");
    var p_span = document.querySelector(".pw_span");
    var icon_n = document.querySelector(".icon-n");
    var icon_p = document.querySelector(".icon-p");
    // 获取旋转提示
    var Rotate_prompt = document.querySelector(".Rotate-prompt");
    // 获取旋转的四张图片
    var imgs = document.querySelectorAll(".Rotate-bgs>div");
    login_btn.onclick = function () {
        if (!input_n.value) {
            border_n.style.border = "1px solid #ff2832";
            u_span.style.display = "inline-block";
            u_span.style.color = "#ff2832";
            icon_n.style.backgroundPosition = "-14px -110px"
        }
        if (!input_p.value) {
            border_p.style.border = "1px solid #ff2832";
            p_span.style.display = "inline-block";
            p_span.style.color = "#ff2832";

            p_span.innerText = "请输入您的登录密码"
            icon_p.style.backgroundPosition = "-14px -150px"
        }
        // window.getComputedStyle(this).getPropertyValue("background-position")
        if (window.getComputedStyle(imgs[0]).getPropertyValue("background-position") != "0px -228px" || window.getComputedStyle(imgs[1]).getPropertyValue("background-position") != "-76px -228px" || window.getComputedStyle(imgs[0]).getPropertyValue("background-position") != "-152px -228px" || window.getComputedStyle(imgs[0]).getPropertyValue("background-position") != "-228px -228px") {
            Rotate_prompt.className = "Rotate-prompt red1";
        }
        else if(window.getComputedStyle(imgs[0]).getPropertyValue("background-position") == "0px -228px" && window.getComputedStyle(imgs[1]).getPropertyValue("background-position") == "-76px -228px" && window.getComputedStyle(imgs[0]).getPropertyValue("background-position") == "-152px -228px" && window.getComputedStyle(imgs[0]).getPropertyValue("background-position") != "-228px -228px") {
            Rotate_prompt.className = "Rotate-prompt";
        }
    }
}

// 设置扫码登录和密码登录的切换
login_tab();
function login_tab() {
    // 获取头部的标题
    var head = document.querySelectorAll(".login-head span");
    // 获取右边的切换图片
    var img = document.querySelectorAll(".hd-r a");
    // 获取右边的提示文字
    var tips = document.querySelectorAll(".info .tips");
    // 获取主内容
    var content = document.querySelectorAll(".login-content");
    for (var i = 0; i < img.length; i++) {
        img[i].index = i;
        img[i].addEventListener("click", function () {
            for (var j = 0; j < img.length; j++) {
                img[j].style.display = "block";
                head[j].style.display = "inline-block";
                tips[j].style.display = "inline-block";
                content[j].style.display = "block";
            }
            img[this.index].style.display = "none";
            head[this.index].style.display = "none";
            tips[this.index].style.display = "none";
            content[this.index].style.display = "none";
        })
        // img[i].onclick=
    }
}

// 设置遮罩层
masks();
function masks() {
    var masks = document.querySelector(".masks-wrapper");
    var btn = document.querySelector(".pop_cheat_btn");
    btn.onclick = function () {
        masks.style.display = "none";
    };
};

// 设置图片的旋转
rotate();
function rotate() {
    // 获取换一组的按钮
    var refresh = document.querySelector(".refresh");
    // 生成一个图片数组
    var arr = ["url(../images/4.login/rotate1.jpg)", "url(../images/4.login/rotate2.jpg)", "url(../images/4.login/rotate3.jpg)"];
    // 获取四个放置图片的块块
    var imgs = document.querySelectorAll(".Rotate-bgs>div");
    var Rotate_prompt = document.querySelector(".Rotate-prompt");
    var count = 0;
    refresh.onclick = function () {
        count++;
        if (count >= arr.length) {
            count = 0
        }
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].style.backgroundImage = arr[count];
        }
    }
    for (var j = 0; j < imgs.length; j++) {
        imgs[j].index = j;
        var count2 = 0;
        imgs[j].onclick = function () {
            count2++;
            if (count2 >= imgs.length) {
                count2 = 0
            }
            this.style.backgroundPosition = -76 * this.index + "px" + " " + (-76 * count2) + "px";
            // Rotate_prompt.className = "Rotate-prompt";
            // console.log(-76 * this.index + "px" + " " + (-76 * count2) + "px")
        }
    }
}