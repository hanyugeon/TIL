// function RockBand(members) {
//   this.members = members;
//   this.perform = function () {
//     console.log(this.members);
//     setTimeout(function () {
//       this.members.forEach(function (member) {
//         member.perform();
//       });
//     }, 1000);
//   };
// }

function RockBand(members) {
  this.members = members;
  this.perform = function () {
    console.log(this.members);
    setTimeout(() => {
      this.members.forEach(function (member) {
        member.perform();
      });
    }, 1000);
  };
}

var cigarettes = new RockBand([
  {
    name: "kim",
    perform: function () {
      console.log("sing: ahahahaha");
    },
  },
]);

// console.log(cigarettes);
console.log(cigarettes.members);
cigarettes.perform();
