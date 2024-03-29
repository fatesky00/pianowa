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
//커서 효과
// document.onmousemove = animateCircles; // circle follow mouse

// var colors = ['#1abc9c', '#3498db', '#f1c40f']

// function animateCircles(event) {
//   var circle = document.createElement("div");
//   circle.setAttribute("class", "circle");
//   document.body.appendChild(circle); // adds function to body

//   // adds motion
//   circle.style.left = event.clientX + 'px';
//   circle.style.top = event.clientY + 'px';

//   // randomize color
//   var color = colors[Math.floor(Math.random() * colors.length)];
//   circle.style.borderColor = color;

//   // adds animation
//   circle.style.transition = "all 0.5s linear 0s";

//   circle.style.left = circle.offsetLeft - 20 + 'px';
//   circle.style.top = circle.offsetTop - 20 + 'px';

//   circle.style.width = "50px";
//   circle.style.height = "50px";
//   circle.style.borderWidth = "5px";
//   circle.style.opacity = 0;
// }


//client rolling banner 슬라이드 배너
window.onload = function () {
    var bannerLeft = 0;
    var first = 1;
    var last;
    var imgCnt = 0;
    var $img = $(".goods div");
    var $first;
    var $last;

    $img.each(function () {   // 5px 간격으로 배너 처음 위치 시킴
        $(this).css("left", bannerLeft);
        bannerLeft += $(this).width() + 0;
        $(this).attr("id", "banner" + (++imgCnt));  // img에 id 속성 추가
    });
    if (imgCnt > 4) {                //배너 9개 이상이면 이동시킴
        last = imgCnt; setInterval(function () {
            $img.each(function () {
                $(this).css("left", $(this).position().left - 1); // 1px씩 왼쪽으로 이동
            });
            $first = $("#banner" + first);
            $last = $("#banner" + last);
            if ($first.position().left < -340) {    // 제일 앞에 배너 제일 뒤로 옮김                        
                $first.css("left", $last.position().left + $last.width() + 0);
                first++;
                last++;
                if (last > imgCnt) { last = 1; }
                if (first > imgCnt) { first = 1; }
            }
        }, 10);   //여기 값을 조정하면 속도를 조정할 수 있다.(위에 1px 이동하는 부분도 조정하면 깔끔하게 변경가능하다            
    }
};


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