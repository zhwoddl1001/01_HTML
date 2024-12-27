function 약관동의() {
  /*const agree1 = document.getElementById("동의1").checked;
  const agree2 = document.getElementById("동의2").checked;
  const agree3 = document.getElementById("동의3").checked;

  const agreeAll = agree1 && agree2 && agree3;

  document.getElementById("sighup").disabled = !agreeAll;*/

  const agree1 = document.getElementById("동의1").checked;
  const agree2 = document.getElementById("동의2").checked;
  const agree3 = document.getElementById("동의3").checked;
  const agreeAll = agree1 && agree2 && agree3;
  if (agreeAll) {
    window.location.href = "241115_회원가입1.html";
  } else {
    alert("모든 필수 약관에 동의해야 합니다.");
  }
}

//1. 가입버튼 가입이 완료 되었다는 alert 이후 성공.html 이동하기 (함)
//2. addEventListener로 변경해서 작성
function 회원가입동의() {
  const id = document.getElementById("id").value;
  const pw = document.getElementById("pw").value;
  const email = document.getElementById("email").value;
  const idRgeExp = /^[가-힇0-9a-zA-Z]{5,12}$/;
  /*
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  특정 문자를 포함 했는가?
  (?=.*[A-Za-z]) = 대소문자 영어가 있는지 탐색
  (?=.*\d)       = 숫자가 포함되어 있는가
  영어 대/소문자나 숫자가 모두 하나이상 포함이 되어있어야 하는 비밀번호

  */
  const pwRgeExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const emailRgeExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!idRgeExp.test(id)) {
    alert("아이디는 5-12자의 영문자 및 숫자여야 합니다");
    return false;
  }
  if (!pwRgeExp.test(pw)) {
    alert("비밀번호는 최소 8자이며,문자와 수자를 포함해야합니다.");
    return false;
  }
  if (!emailRgeExp.test(email)) {
    alert("올바르지 않은 이메일 형식입니다.");
    return false;
  }
  alert("회원가입이 완료되었습니다.");
  window.location.href = "성공.html";
}
