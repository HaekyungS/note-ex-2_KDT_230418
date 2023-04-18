let basicData = {
  count: 10,
  min : 1,
  max : 10,
  divideNumber : 5
}

function exampleOne(count, min, max){
  let exampleArr = []
  for(let i=0; i<count; i++){
    exampleArr.push(parseFloat((Math.random()*(max-min)+min).toFixed(2)))
    // 새로 알게된 메서드
    // parseFloat() : 실수(float)로 변환
    // toFixed() : 소수점 자릿수 지정, 얘는 원래 고정 소수점 하고 string으로 반환함. 앞에 parseFloat 이 있어서 숫자로 반환해주는 것임
  }
  // console.log(exampleArr)
  // 콘솔로 확인
  return exampleArr
}

// console.log(exampleOne(basicData.count, basicData.min, basicData.max))
// 콘솔로 작동 확인

function exampleTwo(array, divideNumber){
  let exampleObject = {
    a:[],
    b:[]
  }
  if(Number.isInteger(divideNumber)===true){
    // isInteger() : 정수인지 판별~

    for(let i=0; i<array.length; i++){
      if(array[i]<divideNumber){
        // 만약 divideNumber 보다 작으면
        exampleObject.a.push(array[i])
        // a 배열에 추가
      }else{        
        exampleObject.b.push(array[i])
        // 크면 b 배열에 추가
      }
    }
    // console.log(exampleObject)
    return exampleObject
  }
}

// console.log(exampleTwo(exampleOne(basicData.count, basicData.min, basicData.max),basicData.divideNumber))

function exampleThree(array){
  let value=0;
  // 더한 결과값을 저장하는 변수

  for(let i=0; i<array.length; i++){
    value +=array[i];
  }
  return Number(value.toFixed(2))
  // 실수의 덧셈이 결과값이 요상하게 나오는 것을 확인할 수 있었다.
  // 원인을 파악해보니 2진법이 10진법으로 바뀌는 과정에서 일부 실수가 무한소수에 빠져 그렇다고 함.
  // 그래서 원하는 값으로 출력하려면 반올림 혹은 절사의 과정이 필요.
  // 위에서 썼던 toFixed 나 Math메서드 중 round 라는 반올림 함수를 이용하면 된다.
  // 위에 함수에서도 실수 두번째자리까지 했으니, 얘도 그냥 두번째자리까지로 하자.
}
// console.log(exampleOne(basicData.count, basicData.min, basicData.max))
// 콘솔 확인
// console.log(exampleThree(exampleOne(basicData.count, basicData.min, basicData.max)))
// 콘솔 확인

function exampleFour(object){
  let value;
    
  return value
}

function exampleFive(objectOne, objectTwo){
  let value;
  return value
}

// console.log(exampleFive(basicData, exampleTwo(exampleOne(basicData.count, basicData.min, basicData.max),basicData.divideNumber)))