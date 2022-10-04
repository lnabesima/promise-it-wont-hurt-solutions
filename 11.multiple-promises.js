function all(promise1, promise2) {
  let promise = new Promise((resolve) => {
    let counter = 0;
    const result = [];

    promise1.then(value => {
      result[0] = value;
      counter++;

      if (counter >= 2) {
        resolve(result);
      }
    });

    promise2.then(value => {
      result[1] = value;
      counter++;

      if (counter >= 2) {
        resolve(result);
      }
    });
  });

  return promise;
}

all(getPromise1(), getPromise2()).then(console.log);
