// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    
    // console.log(links.classList.contains("random"));
    // console.log(links.classList.contains("links"));
    // if(links.classList.contains("show-links")) {
    //    links.classList.remove("show-links");
    // } else {
    //    links.classList.add("show-links");
    // }
    
    links.classList.toggle("show-links");
});


 // console.log(links.classList.contains("random"));
    // console.log(links.classList.contains("links"));
    // if(links.classList.contains("show-links")) {
    //    links.classList.remove("show-links");
    // } else {
    //    links.classList.add("show-links");
    // }
    // 여기까지 하면 우측 사이드바 클릭시 홈 어바웃 프로젝트 콘택트 버튼이 뜸 
    // 위 코드 =  links.classList.toggle("show-links");
    // 우측 바를 눌렀을 때 <ul class="links">가 <ul class="show-links">로 변경 됨
    // toggle = 우측바 