const flour = "밀가루";
const sugar = "설탕";
const egg = "계란";
const chips = "초코칩";

const recipeText = document.getElementById("recipe-text");

function 치즈케이크레시피() {
  recipeText.innerText = flour + "와" + sugar + "를 넣어 반죽합니다.";
}

function 초코칩쿠키레시피() {
  recipeText.innerText =
    flour + "와" + sugar + "와" + chips + "를 넣어 반죽합니다.";
}

function 크림빵레시피() {
  recipeText.innerText =
    flour + "와" + sugar + "와" + sugar + "를 넣어 반죽합니다.";
}
