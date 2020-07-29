// JavaScript code 작성해도 되지만, 위처럼 파일을 가져오는게 더 좋다.
// Python과 비교해서 JavaScript를 알아보자.

// JavaScript : web client에서 실행되는 언어
//              요즘에는 서버용 개잘언어로 사용되기도 한다(Node.js)


// 변수를 선언하는법
// python은 그냥 변수를 선언한다. my_var = 100
// js는 var을 붙여준다. var my_var = 100


var tmp = 3.14           // number
var tmp1 = "Hello"       // string (python과 동일)
var tmp2 = true          // boolean (python True)
var tmp3 = [1, 2, 3.4]   // array (python list)

// 객체 표현
var tmp4 = {name: "홍길동", age: 25}
console.log(tmp4.name)


// 함수
// 함수는 2가지가 존재한다.
// 1. 선언적 함수 (python의 일반적인 함수 정의하는 방법)
//    선언적 함수는 함수 이름이 존재한다.
function my_add(x, y) {
    return x + y
}

// 2. 익명함수 (함수의 이름이 없다.) 람다함수 (파이썬과 다른 의미)
//    변수에 저장해서 사용. 일급함수의 특징을 가지게 된다.
//    함수를 다른 함수의 인자로, 함수의 리턴값으로 함수를 이용.
var my_add = function (x, y) {
    return x + y
}




