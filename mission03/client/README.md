# 엘리멘탈 페이지 구현

1. getNode를 사용해서 ul을 선택한다. 그럼 ul 안에 있는 첫번째 li가 선택된다.

```js
const navigation = getNode("ul");
```

2. handler 함수 안에 li를 클릭했을 때 is-active클래스가 이동하는것을 구현했다.

```js
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
target.classList.add("is-active");
```

## 리드미를 오랜만에 쓰며..

그동안 과제를 하며 리드미를 잘 쓰지 못하다가 쓴 이유는 자바스크립트에 대한 회고가 좀 필요한 것 같았다.<br>
코드를 짜기 전에 글로 한번 써보라고 했는데 처음부터 글쓰는 부분부터 어떻게 해야 할지 막막했다.<br>
그래서 javainfo에 있는 내용이랑 범쌤이랑 수업때 했던 deligation 에 있는 수업자료로 과제를 도움 받을 수 밖에 없었는데..<br>
리드미를 적으며 코드의 흐름(?)이 조금 보이는 것 같기도 하고 그랬다. 그래도 완전히 알수는 없었다..😰
