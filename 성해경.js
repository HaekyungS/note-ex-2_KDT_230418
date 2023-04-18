let basicData = {
  count: 10,
  min : 1,
  max : 10,
  dixideNumber : 5
}

function exampleOne(count, min, max){
  let exampleArr = []
  for(let i=0; i<count; i++){
    exampleArr.push(parseFloat((Math.random()*(max-min)+min).toFixed(2)))
    // 새로 알게된 메서드
    // parseFloat() : 실수(float)로 변환
    // toFixed() : 소수점 자릿수 지정
  }
  // console.log(exampleArr)
  // 콘솔로 확인
  return exampleArr
}

// console.log(exampleOne(basicData.count, basicData.min, basicData.max))
// 콘솔로 작동 확인

function exampleTwo(array, dixideNumber){
  let exampleObject = {
    a:[],
    b:[]
  }

  return exampleObject
}

function exampleThree(array){
  let value;
  return value
}

function exampleFour(object){
  let value;
  return value
}

function exampleFive(objectOne, objectTwo){
  let value;
  return value
}

console.log(exampleFive(basicData, exampleTwo()))