// function hello() {
//   console.log("안녕이다");
// }

// clickBtn.addEventListener("click", hello);

// 익명함수 작성
// (일반함수처럼 재사용 필요없이 단 한번만 실행할 경우/ 함수 정의 -> 호출하는 과정을 줄인게 익명함수)
// 실행법은 즉시 함수 호출. 그리고 변수(const sum = ~~) 에 함수를 저장할 수 있음
// clickBtn.addEventListener("click", function () {
//   console.log("익명함수다!");
// });

// 익명함수와 같이 꽤 언급되는 클로저(코드 캡슐화, 은닉화) 공부하기

// drone.addEventListener("click", function () {
//   spit.style.opacity = 1;
//   spit.style.left = "480px";
// });

const drone = document.getElementById("drone");
const spit = document.getElementById("spit");
const hpBar = document.getElementById("hpBar");
const bunker = document.getElementById("bunker");
let hp = 5;

drone.addEventListener("click", function () {
  spit.animate(
    [
      {
        opacity: "1",
        transform: "translate(420px)",
      },
    ],
    600
  );
  setTimeout(function () {
    if (hp == 0) {
      return hp;
    } else {
      hp = hp - 1;
    }
    hpBar.innerText = `HP : ${hp}`;

    if (hp == 0) {
      bunker.style.opacity = 0;
    }
  }, 600);
});
