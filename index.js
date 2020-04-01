$(function(){
    var $html=$(
        '<div class="slider" id="slider">'
        +'<div class="slide"><img src="img/b5.png" alt=""></div>'
        +'<div class="slide"><img src="img/b1.png" alt=""></div>'
        +'<div class="slide"><img src="img/b2.png" alt=""></div>'
        +'<div class="slide"><img src="img/b3.png" alt=""></div>'
        +'<div class="slide"><img src="img/b4.png" alt=""></div>'
        +'<div class="slide"><img src="img/b5.png" alt=""></div>'
        +'<div class="slide"><img src="img/b1.png" alt=""></div>'
        +'</div>'
        +'<span id="left"><</span>'
        +'<span id="right">></span>'
        +'<ul class="nav">'
        +'<li>1</li>'
        +'<li>2</li>'
        +'<li>3</li>'
        +'<li>4</li>'
        +'<li>5</li>'
        +'</ul>'
);
    $('.box').append($html)
    time=setInterval(function(){
        right()
    },1500)
    $li=$html.find('li')
    
    //设置初始值
    i=0; 
    $li.eq(i).attr('class','active');
    $('#slider').css({left:-1200})
    $('span').css({opacity:0})

    function right(){
        $('#slider').animate({left:'-='+1200},300,function(){
            i++;
            if(i==5){
                $("#slider").css({left:-1200});
                i=0;
            }
            $li.attr('class','');
            $li.eq(i).attr('class','active');
        })
    }

    function left(){
        $('#slider').animate({left:'+='+1200},300,function(){
            if(i==0){
                i=5;
                $("#slider").css({left:-1200*5});
            }
            i--;
            $li.attr('class','');
            $li.eq(i).attr('class','active');
        })
    }
    //鼠标进入
    $('#slider,#left,#right,ul').mouseover(function(){
        $('span').css({opacity:1})
        clearInterval(time);
    })
    //出
    $('#slider,#left,#right,ul').mouseout(function(){
        $('span').css({opacity:0})
        time = setInterval(function(){
            right()
        },1500)
    })
    //点击滑动
    $('#left').click(function(){
        left();
    })
    $('#right').click(function(){
        right();
    })
    //点击li
    $li.click(function(){
        i=$(this).index();
        $("#slider").animate({left:-1200*(i+1)},300,function(){
            $li.attr('class','');
            $li.eq(i).attr('class','active');
        })
    })
    
})