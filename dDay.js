// 객체(오브젝트)란 배열처럼 여러개의 값을 담는 곳
//키, 값이 쌍을 이루며 값으로는 문자열, 숫자, 배열, 오브젝트, 메소드(함수)가 들어갈 수 있다

// 객체(오브젝트) 만들기
const me = {
  name: "kyungA",
  age: 26,
  cm: "154cm",
  kg: "secret",
  comment: function () {
    console.log("다들 안뇽안뇽");
  },
};

console.log(me.kg);
me.comment();

// Date 객체(오브젝트) 생성
const date = new Date();

// 연도를 가져오는 메소드
console.log(date.getFullYear());
// 월을 가져오는 메소드 (0:1월임)
console.log(date.getMonth() + 1);
// 일을 가져오는 메소드
console.log(date.getDate());
// 1970.1.1 00:00:00을 기준으로 흐른 시간을 밀리초로 표현하는 메소드
console.log(date.getTime());
// 특정일의 객체
const resignation = new Date("2021-11-23");
console.log(resignation);
// 특정 ms(밀리초) 객체
const ms = new Date(3000);
console.log(ms);

// 변수 입사날
const start = new Date("2020-11-23");

// 회사다닌지 며칠째(ms) = 현재 시간(ms) - 입사일 시간(ms)
const timeDiff = date.getTime() - start.getTime();
// ms를 일로 바꾸는 계산
// 1000밀리초 * 60초 * 60분 * 24시간 곱하고 나누기 timeDiff
// +1은 첫 날이 0일이 아닌 1일이니까(그 날 일했으니까...)
const day = parseInt(timeDiff / (1000 * 60 * 60 * 24) + 1); // parseInt = 소수점 버리는 메소드

const end = document.getElementById("end");
end.innerText = `${day}일째`;

// 추석 연휴 디데이
const thanksgiving = new Date("2021-09-20");
// 추석 연휴까지 남은일수 = 추석 연휴 - 현재 시간 (미래니까 빼는 순서가 바뀜)
const timeDiff2 = thanksgiving.getTime() - date.getTime();
const day2 = parseInt(timeDiff2 / (1000 * 60 * 60 * 24) + 1);
const thanksgivingDay = document.getElementById("thanksgiving");
thanksgivingDay.innerText = `${day2}일 남음`;

// 퇴사날까지 디데이
const timeDiff3 = resignation.getTime() - date.getTime();
const day3 = parseInt(timeDiff3 / (1000 * 60 * 60 * 24) + 1);
const resignationDay = document.getElementById("resignation");
resignationDay.innerText = `${day3}일 남음`;

// 1년 3개월째 되는날이 언제인지 계산
// 1년 3개월 일 수를 ms로 환산 = 입사날 ms + 1년 3개월(486일이지만 입사날이 1일이니 하루를 뺀 485일) ms * ms
// ms를 곱하는 이유는 485가 ms가 아닌 일수라서 일을 ms로 바꿔줘서 더해야하기때문
const dDayMs = start.getTime() + 485 * (1000 * 60 * 60 * 24);
// 밀리초를 YYYY-MM-DD로 환산
const dDay = new Date(dDayMs);
// 쪼개서 보여주기
const dDayDate = `${dDay.getFullYear()}.${
  dDay.getMonth() + 1
}.${dDay.getDate()}`;
const moneyDay = document.getElementById("moneyUp-date");
moneyDay.innerText = `${dDayDate}`;

// 현재날부터 1년 3개월째까지 며칠 남았는 계산
const timeDiff4 = dDay.getTime() - date.getTime();
const day4 = parseInt(timeDiff4 / (1000 * 60 * 60 * 24) + 1);
const moneyUp = document.getElementById("moneyUp");
moneyUp.innerText = `${day4}일 남음`;
