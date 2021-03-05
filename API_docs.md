# chatterbox-server API docs

## describe your API server
### Base URL

- 클라이언트가 서버의 API를 활용할 수 있게 api server에 대한 문서를 작성 해주세요.
- ex)
- http://localhost:3000

| Method | URL               | Body                                            | response                                             |
| ------ | ----------------- | ----------------------------------------------- | ---------------------------------------------------- |
| get    | /classes/messages | null                                            | `{results:[]}`                                       |
| post   | /classes/messages | `{username:'codestates',message:'hello world'}` | `{id:1,username:'codestates',message:'hello world'}` |
<br>

### 메세지 조회 (GET 요청)

- HTTP Method: GET
- URL: {baseURL}/messages
- Response: JSON, 메시지 객체가 담긴 배열

```js
  {
  results: [
    { "id": number, "username": string, "text": string, "roomname": string},
    ...
  ]
}
```

<br>

### 메세지 전송 (POST 요청)

- HTTP Method: POST
- URL: {baseURL}/messages
- Body: application/json
- Response: application/json

```js
  {
    "username": string,
  "text": string,
  "roomname": string,
  }
}
```

<br>

| Method | URL       | Body                                                                                   | response                                                                                    |
| ------ | --------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| get    | /messages | null                                                                                   | `{results:[]}`                                                                              |
| post   | /messages | `{username:'codestates',text:'hello world',data:'xxxx.xx.xx',roomname:'코드스테이츠'}` | `{id:1,username:'codestates',text:'hello world',data:'xxxx.xx.xx',roomname:'코드스테이츠'}` |
