describe('type에 대해서', function () {
  it("비교연산자 '=='는 두 값의 일치 여부를 느슨하게 검사(loose equality)합니다.", function () {
    let actualValue = 1 + 1;
    let expectedValue = 1 + 1;
    expect(actualValue == expectedValue).toBeTruthy();

    /*
    혹시 'FILL_ME_IN'을 '2'(문자열 '2')로 변경해도 테스트가 통과된다는 사실을 알고 계십니까?
    '=='의 실행 중 타입 변환(type coercion)이 일어나기 때문입니다. 
    이는 다소 복잡하고 명확한 규칙이 존재하지 않습니다. 
    느슨한 동치 연산자 '=='의 느슨함을 보여주는 예시가 아래에 있습니다.
    아래 테스트 코드들의 주석을 제거해도 이 테스트는 통과합니다.
    */

    // expect(0 == false).toBeTruthy();
    // expect('' == false).toBeTruthy();
    // expect([] == false).toBeTruthy();
    // expect(![] == false).toBeTruthy();
    // expect([] == ![]).toBeTruthy();
    // expect([] == '').toBeTruthy();
    // expect([] == 0).toBeTruthy();
    // expect([''] == '').toBeTruthy();
    // expect([''] == 0).toBeTruthy();
    // expect([0] == 0).toBeTruthy();
  });

  /*
  사실 느슨한 동치 연산(loose equality)는 프로그램의 작동을 예측하기 다소 어렵게 만듭니다.
  '=='의 특성을 정확하게 외워서 모든 상황에 대응하겠다는 자세는 접어두시기 바랍니다.
  매우 비효율적일뿐더러 일반적인 컴퓨터 프로그래밍 언어의 관습(convention)과도 거리가 먼 자세입니다.
  지금부터는 엄격한 동치 연산(strict equality) '==='을 사용하시기 바랍니다.
  */

  it("비교연산자 '==='는 두 값의 일치 여부를 엄격하게 검사(strict equality)합니다.", function () {
    let actualValue = 1 + 1;
    let expectedValue = 1 + 1;
    expect(actualValue === expectedValue).toBeTruthy();
    // 이제 'FILL_ME_IN'을 대신할 수 있는 건 number 타입의 2뿐입니다.
    // 문자열 '2'는 테스트를 통과하지 못합니다.
  });

  it('expect의 인자로 들어간 표현식의 평가(evaluation) 결과를 예측해 봅니다.', function () {
    expect(1 + '1').toBe(1 + '1');
  });

  it('expect의 인자로 들어간 표현식의 평가(evaluation) 결과를 예측해 봅니다.', function () {
    expect(123 - '1').toBe(123 - '1');
  });

  it('expect의 인자로 들어간 표현식의 평가(evaluation) 결과를 예측해 봅니다.', function () {
    expect(1 + true).toBe(1 + true);
  });

  it('expect의 인자로 들어간 표현식의 평가(evaluation) 결과를 예측해 봅니다.', function () {
    expect('1' + true).toBe('1' + true);
  });

  /*
  지금까지 본 것처럼 자바스크립트에는 다소 이해하기 힘든 부분들이 존재합니다. 
  아래처럼 자바스크립트의 별난(quirky) 부분들을 따로 모아둔 저장소도 있을 정도입니다.
    https://github.com/denysdovhan/wtfjs
  
  여기서도 동치 연산을 학습하면서 당부한 자세가 요구됩니다.
  이런 별난 특성들을 전부 외워서 모든 상황에 대응하려고 하지 말고, 올바른 코딩 습관을 기르시기 바랍니다.
  대표적으로 최대한 같은 타입끼리 연산을 하고, 즉 엄격한 동치 연산('===')을 사용하고, 조건문에 비교 연산을 명시하는 것이 훨씬 좋습니다.
  */
});
