import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../store";
import { baseUrl } from "../../common/global";

axios.defaults.baseURL = baseUrl;


export default function ClubManagement() {
  return (
    <>
      <ManagerSignUp />
    </>
  );
}

function ManagerSignUp() {
  const { id } = useParams();
  const [members, setMenbers] = useState([]);
  const [userInfo] = useRecoilState(userInfoState);
  const [authorityOfClub, setAuthorityOfClub] = useState(0);
  const [count, setCount] = useState(-1)

  useEffect(() => {
    axios.get('/api/club/member/' + id).then((res) => {
      setMenbers(res.data);
    })
  }, []);

  useEffect(() => {
    axios.get("/api/user/authority_of_club/" + id).then((res) => {
      setAuthorityOfClub(res.data);
    });
  }, []);



  return (
    <>
      <div className="w-full relative">
        <div className={" ml-[64px] w-[1306px] h-[40px] flex relative"}>
          <div className={"text-h1 font-bold text-sub ml-[580px]"}>
            동아리 멤버 관리
          </div>
        </div>

        <div className={"h-[26px]"} />

        <div
          className={
            "w-[1306px] h-[648px] ml-[64px] rounded-xl overflow-hidden overflow-y-scroll shadow-xl "
          }
        >
          <div
            className={
              "h-[72px] border-b-[2px] border-gray2 grid justify-center"
            }
          >
            <div
              className={
                "my-[16px] mx-[45px] w-[1226px] h-[40px] py-[6px] flex text-h5"
              }
            >
              <div className={"w-[98px]"}>
                <p className="pl-[23px]">직책</p>
              </div>
              <div className="w-[69px]">
                <p className="text-center">이름</p>
              </div>
              <div className="w-[150px]">
                <p className={"text-center"}>닉네임</p>
              </div>
              <div className="w-[160px]">
                <p className={"text-center"}>학과</p>
              </div>
              <div className="w-[142px]">
                <p className="text-center">학번</p>
              </div>
              <div className="w-[178px]">
                <p className="text-center">전화번호</p>
              </div>
              <div className="w-[190px]">
                <p className="text-center">이메일</p>
              </div>
              <div className="w-[140px]">
                <p className="text-center">직책 변경</p>
              </div>
              <div className="ml-auto w-[124px]">
                <p className="text-center">멤버 탈퇴</p>
              </div>
            </div>
          </div>
          {members.map((member, idx) => {
            return (
              <>

                <li
                  className={
                    member.length === 10
                      ? "px-[40px] py-[16px] flex justify-between hover:bg-gray3 rounded-[20px]"
                      : "px-[40px] py-[16px] flex justify-between border-b-[0.5px] border-gray2 hover:bg-gray3 "
                  }
                >
                  <div className={"flex w-[1216px] h-[40px]"}>
                    <div className={"w-[96px] h-[40px]"}>
                      {member.gender === "female" ?
                        <div className={"w-[74px] h-[40px] bg-main_mid rounded-md text-white text-center px-[10px] flex flex-col justify-center"}>{member.gender} </div>
                        : <div className={"w-[74px] h-[40px] bg-main_light text-black text-center rounded-md px-[10px] flex flex-col justify-center"}>{member.gender} </div>}
                    </div>
                    <div className={"w-[69px]"}>
                      <p className={"text-h5 py-[6px] text-center text-gray"}>
                        {member.realname}
                      </p>
                    </div>
                    <div className={"w-[150px]"}>
                      <p className={"text-h5 text-center py-[6px]"}>
                        {member.nickname}
                      </p>
                    </div>
                    <div className={"w-[160px]"}>
                      <p className={"text-h5 text-center py-[6px]"}>
                        {member.major}
                      </p>
                    </div>
                    <div className={"w-[142px]"}>
                      <p className={"text-h5 text-center py-[6px]"}>
                        {member.student_number}
                      </p>
                    </div>
                    <div className={"w-[178px]"}>
                      <p className={"text-h5 py-[6px] text-center"}>
                        {member.phone_number}
                      </p>
                    </div>
                    <div className={"w-[190px]"}>
                      <p className={"text-h5 text-center py-[6px]"}>
                        {member.email}
                      </p>
                    </div>
                    
                    <div className={"w-[140px] grid justify-center"}>
                      <button
                        className={
                          "border border-[#C1C1C1] rounded-md w-[100px] h-[40px]"
                        }
                        onClick={() => {
                          if( count >= 0 && count === idx){
                            setCount(-1)
                          } else {
                            setCount(idx)
                          }
                        }}
                      >
                        설정
                      </button>
                      {count ===  idx?   <Setting member={member}/> : null}
                    </div>
                    <div className={"w-[124px] grid justify-end"}>
                      <button className={"member_delete"}>탈퇴</button>
                    </div>
                  </div>
                </li>
                
              </>
            );
          })}
        </div>
      </div>
      <div className="h-[300px]"></div>
    </>
  );
}
function Setting(props) {
  // useEffect(() => {
  //   document.getElementById("overlay").style.cssText = `
  //     position: fixed;
  //     top: 0;
  //     left: 0;
  //     background-color: gray;
  //     width: 100%;
  //     heigth: 100%;
  //     z-index: 9999;
  //   `
  //   return () => {
  //     document.body.style.cssText = ""
  //   }
  // }, [])

  return (
    <>
      <div className={"absolute z-10 ml-[60px] mt-[24px]"}>
        <div className="w-[262px] h-[383px] bg-white rounded-xl shadow-2xl">
          <div className="ml-[40px]">
            <div className="h-[32px]"></div>
            <p className="text-h2 font-bold ">계정 유형 변경</p>
            <div className="h-[40px]"></div>
            <p className="text-h5">{props.member.realname}님의 직책을 선택하세요.</p>
            <div className="h-[32px]"></div>
            <p className="text-h5 font-bold ">직책 선택</p>
            <div className="h-[12px]"></div>
            <div className="w-[182px] h-[96px] text-h5 text-black">
              <label><input type="radio" name="position" value="1"/> 동아리 회장</label>
              <br />
              <label><input type="radio" name="position" value="2"/> 동아리 임원</label>
              <br />
              <label><input type="radio" name="position" value="3"/> 동아리 멤버</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

