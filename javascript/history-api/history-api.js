/**
 * history-api
 *
 * 브라우저에서 페이지 로딩을 하면, 세션 히스토리라는 것을 갖습니다.
 *
 * 세션 히스토리는 페이지를 이동할 떄마다 쌓임,
 * 이를 통해 뒤로가기 시에 이전 페이지로 가거나
 * 뒤로 간 이후 다시 앞으로 가는 등의 이동이 가능.
 *
 * pushState, replaceState 두 개의 함수로 화면 이동 없이
 * 현재 url을 업데이트 할 수 있음
 *
 * pushState: 세션 히스토리에 새 url 상태를 쌓음.
 * replaceState: 세션 히스토리에 새 url을 쌓지 않고 현재 url을 대체
 *
 * hashbang으로 했던 url을 아래처럼 바꿔줄 수 있음
 * / => HomePage
 * /list => ListPage
 * /detail/1 => DetailPage
 * 일반 url 형식을 따르기 때문에 querystring도 자유롭게 붙일 수 있음
 * /list?page=2&limit=10
 */

/**
 * history.pushState
 *
 * history.pushState(state, title, url)
 * state: history.state에서 꺼내쓸 수 있는 값.
 * title: 변경될 페이지의 title을 가리키는 값인 것 같지만
 *   거의 대부분의 브라우저에서 지원하지 않음.
 *   빈 string을 넣으면 됨.
 * url: 세션 히스토리에 새로 넣을 url
 *   a태그를 클릭하거나 location.href로 url을 변경하는 것과는 다르게
 *   이 url이 변경된다고 해서 화면이 리로드 된거나 그러진 않는다.
 */

/**
 * history.replaceState
 *
 * history.replaceState(state, title, url)
 * state: ...
 * title: ...
 * url: ...
 * ex) 게시글 작성: 뒤로가기를 제한할 때 사용된다.
 */

/**
 * url routing 처리하기
 *
 * url path별 화면을 각 페이지 컴포넌트로 정의
 *
 * route 함수: path에 따라 페이지 컴포넌트 렌더링, location.pathname으로 현재 path 얻어오기
 *
 * url이 변경되는 경우, route 함수 호출
 */

/**
 * 컴포넌트 구조
 *
 * App
 * - HomePage
 * - ProductPage
 *   - ProductOptions
 *   - Cart
 */
