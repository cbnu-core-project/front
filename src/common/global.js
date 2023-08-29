let baseUrl = 'http://34.64.231.240:8080';

if (process.env.NODE_ENV == 'development') {
  /* 개발용, 아이피 */
  baseUrl = 'http://34.64.231.240:8080';
} else if (process.env.NODE_ENV == 'production') {
  /* 배포용, 아이피 */
  baseUrl = 'http://34.64.231.240:8080';
}

// console.log(process.env.NODE_ENV);
// console.log(baseUrl);

// 테스트용
// baseUrl = 'http://127.0.0.1:8000';

export { baseUrl };
