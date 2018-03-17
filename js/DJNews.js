/**
 * Created by shy on 2018/3/17.
 */
$(function(){
    //导航部分
    $(".navContain > div").eq(0).show();
    $(".navTitle div").hover(function(){
        $(this).addClass('active').siblings().removeClass('active')
        var i=$(this).index()
        $(".navContain > div").eq(i).show().siblings().hide()
    },function(){
        var i=$(this).index()
        $(".navContain > div").siblings().hide()
    })

    //轮播图部分
    var timer;
    var index=0
    //第一张图片显示，其它隐藏
    $(".pho").eq(0).show().siblings().hide()
    //图片自动轮播
    autoSkip()

    function autoSkip(){
        timer=setInterval(function(){
            index++;
            if(index==5){
                index=0
            }
            show();
        },2000)
    }

    function show(){
        $(".pho").eq(index).show().siblings().hide();
        $(".tabS div").eq(index).css("background","#000").siblings().css("background","#FFFFFF");
    }

    //当搜索框获取焦点时，让隐藏的div显示
    $(".search .searchIn").click(function(){
        $("#hideDiv").css("display","block")
    })
    // 点击“全部”隐藏的div不显示
    $(".typeIn > div p").click(function(){
        $("#hideDiv").css("display","none")
    })
})
