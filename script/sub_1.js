// 서브메뉴 나타나기
$(function () {
    $('header').mouseover(function () {
        $(this).children('.depth2_bg').stop().slideDown();
    });
    $('header').mouseout(function () {
        $(this).children('.depth2_bg').stop().slideUp();
    });
});

// 햄버거 버튼

$('.button').click(function (ev) {
    ev.preventDefault();
    $(this).toggleClass('active');
});
// 로그인 창 슬라이드, 밖 클릭시 들어가게 햄버거 버튼 정상화
$('.button').click(function () {
    $('.login').toggleClass('slide');
});

$('section').click(function () {
    $('.login').removeClass('slide');
});
$('section').click(function () {
    $('.button').removeClass('active');
});

// 스크롤 해더 온 오프
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}
// 커서 마우스 따라다니게
$(document).ready(function () {

    $(document).mousemove(function (e) {
        var mouseX = e.pageX;
        var mouseY = e.pageY;

        $('.cursor').css({
            left: mouseX + "px",
            top: mouseY + "px"
        })
    })
})

// 공지사항 탭 관련
$(function () {
    var menu01 = $('#menu01');
    var menu02 = $('#menu02');
    var menu03 = $('#menu03');
    var menu04 = $('#menu04');
    var post = $('.ntap .post');
    var e = $('.e');
    var s = $('.s');
    var n = $('.n');

    menu01.click(function () {
        post.css('display', 'flex')
    });
    menu02.click(function () {
        n.css('display', 'flex')
    });
    menu02.click(function () {
        e.css('display', 'none')
    });
    menu02.click(function () {
        s.css('display', 'none')
    });
    menu03.click(function () {
        n.css('display', 'none')
    });
    menu03.click(function () {
        e.css('display', 'none')
    });
    menu03.click(function () {
        s.css('display', 'flex')
    });
    menu04.click(function () {
        n.css('display', 'none')
    });
    menu04.click(function () {
        e.css('display', 'flex')
    });
    menu04.click(function () {
        s.css('display', 'none')
    });
});

// 이벤트 텝 관련
$(function () {
    var eventmenu01 = $('#eventmenu01');
    var eventmenu02 = $('#eventmenu02');
    var eventmenu03 = $('#eventmenu03');

    var ing = $('.ing');
    var ed = $('.ed');
    var wc = $('.wc');
    
    eventmenu01.click(function () {
        ing.css('display', 'block')
    });
    eventmenu01.click(function () {
        ed.css('display', 'none')
    });
    eventmenu01.click(function () {
        wc.css('display', 'none')
    });

    eventmenu02.click(function () {
        ing.css('display', 'none')
    });
    eventmenu02.click(function () {
        ed.css('display', 'block')
    });
    eventmenu02.click(function () {
        wc.css('display', 'none')
    });

    eventmenu03.click(function () {
        ing.css('display', 'none')
    });
    eventmenu03.click(function () {
        ed.css('display', 'none')
    });
    eventmenu03.click(function () {
        wc.css('display', 'flex')
    });

});

function login(){
    alert("로그인이 필요합니다.")
}

// 현재시간 알림
function paddedFormat(num) {
    return num < 10 ? "0" + num : num; 
}
const h1 =document.getElementById("timenow")
function getTime(){
    const date = new Date
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const time = `${paddedFormat(hour)}시${paddedFormat(min)}분${paddedFormat(sec)}초`
    h1.textContent = time;
}
setInterval(getTime,1000)

getTime()