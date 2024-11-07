function check4() {
  const age = document.getElementById("inputAge").value;
  if (age >= 0 && age <= 13) {
    alert("어린이 입니다.");
  } else if (age >= 19 && age <= 120) {
    alert("성인입니다.");
  } else if (age >= 14 && age <= 18) {
    alert("청소년입니다.");
  } else {
    alert("잘못입력했습니다.");
  }
}
