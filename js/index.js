/**
 * Created by shy on 2018/3/13.
 */
$(function(){
    //首页无缝滚动部分开始
    $(".scroll2").html($(".scroll1").html());
    var name_t;
    function marquee(){
        if($(".scrollDiv").scrollTop()>= $(".scroll1").height()){
            $(".scrollDiv").scrollTop(0);
        }else{
            $(".scrollDiv").scrollTop($(".scrollDiv").scrollTop()+1);
        }
        name_t=window.setTimeout(marquee,150);
        return;
    }
    $(".scrollDiv").mousemove(function(){
        clearInterval(name_t);
    })
    $(".scrollDiv").mouseleave(function(){
        name_t=window.setTimeout(marquee,150);
    })
    marquee();
    //首页无缝滚动部分结束

    //编辑页面开始
    //点击编辑按钮
    $("#application ins").on("click",function(){
        $(".homeContain ins").css("display","block");
        $(this).css("display","none");
        $("#application small").css("display","block");
    })
    //点击完成按钮
    $("#application small").on("click",function(){
        $(".homeContain ins").css("display","none");
       $(this).css("display","none");
        $("#application ins").css("display","block");
    })
    //编辑页面结束

    //点击党员档案div进入党员档案页面
    $(".containF div").on("click",function(){
        window.location.href='organize.html'
    })
    //点击“党建要闻”
    $(".containO div").on("click",function(){
        window.location.href='DJNews.html'
    })

    //点击党委进入job页面
    $(".homeAll_in .people").on("click",function(){
        window.location.href='job.html'
    })
    //点击“组织机构”中的首页按钮进入首页
    $("#organizeHome span").on("click",function(){
        window.location.href='index.html'
    })
    //点击人物头像
    $(".homeAll_in .two").on("click",function(){
        window.location.href='jobDetail.html'
    })

})

