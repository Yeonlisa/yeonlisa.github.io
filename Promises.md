## Promises

---

### Promise 실행함수가 가지고 있는 두 개의 파라미터, resolve, reject는 각각 무엇을 의미하나요?

> #### resolve는 Promise가 이행이 되었을 때 resolve의 인자를 다음 .then에 파라미터로 넘겨준다.
>
> #### reject는 Promise가 거부되었을 때 reject의 인자를 다음 .catch에 파라미터로 넘겨준다.

### resolve, reject함수에는 인자를 넘길 수 있습니다. 이때 넘기는 인자는 어떻게 사용할 수 있나요?

> #### 상기 동일

### new Promise()를 통해 생성한 Promise 인스턴스에는 어떤 메소드가 존재하나요? 각각은 어떤 용도인가요?(v표시는 인스턴스,없으면 생성자)

> #### 1. .all() 메소드 : 여러 개의 프로미스들을 받고 그 중 하나라도 reject되면 에러 메시지를 띄어준다. 만약 모두 이행되면 resolve된 값 모두를 받는다.
>
> #### 2. .allSettled() 메소드 : 여러 개의 프로미스들을 받고, 그 값들의 status, value를 유사배열 형식으로 반환
>
> #### v 3. .then() 메소드 : 앞선 프로미스의 resolve의 값을 파라미터로 받는다.
>
> #### v 4. .catch() 메소드 : 앞선 프로미스의 reject의 값을 파라미터로 받는다.
>
> #### v 5. .finally() 메소드 : 앞선 프로미스의 이행여부에 상관없이 무조건 실행되는 함수.
>
> #### 6. .race() 메소드 : 여러 개의 프로미스들을 받고, 그 값의 이행여부와 상관없이 가장 먼저 실행되는 프로미스를 반환한다.

### Promise.prototype.then 메소드는 무엇을 리턴하나요?

### Promise.prototype.catch 메소드는 무엇을 리턴하나요?

### Promise의 세가지 상태는 각각 무엇이며, 어떤 의미를 가지나요?

> #### pending : promise가 실행되기 전 상태
>
> #### fulfilled : promise 연산이 성공적으로 완료된 상태
>
> #### rejected : promise 연산이 실패한 상태

### await 키워드 다음에 등장하는 함수 실행은, 어떤 타입을 리턴할 경우에만 의미가 있나요?

> #### resolve 값을 반환하는 프로미스일 경우에만 의미가 있다.

### await 키워드를 사용할 경우, 어떤 값이 리턴되나요?

> #### fullfiled일 때는 resolve 값, rejected일 때는 throw

#### question 1. sleep.bind를 왜 사용하나요? 사용하지않으면 highlight title함수가 왜 작동하지 않나요?

#### question 2. .any()메소드는 어디에 쓰이나요? 규칙성을 잘 모르겠어요.
