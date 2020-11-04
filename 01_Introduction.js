describe('expect에 대해서', function () {
  /*
  코드스테이츠의 첫 번째 스프린트 JavaScriptKoans에 오신 것을 환영합니다.
  01_Introduction.js 에서는 Koans 스프린트에서 활용하게 될 유닛 테스트(unit test)를 작성하는 방법을 학습합니다.

  ---
  
  코플릿은 여러분이 제출한 코드를 테스트 케이스 별로 검사하여 전체 결과를 보여줬던 것을 기억하시나요? 
  여러분이 작성한 함수가 주어진 입력값에 대해서 리턴하는 값이 기대하는 값과 같은지를 비교하는 것입니다.
  
  이때 테스트하는 값과 기대값을 비교하기 위해 expect 함수를 사용합니다.
  expect의 사용법은 아래와 같습니다.
  
    expect(테스트하는값).기대하는조건
    expect(isEven(3)).toBeTruthy() => 'isEven(3)'의 결과값은 참인 것(truthy)이어야 한다'
    expect(1 + 2).toBe(3) => 'sum(1,2)의 결과값은 3이어야(toBe) 한다'
  
  '기대하는조건'에 해당하는 함수를 matcher라고 합니다. 위에서 보듯이 matcher는 인자를 가질 수 있습니다. 
    '참인 것이어야 한다' => toBeTruthy()
    '3과 같아야 한다' => toBe(3)

  jasmine framework에는 다양한 matcher가 있지만, 이번 스프린트에서는 그 일부가 사용됩니다. 
  궁금하시면 아래 링크를 통해 확인하시기 바랍니다. (어떤 것들이 있는지만 확인하는 수준이면 충분합니다.)
    https://jasmine.github.io/api/3.3/matchers.html
  
  여러분들은 expect를 활용하여 모든 Koans 과제를 완성하시면 됩니다.
  즉, 각 테스트 케이스가 테스트를 통과하도록 테스트 코드의 적절하게 변형하여야 합니다. 
  단순히 테스트를 통과하는 것을 넘어, '왜 통과하는지'를 고민하는 시간이 되었으면 합니다.
  */

  it('테스트하는 값(expect의 인자)의 truthy 여부를 검사합니다.', function () {
    /* 
    첫 문제는 가볍게 풀어봅시다.
    expect 함수의 인자를 아래와 같이 false 대신 true로 변경하여 테스트를 통과하세요.
      expect(true).toBeTruthy();
    */
    // TODO: 테스트가 통과될 수 있도록(테스트하는 값이 truthy가 되도록) expect의 첫 번째 인자를 수정합니다.
    expect(true).toBeTruthy();
  });

  it('테스트하는 값(expect의 인자)의 falsy 여부를 검사합니다.', function () {
    // 반대의 경우에는 어떻게 해야할까요?
    // TODO: 테스트가 통과될 수 있도록(테스트하는 값이 falsy가 되도록) expect의 첫 번째 인자를 수정합니다.
    expect(false).toBeFalsy();
  });

  /*
  2가지 matcher(toBeTruthy, toBeFalsy)를 통해 '기대하는 값'이 truthy인지 falsy인지 확인하는 방법을 학습했습니다.
  이 때, '기대하는 값'은 표현식(expression)이거나 함수의 실제 실행 결과입니다.
    1) 표현식: true || false, 1 + 1, 10 * 3
    2) 함수의 실행: isEven(3), sum(1, 2)
  
  보시면 알 수 있듯이, '기대하는 값'은 truthy, falsy 뿐만 아니라 어떤 구체적인 값인 경우가 있습니다. 
  이 경우 '기대하는 값'이 '특정 값'과 같은지를 비교해서 테스트를 진행하면 됩니다. 
  가장 간단한 방법은 비교 연산자 === 을 사용하는 방법이 있습니다. 
  '기대하는 값과 특정 값의 비교한 결과'가 truthy인지 확인하면 됩니다.
    expect('기대하는 값과 특정 값의 비교한 결과').toBeTruthy();
  */
  it("'테스트하는 값'을 '기대하는 값'과 비교한 결과가 참(정확히는 truthy)인지 확인합니다.", function () {
    // '테스트하는 값'은 우리가 작성한 어떤 코드의 실제 실행 결과 값이므로 '실제 값'이라고 불러도 됩니다.
    let actualValue = 1 + 1;
    // TODO: 'FILL_ME_IN'을 변경하여 테스트 케이스를 완성합니다.
    let expectedValue = 1 + 1;
    expect(actualValue === expectedValue).toBeTruthy();
  });

  /*
  이처럼 toBeTruthy, toBeFalsy 만을 가지고도 많은 테스트 케이스를 작성할 수 있습니다. 
  하지만 이는 직관적이지 않고 다소 불편합니다. 
  두 값 A와 B를 '비교한 결과'가 참인지를 확인하는 대신에 직접 A가 B와 같은지 확인하는 matcher가 없을까요?
  toBe가 바로 그런 역할을 합니다. 아래 테스트코드는 '테스트하는값'이 '기대하는값'과 같은지 직접 확인합니다.
    expect('테스트하는값').toBeTruthy('기대하는값');
  
  이제 'FILL_ME_IN'을 적절한 값으로 변경하여 테스트 케이스를 완성하시면 됩니다. 
  이후에도 같은 방식으로 'FILL_ME_IN' 변경하면 됩니다.
  */
  it('Matcher toBe의 사용법을 학습합니다.', function () {
    let expectedValue = 1 + 1; // TODO
    // toBe()는 두 값이 타입까지 엄격하게 검사(strict equlity, ===) 합니다.
    expect(1 + 1).toBe(expectedValue);
  });

  it('Matcher toBe의 사용법을 학습합니다.', function () {
    let actualValue = (1 + 1).toString();
    expect(actualValue).toBe((1+1).toString());
  });
});
