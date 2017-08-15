/**
 * Created by lijiabin01 on 04/08/2017.
 */
var data=["iphone6", "佳能相机", "笔记本", "ipad", "50元购物卡", "谢谢参与", "单反", "球票"],
    timer=null,
    flag=0;

window.onload = function () {
    var play=document.getElementById("play"),
        stop=document.getElementById("stop");
    play.onclick = playFun;
    stop.onclick = stopFun;

    // 键盘事件,document代表整个网页响应
    document.onkeyup = function (event) {
        event = event || window.event;
        console.log(event);
        // 13代表回车键
        if (event.keyCode == 13) {
            if (flag==0) {
                playFun();
                flag = 1;
            }
            else {
                stopFun();
                flag = 0;
            }
        }
        else {
            console.log("不是回车键");
        }
    }
}

function playFun() {
    //this是指play那个按钮
    // var that=this;
    var title=document.getElementById("title");
    var play=document.getElementById("play");
        clearInterval(timer);
    timer=setInterval(function () {
        // console.log("hello");
        var random=Math.floor(Math.random()*data.length);
        title.innerHTML = data[random];
    }, 50);
    // document不能设置背景颜色
    play.style.backgroundColor = "gray";
}

function stopFun() {
    clearInterval(timer);
    var play=document.getElementById("play");
    play.style.backgroundColor = "#036";
}


