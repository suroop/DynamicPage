function unScroll() {                               //页面不可滚动
    var top = $(document).scrollTop();
    $(document).on('scroll.unable', function (e) {
        $(document).scrollTop(top);
    })
}
function removeUnScroll() {                         //页面课滚动
    $(document).unbind("scroll.unable");
}
function getMousePos(event){                        //显示箭头
    var e = event || window.event;
        if(e.clientY<200){
            $("#page4 #previmg").fadeIn();
        }
        else if(e.clientY>600){
            $("#page4 #nextimg").fadeIn();
        }
        else{
            $("#page4 #nextimg").fadeOut();
            $("#page4 #previmg").fadeOut();
        }
        var dx = (e.clientX - 1528 / 2 ) / 1000;
        var dy = (e.clientY - 745 / 2)/ 100;
        $(".vase-move1").css("left",`${20-dx}%`);
        $(".vase-move1").css("top", `${20-dy}%`);
        $(".vase-move2").css("left", `${15 - dx}%`);
        $(".vase-move2").css("top", `${-10 - dy}%`);
        $(".vase-move3").css("left", `${2 - dx}%`);
        $(".vase-move3").css("top", `${50 - dy}%`);
        $(".vase-move4").css("right", `${5 + dx}%`);
        $(".vase-move4").css("top", `${35 - dy}%`);
}
$(document).ready(function(){
    var p = 0, t = 0,clickCount=0;
    document.getElementsByTagName('body')[0].addEventListener("mousemove", getMousePos);
    $(window).scroll(function(){
        p = $(window).scrollTop();                              //显示菜单
        if (t < p) {
            $("#nav").css("top", -55);                          //隐藏菜单
            if ($(window).scrollTop() > 2165) {                        //page4的特效
                $(".page4content1").removeClass("flag");
                //unScroll();
                if ($(".page4content3").hasClass("flag")) {
                    removeUnScroll();
                }

            }
        }
        else {                          
            $("#nav").css("top", 25);                           //显示菜单
            if ($(window).scrollTop() < 2165) {                        //page4的特效
                $(".page4content3").removeClass("flag");
                //unScroll();
                if ($(".page4content1").hasClass("flag")) {
                    removeUnScroll();
                }
            }
        }
        setTimeout(function () { t = p; }, 0);
        if ($(window).scrollTop()>150){                            //显示page2"IN"页面
            $("#srcollbar1").css("margin-top","50px");
            $("#srcollbar2").css("margin-top", "100px");
            $("#srcollbar3").css("margin-top", "10px");
            $("#span1").css({ "top": "0px","opacity":"1"});
            $("#span2").css({ "top": "0px", "opacity": "1" });
            $("#srcollbar3 .box img").css("transform","scale("+1.2+")");
            $("#srcollbar2 .box").css("transform", "rotate(" + 15 + "deg)");
            $("#srcollbar1 .box").css("transform", "rotate(" + -15 + "deg)");
        }
        else{
            $("#srcollbar1").css("margin-top", "0");
            $("#srcollbar2").css("margin-top", "0");
            $("#srcollbar3").css("margin-top", "0");
            $("#span1").css({ "top": "-25px", "opacity": "0" });
            $("#span2").css({ "top": "-15px", "opacity": "0" });
            $("#srcollbar1 .box").css("transform", "rotate(" + 0 + "deg)");
            $("#srcollbar2 .box").css("transform", "rotate(" + 0 + "deg)");
            $("#srcollbar3 .box img").css("transform", "scale(" + 0.7+ ")");

        }
        if ($(window).scrollTop() > 3312){
           // alert(6);
            $(".descps").fadeIn();
            $("#page6F").css("left","0px");
            $("#page6O").css("left", "200px");
            $("#page6R").css("left", "400px");
            $("#page6title").children("span").css("opacity","1");
            $(".descps").css("opacity", "1");
            $(".page6-second-part2").children().css("opacity", "1");
        }
        else{
            $(".descps").css("opacity", "0");
            $(".page6-second-part2").children().css("opacity", "0");
            $("#page6F").css("left", "-320px");
            $("#page6O").css("left", "-320px");
            $("#page6R").css("left", "-320px");
            $("#page6title").children("span").css("opacity", "0");
        }
        if ($(window).scrollTop() > 3352){
            $(".page6-second-part3").children("svg").css("top","0px");
            $(".page6-second-part3").children("svg").css("opacity", "1");
        }
        else{
            $(".page6-second-part3").children("svg").first().css("top", "-50px");
            $(".page6-second-part3").children("svg").last().css("top", "50px");
            $(".page6-second-part3").children("svg").css("opacity", "0");
        }
        if ($(window).scrollTop() > 4000/*4335*/) {
            //alert(7);
        }
        
        /*if ($(window).scrollTop() >= 2165) {                        //page4的特效
            document.getElementsByTagName('body')[0].addEventListener("mousemove", getMousePos);
            unScroll();
            if ($(".page4content1").hasClass("flag") || $(".page4content3").hasClass("flag")){
                removeUnScroll();
            }
        }*/
        /*if ($(window).scrollTop() < 2165){
            $("#page4").removeClass("flag");
        }*/
    });
    $(".menu").click(function () {                                  //菜单点击的特效
        if ($(this).hasClass("flag")) {
            $(this).removeClass("flag");
            $(this).html('<span class="floatup">B</span><span class="floatdown">A</span><span class="floatup">C</span><span class="floatdown">K</span>');
            $(".menupage").fadeToggle();
            unScroll();
        }
        else {
            $(this).addClass("flag");
            $(this).html('<span class="floatup">M</span><span class="floatdown">E</span><span class="floatup">N</span><span class="floatdown">U</span>');
            removeUnScroll();
            $(".menupage").fadeToggle();
        }
    });
    $(".text").mouseover(function () {                              //菜单中文字移入的特效
        $(".menupage #pic").height("100vh");
        $(".menupage #pic").attr("src", $(this).attr("data-role"));

    });
    $(".text").mouseout(function () {                               //菜单中文字移出的特效
        $(".menupage #pic").attr("src", "");
        $(".menupage #pic").height("150vh");
    });
    $("#nextimg").click(function () {                                 //下箭头的特效
        clickCount++;                               
        if(clickCount==3){
            clickCount = 2;
        }
        else if(clickCount==1){
            $("#page4 .right-col .page4content2").height("100%");           //右侧的特效
            $("#page4 .right-col .page4content2").siblings().height("0%");
            $("#page4 .left-col").css("background-color", "#FFF");          //左侧的特效
            $("#page4 .left-col .desc1").css("top","100px");
            $("#page4 .left-col .desc1").css("opacity", "0");
            $("#page4 .left-col .desc2").css("top", "125px");
            $("#page4 .left-col .desc2").css("opacity", "1");
            
        }
        else if (clickCount==2){
            $("#page4 .right-col .page4content3").height("100%");           //右侧的特效
            $("#page4 .right-col .page4content3").siblings().height("0%");
            $("#page4 .left-col").css("background-color", "#BCC6BC");       //左侧的特效
            $("#page4 .left-col .desc2").css("top", "100px");
            $("#page4 .left-col .desc2").css("opacity", "0");
            $("#page4 .left-col .desc3").css("top", "125px");
            $("#page4 .left-col .desc3").css("opacity", "1");
            $(".page4content3").addClass("flag");
        }
        
    });
    $("#previmg").click(function () {                               //上箭头的特效
        clickCount--;
        if (clickCount == -1){
            clickCount==0;
        }
        if (clickCount == 1) {
            $("#page4 .right-col .page4content2").height("100%");               //右侧的特效
            $("#page4 .right-col .page4content2").siblings().height("0%");
            $("#page4 .left-col").css("background-color", "#FFF");              //左侧的特效
            $("#page4 .left-col .desc3").css("top", "150px");
            $("#page4 .left-col .desc3").css("opacity", "0");
            $("#page4 .left-col .desc2").css("top", "125px");
            $("#page4 .left-col .desc2").css("opacity", "1");
        }
        else if (clickCount == 0) {
            $("#page4 .right-col .page4content1").height("100%");               //右侧的特效
            $("#page4 .right-col .page4content1").siblings().height("0%");
            $("#page4 .left-col").css("background-color", "#F4F0EC");           //左侧的特效
            $("#page4 .left-col .desc2").css("top", "150px");
            $("#page4 .left-col .desc2").css("opacity", "0");
            $("#page4 .left-col .desc1").css("top", "125px");
            $("#page4 .left-col .desc1").css("opacity", "1");
            $(".page4content1").addClass("flag");
        }
    });
    $("button").click(function(){
        $("#page7title").css("left","20%");
        console.log($("#page7title").css("left"));
    });
});