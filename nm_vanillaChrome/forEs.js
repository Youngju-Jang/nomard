// Promise.all >> 모든 promise가 성공해야 함
const p = Promise.all([
  fetch("https://yts.mx/api/v2/list_movies.json"),
  fetch(),
  fetch("https://yts.mx/api/v2/list_movies.json"),
])
  .then((response) => console.log("all succes!", response))
  .catch((e) => console.log("all promise error:", e));
// all promise error: TypeError: Failed to execute '~~~

// PROMISE ALLSETTLED >> 모든 promise가 성공할필요는 없음
const p2 = Promise.allSettled([
  fetch("https://yts.mx/api/v2/list_movies.json"),
  fetch(),
  fetch("https://yts.mx/api/v2/list_movies.json"),
])
  .then((response) => console.log("allSettled succes!", response))
  .catch((e) => console.log("allSettled promise error:", e));
//   (3) [{…}, {…}, {…}]
// 0: {status: 'fulfilled', value: Response}
// 1: {status: 'rejected', reason: TypeError: Failed to execute 'fetch' on ~~
// 2: {status: 'fulfilled', value: Response}
