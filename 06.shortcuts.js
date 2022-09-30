let promise = Promise.resolve('RESOLVED!');
let promiseErr = Promise.reject(new Error('REJECTED!')).catch(error =>
  console.log(error.message)
);
