/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      // Brand colors
      main: "#4200FF",
      main_default: "#4200FF",
      main_mid: "#6360FF",
      main_light: "#ECEDFB",
      background: "#F1F2FC",
      sub: "#29CCC7",

      // Particular colors
      red_error: "#FF5449",

      // Achromatic colors
      black: "#191919",
      darkgray: "#4F4F4F",
      midgray: "#767676",
      gray: "#999999",
      gray2: "#DBDBDB",
      gray3: "#F4F4F4",
      white: "#FFFFFF",

      // 그 외 추가 컬러
      // ...
    },
    screens: {
      "2xl": "1920px", // 최상위 화면 크기
    },
    fontSize: {
      h1: "32px", // 대 타이틀
      h2: "24px", // 중 타이틀
      h3: "20px", // 소 타이틀 2
      h4: "18px", // 소 타이틀
      h5: "16px", // 본문 2
      h6: "15px", // 본문
      h7: "13px", // 작은
      h8: "12px", // 최소
    },
    extend: {
      spacing: {
        main: "1920px",
        home: "1434px",
        home2: "940px",
        side: "486px",
      },
    },
    minWidth: {
      main: "1920px",
      home: "1434px",
      home2: "940px",
      side: "486px",
    },
  },
  plugins: [],
};
