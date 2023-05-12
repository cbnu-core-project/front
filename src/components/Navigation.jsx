import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <div className={"flex gap-5"}>
        <NavLink to={"/"}>홈</NavLink>
        <NavLink to={"/club"}>동아리</NavLink>
        <NavLink to={"/notice"}>공지사항</NavLink>
        <NavLink to={"/promotion"}>홍보</NavLink>
      </div>
    </>
  );
}
