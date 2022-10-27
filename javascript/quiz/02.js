const num = [1, 2, 3, 4, 5];

// for (let i = 0; i < num.length; i++) {
//   setTimeout(function () {
//     console.log(`[${i}] number ${num[i]} turn!]`);
//   }, i * 1000);
// }

num.forEach((number, i) => {
  setTimeout(() => {
    console.log(`[${i}] number ${number} turn!`);
  }, i * 1000);
});
