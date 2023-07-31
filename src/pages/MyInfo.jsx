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
      <div className="bg-background pl-[40px] pr-[40px] w-side fixed h-screen overflow-y-scroll top-0 right-0 pt-[25px] pb-[45px] ">
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

        <div className=" relative">
          <div className="absolute ml-[220px] mt-[120px]">
            <div className="text-center flex flex-col justify-center rounded-full bg-darkgray w-[33px] h-[33px] cursor-pointer">
              <span class="material-symbols-outlined text-background">photo_camera</span>
            </div>
          </div>
        </div>
        <span class="flex justify-center material-symbols-outlined text-gray text-[100px] mt-[50px]">
          account_circle
        </span>

        <form>
          <div className="grid place-content-center mt-[35px] gap-[32px]">
            <div className="grid gap-[8px]">
              <div className="flex justify-between w-[406px]">
                <label for="name" className="text-[20px] font-[500]">
                  이름 <span className="text-sub">(필수)</span>
                </label>
                <div class="text-gray text-[15px] mt-[5px]">2~10자 이내</div>
              </div>
              <input
                type="text"
                name="name"
                placeholder="ex) 홍길동"
                required
                className="w-[406px] h-[48px] rounded-xl bg-white px-[5px] text-darkgray text-[16px] outline-none pl-[10px]"
              ></input>
            </div>

            <div className="grid gap-[8px]">
              <div className="flex justify-between w-[406px]">
                <label for="major" className="text-[20px] font-[500]">
                  학과 <span className="text-sub">(필수)</span>
                </label>
                <div class="text-gray text-[15px] mt-[5px]">20자 이내</div>
              </div>
              <input
                type="text"
                name="major"
                placeholder="ex) 00000학과"
                required
                className="w-[406px] h-[48px] rounded-xl bg-white px-[5px] text-darkgray text-[16px] outline-none pl-[10px]"
              ></input>
            </div>

            <div className="grid gap-[8px]">
              <div className="flex justify-between w-[406px]">
                <label for="studentnumber" className="text-[20px] font-[500]">
                  학번 <span className="text-sub">(필수)</span>
                </label>
                <div class="text-gray text-[15px] mt-[5px]">10자 이내</div>
              </div>
              <input
                type="text"
                name="studentnumber"
                placeholder="ex) 2021000000"
                required
                className="w-[406px] h-[48px] rounded-xl bg-white px-[5px] text-darkgray text-[16px] outline-none pl-[10px]"
              ></input>
            </div>

            <div className="grid gap-[8px]">
                <label for="tell" className="text-[20px] font-[500]">
                  전화번호 <span className="text-sub">(필수)</span>
                </label>
              <input
                type="tel"
                name="tell"
                placeholder="ex) 010-0000-0000"
                required
                className="w-[406px] h-[48px] rounded-xl bg-white px-[5px] text-darkgray text-[16px] outline-none pl-[10px]"
              ></input>
            </div>

            <div className="grid gap-[8px]">
                <label for="email" className="text-[20px] font-[500]">
                  이메일 <span className="text-sub">(필수)</span>
                </label>
                
              <input
                type="email"
                name="email"
                placeholder="이메일 주소를 작성해주세요."
                required
                className="w-[406px] h-[48px] rounded-xl bg-white px-[5px] text-darkgray text-[16px] outline-none pl-[10px]"
              ></input>
            </div>

            <div className="grid gap-[8px]">
                <label for="adress" className="text-[20px] font-[500]">
                  주소
                </label>
              <input
                type="text"
                name="adress"
                placeholder="도로명 주소를 작성해주세요."
                className="w-[406px] h-[48px] rounded-xl bg-white px-[5px] text-darkgray text-[16px] outline-none pl-[10px]"
              ></input>
            </div>

            <div className="flex w-[406px] gap-[30px] ">
              <legend for="gender" className="text-[20px] font-[500] ">
                성별 
              </legend>
              <div className="grid content-center">
              <div class="flex text-black text-[16px] gap-[10px] ">
                <div class="flex gap-[4px]">
                <input type="radio" name="gender" value="male" className="h-[20px] w-[20px] self-center"></input>
                <label for="male" className="font-[400] ">남자</label>
                </div>

                <div class="flex gap-[4px]">
                <input type="radio" name="gender" value="female" className="h-[20px] w-[20px] self-center"></input>
                <label for="female" className="font-[400] ">여자</label>
                </div>
                
              </div>
              </div>
            </div>

            <button className="justify-self-center bg-sub text-white mt-[28px] w-[87px] h-[40px] rounded-lg">
              저장하기
            </button>
          </div>
        </form>
      </div>
    </>

  );
}

//https://britny-no.tistory.com/21
//이미지 업로드 관련 글

