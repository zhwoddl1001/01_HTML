function checkSeason() {
  const month = document.getElementById("month").value;
  const msg = document.getElementById("seasonMsg");
  if (month >= 3 && month <= 5) {
    msg.className = "spring";
    msg.innerText = "봄입니다.";
  } else if (month >= 6 && month <= 8) {
    msg.className = "summer";
    msg.innerText = "여름입니다.";
  } else if (month >= 9 && month <= 11) {
    msg.className = "fall";
    msg.innerText = "가을입니다.";
  } else if (month == 12 || month == 1 || month == 2) {
    msg.className = "winter";
    msg.innerText = "겨울입니다.";
  } else {
    msg.innerText = "1에서 12사이의 숫자를 입력하세요";
    msg.className = ""; //빈칸을 작성하면 기존에 있던 class를 밀어냄
  }
}
