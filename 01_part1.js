'use strict';

/**
 * underbar 스프린트에 오신 것을 환영합니다!
 *
 * 여러분은 자바스크립트를 보다 효율적으로 사용하기 위해서 만들어진 underscore.js 라이브러리를
 * 비슷하게 구현하면서 자바스크립트의 문법을 더욱 깊게 이해하는 시간을 가지게 됩니다.
 */

// _.identity는 전달인자(argument)가 무엇이든, 그대로 리턴합니다.
// 이 함수는 underbar의 기능 구현 및 테스트를 위해 재사용되는 함수입니다.
_.identity = function (val) {
  return val;
};

/**
 * COLLECTIONS
 * ===========
 * collection은 영어로 '모음, 무리'라는 뜻입니다. 컴퓨터 과학에서는 '데이터(data, 자료)의 모음'으로 부를 수 있겠죠.
 * 우리가 배웠던 collection의 종류는 무엇이 있을까요? 다양한 종류가 있지만 배열과 객체가 대표적입니다.
 *
 * 배열은 데이터들(요소, element)을 '순서대로' 모은 자료 구조입니다. 요소의 위치를 통해 데이터에 접근할 수 있습니다.
 * 객체는 서로 관련있는 데이터들(속성, property)을 'key-value' 형태로 '순서 없이' 모은 자료 구조입니다. 속성에 부여된 키(key)를 통해 데이터에 접근할 수 있습니다.
 *
 * collection의 각 데이터를 다루는 것은 매우 흔한 작업 중에 하나입니다.
 * 예를 들어, 아래의 작업들을 생각해 볼 수 있습니다.
 *  배열의 요소 중 가장 큰 값을 찾는 것
 *  배열의 모든 요소의 합을 구하는 것
 *  객체에 특정 속성의 이름(key)이 존재하는지 확인하는 것
 *
 * 각 작업들은 collection의 각 데이터를 가지고 비슷한 처리를 합니다.
 *  배열의 요소 중 가장 큰 값을 찾는 것 => 현재 데이터가 가장 큰 값인지 확인
 *  배열의 모든 요소의 합을 구하는 것 => 현재 데이터를 누적값에 더하기
 *  객체에 특정 속성의 이름(key)이 존재하는지 확인하는 것 => 현재 key가 원하는 값인지 확인하기
 *
 * 이처럼 비슷한 처리가 반복되기 때문에 이를 반복(iteration) 작업이라고 부를 수 있습니다.
 * 자바스크립트는 이러한 반복(iteration) 작업을 위한 여러 수단들을 제공합니다.
 * 반복문(for, for of, for in, while)과 반복을 위한 내장 메소드(arr.map, arr.filter)들이 대표적입니다.
 * 사실 반복문의 제어 변수로 주로 사용하는 변수 i는 iteration의 앞 글자 i를 의미합니다.
 * 아래의 반복문은 총 console.log가 총 세 번 반복됩니다.
 * 이때, console.log와 같이 반복되는 작업을 iteratee(반복되는 것)라고 부를 수 있습니다.
 *  for (let i = 0; i < 3; i++) {
 *    console.log(i);
 *  }
 *
 * 이 반복문은 아래와 같이 해석됩니다.
 *  let i = 0;
 *  { // 0번째 반복
 *    console.log(0); // 변수 i가 0으로 치환됨
 *    i++;   // i는 1이 됨
 *  }
 *
 *  1 < 3 이므로 다음 반복 작업을 실행
 *  { // 1번째 반복
 *    console.log(1); // 변수 i가 1로 치환됨
 *    i++;   // i는 2이 됨
 *  }
 *
 *  2 < 3 이므로 다음 반복 작업을 실행
 *  { // 2번째 반복
 *    console.log(2); // 변수 i가 2로 치환됨
 *    i++;   // i는 3이 됨
 *  }
 *
 *  3 < 3 이 아니므로 반복 작업 종료
 *
 *
 *
 *
 * 이번 스프린트에서는 collection을 다루는 여러 함수를 직접 구현해 봅니다.
 *
 * IMPORTANT NOTE!
 * ===========
 * 아래에 _.slice가 이미 구현되어 있습니다. 이 함수를 가이드 삼아, 앞으로 나올 함수들을 구현해 보세요.
 * 이번 스프린트에서 아래 예외를 제외하고 배열(Array), 집합(Set), 맵(Map)의 기본 메소드 사용은 금지되어 있습니다.
 *  사용 가능한 내장 메소드: Array.prototype 의 'pop', 'push', 'shift', 'sort'
 * 단, 새로운 함수를 구현할 때 이전에 구현한 함수를 활용해도 됩니다. (이미 해결한 문제를 또 해결할 필요는 없겠죠?)
 * 사전에 이미 완료된 과제의 일부분을 만나게 될 경우, 반드시 코드를 잘 읽어 보고 이해하고 넘어가시기 바랍니다.
 * 이러한 과정을 지나친다면, 앞으로 구현하게 될 함수가 훨씬 더 어렵게 느껴질 겁니다.
 */

