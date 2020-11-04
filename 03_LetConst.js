describe("'const'에 대해서", function () {
  it("'const'로 선언된 변수에는 재할당(reassignment)이 금지됩니다.", function () {
    // 아래 코드에서 문제가 되는 부분을 삭제합니다.
    const constNum = 0;
    expect(constNum).toBe(0);

    const constString = 'I am a const';
    expect(constString).toBe('I am a const');
  });

  it("'const'로 선언된 배열의 경우 새로운 요소를 추가하거나 삭제할 수 있습니다.", function () {
    const arr = [];
    const toBePushed = 42;
    arr.push(toBePushed);
    expect(arr[0]).toBe(42);

    // 여전히 재할당은 금지됩니다.
    // arr = [1, 2, 3];
  });

  it("'const'로 선언된 객체의 경우, 속성을 추가하거나 삭제할 수 있습니다.", function () {
    const obj = { x: 1 };
    expect(obj.x).toBe(obj.x);

    delete obj.x;
    expect(obj.x).toBe(obj.x);

    // 여전히 재할당은 금지됩니다.
    // obj = { x: 123 };

    obj.occupation = 'SW Engineer';
    expect(obj['occupation']).toBe('SW Engineer');
  });

  /*
  재할당도 안되는 'const' 키워드를 굳이 써야하는지 이해가 안 될수도 있습니다.
  'let' 키워드는 재할당이 가능하기 때문에 여러모로 편하고, 큰 문제도 없어 보이기 때문입니다.
  이에 대해서 잠시 고민하신 후, 'const'가 추천되는 이유에 대해 직접 찾아보시기 바랍니다.

  동기 부여를 위해 구글의 자바스크립트 코딩 스타일 가이드를 소개해 드립니다.
  세계의 탑코더들이 있는 구글의 스타일 가이드는 선언 키워드에 대해서 어떻게 안내하고 있을까요?
    https://google.github.io/styleguide/jsguide.html#features-use-const-and-let
  */
});
