// 1. 배열과 인덱스
// Array(어레이), index(인덱스)

// 과일을 저장하려고 할 떄
const apple = "사과";
const banana = "바나나";

console.log(apple);

// 상위 변수 하나에 모든 값을 저장
const fruit = ['사과', '바나나', '체리'];
console.log(fruit[0]);
console.log(fruit[2]);

// 2. 연산자
console.log(1+2);

// 3. 할당 연산자
let x = 1;
console.log(x);

let y = x;
console.log(y);

y += x;
// y = y + x
console.log(y);

// 4. 조건문 if else, 비교 연산자
const age = 21;

if ( age < 20 ) {
    console.log("학생입니다");
} else if ( age < 40 ) {
    console.log("아저씨입니다");
} else {
    console.log("성인입니다");
}

// switch 문

const number = 1;

switch(number)
{
    case 1 : console.log("숫자는 1입니다");
        break;
    case 2 : console.log("숫자는 2입니다");
        break;
    default :
        console.log("1도 2도 아닙니다");
}

// 5. 반복문 for

/* for (초기값; 조건식; 증가식) {

} */

for (let i = 0; i < 3; i++) {
    console.log("반복");
    console.log("1");
}

// 구구단 만들기
for (let i = 1; i<= 9; i++){
    for (let j = 1; j <= 9; j++){
        console.log(i + " X " + j + " = " + (i * j));
    }
    console.log("-------------");
}

// 3단으로 짜르기
for (let i = 1; i<= 9; i++){
    for (let j = 1; j <= 9; j++){
        console.log(i + " X " + j + " = " + (i * j));
    }
    if ( i == 3) {
        break;
    }
    console.log("-------------");
}