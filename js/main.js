ScrollOut({});
//*** jQuery사용
// 사이드메뉴 이동버튼
$(".side_nav a").click(function () {
  let name = $(this).attr("data-page");
  console.log(name);
  $("body, html").animate({
    scrollTop: $("." + name).offset().top,
  });
});
// 스크롤위치에 따른 사이드바 스타일변경
$(window).scroll(function () {
  let start = $(this).scrollTop(); //스크롤막대위치의 값을 반환
  sidebar();
  $(".page").each(function (i) {
    if (start > $(this).offset().top - 50) {
      $(".side_nav li").removeClass("on");
      $(".side_nav li").eq(i).addClass("on");
    }
  });
});
// 홈화면 사이드바 숨기는 함수
//사용자가 스크롤한 지점이 .about의 top값의-100보다 작으면 사이드바 숨기고,
//사용자가 스크롤한 지점이 .about의 top값의-100을 넘어가면 사이드바 보여라
function sidebar() {
  let start = $(window).scrollTop();
  if (start < $(".about").offset().top - 100) {
    $(".side_nav").hide();
  } else {
    $(".side_nav").show();
  }
}
//*** 디자인, 리액트 섹션 JS 로 구현

// $(".design_tab li").click(function () {
//   $(".design_tab li").css({ color: "" });
//   $(this).css({ color: "red" });
//   // 클릭한 li 요소의 data-tab 값을 가져옵니다.
//   let tabName1 = $(this).attr("data-tab");
//   // 클릭한 li 요소와 동일한 data-tab 값을 가진 컨테이너를 보여줍니다.
//   $(".design_container").hide();
//   $("." + tabName1).show();
// });

$(".tabs li").click(function () {
  const tabName = $(this).attr("data-tab");
  const areaName = $(this).parents("section").attr("class");
  $(this).addClass("on");
  $(".tabs li").not(this).removeClass("on");

  console.log(areaName);

  $(`.${tabName}`).css({ display: "flex", justifyContent: "center" });
  $(`.${areaName} .contents`)
    .not($("." + tabName))
    .hide();
});
//if (조건문)을 이용해서 조건이
// 클릭한 li 부모를 체크

// 디자인 섹션에서 팝업창. Get the modal
var modal = document.getElementById("myModal"); //모달창(검정반투명 창)
var img = document.getElementById("cd1"); //이미지
var modalImg = document.getElementById("img01"); //팝업창(커진이미지)

function openModal() {
  var modal = document.getElementById("myModal"); // 모달창(검정반투명 창)
  var modalImg = document.getElementById("img01"); // 팝업창(커진이미지)
  modal.style.display = "block";
  modalImg.src = this.src;
}
//openModal함수는 모달창을 화면에 표시하고, 클릭된 이미지의 src속성을
//모달창의 이미지(modalImg)에 설정. 이렇게 해서 클릭된 이미지를 모달에서 크게 보여준다 

document.querySelectorAll(".pop").forEach(function (img) {
  img.addEventListener("click", openModal);
});//pop클래스를 가진 요소들을 클릭할 때마다 openModal함수가 
//호출되서 모달창이 열리고 클릭된 이미지 확대됨

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
}; // x자 누르면 팝업창 닫힘

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
//클릭한게 모달창이라면 닫아라
//팝업창콘텐츠 자체를 클릭하면 모달창이 아니기때문에
// 팝업창제외한 어디든 누르면 닫힘


//---------------이벤트페이지,팝업은 길이가 길어서 팝업창 따로만듬-------------------
var modal2 = document.getElementById("myModal2"); //모달창(검정반투명 창)
var img2 = document.getElementById("cd2"); //이미지
var modalImg2 = document.getElementById("img02"); //팝업창(커진이미지)

function openModal2() {
  var modal2 = document.getElementById("myModal2");
  var modalImg2 = document.getElementById("img02");
  modal2.style.display = "block";
  modalImg2.src = this.src;
}

