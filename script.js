// [엘리먼트 변수]
// 여기에 querySelector를 이용해 상호작용을 해야 하는 모든 엘리먼트를 전역변수로 지정하세요
const btnSignup = document.querySelector('#btn-signup');
const ErrorMessage = document.querySelector('#invalid-message');

const userId = document.querySelectorAll('.input-form')[0];
const phoneNumber = document.querySelectorAll('.input-form')[1];
const confirmPhoneNumber = document.querySelectorAll('.input-form')[2];

// [이벤트 핸들러]
function handleBtnSignupClick() {
  const inputs = [...document.querySelectorAll('.input-form')];
  const areInputsValid = inputs.filter(function (input) {
    return input.classList.contains('invalid');
  });
  if (areInputsValid.length !== 0) {
    displayErrorMessage('회원가입 조건에 맞추어 작성해주세요.');
  } else {
    displayErrorMessage('회원가입이 완료되었습니다.');
  }
} 

function handleUserIdInput(event) {
  const target = event.target;
  const parent = target.parentElement;
  const value = target.value;
  if (
    !isEmpty(value) &&
    onlyNumberAndEnglish(value) &&
    moreThanLength(value, 5)
  ) {
    parent.classList.add('valid');
    parent.querySelector('.message').textContent = '✔';
  } else if (isEmpty(value)) {
    parent.classList.add('invalid');
    parent.querySelector('.message').textContent = '아이디를 5글자 이상 적어주세요.';
  } else {
    parent.classList.remove('valid');
    parent.classList.remove('invalid');
  }
}

function handlePhoneNumberInput(event) {
  const target = event.target;
  const parent = target.parentElement;
  const value = target.value;
  if (isPhoneNumber(value)) {
    parent.classList.add('valid');
    parent.classList.remove('invalid');
    parent.querySelector('.message').textContent = '✔';
  } else {
    parent.classList.remove('valid');
    parent.classList.add('invalid');
    parent.querySelector('.message').textContent =
      '핸드폰 번호는 000-0000-0000과 형식이 같아야 합니다.';
  }
}

function handleConfirmPhoneNumberInput(event) {
  const target = event.target;
  const parent = target.parentElement;
  const value = target.value;
  const PhoneNumberValue = phoneNumber.querySelector('input').value;
  if (PhoneNumberValue === value) {
    parent.classList.add('valid');
    parent.classList.remove('invalid');
    parent.querySelector('.message').textContent = '✔';
  } else {
    parent.classList.remove('valid');
    parent.classList.add('invalid');
    parent.querySelector('.message').textContent =
      '핸드폰 번호가 일치하지 않습니다.';
  }
}

// [유효성 검증 함수]
// 필요에 따라서 여러분들이 사용할 유효성 검증 함수를 추가하세요.
function moreThanLength(str, n) {
  return str.length >= n; // 항상 true 또는 false로 리턴하게 만드는 게 좋습니다.
}

function isHandlePhoneNumber(num){
  return /^\d{3}-\d{3,4}-\d{4}$/.test(num);
}

function isEmpty(value) {
  return value.length === 0;
}

function onlyNumberAndEnglish(str) {
  return /^[A-Za-z][A-Za-z0-9]*$/.test(str);
}
// [시각적 피드백]
function displayErrorMessage(message) {
  ErrorMessage.classList.add('show');
  ErrorMessage.textContent = message;
}

// [엘리먼트와 이벤트 핸들러의 연결]
btnSignup.onclick = handleBtnSignupClick;
userId.querySelector('input').onkeyup = handleUserIdInput;
phoneNumber.querySelector('input').onkeyup = handlePhoneNumberInput;
confirmPhoneNumber.querySelector('input').onkeyup = handleConfirmPhoneNumberInput;