import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/Arible Logo English.ver.svg";

export default function Navigation() {
  return (
    <>
      <div
        className={
          "w-full h-[80px] bg-white bg-opacity-90 top-0 fixed z-50 shadow-lg z-0"
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
            <Logo width={90} />
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
