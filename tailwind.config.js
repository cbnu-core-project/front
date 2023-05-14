/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      main: "#4200FF",
      textColor: "#4F4F4F",
      buttonColorM: "#6360FF",
      buttonColorS: "#ECEDFB",
      tagColor: "#F4F4F4",
      noticeColor: "#F1F2FC",
      opacity: "bg-opacity-100",

      // 커스텀 색상
      darkgray: "#4F4F4F",
      gray: "#DBDBDB",
      gray2: "#999999",
      white: "#FFFFFF",
      mid: "#6360FF",
      light: "#ECEDFB",
      sidebarbackground: "#F1F2FC",
      black: "#191919",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1920px", // 최상위 화면 크기
    },
    fontSize: {
      h1: "32px", // 메인 타이틀
      h2: "24px", // 대 타이틀
      h3: "18px", // 중간 타이틀
      h4: "16px", // 중간 타이틀2
      h5: "15px", // 15px 본문, 카테고리 메뉴
      h6: "14px", // 14px 본문, 더보기
      h7: "12px", // 푸터(10~12)
    },
    extend: {
      spacing: {
        main: "1920px",
        home: "1434px",
        home2: "940px",
        side: "486px",
      },
    },
  },
  plugins: [],
};
