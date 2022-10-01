function parsePromised(data) {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(data));
    } catch (error) {
      reject(error);
    }
  });
}

parsePromised(process.argv[2]).then(null, error => console.log(error.message));
