// Math.random(); 은 0이상 ~ 1미만의 실수(=소수=float) 를 뽑아냄. 그래서 정수로 뽑으려면 변환 로직이 필요

// const number = Math.floor(Math.random() * 45 + 1); // Math.floor는 소수점 버리기

// Math.floor와 parseInt의 차이점은 양수일때는 똑같이 작용하나
// 음수일때 -12.34 -> -13 반환, parseInt는 -12 반환
// 한마디로 floor는 내림이고 parseInt는 소수점 버린다는 차이가 있다
// 1 이상 ~ 46 미만 실수 (0을 제외하기위한 + 1 추가)
// const number = parseInt(Math.random() * 45 + 1);

const lotto = [];

// 굳이 i를 어디에다가 배치할 필요 없이 for문이 6번 반복됨
// for -> while문으로 바꿈 - for문으로 쓰면 index가 제각각이 되어버림 (중복되는 숫자가 있으면 그 자리를 버리고 다음 단계로 넘어가기 때문에)
// 그래서 조건문이 ture일때만 반복되는 while문을 쓰는게 적절하다 (lotto 배열 길이가 6개가 될때까지 계속 반복)
while (lotto.length < 6) {
  const lottoNumber = parseInt(Math.random() * 45 + 1);
  if (lotto.indexOf(lottoNumber) == -1) {
    // indexOf는 해당 값을 찾지 못하면 -1을 반환함
    // 우리에겐 해당 값이란 것 = 중복된 숫자, 중복된 숫자가 없다? 그럼 그건 -1인 상태 고로 true인 상태
    // 즉 lotto 랜덤 숫자 배열에 헤당 값(중복되는 값)이 없으면 푸쉬를 하겠다는 조건문
    // 그래서 위에 랜덤 숫자를 먼저 뽑는 로직이 진행되어야하는 것
    // 첫번째로 랜덤 숫자를 뽑았다! lotto 배열에 그 해당 숫자가 없다 -> -1(ture인 상태) -> 푸쉬한다
    // 두번째로 랜덤 숫자를 뽑았다! lotto 배열에 그 해당 숫자가 없다 -> -1(ture인 상태) -> 푸쉬한다
    lotto.push(lottoNumber);
  }
}

lotto.sort((a, b) => a - b);

for (let i = 0; i < 6; i++) {
  document.write(`<div class="lotto lottoNumber${i + 1}"> ${lotto[i]}</div>`);
}
