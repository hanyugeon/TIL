const obj = {
  name: "kim",
  age: 25,
  devCourse: "FrontEnd",
};

for (const key in obj) {
  console.log(key, obj[key]);
}

/**
 * 실행결과
 * name kim
 * age 25
 * devCourse FrontEnd
 */
