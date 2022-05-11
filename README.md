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
>   "할 일 제목2": false,
> }
> ```
