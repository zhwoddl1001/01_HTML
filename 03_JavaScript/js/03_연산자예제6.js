const pw = document.getElementById("inputPw");
const pwConfirm = document.getElementById("inputPwConfirm");
function checkPw() {
  const Pw = pw.value;
  const PwConfirm = pwConfirm.value;

  const success = "비밀번호가 일치합니다";
  const fail = "비밀번호가 일치하지 않습니다";
  pw == "pass1234!" && pwConfirm == "pass1234!" ? alert(success) : alert(fail);
  //위에 만드는거 못함 (pw== pwConfirm)
}
