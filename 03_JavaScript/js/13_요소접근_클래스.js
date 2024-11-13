function clsTest() {
  const divs = document.getElementsByClassName("cls");
  // 유서배열 (HTML Collection)
  alert(divs);
  divs[0].style.backgroundColor = "yellowgreen";
  divs[1].style.backgroundColor = "yellow";
  divs[2].style.backgroundColor = "lightblue";
  //div.length = 3;
  //for 문에 변수명.length를 사용할 때는 <= 아니라 <를 작성해야함
  //index는 무조건 0부터 시작하기 때문에 let = 0에서 시작

  for (let i = 0; i < divs.length; i++) {
    divs[i].innerText = `${i}번째 div 입니다`;
    //  divs[0].innerText = `0번째 div 입니다`;
    // divs[1].innerText = `1번째 div 입니다`;
    // divs[2].innerText = `2번째 div 입니다`;
  }
}

//NodeList = 유사배열 배열과 비슷하지만 배열은 아님
// 배열처럼 index, length 는 가지고 있으나 배열 전용 기능을 제공하지않음
// index = [0] 0qjsWo length-1번째까지 번호를 매기는
//            자동으로 번호가 매겨짐
//length = [ ] 안에 값이 얼마나 들어있는지 1부터 갯수를 세는 것

function clsSpn() {
  //각 스판 요소에 순차적으로 0번부터 접근해서 red orange yellow green blu넣기
  const spans = document.getElementsByClassName("spn");

  spans[0].style.backgroundColor = "red";
  spans[1].style.backgroundColor = "orange";
  spans[2].style.backgroundColor = "yellow";
  spans[3].style.backgroundColor = "green";
  spans[4].style.backgroundColor = "blue";
}
