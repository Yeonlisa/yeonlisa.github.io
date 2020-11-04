describe('primitive data type과 reference data type에 대해서', function () {
  /*

  * 04_Scope.js의 주석이 이해하기 어렵다면, 유어클래스 Lesson - Primitive & Reference를 복습하세요 :)

  자바스크립트에서 원시 자료형(primitive data type 또는 원시값) 객체가 아니면서 method를 가지지 않는 아래 6가지의 데이터를 말합니다. 
    string, number, bigint, boolean, undefined, symbol, (null)
 */
  it('원시 자료형은 값 자체에 대한 변경이 불가능(immutable)합니다.', function () {
    let name = 'codestates';
    expect(name).toBe('codestates');
    expect(name.toUpperCase()).toBe('CODESTATES');
    expect(name).toBe('codestates');
    // 새로운 값으로 재할당은 가능합니다.
    name = name.toUpperCase();
    expect(name).toBe('CODESTATES');

    /*
    원시 자료형은 값 자체에 대한 변경이 불가능하다고 하는데, 한 변수에 다른 값을 할당하는 것은 변경이 된 것이 아닌가요?
      let num1 = 123;
      num2 = 123456;
    원시 자료형 그 자체('hello', 123, 456n, true 등)와 원시 자료형이 할당된 변수는 구분되어야 합니다.
    사과 박스에 귤을 담았다고 해서, 귤이 갑자기 사과가 되지는 않는 것과 같이 123이 갑자기 123456이 되지 않습니다.
    */
  });

  it('원시 자료형을 변수에 할당할 경우, 값 자체의 복사가 일어납니다.', function () {
    let overTwenty = true;
    let allowedToDrink = overTwenty;

    overTwenty = false;
    expect(overTwenty).toBe(false);
    expect(allowedToDrink).toBe(true);

    let variable = 'variable';
    let variableCopy = 'variableCopy';
    variableCopy = variable;
    variable = variableCopy;
    expect(variable).toBe('variable');
  });

  it('원시 자료형 또는 원시 자료형의 데이터를 함수의 인자로 전달할 경우, 값 자체의 복사가 일어납니다.', function () {
    let currentYear = 2020;
    function afterTenYears(year) {
      year = year + 10;
    }
    afterTenYears(currentYear);
    expect(currentYear).toBe(2020);
    function afterTenYears2(currentYear) {
      currentYear = currentYear + 10;
      return currentYear;
    }
    let after10 = afterTenYears2(currentYear);
    expect(currentYear).toBe(2020);
    expect(after10).toBe(2030);
    // 사실 함수의 인자도 변수에 자료(data)를 할당하는 것입니다.
    // 함수를 호출하면서 넘긴 인자가 호출된 함수의 지역변수로 (매 호출 시마다) 새롭게 선언됩니다.
  });

  /*
  자바스크립트에서 원시 자료형이 아닌 모든 것은 참조 자료형 입니다. 배열([])과 객체({}), 함수(function(){})가 대표적입니다.
    
    const pi = 3.14
    const arr = ["hello", "world", "code", "states"];
 
  위 두 가지 코드에서 어떤 차이를 찾으실 수 있나요? 아쉽게도 보기에는 큰 차이가 없습니다.
  하지만 자바스크립트는 보기와는 다르게 작동되는 부분이 있습니다. (under the hood)
  여기서 변수 pi에는 3.14라는 원시 자료형 '값'이 할당되고, arr에는 참조 자료형의 '주소'가 할당됩니다.
  영어 단어 reference 의미와 연결시켜보면 실제 데이터가 저장된 주소를 가리킨다(refer), 즉, 참조(reference)한다로 이해하면 쉽습니다.
 
  왜 참조 자료형에서는 '주소'를 할당할 수 밖에 없을까요?
  원시 자료형은 immutable 하다고 말씀 드렸습니다. 참조 자료형은, 그렇지 않습니다.

  우리가 배열에 요소를 추가 및 삭제하고, 객체에 속성을 추가 및 삭제할 수 있었습니다.
  이것 자체가, 참조 자료형은 이미 immutable하지 않다는 것을 보여주고 있습니다.
  언제든 데이터가 늘어나고 줄어들 수 있죠 (동적으로 변한다.), 그렇기 때문에 특별한 저장공간의 주소를 변수에 할당함으로써 더 잘 관리하고자 합니다.
  이런 저장 공간을 heap이라고 부릅니다. 

  아래와 같이 코드가 작성되어 있다면...
    let num = 123;
    const msg = "hello";
    let arr = [1, 2, 3];
    const isOdd = true;

  원시 자료형의 데이터가 저장되는 공간 (stack)
     1 | num |   123
     2 | msg | "hello"
     3 | arr | heap의 12번부터 3개  // (실제 데이터가 저장되어 있는 주소)
     4 |isOdd|   true
  =====================================
  Object 자료형의 데이터가 저장되는 공간 (heap)
     10 ||   
     11 || 
     12 || 1
     13 || 2  
     14 || 3  
  실제 자바스크립트는 변수를 위와 같이 저장할 것입니다.  

  *
  * 위의 원리가 잘 이해 되셨나요? heap과 stack이라는 용어가 어색하더라도, 위 원리가 잘 이해되었다면 괜찮습니다.
  * 이해가 잘 안되시면, 원시 자료형이 할당되는 경우는 값 자체가 할당되고, 참조 자료형은 주소가 할당된다고 암기하셔도 좋습니다.
  * 
  * const hello = "world"; // "world" 그 자체 
  * const arr = [1, 2, 3]; // [1, 2, 3] 의 메모리 주소 xxxxxx 
  * 
  */
  it('참조 자료형의 데이터는 동적(dynamic)으로 변합니다.', function () {
    const arr = [1, 2, 3];
    expect(arr.length).toBe(3);
    arr.push(4, 5, 6);
    expect(arr.length).toBe(6);
    arr.pop();
    expect(arr.length).toBe(5);

    const obj = {};
    expect(Object.keys(obj).length).toBe(0);
    obj['name'] = 'codestates';
    obj.quality = 'best';
    obj.product = [
      'sw engineering',
      'produc manager',
      'growth marketing',
      'data science',
    ];
    expect(Object.keys(obj).length).toBe(3);
    delete obj.name;
    expect(Object.keys(obj).length).toBe(2);
  });

  it('참조 자료형을 변수에 할당할 경우, 데이터의 주소가 저장됩니다.', function () {
    /*
    참조 자료형의 경우, 값 자체의 복사가 일어나지 않는 이유는 어느 정도 납득할만한 이유가 있습니다.
    배열이 얼마나 많은 데이터를 가지고 있는지가 프로그램의 실행 중 수시로 변경될 수 있기 때문입니다.
    쉽게 생각해서 number 타입 데이터 100만개를 요소로 갖는 배열을 생각해 봅시다. 
    따로 명시하지 않는 이상 100만개의 데이터를 일일히 복사하는 것은 상당히 비효율적입니다.
    따라서 일단은 주소만 복사해서 동일한 데이터를 바라보는 게 만드는 것이 효율적입니다.
    배열과 객체의 데이터를 복사하는 방법은 06_Array.js, 07_Object.js에서 다룹니다.
    */
    const overTwenty = ['hongsik', 'minchul', 'hoyong'];
    let allowedToDrink = overTwenty;

    overTwenty.push('san');
    expect(allowedToDrink).toEqual(['hongsik', 'minchul', 'hoyong', 'san']);
    overTwenty[1] = 'chanyoung';
    expect(allowedToDrink[1]).toEqual('chanyoung');
    // toEqual은 배열의 요소나 객체의 속성이 서로 같은지 확인하는 matcher입니다.
    // toBe아닌 toEqual을 사용하는 이유는 아래 테스트 코드를 통해 고민하시기 바랍니다.

    const ages = [22, 23, 27];
    allowedToDrink = ages;
    expect(allowedToDrink === ages).toBe(true);
    expect(allowedToDrink === [22, 23, 27]).toBe(false);

    const nums1 = [1, 2, 3];
    const nums2 = [1, 2, 3];
    expect(nums1 === nums2).toBe(false);

    const person = {
      son: {
        age: 9,
      },
    };

    const boy = person.son;
    boy.age = 20;
    expect(person.son.age).toBe(20);
    expect(person.son === boy).toBe(true);
    expect(person.son === { age: 9 }).toBe(false);
    expect(person.son === { age: 20 }).toBe(false);

    /*
    아래의 테스트 코드들은 선뜻 받아들이기 힘들 수 있습니다.
      const nums1 = [1, 2, 3];
      const nums2 = [1, 2, 3];
      expect(nums1 === nums2).toBe(FILL_ME_IN);
    배열 nums1과 배열 num2에는 동일한 데이터 [1, 2, 3]이 들어있는 게 분명해 보이는데, 이 둘은 같지가 않습니다.
    사실 변수 num1와 num2는 배열이 아닙니다. 
    참조 타입의 변수에는 (데이터에 대한) 주소만이 저장된다는 것을 떠올려 봅시다.

    정확히 말해서 변수 num1은 데이터 [1, 2, 3]이 저장되어 있는 메모리 공간(heap)을 가리키는 주소를 담고 있습니다.
    따라서 위의 코드는 각각 다음의 의미를 가지고 있습니다.
      const nums1 = [1, 2, 3]; // [1, 2, 3]이 heap에 저장되고, 이 위치의 주소가 변수 num1에 저장된다.
      const nums2 = [1, 2, 3]; // [1, 2, 3]이 heap에 저장되고, 이 위치의 주소가 변수 num2에 저장된다.
    이제 heap에는 두 개의 [1, 2, 3]이 저장되어 있고, 각각에 대한 주소가 변수 num1, num2에 저장되어 있습니다.
    이게 비효율적으로 보일수도 있습니다. 굳이 같은 데이터를 왜 한번 더 저장하는 지 이해하기란 쉽지 않습니다.

    하지만 [1, 2, 3]이 아니라 상당히 큰 데이터(예. length가 100,000인 배열)를 가지고 다시 생각해 봅시다.
      const nums1 = [10, 2, 71, ..., 987]; // 길이 100,000개인 배열
      const nums2 = [10, 2, 71, ..., 987]; // 길이 100,000개인 배열
    이 두 배열이 서로 같아서 두 번 저장할 필요가 없다고 말하려면, 일단 두 배열이 같은지 확인해야 합니다. 
    이런 작업을 Object 자료형을 쓸 때마다 한다고 가정해보면, 이것이 얼마나 비효율적인지를 금방 알 수 있습니다.

    이제 아래와 같이 정리할 수 있습니다. 반드시 기억하시기 바랍니다.
    Object 자료형은 데이터는 heap에 저장되고, 변수에 할당을 할 경우 변수에는 주소가 저장된다.
      1) [1, 2, 3]; // [1, 2, 3]이라는 데이터가 heap에 저장되지만 변수 할당이 되지 않아 주소는 어디에도 저장되지 않는다.
      2) const num1 = [1, 2, 3]; // // [1, 2, 3]이라는 데이터가 heap에 저장되고, 그 주소가 변수 num1에 저장된다.
      3) const num2 = [1, 2, 3]; // // [1, 2, 3]이라는 데이터가 heap에 저장되고, 그 주소가 변수 num2에 저장된다.
    1), 2), 3)에서 말하는 주소는 전부 다른 주소입니다. 

    아래의 객체 간 비교도 동일한 논리로 이해하시면 됩니다.
      expect(person.son === { age: 20 }).toBe(FILL_ME_IN);

    다음 문제를 해결해 보시기 바랍니다.
      const num1 = [1, 2, 3]; // [1, 2, 3]이 heap에 저장되고, 그 주소가 변수 num1에 저장된다.
      const num2 = num1; // 변수 num1에 저장된 주소가 변수 num2에 저장된다. 
      // 두 변수 num1, num2는 같은 주소를 저장하고 있습니다. 아래 결과는 어떻게 될까요?
      expect(num1 === num2).toBe(FILL_ME_IN);
    */
  });
});
