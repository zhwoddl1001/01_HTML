function idhint() {
  const hint1 = document.getElementById("hint1");
  hint1.style.display = "block";
}
function showhint() {
  const hint = document.getElementById("hint");
  hint.style.display = "block";
}

function hidehint() {
  const hint = document.getElementById("hint");
  const hint1 = document.getElementById("hint1");
  hint.style.display = "none";
  hint1.style.display = "none";
}
