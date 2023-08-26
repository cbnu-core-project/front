let baseUrl = "http://34.64.231.240:8080";

if (process.env.NODE_ENV == "development") {
  /* 테스트용 외부 아이피 */
  baseUrl = "http://34.64.231.240:8080";
} else if (process.env.NODE_ENV == "production") {
  /* 배포용, 내부 아이피 */
  // baseUrl = "http://10.178.0.4:8000";
  // baseUrl = "http://127.0.0.1:8000";
  baseUrl = "http://34.64.231.240:8080";
}

// console.log(process.env.NODE_ENV);
// console.log(baseUrl);

export { baseUrl };
