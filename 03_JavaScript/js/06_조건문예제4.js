function checkGrade() {
  const score = document.getElementById("inputScore").value;
  //input이 아닌 p나 span이나 h1 같은 태그들은 value 값이 없음
  // 메세지가 출력되는 공간에는 value가 없기 때문에 작성하지 않음
  const msg = document.getElementById("grademsg");

  msg.innerText = "성적:";

  if (score >= 90) {
    msg.className = "A"; //성적: 이라는 글자에 A라는 글자를 이어붙여 출력
    msg.innerText += "A";
  } else if (score >= 80) {
    msg.className = "B";
    msg.innerText += "B";
  } else if (score >= 70) {
    msg.className = "C";
    msg.innerText += "C";
  } else if (score >= 60) {
    msg.className = "D";
    msg.innerText += "D";
  } else {
    msg.className = "F";
    msg.innerText += "F";
  }
}
