import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../store";
import { baseUrl } from "../../common/global";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { check } from "prettier";

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
  const [members, setMembers] = useState([]);
  const [userInfo] = useRecoilState(userInfoState);
  const [authorityOfClub, setAuthorityOfClub] = useState(0);
  const [count, setCount] = useState(-1)

  const sortNgetMembers = () => {
    axios.get('/api/club/member/' + id).then((res) => {
      let copys = [...res.data];
      copys.forEach(_ => {
        copys.sort(function (a, b) {
          return a.current_club_authority < b.current_club_authority ? -1 : a.current_club_authority > b.current_club_authority ? 1 : 0;

        })
      });
      setMembers(copys);
      setCount(-1);
      //console.log(res.data);
    })
  }


  useEffect(() => sortNgetMembers(), []);

  useEffect(() => {
    axios.get("/api/user/authority_of_club/" + id).then((res) => {
      setAuthorityOfClub(res.data);
    });
  }, []);

  const deletehandleSubmit = (member) => {

    axios.delete(`/api/club/delete/member?club_objid=${id}&user_objid=${member._id}`).then((res) => {
      sortNgetMembers();
    })
  }


  if (authorityOfClub <= 2) {
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
                <div className={"w-[96px]"}>
                  <p className="pl-[23px]">직책</p>
                </div>
                <div className="w-[129px]">
                  <p className="text-center">이름</p>
                </div>
                {/* <div className="w-[150px]">
                  <p className={"text-center"}>닉네임</p>
                </div> */}
                <div className="w-[180px]">
                  <p className={"text-center"}>학과</p>
                </div>
                <div className="w-[182px]">
                  <p className="text-center">학번</p>
                </div>
                <div className="w-[198px]">
                  <p className="text-center">전화번호</p>
                </div>
                <div className="w-[210px]">
                  <p className="text-center">이메일</p>
                </div>
                <div className="w-[160px]">
                  <p className="text-center">직책 변경</p>
                </div>
                <div className="w-[124px]">
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
                        {member.current_club_authority <= 2 ?
                          <div>
                            {member.current_club_authority <= 1 ? <div className={'w-[74px] h-[40px] rounded-md text-white text-center px-[10px] flex flex-col justify-center bg-main_default'}>회장</div> 
                            : <div className={"w-[74px] h-[40px] rounded-md text-white text-center px-[10px] flex flex-col justify-center bg-main_mid"}>임원</div>} </div>
                          : <div className={"w-[74px] h-[40px] bg-main_light text-black text-center rounded-md px-[10px] flex flex-col justify-center"}>{member.current_club_authority > 2 ? "부원" : ""} </div>}
                      </div>
                      <div className={"w-[129px]"}>
                        <p className={"text-h5 py-[6px] text-center text-gray"}>
                          {member.realname}
                        </p>
                      </div>
                      {/* <div className={"w-[150px]"}>
                        <p className={"text-h5 text-center py-[6px]"}>
                          {member.nickname}
                        </p>
                      </div> */}
                      <div className={"w-[180px]"}>
                        <p className={"text-h5 text-center py-[6px]"}>
                          {member.major}
                        </p>
                      </div>
                      <div className={"w-[182px]"}>
                        <p className={"text-h5 text-center py-[6px]"}>
                          {member.student_number}
                        </p>
                      </div>
                      <div className={"w-[198px]"}>
                        <p className={"text-h5 py-[6px] text-center"}>
                          {member.phone_number}
                        </p>
                      </div>
                      <div className={"w-[210px]"}>
                        <p className={"text-h5 text-center py-[6px]"}>
                          {member.email}
                        </p>
                      </div>

                      <div className={"w-[160px] grid justify-center"}>
                        <button
                          className={
                            "border border-[#C1C1C1] rounded-md w-[100px] h-[40px]"
                          }
                          onClick={() => {
                            if (count >= 0 && count === idx) {
                              setCount(-1)
                            } else {
                              setCount(idx)
                            }
                          }}
                        >
                          설정
                        </button>
                        {count === idx ? <Setting member={member} setCount={setCount} setMembers={setMembers} sortNgetMembers={sortNgetMembers} /> : null}
                      </div>
                      <div className={"w-[124px] grid justify-end"}>
                        <button className={"w-[100px] h-[40px] bg-[#FF847C7D] rounded-md text-h5"}
                          onClick={() => {
                            setCount(-1);
                            Swal.fire({
                              title: "<div class=\"font-[Pv] text-h3\"> 한번 삭제하면, 복구할 수 없습니다.</div>",
                              html:
                                '정말로&nbsp;' + member.realname + '님을 탈퇴시킬까요?',
                              icon: 'warning',
                              showCancelButton: true,
                              confirmButtonColor: '#3085d6',
                              cancelButtonColor: '#d33',
                              confirmButtonText: '탈퇴',
                              cancelButtonText: '취소',
                            }).then((result) => {
                              if (result.isConfirmed) {
                                Swal.fire('탈퇴 성공!', member.realname + "님이 탈퇴처리 되었습니다.", 'success');
                                deletehandleSubmit(member);
                              }
                            })
                          }}
                        >탈퇴</button>

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
  else {
    return (
      <>
        <div>응 넌 못봐~</div>
      </>
    );
  }
}
function Setting(props) {
  const navigate = useNavigate();
  const [userInfo] = useRecoilState(userInfoState);
  const [selectedAuthority, setSelectedAuthority] = useState(props.member.current_club_authority)
  const { id } = useParams()

  const onChange = (e) => {
    setSelectedAuthority(parseInt(e.target.value))
  }


  const handleSubmit = (member, authority) => {
    if(member._id === userInfo._id){
      Swal.fire('경고!', "자신의 직위는 변경할 수 없습니다.", 'warning');
    }
    else if(selectedAuthority <= 1){
      props.setCount(-1);
      Swal.fire({
        title: "<div class=\"font-[Pv] text-h3\"> 신중하게 생각해주세요.</div>",
        html:
          '정말로&nbsp;' + member.realname + '에게 회장을 넘기겠습니까?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '예',
        cancelButtonText: '아니오',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('성공!', member.realname + "님이 회장이 되었습니다.", 'success');
          axios.post(`/api/club/member?club_objid=${id}&user_objid=${member._id}&authority=${authority}`).then((res) => {
            props.sortNgetMembers();
          })
        }
      })
    }
    else{
      axios.post(`/api/club/member?club_objid=${id}&user_objid=${member._id}&authority=${authority}`).then((res) => {
        props.sortNgetMembers();
      })
    }
    
  }

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
              <label><input type="radio" name="position" value="1" checked={selectedAuthority === 1} onChange={onChange} /> 동아리 회장</label>
              <br />
              <label><input type="radio" name="position" value="2" checked={selectedAuthority === 2} onChange={onChange} /> 동아리 임원</label>
              <br />
              <label><input type="radio" name="position" value="3" checked={selectedAuthority === 3} onChange={onChange} /> 동아리 부원</label>
            </div>
          </div>
          <div className="flex justify-center">
            <button className={"mt-8 ml-[126px] font-[Pv] text-h6 text-black px-2 py-3 border border-gray2 rounded-md"}
              onClick={() => {
                props.setCount(-1);
              }}>닫기</button>
            <button className={"mt-8 ml-2 font-[Pv] px-2 py-3 text-white text-h6 border border-sub bg-sub rounded-md"}
              onClick={() => handleSubmit(props.member, selectedAuthority)
              }
            >저장하기</button>
          </div>
        </div>
      </div>
    </>
  );
}
