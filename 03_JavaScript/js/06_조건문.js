/*id - 양수인지 검사하기*/
const input1 = document.getElementById("input1");

function check1() {
  // input의 경우 글자 → Number(글자) 숫자로 변경
  // input1으로 입력받은 값 가져오기
  const v1 = Number(input1.value);

  //v1이 0보다 클경우
  //if(true일 조건) {조건이 true가 맞다면 실행하기}
  // 그런데 if 안에있는 조건이 true가 아닐 경우 실행X
  if (0 < v1) {
    alert("0보다 큰 양수입니다.");
  }

  if (v1 <= 0) {
    alert("0과 같거나 0보다 작은 수입니다.");
  }
}