document.querySelectorAll(".eventpop").forEach(function (img){
  img.addEventListener("click", openModal2);
})//eventpop클래스를 가진 요소들을 클릭할 때마다 openModal2함수가 
//호출되서 모달창이 열리고 클릭된 이미지 확대됨

var span = document.getElementsByClassName("close2")[0];
span.onclick = function () {
  modal2.style.display = "none";
}; // x자 누르면 팝업창 닫힘

window.addEventListener("click", function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
});
//이벤트페이지에서 클릭한게 모달창이라면 닫아라
//팝업창콘텐츠 자체를 클릭하면 모달창이 아니기때문에
// 팝업창제외한 어디든 누르면 닫힘




//-----------------------------------카드뉴스 슬라이드
$(document).ready(function () {
  var slideHeight = 400; // 각 슬라이드의 높이
  var totalSlides = $(".contents_slide_box ul li").length; // 슬라이드의 총 개수
  var visibleSlides = Math.floor($(".contents_slide_box").height() / slideHeight); // 한 화면에 보이는 슬라이드 개수
  var maxTop = 0; // 슬라이드가 더 이상 위로 올라가지 않도록 최상단 위치
  var minTop = -(totalSlides - visibleSlides) * slideHeight; // 슬라이드가 더 이상 아래로 내려가지 않도록 최하단 위치

  // 아래로 이동하는 버튼 클릭 이벤트
  $("#morebtn").click(function () {
    var currentTop = parseInt($(".contents_slide_box ul").css("top"));
    
    // 슬라이드가 최하단에 도달했으면 더 이상 이동하지 않음
    if (currentTop <= minTop) {
      return;
    }

    // 슬라이드를 위로 400px 이동
    $(".contents_slide_box ul").animate({ top: "-=400px" }, "fast");
  });

  // 위로 이동하는 버튼 클릭 이벤트
  $("#back").click(function () {
    var currentTop = parseInt($(".contents_slide_box ul").css("top"));
    
    // 슬라이드가 최상단에 도달했으면 더 이상 이동하지 않음
    if (currentTop >= maxTop) {
      return;
    }

    // 슬라이드를 아래로 400px 이동
    $(".contents_slide_box ul").animate({ top: "+=400px" }, "fast");
  });
});





//-------------------------------이벤트페이지 슬라이드--------------------------
$(document).ready(function () {
  var slideHeight = 400; // 각 슬라이드의 높이
  var totalSlides = $(".contents_slide_box ul li").length; // 슬라이드의 총 개수
  var visibleSlides = Math.floor($(".contents_slide_box").height() / slideHeight); // 한 화면에 보이는 슬라이드 개수
  var maxTop = 0; // 슬라이드가 더 이상 위로 올라가지 않도록 최상단 위치
  var minTop = -(totalSlides - visibleSlides) * slideHeight; // 슬라이드가 더 이상 아래로 내려가지 않도록 최하단 위치

  // 아래로 이동하는 버튼 클릭 이벤트
  $("#morebtn2").click(function () {
    var currentTop = parseInt($(".event_slide_box ul").css("top"));
    
    // 슬라이드가 최하단에 도달했으면 더 이상 이동하지 않음
    if (currentTop <= minTop) {
      return;
    }

    // 슬라이드를 위로 400px 이동
    $(".event_slide_box ul").animate({ top: "-=400px" }, "fast");
  });

  // 위로 이동하는 버튼 클릭 이벤트
  $("#back2").click(function () {
    var currentTop = parseInt($(".event_slide_box ul").css("top"));
    
    // 슬라이드가 최상단에 도달했으면 더 이상 이동하지 않음
    if (currentTop >= maxTop) {
      return;
    }

    // 슬라이드를 아래로 400px 이동
    $(".event_slide_box ul").animate({ top: "+=400px" }, "fast");
  });
});