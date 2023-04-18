let basicData = {
  count: 10,
  min: 1,
  max: 10,
  divideNumber: 5,
};

function exampleOne(count, min, max) {
  let exampleArr = [];
  for (let i = 0; i < count; i++) {
    exampleArr.push(parseFloat((Math.random() * (max - min) + min).toFixed(2)));
    // 새로 알게된 메서드
    // parseFloat() : 실수(float)로 변환
    // toFixed() : 소수점 자릿수 지정, 얘는 원래 고정 소수점 하고 string으로 반환함. 앞에 parseFloat 이 있어서 숫자로 반환해주는 것임
  }
  // console.log(exampleArr)
  // 콘솔로 확인
  return exampleArr;
}

// console.log(exampleOne(basicData.count, basicData.min, basicData.max))
// 콘솔로 작동 확인

function exampleTwo(array, divideNumber) {
  let exampleObject = {
    a: [],
    b: [],
  };
  if (Number.isInteger(divideNumber) === true) {
    // isInteger() : 정수인지 판별~

    for (let i = 0; i < array.length; i++) {
      if (array[i] < divideNumber) {
        // 만약 divideNumber 보다 작으면
        exampleObject.a.push(array[i]);
        // a 배열에 추가
      } else {
        exampleObject.b.push(array[i]);
        // 크면 b 배열에 추가
      }
    }
    // console.log(exampleObject)
    return exampleObject;
  }
}

// console.log(exampleTwo(exampleOne(basicData.count, basicData.min, basicData.max),basicData.divideNumber))

function exampleThree(array) {
  let value = 0;
  // 더한 결과값을 저장하는 변수

  for (let i = 0; i < array.length; i++) {
    value += array[i];
  }
  return Number(value.toFixed(2));
  // 실수의 덧셈이 결과값이 요상하게 나오는 것을 확인할 수 있었다.
  // 원인을 파악해보니 2진법이 10진법으로 바뀌는 과정에서 일부 실수가 무한소수에 빠져 그렇다고 함.
  // 그래서 원하는 값으로 출력하려면 반올림 혹은 절사의 과정이 필요.
  // 위에서 썼던 toFixed 나 Math메서드 중 round 라는 반올림 함수를 이용하면 된다.
  // 위에 함수에서도 실수 두번째자리까지 했으니, 얘도 그냥 두번째자리까지로 했습니다.
}
// console.log(exampleOne(basicData.count, basicData.min, basicData.max))
// 콘솔 확인
// console.log(exampleThree(exampleOne(basicData.count, basicData.min, basicData.max)))
// 콘솔 확인

function exampleFour(object) {
  if (Array.isArray(object) === true) {
    let value;
    for (let i = 0; i < object.length; i++) {
      // console.log(typeof(object[i]))
      if (typeof object[i] !== "number") {
        // 배열이니까 배열의 i번째의 타입이 숫자가 아니면 false 로 리턴
        value = false;
        return value;
      } else {
        // 리턴이 안됬다면 true
        value = true;
      }
    }
    return value;
  }
}

// objectone 은 객체, two도 객체
function exampleFive(objectOne, objectTwo) {
  let value;
  const objectOneSum = exampleThree(Object.values(objectOne));
  // console.log(objectOneSum);
  // console.log((objectTwo.a).concat(objectTwo.b))
  const objectTwoSum = exampleThree(objectTwo.a.concat(objectTwo.b));
  // 새로알게된 함수 concat() -> 배열이나 문자열을 합쳐주는 함수.
  // 위에 쓴거처럼 배열.concat(배열) 을 하면 하나의 배열로 만들어준다.
  // 이 경우는 내가 해당 객체에 key를 아니까, 그 안에 배열이 있는 걸 아니까 
  // console.log(objectTwoSum);
  value = objectOneSum + objectTwoSum;
  return value;
}

console.log(
  exampleFive(
    basicData,
    exampleTwo(
      exampleOne(basicData.count, basicData.min, basicData.max),
      basicData.divideNumber
    )
  )
);
