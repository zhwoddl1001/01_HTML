const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const result = document.getElementById("res");

function calc() {
  const comp =
    n1.value > n2.value
      ? "첫 번째 숫자가 더 큽니다"
      : "두번째 숫자가 더 크거나 같습니다.";
  const add = Number(n1.value) + Number(n2.value);
  const mul = n1.value * n2.value;
  const sub = n1.value - n2.value;

  result.innerText = comp + add + mul + sub;

  result.style.color = n1.value > n2.value ? "lightblue" : "lightpink";
}
