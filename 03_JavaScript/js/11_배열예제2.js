//점심메뉴 뽑기 기능
const menuResult = document.getElementById("menuResult");
function seleckMenu() {
  //점심 메뉴로 초기화된 배열 생성

  const 메뉴들 = [
    "돈까스",
    "깐풍기",
    "햄버거",
    "멸치국수",
    "마파두부",
    "샌드위치",
    "볶음밥",
    "순대국밥",
  ];
  //랜덤으로 점심메뉴를 뽑기 위해서 메뉴들 배열 index 범위 내에서 랜덤의 수를 생성
  //난수 = 랜덤의 수

  //  Math.floor = 주어진 숫자의 소수점을 내림해서 가장 가까운 정수를 반환하는 함수
  //             ex) Math.floor(3.7) -> 3이 반환
  //             올림 Math.ceil() -> 소수점 위로 올림해서 가장 가까운 정수로 변환
  //            반올림 Math.round() -> 소수점 첫째 자리에서 가장 가까운 정수로 반올림 해서변환
  //             6.5--> 7 6.4->6반환

  // Math.random() = 0이상 1미만의 랜덤한 소수(실수)반환
  //메뉴들.length = 메뉴가 5개라면 5라는 숫자 보여줌

  const 랜덤숫자 = Math.floor(Math.random() * 메뉴들.length);
  //                 0.000001~0.99999사이의실수 * 메뉴갯수
  //                 소수모두버리기()
  console.log("메뉴들[" + 랜덤숫자 + "]= " + 메뉴들[랜덤숫자]);
  menuResult.innerText = 메뉴들[랜덤숫자];
  //                     메뉴들[랜덤의index숫자가 들어옴];
}
