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
