할 일을 조회하는 API
-------------
### https://us-central1-pilot-todo.cloudfunctions.net/todo
#### GET호출
> response
> ```
> {
>   "할 일 제목1": false,
>   "할 일 제목2": false
> }
> ```

할 일을 추가하는 API
-------------
### https://us-central1-pilot-todo.cloudfunctions.net/todo
#### POST호출
> request(body)
> ```
> {
>   "name": "할 일 제목3"
> }
> ```

> response
> ```
> {
>   "할 일 제목1": false,
>   "할 일 제목2": false,
>   "할 일 제목3": false,
> }
> ```

할 일을 수정하는 API
-------------
### https://us-central1-pilot-todo.cloudfunctions.net/todo
#### PUT호출
1. 값 수정
> request(body)
> ```
> {
>   "originalName": "할 일 제목3",
>   "changeValue": true
> }
> ```

> response
> ```
> {
>   "할 일 제목1": false,
>   "할 일 제목2": false,
>   "할 일 제목3": true,
> }
> ```

2. 할 일 제목 수정
> request(body)
> ```
> {
>   "originalName": "할 일 제목3",
>   "changeName": "3"
> }
> ```

> response
> ```
> {
>   "할 일 제목1": false,
>   "할 일 제목2": false,
>   "3": true,
> }
> ```

할 일을 삭제하는 API
-------------
### https://us-central1-pilot-todo.cloudfunctions.net/todo
#### DELETE호출
> request(body)
> ```
> {
>   "name": "할 일 제목3"
> }
> ```

> response
> ```
> {
>   "할 일 제목1": false,
>   "할 일 제목2": false,
> }
> ```
