/**
 * 쿠키 추가하기
 *
 * document.cookie = 'language=javascript'
 */

/**
 * 쿠키 읽어오기
 *
 * 각 쿠키는 ;로 구분되어있어
 * 불러온 후 split 등으로 쪼개서 써야 함.
 */

/**
 * 쿠키 유효기간 넣기
 * expire의 경우 GMT string을 넣어야함
 * GMT 기준이기 때문에 이 쿠키는 한국 시간 기준으로
 * 2021년 8월 18일 11시 13분 37초까지 유효
 * 유효기간이 없으면 브라우저를 닫을 때 쿠키가 삭제됩니다.
 *
 * document.cookie = 'user=han; expires=Wed, 18 Aug 2021 02:13:37 GMT'
 * document.cookie = `user=kim; expires=${data.toGMTString()}`
 * document.cookie = `user=harry; max-age=60`
 */

/**
 * Local Storage
 *
 * key, value 기반으로 Local에 데이터를 저장할 수 있습니다.
 * 도메인 기반으로 Storage가 생성이 됩니다.
 *   도메인만 같다면, 여러탭 내에서 같은 Storage가 공유됨.
 * 직접 삭제하거나 Storage를 날리지 않는 한 삭제되지 않습니다.
 */

/**
 * window.localStorage.name = 'han'
 * window.localStorage['name'] = 'han'
 * window.localStorage.setItem('name', 'han')
 *
 * setItem을 이용해 사용하는 것이 권장됩니다. (제일 안전함)
 *   property수정하는 식으로 하면 length, toString과 같은 내장 함수들을 덮어 씌울 수 있기 때문.
 */

// 저장
localStorage.setItem("name", "han");

// 불러오기
const storeName = localStorage.getItem("name");

// 삭제하기
localStorage.removeItem("name");

// 전체 삭제하기
localStorage.clear();

// JSON 활용
const user = {
  name: "han",
  position: "junior",
};

localStorage.setItem("user", JSON.stringify(user));

const storedName = JSON.parse(localStorage.getItem("name"));

/**
 * Session Storage
 *
 * 전체적으로 Local Storage와 같다.
 * 하지만 브라우저를 닫으면 저장된 내용이 초기화 된다.
 */
