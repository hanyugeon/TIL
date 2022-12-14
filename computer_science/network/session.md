# 세션

## Session

- HTTP Session Id를 식별자로 사용자를 구분한다.
- 클라이언트는 HTTP Session Id를 쿠키 형태로 저장한다.
- 서버 자체적으로 기록하고 관리한다.

## 문제점

- 세션은 큰 문제점이 있어서 최근에 인증용도로 사용되지 않음.
- 세션은 서버에 파일로 저장된다.
  - ( 만약 사용자가 엄청 많아진다면? )
  - ( 서버가 만약 2대라면 세션은 어떻게 관리할것인가? )

### 문제에 대한 해답.

- 이제 서버와 클라이언트간 인증은 세션이 아닌 별도 토큰을 사용한다.
- 쿠키는 클아이언트 자체적인 지속적인 데이터 관리 용도로 많이 사용된다.

### 이러한 상황에서 제시된 새로운 표준.

- 웹 스토리지 -> webStorage.md 에서 이어집니다.
