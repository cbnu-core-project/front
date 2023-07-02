import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navigation() {
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  //
  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenWidth(window.innerWidth);
  //     // console.log(screenWidth);
  //   };
  //
  //   window.addEventListener("resize", handleResize);
  //
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [screenWidth]);
  //
  // // 스타일 동적적용을 위한 style
  // const containerStyle = {
  //   width: screenWidth + "px",
  // };

  return (
    <>
      <div
        className={
          "w-full h-[80px] bg-white bg-opacity-90 top-0 fixed shadow-lg z-50 "
        }
        // style={containerStyle}
      >
        <div className={"flex gap-5"}>
          <NavLink
            to={"/"}
            className={
              "ml-[72px] mt-[25.5px] text-[24px] text-main_default font-bold"
            }
          >
            동아리 로고
          </NavLink>
          <div
            className={"space-x-[80px] text-sm ml-[48px] mt-[31px] text-gray2"}
          >
            <NavLink
              to={"/club"}
              className={
                "focus:font-black focus:opacity-100 focus:text-darkgray"
              }
            >
              동아리
            </NavLink>
            <NavLink
              to={"/promotion"}
              className={"focus:font-black focus:text-darkgray"}
            >
              홍보게시판
            </NavLink>
            <NavLink
              to={"/notice"}
              className={"focus:font-black focus:text-darkgray"}
            >
              공지사항
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