// _.slice는 배열의 start 인덱스부터 end 인덱스 이전까지의 요소를 shallow copy하여 새로운 배열을 리턴합니다.
_.slice = function (arr, start, end) {
  // 변수를 선언할 경우, 아래와 같이 콤마(,)를 이용해 선언할 수 있습니다.
  // 이때, 콤마로 연결된 변수들은 모두 동일한 선언 키워드(let, const)가 적용됩니다.
  // 이런 코딩 스타일도 가능하다는 것을 보여드리기 위한 예시일 뿐, 사용을 권장하는 것은 아닙니다.
  // 오픈 소스에 기여하든, 회사 내에서 개발을 하든 본인이 속한 조직의 코딩 스타일, 코딩 컨벤션을 따르면 됩니다.
  // 그리고 아래와 같은 코딩 스타일을 봐도 당황하지 않고 해석할 수 있으면 됩니다.
  let _start = start || 0, // `start`가 undefined인 경우, slice는 0부터 동작합니다.
    _end = end;

  // 입력받은 인덱스가 음수일 경우, 마지막 인덱스부터 매칭한다. (예. -1 => arr.length - 1, -2 => arr.length - 2)
  // 입력받은 인덱스는 0 이상이어야 한다.
  if (start < 0) _start = Math.max(0, arr.length + start);
  if (end < 0) _end = Math.max(0, arr.length + end);

  // `end`가 생략될 경우(undefined), slice는 마지막 인덱스까지 동작합니다.
  // `end`가 배열의 범위를 벗어날 경우, slice는 마지막 인덱스까지 동작합니다.
  if (_end === undefined || _end > arr.length) _end = arr.length;

  let result = [];
  // `start`가 배열의 범위를 벗어날 경우, 빈 배열을 리턴합니다.
  for (let i = _start; i < _end; i++) {
    result.push(arr[i]);
  }

  return result;
};

// _.take는 배열의 처음 n개의 element를 담은 새로운 배열을 리턴합니다.
// n이 undefined이거나 음수인 경우, 빈 배열을 리턴합니다.
// n이 배열의 길이를 벗어날 경우, 전체 배열을 shallow copy한 새로운 배열을 리턴합니다.
_.take = function (arr, n) {
  let a =[];
  if( n === undefined || n < 0 ) {
    return a;
  } else if( n > arr.length) {
    return _.slice(arr, 0, arr.length);
  } else {
    return _.slice(arr, 0, n);
  }
};

// _.drop는 _.take와는 반대로, 처음 n개의 element를 제외한 새로운 배열을 리턴합니다.
// n이 undefined이거나 음수인 경우, 전체 배열을 shallow copy한 새로운 배열을 리턴합니다.
// n이 배열의 길이를 벗어날 경우, 빈 배열을 리턴합니다.
_.drop = function (arr, n) {
  let a= [];
  if( n === undefined || n < 0 ) {
    return _.slice(arr, 0, n);
  } else if ( n > arr.length ) {
    return a;
  } else {
    return _.slice(arr, n, arr.length);
  }
};

