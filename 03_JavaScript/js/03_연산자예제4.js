//초기 값 설정
let count = 0; // const는 값 변경이 안되기 때문에 사용 X

const bd = document.getElementById("bd");
function 증가() {
  count += 1; //1씩 증가하게 만들기
  document.getElementById("count").innerText = count;

  bd.style.backgroundColor = count % 2 == 0 ? "#f0f0f0" : "#ffd1dc";
}

function 감소() {
  count -= 1;
  document.getElementById("count").innerText = count;
  const cnt = document.getElementById("count");
  cnt.innerText = count;

  cnt.style.color = count % 2 == 0 ? "orange" : "black";
}
function 초기화() {
  count = 0;

  document.getElementById("count").innerText = count;
  //document.getElementById("count").innerText = 0; 은 눈속임
}
