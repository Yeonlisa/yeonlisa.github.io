## Chatterbox client

---

### RESTFUL API

> #### API: HTTP 요청으로 원격 서버에 요청(RPC: Remote procedure call)할 수 있도록 외부로 노출된 추상화된 인터페이스

> #### REST: API 디자인에 있어서 HTTP 프로토콜을 의도에 맞게 사용하도록 정의된 아키텍쳐 스타일
>
> - URI는 정보의 자원을 표현해야 한다
> - 자원에 대한 행위는 HTTP Method로 표현해야 한다

---

### HTTP RESPONSE STATUS CODES

> #### 200 요청성공
>
> #### 304 요청에 대한 응답이 수정되지 않음(Cache)
>
> #### 403 컨텐츠에 접근할 권한 없음
>
> #### 404 요청받은 리소스를 사용할 수 없음
>
> #### 500 서버가 처리할 수 없는 요청

---

### REST AND HTTP VERBS

> #### GET /api/users 모든 사용자를 조회
>
> #### POST /api/users 새 사용자를 리스트에 추가
>
> #### PUT /api/users/{username} 특정 사용자의 정보를 갱시
>
> #### DELETE /api/users/{username} 특정 사용자의 정보를 삭제
>
> #### GET /api/users/{username} 특정 사용자의 정보를 조회

---

### npm autofetch

> #### `$ npm install autofetch`
>
> #### https://www.npmjs.com/package/autofetch

---

### XSS방어 기법

#### 방지 하는방법

> - ##### POST로 글을 넘길 때 악성스크립트를 제거하는 로직을 짜고 서버자체내에서도 그걸 방지하는 로직을 짜면 됩니다.(xss방지 라이브러리를 사용한다.)
>
> - ##### 정규표현식 사용
>
> - ##### XSS공격을 방지하는 7계명
>
> ##### 1. 허용된 위치가 아닌 곳, 신뢰할 수 없는 데이터는 못들어가게 하자
>
> ##### 2. 신뢰할 수 없는 데이터는 무조건 검증한다.
>
> ##### 3. html 속성에 신뢰할 수 없는 데이터가 못들어가게 한다.
>
> ##### 4. 자바스크립트에 신뢰할 수 없는 값이 없도록 한다.
>
> ##### 5. CSS의 모든 신뢰할 수 없는 값에 대해 검증하여야 한다.
>
> ##### 6. URL파라미터에서 신뢰할 수 있는지 다시 검증한다.
>
> ##### 7. html 코드 전체적으로 한번 더 검증하여라.
