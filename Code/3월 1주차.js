function solution(s) {
    s = s.toLowerCase();
    console.log(1);
    return s.split(' ').map(a => a[0].toUpperCase() + a.slice(1)).join(' ');
}

console.log(solution("people"));