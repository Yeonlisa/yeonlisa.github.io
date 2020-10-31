var firstNum, operator, previousKey, previousNum;
// 위의 전역변수를 잘 활용하여, 계산기를 구현합니다.

const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const display = document.querySelector('.calculator__display'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
// ! 위 코드(Line 1 - 6)는 수정하지 마세요.

function calculate(n1, operator, n2) {
  let result = '';
    if(operator === '+'){
      result = Number(n1)+Number(n2)
    }
    else if(operator === '-'){
      result = Number(n1)-Number(n2)
    }
    else if(operator === '*'){
      result = Number(n1)*Number(n2)
    }
    else if(operator === '/'){
      result = Number(n1)/Number(n2)
    }
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  return result;
}

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      if (display.textContent === '0' || previousKey === 'operator'){
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.
      display.textContent = '0';
      console.log('숫자 ' + buttonContent + ' 버튼');
      previousKey = 'number';
      display.textContent = buttonContent;
    } else if (previousKey === 'operator'){
      firstNum = previousNum;
    }
      else if(display.textContent !== '0'){
      display.textContent = display.textContent + buttonContent;
    }
  }

    if (action === 'operator') {
      console.log('연산자 ' + buttonContent + ' 버튼');
      operator = buttonContent;
      previousKey = 'operator';
      firstNum=display.textContent;
    }
  

    if (action === 'decimal') {
      console.log('소수점 버튼');
      previousKey = 'decimal';
      display.textContent = display.textContent + '.'
    }

    if (action === 'clear') {
      console.log('초기화 버튼');
      previousKey = 'clear';
      firstNum= undefined;
      operator= undefined;
      previousNum= undefined;
      display.textContent = '0';
    }

    if (action === 'calculate') {
      console.log('계산 버튼');
      previousKey = 'calculate';
      display.textContent = calculate(firstNum, operator, display.textContent);
    }
  }
});
