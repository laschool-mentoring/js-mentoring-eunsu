// [1. 오늘은 복습으로 시작할 것입니다.] 를 출력해보자

const name = "최은수 멘티";
const age = 17;

// 2. 최은수 멘티님의 나이는 17세이다. 를 출력해보자(연산자 활용)

console.log(name + "의 나이는" + age + "이다.");


// 과일(fruit) -> 사과, 배, 포도를 저장하고, 배를 출력해보자. 배열(array)

// 반복문 for 출력 10번

// 구구단 만들기 반복문

// if break, continue

for (let i = 1; i <=9; i++){
    // i = 1
    if ( i == 3) continue;
    for (let j = 1; j<= 9; j++) {
        // i = 3
        // j = 1 ~ 9
        console.log(i + " * " + j + " = " + i*j);
    }
    // i = 3
    
}

// for(최초식, 조건문, 증가식)
// while (조건문)

let i = 0;
while(i < 9) {
    console.log("반복");
    i++;
}

