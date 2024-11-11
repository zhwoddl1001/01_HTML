function check1() {
  //onclick = function
  /*
    for([1]초기식 ; [2]조건식; [4]증감식){
            [3]조건식이 true 인 경우 반복 수행할 코드;
            }
            for(최초 1회만 어떤 값인지 보여지는 공간); 
            {}안에들어가서 작성되어있는 코드를 실행 할 수 있는 권한의 조건;
            더하거나뺄값++ 조건이 true일 때 실행할 공
    for 문 안에는const 대신  let을 사용함         
    */

  let 결과 = ""; //빈 문자 제공
  //숫자를 1부터 5까지 출력

  /*
   * 숫자++ ===> 숫자 = 숫자 +1 ;
   */

  for (let 숫자 = 1; 숫자 <= 5; 숫자++) {
    //결과라는 변수명에 숫자를 1부터 5까지 누적해서 이어 붙이기를 원함
    결과 += 숫자; //결과 = 결과 + 숫자;

    console.log("결과 :" + 결과);
  }

  console.log("====================");
  console.log("최종으로 출력되는 결과 값은");
  console.log(결과 + "입니다.");
}
/*1부터 10까지 연속 출력 하는 숫자들 표기*/
function check2() {
  for (let a = 1; a <= 10; a++) {
    console.log("1~10 :" + a);
  }
}

function check3() {
  for (let b = 1; b <= 20; b++) {
    console.log("1~20 :" + b);
  }
}

let 결과2 = "";
function check4() {
  for (let c = 5; c <= 15; c++) {
    //결과 2 이라는 아무것도 들어있지 않는 변수에다가
    //숫자들을 누적시켜서 이어 붙여서 출력
    결과2 += c; // c= 5 결과2 =5, c=6 결과2 = 56,...
    console.log = "5~15 :" + c; //c의 값이 바뀔 때마다 15까지 c가 모두 바뀌어서 출력
  }
  //c는 for 안에서 작성한 변수명이기 때문에 {} 를 나오고 나서는 사용 x
  // 나올 수 없는 c 대신 전역벼수인 결과2에 c의 모든 값을 담고
  // 결과2로 c 모든값을 출력
  alert(결과2);
}

function while1() {
  let num = 1; //let 변할 수 있는 변수명을 작성 const 는 변할수 없는 상수명을작성
  while (num <= 5) {
    alert("num의 숫자값은" + num + "입니다");
    //계속 num 값이 1이기 때문에 무한 반복
    //num 숫자를 1씩 증가시켜서 숫자가 5가 되면 while문을 종료하기
    num++;
  }
}

function while2() {
  let abc = 1;
  while (abc <= 10) {
    console.log("======while2의 버튼========");
    console.log("ABC값은" + abc + "입니다");
    abc++;
  }
}

function while3() {
  let abc = 1;
  while (abc <= 10) {
    console.log("======while3의 버튼========");
    console.log("ABC값은" + abc + "입니다");
    abc++;

    if (abc == 5) {
      break;
    }
  }
}
//지역변수 안에서만 사용하는 변수명을 설정할 경우 {}안에 변수명을 작성
// xyz
function while4() {
  let xyz = 0;
  while (xyz <= 20) {
    xyz++;
    console.log(xyz);
  }
}
//07_반복문.html 과 js 07_반복문.js 코드에 function while5() 버튼 생성한다.
//시작숫자를 5로 시작하고 20으로 끝나는 while 조건 작성

function while5() {
  let start = 5;
  while (start <= 20) {
    console.log("숫자는" + start + "입니다.");
    start++;
    if (start == 15) {
      break;
    }
  }
}
