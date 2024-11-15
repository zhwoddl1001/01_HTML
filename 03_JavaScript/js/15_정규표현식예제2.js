function checkEmail() {
  const userEmail = document.getElementById("user-email").value;
  const errorMsg = document.getElementById("error-msg");

  /*
    정규식 시작 표기
     /^[a-zA-Z0-9.-_]
     +@
     [a-zA-Z0-9.-]
     +\.
     [a-zA-Z]{2,}$/;
     */
  const emailPattern =
    /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-가-힇]+\.[a-zA-Z가-힇]{2,}$/;

  if (!emailPattern.test(userEmail)) {
    errorMsg.style.display = "block";
    console.log = "유효합니다";
  } else {
    errorMsg.style.display = "none";
  }
}
function checkPhone() {
  const phone = document.getElementById("user-phone").value;
  const errMsg = document.getElementById("err-msg");
  const phoneRegExg = /^[0-9]+\-+[0-9]+\-[0-9]{3,4}$/;

  if (!phoneRegExg.test(phone)) {
    errMsg.style.display = "block";
  } else {
    errMsg.style.display = "none";
  }
}
