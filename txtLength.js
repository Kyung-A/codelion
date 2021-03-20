function counter() {
  // value 또는 innerHTML은 태그 안 쪽의 값을 얻어올 수 있음
  let formTextContent = document.getElementById("formTextarea").value;
  if (formTextContent.length > 200) {
    // 문자열을 잘라주는 substring 메소드. (0,200) 의미는 0이상 200미만이란 뜻이다.
    formTextContent = formTextContent.substring(0, 200);
    document.getElementById("formTextarea").value = formTextContent;
  }
  // length는 배열뿐만 아니라 스트링(문자열)의 길이도 가져온다(공백 포함)
  document.getElementById(
    "textCount"
  ).innerHTML = `(${formTextContent.length}/200)`;
}

counter();

// 변수를 const로 주고 문자열 자른 값을 maxLength로 별도 변수명을 지정해줬더니
// 글자수가 막히지 않고 쭉 입력되었다가 짤리는 현상 발생. 그리고 실시간 length 값도 202까지 찍힘
// 이벤트리스너로 작성했더니 JS가 작동하지 않음
