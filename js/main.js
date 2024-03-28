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
// Get the modal
var modal = document.getElementById("myModal"); //모달창(검정반투명 창)
var img = document.getElementById("cd1"); //이미지
var modalImg = document.getElementById("img01"); //팝업창(커진이미지)

function openModal() {
  var modal = document.getElementById("myModal"); // 모달창(검정반투명 창)
  var modalImg = document.getElementById("img01"); // 팝업창(커진이미지)
  modal.style.display = "block";
  modalImg.src = this.src;
}
document.querySelectorAll(".pop").forEach(function (img) {
  img.addEventListener("click", openModal);
});

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

$(document).ready(function () {
  $("#morebtn").click(function () {
    $(".card_slide_box ul").animate({ top: "-=400px" }, "fast");
  });
  $("#back").click(function () {
    var currentTop = parseInt($(".card_slide_box ul").css("top"));
    console.log(currentTop);
    if (currentTop >= -30) {
      return;
    }
    $(".card_slide_box ul").animate({ top: "+=400px" }, "fast");
  });
});
