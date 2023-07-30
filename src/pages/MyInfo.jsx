import { useRecoilState } from "recoil";
import { sidebar_ui, userState } from "../store";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
/>;
export default function MyInfo() {
  let [sidebarUI, setSiderbarUI] = useRecoilState(sidebar_ui); //사이드바 UI변경 변수
  let [user, setUser] = useRecoilState(userState); //유저 정보

  return (
    <>
      <div className="bg-background pl-[40px] pr-[40px] w-side fixed h-screen overflow-y-scroll top-0 right-0 pt-[25px] pb-[25px] ">
        <div className="flex justify-between">
          <span
            class="material-symbols-outlined cursor-pointer mt-auto mb-auto text-[30px] text-midgray"
            onClick={() => {
              setSiderbarUI("mypage");
            }}
          >
            chevron_left
          </span>
          <div className="text-main_default font-[700] text-center text-[20px] ">
            프로필 설정
          </div>
          <span
            class="cursor-pointer ml-outo material-symbols-outlined mt-auto mb-auto text-[#1C1B1F] text-[30px]"
            onClick={() => {
              alert("서비스 준비중입니다");
            }}
          >
            notifications
          </span>
        </div>
        <span class="flex justify-center material-symbols-outlined text-gray text-[100px] mt-[50px]">
          account_circle
        </span>

        <div className="relative ml-[230px] mb-[50px]">
          <div className="absolute text-center flex flex-col justify-center rounded-full bg-darkgray w-[33px] h-[33px] cursor-pointer">
            <span class="material-symbols-outlined ">photo_camera</span>
          </div>
        </div>

        <div className="grid place-content-center mt-[65px] gap-[8px]">

          <div className="flex justify-between w-[406px]">
            <div className="text-[20px]">
              이름 <span className="text-sub">(필수)</span>
            </div>
            <div class="text-gray text-[15px] mt-[5px]">
              2~10자 이내
            </div>
          </div>

          <div className="grid content-center w-[406px] h-[48px] rounded-xl bg-white px-[5px]">
            <input type="text" placeholder="ex)홍길동" className=" text-darkgray text-[16px] outline-none pl-[10px]"></input>
          </div>
        </div>
      </div>
    </>
  );
}