// _.last는 배열의 마지막 n개의 element를 담은 새로운 배열을 리턴합니다.
// n이 undefined이거나 음수인 경우, 배열의 마지막 요소만을 담은 배열을 리턴합니다.
// n이 배열의 길이를 벗어날 경우, 전체 배열을 shallow copy한 새로운 배열을 리턴합니다.
// _.take와 _.drop 중 일부 또는 전부를 활용할 수 있습니다.
_.last = function (arr, n) {
  let a = _.slice(arr, 0, arr.length);
  if( n === undefined || n < 0 ) {
    return _.slice(arr, arr.length-1, n)
  } else if( n > arr.length ) {
    return a;
  } else {
    return _.slice(arr, arr.length-n , arr.length)
  }
};

// _.each는 collection의 각 데이터에 반복적인 작업을 수행합니다.
//  1. collection(배열 혹은 객체)과 함수 iteratee(반복되는 작업)를 인자로 전달받아 (iteratee는 함수의 인자로 전달되는 함수이므로 callback 함수)
//  2. collection의 데이터(element 또는 property)를 순회하면서
//  3. iteratee에 각 데이터를 인자로 전달하여 실행합니다.

// iteratee에는 테스트 케이스에 따라서 다양한 함수가 할당됩니다.
// Array.prototype.forEach 메소드를 사용할 때, 다양한 형태의 callback 함수를 사용할 수 있었던 걸 기억하시나요?
// 우리가 만드는 _.each 함수도 그렇게 잘 작동하게 하기 위한 방법을 고민해 봅시다.

/*
 * SpecRunner를 열고 each의 네 번째 테스트 케이스를 눌러 보시기 바랍니다.
 * 이 테스트 케이스의 collection은 letters이고,
 * iteratee는 익명함수 function(letter) { iterations.push(letter); }); 입니다.
 *
 *  const letters = ['a', 'b', 'c'];
 *  const iterations = [];
 *  _.each(letters, function(letter) {
 *   iterations.push(letter);
 *  });
 *  expect(iterations).to.eql(['a', 'b', 'c']);
 *
 * iteratee는 차례대로 데이터(element 또는 value), 접근자(index 또는 key), collection을 다룰 수 있어야 합니다.
 *  배열 arr을 입력받을 경우, iteratee(ele, idx, arr)
 *  객체 obj를 입력받을 경우, iteratee(val, key, obj)
 * 이처럼 collection의 모든 정보가 iteratee의 인자로 잘 전달되어야 모든 경우를 다룰 수 있습니다.
 * 실제로 전달되는 callback 함수는 collection의 모든 정보가 필요하지 않을 수도 있습니다.
 */

// _.each는 명시적으로 어떤 값을 리턴하지 않습니다.
_.each = function (collection, iteratee) {
  if(Array.isArray(collection)===true) {
    for(let i = 0; i < collection.length; i++) {
      iteratee(collection[i], i ,collection);
    }
  } else {
    for(let i in collection) {
      iteratee(collection[i], i ,collection);
    }
  }
};

// _.indexOf는 target으로 전달되는 값이 arr의 요소인 경우, 배열에서의 위치(index)를 리턴합니다.
// 그렇지 않은 경우, -1을 리턴합니다.
// target이 중복해서 존재하는 경우, 가장 낮은 index를 리턴합니다.
_.indexOf = function (arr, target) {
  // 배열의 모든 요소에 접근하려면, 순회 알고리즘(iteration algorithm)을 구현해야 합니다.
  // 반복문을 사용하는 것이 가장 일반적이지만, 지금부터는 이미 구현한 _.each 함수를 활용하여야 합니다.
  // 아래 _.indexOf의 구현을 참고하시기 바랍니다.
  let result = -1;

  _.each(arr, function (item, index) {
    if (item === target && result === -1) {
      result = index;
    }
  });

  return result;
};

