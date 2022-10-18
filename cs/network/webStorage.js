// 쿠키 관리는 String 으로 한다. ( 불편하다. )
document.cookie = "key=value; key2=value2";

// 데이터를 저장한다.
localStorage.setItem("name", "김재현");
console.log(localStorage.getItem("name"));

// 데이터를 지운다.
localStorage.removeItem("name");

// 데이터를 전부 지운다.
localStorage.clear();

// 데이터를 저장한다.
sessionStorage.setItem("name", "김재현");
console.log(sessionStorage.getItem("name"));

// 데이터를 지운다.
sessionStorage.remove("name");

// 데이터를 전부 지운다.
sessionStorage.clear();

/**
 * IndexedDB
 * Transactional한 로컬 데이터베이스
 * 새로운 웹 브라우저 표준 인터페이스
 */
