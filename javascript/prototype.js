function Person(name, age, company) {
  this.name = name;
  this.age = age;

  Person.prototype.getName = function () {
    return this.name;
  };

  Person.prototype.setName = function (name) {
    this.name = name;
  };
}

const kim = new Person("kim", 25, undefined);
const han = new Person("han", 25, "toss");

console.log(kim);
console.log(han);
console.log(Person.constructor);
console.log(Person.__proto__);
console.log(kim.constructor);
console.log(kim.__proto__);

// effective prototype
function EffectivePerson(name) {
  this.name = name;
}

EffectivePerson.prototype.getName = function () {
  return this.name || "jaeHyeon";
};

// 부모 생성자를 빌려 쓸 수 있다.
function Korean(name) {
  EffectivePerson.apply(this, arguments);
}

Korean.prototype = new EffectivePerson();
Korean.prototype.setName = function (name) {
  this.name = name;
};

const jaeHyeon = new EffectivePerson("jaeHyeon");
const yuGeon = new Korean("jaeHyeon");
console.log(jaeHyeon.getName());
console.log(yuGeon.getName());
yuGeon.setName("yuGeon");
console.log(yuGeon.getName());
