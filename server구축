## chatterbox server

<br>

### 01. nodeJS의 기본 내장 모듈인 http 모듈을 사용하여 로컬 서버 구축

> **불러오기 및 http 서버 객체 생성하기**

```js
const http = require("http");
const port = 3000; // anything you want (except 21, 80, 443, ...)
const host = "localhost";

// 서버 객체 만들기
const server = http.createServer((req, res) => {
  // server working code is here!!
});

// 서버 띄우기
server.listen(port, host);
```

> **요청과 응답이 이루어지는 분기(route) 구분하고 요청 메소드 파악하기**

```js
// request.url 형태로 사용한다.
if (req.url === '/address here') {}

// request.method로 요청 형태 구분하기
if (req.method === 'GET'){}
if (req.method === 'OPTIONS'){}
...
```

> request, response 처리해주기

```js
  // 응답으로 돌려줄 head 속성 설정하기
  // response.writeHead(200, headers) 형태로 작성
  // response.end()로 응답해줄 데이터 넘기기
  // 아래처럼 체이닝이 가능합니다!
  res
  .writeHead(request state code, header things here)
  .end('response data here')
```

<br>

### 02. Express 프레임워크 사용해서 서버 구축하기

[Express Framework official site](https://expressjs.com/)

> **설치하고 hello world 띄우기**

설치하기 : `npm i express` or `yarn add express`

```js
const express = require("express");
const port = 3000;

// express 객체로 서버 구성해주기
const app = express();
app //
  .get("address here", (req, res) => {
    res.send("hello world");
  })
  .listen(port);
```
