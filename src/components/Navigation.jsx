import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
     <div className={"w-[1434px] h-[80px] bg-white bg-opacity-90 top-0 fixed"}>
      <div className={"flex gap-5"}>
      <NavLink to={"/"} className={"ml-[72px] mt-[25.5px] text-[24px] text-main font-bold"}>동아리 로고</NavLink>
      <div className ={"space-x-[80px] text-sm ml-[48px] mt-[31px]"}>
        <NavLink to={"/club"}>동아리</NavLink>
        <NavLink to={"/promotion"}>홍보게시판</NavLink>
        <NavLink to={"/notice"}>공지사항</NavLink>
        
        </div>
      </div>
      </div>
    </>
  );
}
