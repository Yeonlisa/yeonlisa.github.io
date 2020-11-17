/**
 * ADVANCED
 * =================
 * PRE 코스의 커리큘럼은 다 완료하셨습니다! 아래의 advanced underbar methods는 '추가' 문제입니다.
 * underbar 과제 제출 시, advanced 문제는 채점되지 않습니다. 
 * advanced 문제는 별도의 힌트나 해설을 제공하지 않습니다, 레퍼런스 코드는 제공됩니다.

 * FUNCTIONS
 * =========
 * 기술 면접에서 클로져(closure) 대해서 설명하라는 질문을 받으면 어떻게 대답하시겠습니까? (실제로 물을 수 있는 질문입니다.)
 *
 *
 *
 *
 *
 *
 *
 * 복습을 위해 아래에 간단하게 정리하였습니다.
 *  정의: 함수와 함수가 선언된 어휘적 환경(lexical environment)의 조합
 *  특징: 내부 함수가 외부 함수 안에 선언된 변수에 접근할 수 있다. 내부 함수를 클로저 함수라고 부르기도 한다.
 *  응용: namespacing, privacy, function factory, partially applied functions, ...
 *
 * 클로저의 특징을 활용해 다양한 형태의 함수를 구현할 수 있습니다.
 *
 * 이를 활용하여 기존 함수가 여러 번 실행되면 결과가 변동되는 함수를, 한 번 리턴된 값만 리턴하게 하는 함수(_.once)와
 * 기존 함수가 즉시 실행 되던 함수를, 일정 시간 이후에 실행되게 하는 함수(_.delay)로 만들어봅시다.
 *
 * 이는 일반적인 프로그래밍 디자인 패턴 중 데코레이터(또는 wrapper) 패턴과 유사합니다.
 * 데코레이터 패턴은 객체를 꾸미거나(decorate) 감싸서(wrap) 기존 객체에 기능 또는 행동을 추가합니다.
 * 자세한 내용은 아래 링크를 확인하시기 바랍니다. Advanced한 내용이므로 지금 당장 읽지 않으셔도 됩니다.
 *  이론: https://refactoring.guru/design-patterns/decorator
 *  구현: https://www.dofactory.com/javascript/design-patterns/decorator
 *
 */

// _.once는 callback 함수를 한 번만 호출하는 '함수'를 리턴합니다.
// _.once가 리턴하는 함수를 여러 번 호출해도 callback 함수는 한 번 이상 호출되지 않습니다.
_.once = function (func) {
  let alreadyCalled = false;
  let result;

  return function () {
    if (!alreadyCalled) {
      result = func(...arguments);
      alreadyCalled = true;
    }
    return result;
  };
};

// _.delay는 입력으로 전달되는 시간(ms, 밀리초)후 callback 함수를 함께 전달되는 (임의의 개수의) 인자와 함께 실행합니다.
// 예를 들어, _.delay(func, 500, 'a', 'b')의 결과로 '최소' 500m가 지난 이후에 func('a', 'b')가 호출됩니다.
_.delay = function (func, wait) {
  let container = [];
  if(arguments.length > 2){
    for(let i = 2; i < arguments.length; i++){
      container.push(arguments[i]);
    }
    return setTimeout(function(){
      func.apply(null, container);
    }, wait);
  } else {
    return setTimeout(function(){
      func.apply(null, container);
    }, wait);
  }
};

// _.memoize는 callback 함수에 메모이제이션(memoization)을 적용합니다.
// 메모이제이션은 이미 해결한 문제는 다시 풀지 않는 기법입니다.
// 함수의 호출은 항상 어떤 상태로부터 시작합니다.
// 함수의 호출과 함께 전달받은 인자들 또는 함수의 실행에 영향을 미치는 전역변수들이 이 상태를 결정합니다.
// 같은 상태에서 출발한 함수는 항상 같은 결과를 리턴(해야)합니다.

// 예를 들어, 아래의 함수 add는 두 인자의 값이 바로 함수의 상태입니다.
//  function add(a, b) {
//      return a + b;
//  }
// add(3, 5)는 항상 8을 리턴하고, add(2, 7)은 항상 9를 리턴합니다.
// 함수의 상태마다 하나의 문제가 있는 셈입니다.
// 문제를 해결할 때 마다 해당 문제의 답을 기록(메모)해두고,
// 다음에 동일한 문제를 풀 상황이 오면, 앞서 기록한 답을 활용합니다.
// 이 경우, 처음 문제를 풀 때 들였던 노력(연산)이 필요 없습니다.
// 예시로 보여준 add 함수의 경우, 연산이 많이 복잡하지 않아 메모이제이션의 이점이 와닿지 않을 수 있습니다.
// _.memoize를 완성한 후에 피보나치 함수에 적용하여 비교해 보시기 바랍니다.
// 단, 재귀 함수는 함수가 할당된 변수에 메모이제이션이 적용된 함수를 재할당해야 합니다.(테스트 케이스 참고)
_.memoize = function (func) {
  let container = {};
     
    return function test(){
      if(container[JSON.stringify(arguments)] === undefined){
        container[JSON.stringify(arguments)] = func.apply(this, arguments);
        return container[JSON.stringify(arguments)];
      } else {
        return container[JSON.stringify(arguments)];
      }
    }
};

// _.throttle은 입력으로 전달되는 시간(ms, 밀리초)동안에 callback 함수를 단 한번만 실행되는 함수를 반환합니다.
// 리턴되는 함수는 구간의 길이가 입력의 크기인 임의의 구간에서 callback 함수를 한 번만 실행되어야 합니다.
// 예를 들어, _.throttle(func, 100)가 리턴하는 함수는 적어도 100ms 간격을 사이에 두고 callback 함수를 실행해야 합니다.
_.throttle = function (func, wait) {
  let flag = false;
  return function(){
    if(!flag){
      func();
      flag = true;
      setTimeout(function(){
        flag = false;
      }, wait);
    }
  }
};
