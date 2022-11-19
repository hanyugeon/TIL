/**
 * fetch-api
 *
 * 비동기 http 요청을 좀 더 쓰기 편하게 해주는 API
 * XMLHTTPRequest을 대체
 * Promise 기반으로 동작.
 *
 * HTTP error가 발생하더라도 reject 되지 않습니다.
 * ( 네트워크 에러나 요청이 완료되지 못한 경우에만 reject )
 *
 * 서버 요청 중 에러가 생겼을 경우에도 then으로 떨어지므로,
 * response의 status code나 ok를 체크해주는 것이 좋다.
 */
