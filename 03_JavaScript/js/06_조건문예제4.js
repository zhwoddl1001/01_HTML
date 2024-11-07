function checkGrade() {
  const score = document.getElementById("inputScore").value;
  const msg = document.getElementById("grademsg");

  if (score >= 90) {
    msg.className = "A";
    msg.innerText = "A";
  } else if (score >= 80) {
    msg.className = "B";
    msg.innerText = "B";
  } else if (score >= 70) {
    msg.className = "C";
    msg.innerText = "C";
  } else if (score >= 60) {
    msg.className = "D";
    msg.innerText = "D";
  } else {
    msg.className = "F";
    msg.innerText = "F";
  }
}
