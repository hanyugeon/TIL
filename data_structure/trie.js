/**
 * 트라이
 *
 * 구글과 같은 자동완성 기능은 어떻게 만들어 질것같아요?
 * 내 생각:
 * 일정 기간동안 많이 검색 된 항목을 리스트화 및 정렬 시키기
 * 정렬된 리스트를 연관된 검색어 입력시 보여주기
 *
 * 문자열을 저장하고 효율적으로 탐색하기 위한 트리 형태의 자료구조
 *
 * 검색어 자동완성, 사전 찾기 등에 사용될 수 있다.
 * 문자열을 탐색할 떄 단순하게 비교하는 것 보다 효율적으로 찾을 수 있다.
 * L이 문자열의 길이 일때 탐색, 삽입은 O(L) 만큼의 시간 복잡도를 갖는다.
 * 대신 각 정점이 자식에 대한 링크를 전부 가지고 있기에 저장 공간을 더 많이 사용한다.
 */

/**
 * 트라이 구조
 * 루트는 비어있다.
 * 각 간선(링크)은 추가될 문자를 키로 가진다
 * 각 정점은 이전 정점의 값 + 간선의 키를 값으로 가진다
 * 해시 테이블과 연결 리스트를 이용하여 구현할 수 있다.
 */

class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node((currentNode.value = char)));
      }

      currentNode = currentNode.children.get(char);
    }
  }

  has(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        return false;
      }

      currentNode = currentNode.children.get(char);
    }

    return true;
  }
}

const trie = new Trie();

trie.insert("cat");
trie.insert("can");
console.log(trie.has("cat"));
console.log(trie.has("can"));
console.log(trie.has("cap"));

// 과제
// 자동 완성 코드를 구현해 보세요. 이전에 트리 파트에 사용된 레벨 순회를 응용할 수 있습니다.
