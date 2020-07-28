const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'So',
      age: 26
    });
    // reject('something went wrong')
  }, 5000);
});

console.log('before')

promise.then((data) => {
  console.log('1', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('other promise');
    }, 5000);
  });

}).then((str) => {
  console.log('does is run?', str)
}).catch((error) => {
  console.log('error:', error)
});

console.log('after');

