//function 의 위치나 순서는 관계없음 하지만 const 나 let으로 작성한 것은 script 작성 후 맨위에 작성
function 차가격(model) {
  //소나타 아반떼 제네시스 각 가격확인
  if (model === "소나타") {
    return 1000; //소나타의 가격
  } else if (model === "아반떼") {
    return 1100;
  } else if (model === "제네시스") {
    return 1200;
  }
}

function 차구매(model) {
  const price = 차가격(model);
  const result = document.getElementById("result");
  result.innerText =
    model + "구매가 완료 되었습니다. 가격은" + price + "입니다.";
}
