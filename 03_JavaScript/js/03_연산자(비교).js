/*두 수가 같은지 비교*/

const v1 = document.getElementById("number1");
const v2 = document.getElementById("number2");
const r1 = document.getElementById("result1");

/*자바 스크립트의 꽃 삼항 연산자
    (두개의 값을 비교)   ? "true일때 보여줄 멘트" : "false일때 보여줄 멘트" ;
*/
function 비교하기1() {
  r1.innerText = v1.value == v2.value ? "같습니다." : "같지 않습니다.";
  r1.style.color = v1.value == v2.value ? "orange" : "red";
  r1.style.backgroundColor = v1.value == v2.value ? "black" : "white";
}

const i3 = document.getElementById("input3");
const i4 = document.getElementById("input4");
const r2 = document.getElementById("result2");

function 비교하기2() {
  r2.innerText =
    i3.value > i4.value
      ? "좌측 숫자값이 더 큽니다."
      : "우측 숫자값이 더 크거나 두 숫자의 값이 같습니다.";

  r2.style.color = i3.value > i4.value ? "yellowgreen" : "lightblue";
}
