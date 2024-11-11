function selectSeason() {
  let season;
  const result = document.getElementById("result");
  const bd = document.getElementById("bd");
  //innerText와 마찬가지로 배경색상 또한 색상 지정이 되긴 하지만
  //switch문이 while문으로 이동하는 속도가 더 빠르게 진행되기 때문에
  //사람의 눈에 보이기 전에 색상 초기화

  while (season !== null) {
    season = prompt("월을 입력하세요");

    switch (season) {
      case "3":
      case "4":
      case "5":
        bd.style.backgroundColor = "lightpink";
        alert("봄이네요!");
        break;
      case "6":
      case "7":
      case "8":
        bd.style.backgroundColor = "lightyellow";
        alert("여름이네요!");
        break;
      case "9":
      case "10":
      case "11":
        bd.style.backgroundColor = "sandybrown";
        alert("가을이네요!");
        break;
      case "12":
      case "1":
      case "2":
        bd.style.backgroundColor = "lightblue";
        alert("겨울이네요!");
        break;
      case "종료":
        bd.style.backgroundColor = "white";
        alert("종료하기");
        return;
      default:
        bd.style.backgroundColor = "lightgrey";
        alert("잘못된선택입니다.");
        return;
    }
  }
}
