const person = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
};

function getValueAtObject(obj, key) {
  if ("name" in person) {
    console.log(getValueAtObject(person, "name"));
    return obj[key];
  } else if ("age" in person) {
    console.log(getValueAtObject(person, "age"));
    return obj[key];
  } else if ("city" in person) {
    console.log(getValueAtObject(person, "city"));
    return obj[key];
  } else {
    console.error(getValueAtObject(person, "country"));
  }
}
//getValueAtObject();

// console.log(getValueAtObject(person, 'name')); // 'Alice'
// console.log(getValueAtObject(person, 'age'));  // 25
// console.log(getValueAtObject(person, 'city')); // 'Wonderland'
// console.log(getValueAtObject(person, 'country')); // Error !

const numbers = [10, 20, 30, 40, 50];

// console.log(getNumberAtArray(numbers, 2)); // 30
// console.log(getNumberAtArray(numbers, 4)); // 50
// console.log(getNumberAtArray(numbers, 5)); // Error!
// console.log(getNumberAtArray(numbers, -1)); // Error!

function getNumberAtArray(arr, index) {
  if (arr in numbers) {
    return arr[index];
  } else {
    return arr[index];
  }
}

const obj = { name: tiger, age: 40 };
//객체에 키를 입력했을 때 값이 나오길 기대
//함수는 매개변수를 유연하게 받을수록 재사용성이 증가
function getValueAtObject_a(object, key) {
  //뭐부터 시작하지?
  //1. 함수의 이름
  //2. 함수의 실행부 작성
  //3. 함수의 로직
  //4. validation

  //Object.hasOwn, Object.prototype.hasOwnProperty는 쓰면 안전하다.(입문단계는 아님)
  // if(Object.prototype.toString.call(object).slice(8,-1).toLowerCase()==='object')){

  // }
  if (!(typeof object === "object")) {
    console.error(
      "getValueAtObject_a 함수의 첫번째 인수는 객체타입이어야한다."
    );
  }
  if (typeof key !== "string") {
    console.error(
      "getValueAtObject_a 함수의 두번째 인수는 문자타입이어야한다."
    );
  }
  if (!(key in object)) {
    //console.error("해당객체에는 key없음");
    throw new SyntaxError("해당객체에는 key값이 없음");
    //return; 위에서 에러가 나오는순간 return은 필요가 없다
  }
  return object[key];
}

console.log(getValueAtObject_a(obj, "age"));

function getValueAtObject_b(object, key) {
  const entries = Object.entries(object);

  // for (let keyValue of entries) {
  //   const _key = keyValue[0];
  //   const value = keyValue[1];

  //   if (_key === key) {
  //     return value;
  //   }
  // }
}
console.log(getValueAtObject_b(obj, "name"));

const arr = ["정주연", "박혜미", "김영현"];

function getNumberAtArray_a(array, index) {
  if (!Array.isArray(array)) {
    throw new Error(
      "전달된 첫번째 인수의 데이터 타입은 ${typeof array}타입입니다. 해당 함수의 함수의 첫번째 인수는 배열 타입이어야 합니다."
    );
  }
  if (index >= 0 && index < array.length) {
    return array[index];
  } else {
    throw new Error("...");
  }
}
getNumberAtArray_a(arr, 0);
