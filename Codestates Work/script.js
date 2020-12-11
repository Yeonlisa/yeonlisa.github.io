const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
  let result = 0;
  if(operator === '+') {
    result = Number(n1) + Number(n2);
  }
  if(operator === '-') {
    result = Number(n1) - Number(n2);
  }
  if(operator === '*') {
    result = Number(n1) * Number(n2);
  }
  if(operator === '/') {
    result = Number(n1) / Number(n2);
  }
  return String(result);
}

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    // 클릭된 HTML 엘리먼트가 button이면
    if (action === 'number') {
      if(firstOperend.textContent != 0) {
        secondOperend.textContent = buttonContent;
      } else {
        firstOperend.textContent = buttonContent;
      }
      console.log('숫자' + buttonContent + '버튼');
    }

    if (action === 'operator') {
      operator.textContent = buttonContent;
      console.log('연산자 ' + buttonContent + ' 버튼');
    }

    if (action === 'decimal') {
      console.log('소수점 버튼');
    }

    if (action === 'clear') {
      firstOperend.textContent = "0";
      operator.textContent = "+";
      secondOperend.textContent = "0";
      calculatedResult.textContent = "0"
      console.log('초기화 버튼');
    }

    if (action === 'calculate') {
      calculatedResult.textContent = calculate(firstOperend.textContent, operator.textContent, secondOperend.textContent)
      console.log('계산 버튼');
    }
  }
});


// ! intermediate, advanced test를 위한 코드입니다. 도전하신다면 주석을 해제하세요.
 const display = document.querySelector('.calculator__display--intermediate'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
 let firstNum, intermediateOperator, previousKey, previousNum;

 buttons.addEventListener('click', function (event) {
   // 버튼을 눌렀을 때 작동하는 함수입니다.

   const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
   const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
   const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
   const buttonContainerArray = buttons.children;
   // ! 위 코드는 수정하지 마세요.

   // ! 여기서부터 intermetiate & advanced 과제룰 풀어주세요.
   if (target.matches('button')) {
    for (let i = 0; i < buttonContainerArray.length; i++) {
      const childrenArray = buttonContainerArray[i].children;
      for (let j = 0; j < childrenArray.length; j++) {
        childrenArray[j].classList.remove('isPressed');
      }
   }
     
    if (action === 'number') {
      if (display.textContent === '0' || previousKey === 'operator' || previousKey === 'calculate') {
        display.textContent = buttonContent;
      } else {
        display.textContent = display.textContent + buttonContent;
      }
      previousKey = 'number';
       }
     
     if (action === 'operator') {
      target.classList.add('isPressed');
      if (firstNum && intermediateOperator && previousKey !== 'operator' && previousKey !== 'calculate') {
        display.textContent = calculate(firstNum, intermediateOperator, display.textContent);
      }
      firstNum = display.textContent;
      intermediateOperator = buttonContent;
      previousKey = 'operator';
     }

     if (action === 'decimal') {
      if (!display.textContent.includes('.') && previousKey !== 'operator') {
        display.textContent = display.textContent + '.';
      } else if (previousKey === 'operator') {
        display.textContent = '0.';
      }
      previousKey = 'decimal';
     }

     if (action === 'clear') {
       firstNum = undefined;
       intermediateOperator = undefined;
       previousNum = undefined;
       previousKey = 'clear';
       display.textContent = '0';
     }

      if (action === 'calculate') {
      if (firstNum) {
        if (previousKey === 'calculate') {
          display.textContent = calculate(display.textContent, intermediateOperator, previousNum);
        } else {
          previousNum = display.textContent;
          display.textContent = calculate(firstNum, intermediateOperator, display.textContent);
        }
      }
      previousKey = 'calculate';
    }
  }
});

