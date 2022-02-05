var button = document.querySelector("button");
var input1 = document.getElementById("num1");
//!을 붙여서 null이 아닐 것임을 명시하고, as HTMLInputElement (typecasting) 를 통해 이 element가 어떤 종류가 될지 알려줌
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    // console.log(add(input1.value, input2.value));
    //HTMLInputElement.value를 string으로 이해하고 있기 때문에 number과 변수형 정의가 충돌하여 컴파일에러
    console.log(add(+input1.value, +input2.value));
    //변수 앞에 +를 붙여서 숫자형임을 알린다.
});
//tsc using-ts.ts 명령을 통해 해당 파일을 자바스크립트 파일로 컴파일
