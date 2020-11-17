'use strict';

// _.includes는 배열이 주어진 값을 포함하는지 확인합니다.
// 일치 여부의 판단은 엄격한 동치 연산(strict equality, ===)을 사용해야 합니다.
// 입력으로 전달되는 배열의 요소는 모두 primitive value라고 가정합니다.
_.includes = function (arr, target) {
  let result = false;
  _.each(arr, function(item) {
    if(item === target) {
      result = true;
    }
  });
  return result;
};

// _.every는 배열의 모든 요소가 test 함수(iteratee)를 통과하면 true를, 그렇지 않은 경우 false를 리턴합니다.
// test(element)의 결과(return 값)가 truthy일 경우, 통과입니다.
// _.each를 반드시 사용할 필요는 없습니다.
// iteratee가 주어지지 않을 경우, 모든 요소가 truthy인지 확인합니다.
// 빈 배열을 입력받은 경우, true를 리턴해야 합니다. (공허하게 참, vacantly true)
_.every = function (arr, iteratee) {
  let result = true
  if(!iteratee){
    iteratee = _.identity;
  }
  _.each(arr,function(element){
    if(!iteratee(element)){
      result = false;
    }
  });
  return result;
};

// _.some은 배열의 요소 중 하나라도 test 함수(iteratee)를 통과하면 true를, 그렇지 않은 경우 false를 리턴합니다.
// 빈 배열을 입력받은 경우, false를 리턴해야 합니다.
// 그 외 조건은 앞서 _.every와 동일합니다.
_.some = function (arr, iteratee) {
  return !_.every(arr, function(element){
    if(typeof iteratee !== 'function'){
      iteratee = _.identity;
    }
    return !iteratee(element);
  });
};

// _.extend는 여러 개의 객체를 입력받아, 순서대로 객체를 결합합니다.
// 첫 번째 입력인 객체를 기준으로 다음 순서의 객체들의 속성을 덮어씁니다.
// 최종적으로 (속성이 추가된) 첫 번째 객체를 리턴합니다. (새로운 객체 X)
// 아래 예제를 참고하시기 바랍니다.
//  let obj1 = { key1: 'something' };
//  _.extend(
//    obj1,
//    {
//      key2: 'something new',
//      key3: 'something else new',
//    },
//    {
//      blah: 'even more stuff',
//      key3: 'overwrite"
//    }
//  );
// console.log(Object.keys(obj1)) // --> key1, key2, key3, blah
// console.log(obj1.key3) // --> 'overwrite"

// _.extend로 전달되는 객체의 수는 정해져 있지 않습니다.
// spread syntax 또는 arguments 객체를 사용해야 합니다.
// 함수의 시그니쳐(함수의 입력과 출력, 함수의 모양)를 적절하게 변형하시기 바랍니다.
// _.each를 사용해서 구현합니다.
_.extend = function (object) {
  _.each(arguments, function(element){
    for(let key in element){
      object[key] = element[key];
    }
  });
  return object;
};
// _.defaults는 _.extend와 비슷하게 동작하지만, 이미 존재하는 속성(key)을 덮어쓰지 않습니다.
_.defaults = function (object) {
  _.each(arguments, function(element){
    for(let key in element){
      if(!object.hasOwnProperty(key)) {
        object[key] = element[key];
      }
    }
  });
  return object;
};

// _.zip은 여러 개의 배열을 입력받아, 같은 index의 요소들을 묶어 배열로 만듭니다.
// 각 index 마다 하나의 배열을 만들고, 최종적으로 이 배열들을 요소로 갖는 배열을 리턴합니다.
// _.zip의 입력으로 전달되는 배열이 수는 정해져 있지 않고, 각 배열의 길이는 다를 수 있습니다.
// 최종적으로 리턴되는 배열의 각 요소의 길이는 입력으로 전달되는 배열 중 가장 '긴' 배열의 길이로 통일됩니다.
// 특정 index에 요소가 없는 경우, undefined를 사용합니다.
// 반복문(for, while)을 사용할 수 있습니다.
// _.each, _.reduce, _.pluck 중 하나 이상을 반드시 사용하여야 합니다.

// 아래 예제를 참고하시기 바랍니다.
//  const arr1 = ['a','b','c'];
//  const arr2 = [1,2];
//  const result = _.zip(arr1, arr2)
//  console.log(result); // --> [['a',1], ['b',2], ['c', undefined]]
_.zip = function () {
  let arg = [...arguments];
  let max = Math.max(..._.map(arg, element => element.length))
  let result = [];

  for(let i = 0; i < max; i++ ) {
    result.push(_.pluck(arg, i));
  }
  return result;
};

// _.zipStrict은 _.zip과 비슷하게 동작하지만,
// 최종적으로 리턴되는 배열의 각 요소의 길이는 입력으로 전달되는 배열 중 가장 '짧은' 배열의 길이로 통일됩니다.
// 그 외 조건은 앞서 _.zip과 동일합니다.
_.zipStrict = function () {
  let arg = [...arguments];
  let max = Math.min(..._.map(arg, element => element.length))
  let result = [];

  for(let i = 0; i < max; i++ ) {
    result.push(_.pluck(arg, i));
  }
  return result;
};

