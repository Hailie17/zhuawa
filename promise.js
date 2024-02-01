// Promise
// 解决回调地狱

function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('promise resolved');
      resolve()
    }, 2000)
  })
}