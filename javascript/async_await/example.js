const delay = (delayTime) => {
  return new Promise((resolve) => setTimeout(resolve, delayTime));
};

const workByPromise = () => {
  console.log("work run");
  delay(1000)
    .then(() => {
      console.log("work 1 complete");
      return delay(1000);
    })
    .then(() => {
      console.log("work 2 complete");
      return delay(1000);
    })
    .then(() => {
      console.log("work 3 complete");
      return delay(1000);
    })
    .then(() => {
      console.log("work all completed!");
    });

  console.log("work running...");
};

// workByPromise();

// async function workByAsyncAwait () = {}
const workByAsyncAwait = async () => {
  console.log("work run");

  await delay(1000);
  console.log("work 1 complete");

  await delay(1000);
  console.log("work 2 complete");

  await delay(1000);
  console.log("work 3 complete");

  await delay(1000);
  console.log("work all completed!");
};

workByAsyncAwait();
