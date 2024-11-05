//버튼 클릭시 body 태그 안에 있는 글자색과 배경색을 변경
//css에서는 자바스크립트 기능을 작성할수 없지만 자바스크립트에서는 css기능을 작성할 수 있음 (사용권장X)

const 바디 = document.getElementById("cssStyle");

//다크모드 버튼을 클릭하면 darkMode() 기능이 실행

function darkMode() {
  바디.style.color = "white";
  바디.style.backgroundColor = "black";
}

//하이트모드 버튼을 클릭하면 lightMode() 기능이 실행
function lightMode() {
  바디.style.color = "black";
  바디.style.backgroundColor = "white";
}
