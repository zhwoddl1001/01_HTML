//document.get ~ 특정 아디나 태그나 클래스 명을 가져오는 설정
//맨 위 작성 시작 ****단 value 제외****

const inputID = document.getElementById("inputID");
const inputPW = document.getElementById("inputPW");

function login() {
  const id = inputID.value; // 소비자가 작성한 아이디 값 최종적으로 가져오기
  const pw = inputPW.value; // 소비자가 작성한 비밀번호 값 최종적으로 가져오기

  // && : A && B ? 둘다 일치할때 : 둘중 하나라도 일치하지 않을때
  const success = "로그인성공!";
  const fail = "아이디 또는 비밀번호가 일치하지 않습니다!";
  "member01" == id && "pass01" == pw ? alert(success) : alert(fail);
}

function checkNumber() {
  const pn = document.getElementById("phone").value;
  const tn = document.getElementById("tel").value;
  const msg = document.getElementById("msg");

  // 삼항 연산자로 입력여부를 확인 한 후 메세지 표시 또는 메세지 숨기기
  pn || tn ? (msg.style.display = "none") : (msg.style.display = "block");
}
