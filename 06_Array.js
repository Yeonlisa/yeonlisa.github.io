describe('Array에 대해서', function () {
  it('Array의 기본을 확인합니다.', function () {
    const emptyArr = [];
    expect(typeof emptyArr === 'array').toBe(false);
    expect(emptyArr.length).toBe(0);

    const multiTypeArr = [
      0,
      1,
      'two',
      function () {
        return 3;
      },
      { value1: 4, value2: 5 },
      [6, 7],
    ];
    expect(multiTypeArr.length).toBe(6);
    expect(multiTypeArr[0]).toBe(0);
    expect(multiTypeArr[2]).toBe('two');
    expect(multiTypeArr[3]()).toBe(3);
    expect(multiTypeArr[4].value1).toBe(4);
    expect(multiTypeArr[4]['value2']).toBe(5);
    expect(multiTypeArr[5][1]).toBe(7);
  });

  it('Array의 요소(element)를 다루는 방법을 확인합니다.', function () {
    const arr = [];
    expect(arr).toEqual([]);

    arr[0] = 1;
    expect(arr).toEqual([1]);

    arr[1] = 2;
    expect(arr).toEqual([1, 2]);

    arr.push(3);
    expect(arr).toEqual([1,2,3]);

    const poppedValue = arr.pop();
    expect(poppedValue).toBe(3);
    expect(arr).toEqual([1,2]);
  });

  it('Array 메소드 slice를 확인합니다.', function () {
    const arr = ['peanut', 'butter', 'and', 'jelly'];

    expect(arr.slice(1)).toEqual(['butter', 'and', 'jelly']);
    expect(arr.slice(0, 1)).toEqual(['peanut']);
    expect(arr.slice(0, 2)).toEqual(['peanut', 'butter']);
    expect(arr.slice(2, 2)).toEqual([ ]);
    expect(arr.slice(2, 20)).toEqual(['and', 'jelly']);
    expect(arr.slice(3, 0)).toEqual([ ]);
    expect(arr.slice(3, 100)).toEqual(['jelly']);
    expect(arr.slice(5, 1)).toEqual([ ]);

    // arr.slice는 arr의 값을 복사하여 새로운 배열을 리턴합니다.
    // 아래의 코드는 arr 전체를 복사합니다. 자주 사용되니 기억하시기 바랍니다.
    expect(arr.slice(0)).toEqual(['peanut', 'butter', 'and', 'jelly']);
  });

  it('Array를 함수의 인자로 전달할 경우, reference가 전달됩니다.', function () {
    // call(pass) by value와 call(pass) by reference의 차이에 대해서 학습합니다.
    const arr = ['zero', 'one', 'two', 'three', 'four', 'five'];

    function passedByReference(refArr) {
      refArr[1] = 'changed in function';
    }
    passedByReference(arr);
    expect(arr[1]).toBe('changed in function');

    const assignedArr = arr;
    assignedArr[5] = 'changed in assignedArr';
    expect(arr[5]).toBe('changed in assignedArr');

    const copiedArr = arr.slice();
    copiedArr[3] = 'changed in copiedArr';
    expect(arr[3]).toBe('three');
  });

  it('Array 메소드 shift와 unshift를 확인합니다.', function () {
    const arr = [1, 2];

    arr.unshift(3);
    expect(arr).toEqual([3,1,2]);

    const shiftedValue = arr.shift();
    expect(shiftedValue).toEqual(3);
    expect(arr).toEqual([1,2]);
  });
});
