const data = [
  {
    name: "나나",
    colors: ["yellow", "white"],
    age: 4,
    ear: "folded",
  },
  {
    name: "나비",
    colors: ["white", "black"],
    age: 2,
    ear: "unfolded",
  },
  {
    name: "야미",
    colors: ["white", "black"],
    age: 10,
    ear: "unfolded",
  },
  {
    name: "요미",
    colors: ["white", "black", "brown"],
    age: 5,
    ear: "folded",
  },
];

// 털 색이 까만색이 포함되어 있으면서
// 귀가 귀가 접혀있지 않은 고양이들을 뽑기
function filterCats01(cats) {
  const results = [];

  for (leti = 0; cats.length; i += 1) {
    const cat = cats[i];
    if (cat && cat.colors.includes("black") && cat.ear === "unfolded") {
      results.push(cat.name);
    }
  }

  return results;
}

const filteredCats01 = filterCats01(data);

// 나비, 야미
document.querySelector("body").innerHTML = filteredCats01;

function filterCats02(cats) {
  return cats
    .filter(
      (cat) => cat && cat.colors.includes("white") && cat.ear === "folded"
    )
    .map((cat) => cat.name);
}

const filteredCats02 = filterCats02(data);

// 나나, 요미
document.querySelector("body").innerHTML = filteredCats02;

// UI를 구성하는데 왜 선언형이 더 중요한것인가?