// _.filter는 test 함수를 통과하는 모든 요소를 담은 새로운 배열을 리턴합니다.
// test(element)의 결과(return 값)가 truthy일 경우, 통과입니다.
// test 함수는 각 요소에 반복 적용됩니다.
_.filter = function (arr, test) {
    let result = [];
    _.each(arr, function(element) {
    if(test(element)) {
      result.push(element);
    }
  });
    return result;
 };

// _.reject는 _.filter와 정반대로 test 함수를 통과하지 않는 모든 요소를 담은 새로운 배열을 리턴합니다.
_.reject = function (arr, test) {
  let result = [];
  _.each(arr, function(element) {
  if(!test(element)) {
    result.push(element);
  }
});
  return result;
}; // TIP: 위에서 구현한 `filter` 함수를 사용해서 `reject` 함수를 구현해 보세요.

// _.uniq는 주어진 배열의 요소가 중복되지 않도록 새로운 배열을 리턴합니다.
// 중복 여부의 판단은 엄격한 동치 연산(strict equality, ===)을 사용해야 합니다.
// 입력으로 전달되는 배열의 요소는 모두 primitive value라고 가정합니다.
_.uniq = function (arr) {
  let array = [];
  _.each(arr, function(item,index) {
    if( _.indexOf(array,item) === -1) {
      array.push(arr[index]);
   }
 });
  return array;
};

// _.map은 iteratee(반복되는 작업)를 배열의 각 요소에 적용(apply)한 결과를 담은 새로운 배열을 리턴합니다.
// 함수의 이름에서 드러나듯이 _.map은 배열의 각 요소를 다른 것(iteratee의 결과)으로 매핑(mapping)합니다.
_.map = function (arr, iteratee) {
  let result =[];
  _.each(arr, function(element) {
    result.push(iteratee(element));
  });
  return result;
};  // _.map 함수는 매우 자주 사용됩니다.
    // _.each 함수와 비슷하게 동작하지만, 각 요소에 iteratee를 적용한 결과를 리턴합니다.

// _.pluck은
//  1. 객체 또는 배열을 요소로 갖는 배열과 각 요소에서 찾고자 하는 key 또는 index를 입력받아
//  2. 각 요소의 해당 값 또는 요소만을 추출하여 새로운 배열에 저장하고,
//  3. 최종적으로 새로운 배열을 리턴합니다.
// 예를 들어, 각 개인의 정보를 담은 객체를 요소로 갖는 배열을 통해서, 모든 개인의 나이만으로 구성된 별도의 배열을 만들 수 있습니다.
// 최종적으로 리턴되는 새로운 배열의 길이는 입력으로 전달되는 배열의 길이와 같아야 합니다.
// 따라서 찾고자 하는 key 또는 index를 가지고 있지 않은 요소의 경우, 추출 결과는 undefined 입니다.
_.pluck = function (arr, keyOrIdx) {
  return _.map(arr, function(item) {
   return item[keyOrIdx];
  });
};
  // _.pluck을 _.each를 사용해 구현하면 아래와 같습니다.
  // let result = [];
  // _.each(arr, function (item) {
  //   result.push(item[keyOrIdx]);
  // });
  // return result;
  // _.pluck은 _.map을 사용해 구현하시기 바랍니다.

// _.reduce는
//  1. 배열을 순회하며 각 요소에 iteratee 함수를 적용하고,
//  2. 그 결과값을 계속해서 누적(accumulate)합니다.
//  3. 최종적으로 누적된 결과값을 리턴합니다.
// 예를 들어, 배열 [1, 2, 3, 4]를 전부 더해서 10이라는 하나의 값을 리턴합니다.
// 각 요소가 처리될 때마다 누적되는 값은 차례대로 1, 1+2, 1+2+3, 1+2+3+4 입니다.
// 이처럼 _.reduce는 배열이라는 다수의 정보가 하나의 값으로 축소(응축, 환원, reduction)되기 때문에 reduce라는 이름이 붙게 된 것입니다.

