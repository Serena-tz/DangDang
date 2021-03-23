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

// 设置最顶部图片的延迟效果
Delay();
function Delay() {
    var header_top = document.getElementById("head-top");
    setTimeout(function () {
        header_top.style.display = "block";
    }, 1000);
}

// 设置筛选条件的多选和更多按钮
more();
function more() {
    // 获取多选按钮
    var btn_choose = document.querySelectorAll(".btn_choose");
    // 获取更多按钮
    var btn_more = document.querySelectorAll(".btn_more");
    // 获取确定和取消的盒子
    var btn_box = document.querySelectorAll(".btn_box");
    // 获取取消按钮
    var btn_no = document.querySelectorAll(".btn_no");
    // 获取有边框的外边元素
    var list_w = document.querySelectorAll(".list-w233");
    // 获取第二行需要隐藏的元素
    var list_right_last = document.querySelectorAll(".list-right-last");
    // 给多选按钮绑定单击事件
    for (var i = 0; i < btn_choose.length; i++) {
        btn_choose[i].index = i;
        btn_choose[i].addEventListener("click",function () {
            // 点击多选按钮的时候外边盒子出现边框
            for (var i = 0; i < btn_choose.length; i++) {
                list_w[i].className = "list-right list-w233"
            }
            list_w[this.index].className = "list-right list_right_on list-w233"
            // 确定和取消按钮出现
            for (var i = 0; i < btn_choose.length; i++) {
                btn_box[i].style.display = "none"
            }
            btn_box[this.index].style.display = "block"
            // 当前多选按钮消失
            for (var i = 0; i < btn_choose.length; i++) {
                btn_choose[i].style.display = "block";
            }
            this.style.display = "none";
            // 当前更多按钮消失
            for (var i = 0; i < btn_choose.length; i++) {
                btn_more[i].style.display = "block";
            }
            btn_more[this.index].style.display = "none";
            // 当前的第二行应该出现
            for (var a = 0; a < btn_choose.length; a++){
                console.log(111)
                console.log(list_right_last[a])
                list_right_last[a].style.display="none";
            }
            list_right_last[this.index].style.display="block";
        })
        // btn_choose[i].onclick = 
        // 为取消按钮绑定点击事件
        for (var j = 0; j < btn_no.length; j++) {
            btn_no[j].index = j;
            btn_no[j].addEventListener("click",function () {
                // 点击多选按钮的时候外边盒子边框消失
                list_w[this.index].className = "list-right list-w233"
                // 确定和取消按钮消失
                btn_box[this.index].style.display = "none"
                // 当前多选按钮出现
                btn_choose[this.index].style.display = "block";
                // 当前更多按钮出现
                btn_more[this.index].style.display = "block";
                // 当前的第二行应该消失
                list_right_last[this.index].style.display="none";
            })
            // .onclick = 
        }
        // 为更多按钮绑定单击事件
        for (var x = 0; x < btn_more.length; x++) {
            btn_more[x].index = x;
            btn_more[x].onclick = function () {
                // 设置第二行的显示和隐藏
                if (window.getComputedStyle(list_right_last[this.index]).getPropertyValue("display") == "none") {
                    list_right_last[this.index].style.display = "block";
                    btn_more[this.index].style.backgroundPosition = "right 5px";
                    btn_more[this.index].innerText = "收起";
                }
                else {
                    list_right_last[this.index].style.display = "none";
                    // for (var i = 0; i < btn_more.length; i++){
                    //     btn_more[i].style.backgroundPosition="right -24px";
                    // }
                    btn_more[this.index].style.backgroundPosition = "right -24px";
                    btn_more[this.index].innerText = "更多";
                }
            }
        }
    }
}

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
