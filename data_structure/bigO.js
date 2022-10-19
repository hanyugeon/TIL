// 빅 오(Big O) 표기법

/**
 * O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n) < O(n!)
 *
 * log의 밑은 2이다.
 */

// O(n)
for (let i = 0; i < n; i += 1) {
  // ...
}

// O(log n)
for (let i = 0; i <= n; i *= 2) {
  // ...
}

// O(n log n)
for (let i = 0; i < n; i += 1) {
  for (let j = 0; j <= n; j *= 2) {
    // ...
  }
}

// O(n^2)
for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < n; j += 1) {
    // ...
  }
}

/**
 * O(2^n), O(n!)
 * 특정 상황이 아니라면 가급적 사용 지양.
 */

/**
 * 합의 법칙
 * 곱의 법칙
 * 다항 법칙
 *
 * 상수항은 무시
 * 가장 큰 항 외엔 무시
 */

/**
 * 상수항은 무시
 * O(n + m)
 */

for (let i = 0; i < n * 6; i += 1) {
  // ...
}

for (let i = 0; i < m * 3; i += 1) {
  // ...
}

/**
 * 가장 큰 항 외엔 무시
 * O(n + n^2) 이지만
 * O(n^2)으로만 표기해도 된다.
 */

for (let i = 0; i < n; i += 1) {
  // ...
}

for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < n; j += 1) {
    // ...
  }
}
