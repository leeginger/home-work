import { getNode, getNodes } from "./../lib/dom/index.js";
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/
const visualBody = getNode("body");
const navigation = getNode("ul");
const naviList = getNode("li");
const visualImg = getNode(".visual img");
const dataList = data;

function handler(e) {
  e.preventDefault();
  const target = e.target.closest("li");
  const tabList = [...this.children];
  let dataJs = data;
  console.log(tabList);
  if (!target) return;
  const index = target.dataset.index;

  tabList.forEach((li) => {
    li.classList.remove("is-active");
  });
  visualImg.src = `./assets/${index}.jpg`;
  console.log(visualImg);
  //dataJs.color;
  console.log(dataJs);

  target.classList.add("is-active");
}
navigation.addEventListener("click", handler);

function setBgColor() {
  dataList.color;
}
console.log(setBgColor);
setBgColor();

function setImage() {}
setImage();

function setNameText() {}
//선생님.. 죄송합니다 data.js 불러와서 적용하는건 잘 못하겠습니다..
