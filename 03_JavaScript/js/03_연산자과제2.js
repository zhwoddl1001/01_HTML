const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");
const inputMp = document.getElementById("inputMp");
const inputTp = document.getElementById("inputTp");
const msg = document.getElementById("msg");

function signUp() {
  const id = inputId.value; // const 새로만들어준 이름을 아래에서 사용하지 않았기 때문에 흐리게 보임
  const pw = inputPw.value;
  const mp = inputMp.value;
  const tp = inputTp.value;

  mp || tp ? (msg.style.display = "none") : (msg.style.display = "block");
}

function login() {
  const id = inputId.value;
  const pw = inputPw.value;

  // (조건문 A) %% (조건문 B)? (참일때 나오는곳) :(거짓일때 나오는곳)  둘다 참이어야 참
  const success = "로그인 성공";
  const fail = "로그인 실패";
  "userid" == id && "userpw" == pw ? alert(success) : alert(fail);
}