// _.reduce는 위에서 구현한 많은 함수처럼, 입력으로 배열과 각 요소에 반복할 작업(iteratee)을 전달받습니다.
// iteratee에 대해서 복습하면 아래와 같습니다. (일반적으로 객체를 reduce 하지는 않으므로, 배열 부분만 복습합니다.)
// iteratee는 차례대로 데이터(element 또는 value), 접근자(index 또는 key), collection을 다룰 수 있어야 합니다.
//  배열 arr을 입력받을 경우, iteratee(ele, idx, arr)

// _.reduce는 반복해서 값을 누적하므로 이 누적되는 값을 관리해야 합니다.
// 따라서 _.reduce의 iteratee는 인자가 하나 더 추가되어 최종 형태는 아래와 같습니다.
//  iteratee(acc, ele, idx, arr)
// 누적되는 값은 보통 tally, accumulator(앞글자만 따서 acc로 표기하기도 함)로 표현하거나
// 목적을 더 분명하게 하기 위해 sum(합), prod(곱), total 등으로 표현하기도 합니다.
// 이때, acc는 '이전 요소까지'의 반복 작업의 결과로 누적된 값입니다.
// ele는 잘 아시다시피 반복 작업을 수행할(아직 수행하지 않은) 현재의 요소입니다.

// 여기까지 내용을 정리하면 다음과 같습니다.
//  _.reduce(arr, iteratee)
//  iteratee(acc, ele, idx, arr)
// 그런데 사실 누적값에 대해서 빠뜨린 게 하나 있습니다.
// 바로 '누적값은 어디서부터 시작하는가'라는 의문에 대한 대답을 하지 않았습니다.
// 이를 해결하는 방법은 초기 값을 직접 설정하거나 자동으로 설정하는 것입니다.
// _.reduce는 세 번째 인자로 초기 값을 전달받을 수 있습니다.
// 이 세 번째 인자로 초기 값이 전달되는 경우, 그 값을 누적값의 기초(acc)로 하여 배열의 '첫 번째' 요소부터 반복 작업이 수행됩니다.
// 반면 초기 값이 전달되지 않은 경우, 배열의 첫 번째 요소를 누적값의 출발로 하여 배열의 '두 번째' 요소부터 반복 작업이 수행됩니다.

// 따라서 최종적인 형태는 아래와 같습니다.
//  _.reduce(arr, iteratee, initVal)
//  iteratee(acc, ele, idx, arr)

// 아래 예제를 참고하시기 바랍니다.
//  const numbers = [1,2,3];
//  const sum = _.reduce(numbers, function(total, number){
//    return total + number;
//  }); // 초기 값이 주어지지 않았으므로, 초기 값은 배열의 첫 요소인 1입니다. 두 번째 요소부터 반복 작업이 시작됩니다.
//      // 1 + 2 = 3; (첫 작업의 결과가 누적되어 다음 작업으로 전달됩니다.)
//      // 3 + 3 = 6; (마지막 작업이므로 최종적으로 6이 리턴됩니다.)
//
//  const identity = _.reduce([3, 5], function(total, number){
//    return total + number * number;
//  }, 2); // 초기 값이 2로 주어졌습니다. 첫 번째 요소부터 반복 작업이 시작됩니다.
//         // 2 + 3 * 3 = 11; (첫 작업의 결과가 누적되어 다음 작업으로 전달됩니다.)
//         // 11 + 5 * 5 = 36; (마지막 작업이므로 최종적으로 36이 리턴됩니다.)
_.reduce = function (arr, iteratee, initVal) {
  let result = arguments.length > 2;
  _.each(arr, function(item,index) {
    if(!result) {
       initVal = item;
       result++;
       return;
    }
    initVal = iteratee (initVal,item,index,arr);
    });
    return initVal;
};