// _.intersection은 여러 개의 배열을 입력받아, 교집합 배열을 리턴합니다.
// 교집합 배열은 모든 배열에 공통으로 등장하는 요소들만을 요소로 갖는 배열입니다.
// 교집합 배열의 요소들은 첫 번째 입력인 배열을 기준으로 합니다.
// 교집합이 없는 경우 빈 배열을 리턴합니다.
// 아래 예제를 참고하시기 바랍니다.
//  const set1 = ['a', 'e', b', 'c'];
//  const set2 = ['c', 'd', 'e'];
//  const result = _.intersection(set1, set2);
//  console.log(result) // --> ['e', 'c']
//                      // 첫 번째 배열에 'e'가 먼저 등장
_.intersection = function () {
  return _.reduce(arguments, function(acc, cur) {
    let newArr = [];
    _.each(acc, function(element) {
      if(_.includes(cur, element)) {
        newArr.push(element);
      }
    })
    acc = newArr;
    return acc;
  })
};

// _.difference는 여러 개의 배열을 입력받아, 차집합 배열을 리턴합니다.
// 차집합 배열은 첫 번째 배열에서 차례대로 다음 배열들의 요소들을 제외한 배열입니다.
// 차집합 배열의 요소들은 첫 번째 입력인 배열을 기준으로 합니다.
// 차집합이 없는 경우 빈 배열을 리턴합니다.
// 아래 예제를 참고하시기 바랍니다.
//  const set1 = ['a', 'b', 'c'];
//  const set2 = ['b', 'c', 'd'];
//  const result = _.difference(set1, set2);
//  console.log(result) // --> ['a']
_.difference = function () {
  return _.reduce(arguments, function(acc, cur) {
    let newArr = [];
    _.each(acc, function(element) {
      if(!_.includes(cur, element)) {
        newArr.push(element);
      }
    })
    acc = newArr;
    return acc;
  })
};

// _.sortBy는 배열의 각 요소에 함수 transform을 적용하여 얻은 결과를 기준으로 정렬합니다.
// transform이 전달되지 않은 경우, 배열의 요소 값 자체에 대한 비교 연산자의 결과를 따릅니다.
// 예를 들어, number 타입간 비교는 대소 비교이고 string 타입간 비교는 사전식(lexical) 비교입니다.
// 세 번째 인자인 order는 정렬의 방향을 나타냅니다. 생략되거나 1을 입력받은 경우 오름차순, -1을 입력받은 경우 내림차순으로 정렬합니다.
// 아래 예제를 참고하시기 바랍니다.
//  const people = [
//    { id: 1, age: 27 },
//    { id: 2, age: 24 },
//    { id: 3, age: 26 },
//  ];
//  function byAge(obj) {
//    return obj.age;
//  };
//  const result = _.sortBy(people, byAge);
//  console.log(result); // --> [{ id: 2, age: 24 }, { id: 3, age: 26 }, { id: 1, age: 27 }]

// 한편, 'undefined'는 비교 연산은 가능하지만 사실 비교가 불가능한(비교의 의미가 없는) 데이터입니다.
// 아래 예제를 참고하시기 바랍니다.
//  console.log(undefined > 0); // --> false
//  console.log(undefined < 0); // --> false
//  console.log(undefined == 0); // --> false
//  console.log(undefined === 0); // --> false
//  console.log(undefined > 'hello'); // --> false
//  console.log(undefined < 'hello'); // --> false
// 이러한 이유로 정렬하려는 데이터들 중 'undefined'가 있는 경우,
//  1) 'undefined' 값을 제외(filter)하고 비교하거나
//  2) 'undefined' 값을 어떤 다른 값으로 간주하여 비교해야 합니다.
// 이번 스프린트에서는 2)번의 방식을 적용하였습니다.
// 마지막 테스트 케이스의 transform 함수(byHeightAsc)를 확인하시기 바랍니다.

// 힌트
//  1. Array.prototype.sort를 사용할 수 있습니다.
//    참고 문서: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//    예제를 통해 내장 메소드 sort의 특성을 꼭 확인하시기 바랍니다.
//  2. _.identity를 사용할 수 있습니다.

// 이번 스프린트는 정렬 자체를 다루지 않으니 스프린트 이후에 스스로 학습하시기 바랍니다.
//  학습 우선순위: bubble sort, insertion sort, quick sort, merge sort, radix sort
_.sortBy = function (arr, transform, order) {
  if (transform === undefined) transform = _.identity;
  if (order === undefined) order = 1;

  arr = [...arr];

  arr.sort((a, b) => {
    a = transform(a);
    b = transform(b);

    if (a > b) return 1 * order;
    if (a < b) return -1 * order;

    return 0;
  });
  return arr;
};

// _.shuffle은 배열 요소의 순서가 랜덤하게 변경된 새로운 배열을 리턴합니다.
// 다양한 상황(예. 비디오 또는 음악 재생의 순서를 섞을 때)에서 유용하게 쓰일 수 있습니다.
// _.shuffle의 동작을 이해하는 것이 목적이므로, 구현할 필요는 없습니다.
// 아래에 이미 구현된 코드를 이해하시고, 직접 테스트해 보시기 바랍니다.

// 직접 도전을 하고 싶은 경우, 아래 사이트에서 테스트 해볼 수 있습니다.
//  https://bost.ocks.org/mike/shuffle/compare.html
// 단, 해당 사이트의 shuffle 함수는 입력으로 전달되는 array의 요소들의 위치를 '직접' 변경해야 합니다.
_.shuffle = function (arr) {
  let arrCloned = arr.slice();
  for (let fromIdx = 0; fromIdx < arr.length; fromIdx++) {
    const toIdx = Math.floor(Math.random() * arr.length);
    // 아래 코드는 두 변수의 값을 교환합니다.
    let temp = arrCloned[fromIdx];
    arrCloned[fromIdx] = arrCloned[toIdx];
    arrCloned[toIdx] = temp;
  }
  return arrCloned;
};
