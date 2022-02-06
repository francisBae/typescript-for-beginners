function add(n1 : number, n2 : number, showResult : boolean, phrase : string){
  // console.log(typeof(number1));
  if (typeof n1 !== 'number' || typeof n2 !== 'number'){
    throw new Error('Incorrect input!')
  } //일반적인 javascript 방식

  const result = n1+n2;
  if(showResult){
    console.log(phrase+result);
  }else{
    return result;
  }
}
// const number1 = 5; //==5.0
// let number1 : number = 5;
let number1:number; //결과적으로 number 형이 들어갈 것이라고 정의
// number1='5'; //number형 명시했으므로 오류 나는 문법
number1=5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: ';
// resultPhrase = 0; //string으로 사용되었으므로 숫자형 대입은 불가

//const result = add(number1, number2, printResult);
// console.log(result);
add(number1, number2, printResult, resultPhrase);
