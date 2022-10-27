/**
 * DOM ( Document Object Model )
 *
 * JavaScript가 탄생하면서 같이 등장
 *  - HTML 문서와 상호작용이 가능하게 되었다.
 *  - 초창기엔 접근 가능한 태그가 많지 않았다.
 * 점차 발전하여 HTML 문서를 직접 수정까지도 가능하게 되었다.
 *
 * DOM Tree 순회는 PreOrder로 이루어진다.
 * 따라서 순서대로 List1, List2, List3에 해당하는 li가 탐색 된다.
 */

// // DOM 선택
/**
 * getElementById
 *
 * DOM Tree에서 요소 노드를 id로 찾는다.
 * 제일 먼저 찾은 요소 하나를 반환한다.
 */

/**
 * getElementsByClassName
 *
 * DOM Tree에서 요소 노드를 class로 찾는다.
 * 일치하는 모든 요소를 반환한다.
 */

/**
 * getElementsByTagName
 *
 * DOM Tree에서 요소 노드를 태그 이름으로 찾는다.
 * 일치하는 모든 요소를 반환한다.
 */

/**
 * querySelector
 *
 * DOM Tree에서 요소 노드를 CSS Selector 문법으로 찾는다.
 * 제일 먼저 찾은 요소 하나를 반환한다.
 */

/**
 * querySelector
 *
 * DOM Tree에서 요소 노드를 CSS Selector 문법으로 찾는다.
 * 일치하는 모든 요소 반환.
 */

/**
 * window.<id>
 *
 * id가 있는 요소는 window 객체를 통해 찾을 수 있다.
 * 여러개라면 리스트로 반환한다.
 */

// // DOM 탐색
/**
 * parentNode
 *
 * 선택한 요소 노드의 부모 노드를 불러온다.
 * document의 부모 노드는 null이다.
 */

/**
 * firstElementNode
 *
 * 선택한 요소 노드의 자식 요소 노드 중 첫 번째를 불러온다.
 * 없을 경우 null을 반환한다.
 */

/**
 * children
 *
 * 선택한 요소 노드의 자식 요소 노드를 불러온다.
 * 없을 경우 빈 배열을 반환한다.
 */

/**
 * nextElementSibling
 *
 * 선택한 요소 노드의 다음 형제 요소 노드를 불러온다.
 * 없을 경우 null을 반환한다.
 */

/**
 * previousElementSibling
 *
 * 선택한 요소 노드의 이전 형제 요소 노드를 불러온다.
 * 없을 경우 null을 반환한다.
 */

// // DOM 조작
/**
 * class 접근
 *
 * 선택한 요소 노드에서 className과 classList로 요소의 class 속성을 불러오고 변경할 수 있다.
 */

/**
 * hasAttribute
 *
 * 선택한 요소 노드에서 속성을 가지고 있는지 확인 할 수 있다.
 */

/**
 * getAttribute
 *
 * 선택한 요소 노드에서 속성의 값을 반환한다. 없다면 null을 반환한다.
 */

/**
 * setAttribute
 *
 * 선택한 요소 노드에서 속성을 정의한다.
 */

/**
 * removeAttribute
 *
 * 선택한 요소 노드에서 속성을 제거한다.
 */

/**
 * textContent
 *
 * 선택한 요소 노드에서 텍스트 노드에 접근, 변경할 수 있다.
 */

/**
 * innerHTML
 *
 * 선택한 요소 노드 내부 HTML을 수정한다. XSS 위험이 있다.
 */

/**
 * createElement
 *
 * 요소 노드를 생성할 수 있다.
 */

/**
 * appendChild
 *
 * 선택한 요소 노드 마지막 자식 요소로 추가한다.
 */

/**
 * removeChild
 *
 * 선택한 요소 노드 자식 노드 중 해당하는 요소를 제거한다.
 */
