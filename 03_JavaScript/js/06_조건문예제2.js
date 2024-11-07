function checkScore() {
  const score = document.getElementById("score").value;
  const mag = document.getElementById("scoreMsg");
  if (score >= 60) {
    mag.innerText = "합격입니다";
    mag.className = "success";
  } else {
    mag.innerText = "불합격입니다";
    mag.className = "fail";
  }
}
