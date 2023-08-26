import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { readOneClub } from "../../api/club";
import { readAllPromotions, readOnePromotion } from "../../api/promotion";
import { baseUrl } from "../../common/global";
import { promotionsState, addingImgState } from "../../store";
import { useRecoilState } from "recoil";
import axios from "axios";
import Swal from "sweetalert2";
import { useQuery } from "react-query";

axios.defaults.baseURL = baseUrl;

export default function ClubIntroduce() {
  const { id } = useParams();
  const [post, setpost] = useState({
    activity_tags: [],
    image_urls: [],
    president: [],
    executive: [],
    member: [],
  });
  const [promotions, setPromotions] = useRecoilState(promotionsState);
  const [activity, setActivity] = useState([]); //동아리 주요활동 내역
  const [programs, setPrograms] = useState([]); //동아리 활동 프로그램 내역
  const [AddImg, setAddImg] = useRecoilState(addingImgState); //이미지 추가하는 모달 창 여는 변수
  const [tagModfy, setTagModfy] = useState(true); //태그 수정버튼 클릭에 따른 ui변화
  const [addTag, setAddTag] = useState(false); //태그 활동추가 버튼 관련 기능
  const [tagInput, setTagInput] = useState(null); //태그 인풋 내용
  const [clubProgramModfy, setClubProgramModfy] = useState(true); //동아리 프로그램 수정버튼 클릭에 따른 ui변화
  const [clubHistoryModfy, setClubHistoryModfy] = useState(true); //동아리 활동내역 수정버튼 클릭에 따른 ui변화

  /////////////////////////////////////////
  // 현재 로그인 된 사용자의 권한 받아오기
  const [authorityOfClub, setAuthorityOfClub] = useState(5);

  useEffect(() => {
    axios.get("/api/user/authority_of_club/" + id).then((res) => {
      setAuthorityOfClub(res.data);
    });
  }, []);
  /////////////////////////////////////////

  let prev_length = 0; //주요활동내역의 년도 시각화에 필요한 변수1
  let list = []; //2
  let after_length = 0; //3
  const navigate = useNavigate();

  function getClubPost() {
    readOneClub(id).then((res) => setpost(res.data[0]));
  }

  function getPromotionPost() {
    readAllPromotions(0).then((res) => setPromotions(res.data));
  }

  function getClubActivityHistory() {
    //주요활동내역 가져옴
    axios
      .get(`api/club_activity_history/${id}`)
      .then((res) => setActivity(res.data));
  }

  if (clubHistoryModfy == true) {
    //내용 수정시에는 정렬되지 않음
    activity.sort((a, b) => {
      //주요활동내역 연도별 정렬
      if (a.year > b.year) return -1;
      if (a.year < b.year) return 1;
      return 0;
    });

    activity.sort((a, b) => {
      //주요활동내역 달별 정렬
      if (a.year === b.year) if (a.month < b.month) return -1;
      if (a.month > b.month) return 1;
      return 0;
    });

    activity.sort((a, b) => {
      //주요활동내역 내용 ㄱㄴㄷ순 정렬
      if (a.month === b.month && a.year === b.year)
        if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
  }

  function getClubProgram() {
    //활동 프로그램 데이터 가져옴
    axios.get(`api/club_programs/${id}`).then((res) => setPrograms(res.data));
  }

  // fix: 사이드바의 동아리를 누르면, location.reload()를 통해 이동을 하지 않고,
  // navigate를 통해 부드럽게 이동하기 위해, id를 deps에 추가함
  useEffect(() => {
    getClubPost();
    getPromotionPost();
    getClubActivityHistory();
    getClubProgram();
  }, [id]);

  // 이미지 업로드 버튼 눌러서, state가 바뀌면 다시 바뀐 이미지를 불러오기
  useEffect(() => {
    getClubPost();
  }, [AddImg]);


  return (
    <>
      {AddImg == true ? <Addimg /> : null} {/* 사진 수정 창 */}
      <div className={"p-2 ml-[56px]"}>
        <div className={"flex gap-8"}>
          {/*동아리 활동*/}
          <div
            className={
              "relative w-[450px] h-[320px] 2xl:w-[637px] 2xl:h-[432px] bg-gray2 drop-shadow-md rounded-xl overflow-hidden"
            }
            F
          >
            <div className="absolute z-10">
              {authorityOfClub <= 2 ? (
                <button
                  className="flex items-center gap-[5px] ml-[480px] my-6 bg-[#29CCC7] text-white text-[18px] w-[120px] h-[40px] rounded-md"
                  onClick={() => {
                    setAddImg(true);
                  }}
                >
                  <div class="material-symbols-outlined ml-[7px]">edit</div>
                  <div>사진변경</div>
                </button>
              ) : null}
            </div>
            <div>
              <img
                src={`${post.image_urls[0]}`}
                className={"w-[637px] h-[432px] relative"}
                alt="main_image"
              ></img>
            </div>
          </div>

          <div
            className={
              "w-[450px] h-[320px] 2xl:w-[637px] 2xl:h-[432px] shadow-lg rounded-xl"
            }
          >
            {tagModfy ? ( //기본 동아리 정보 관련 창
              <>
                <div className={"flex p-2 mt-[20px] ml-[24px] gap-3"}>
                  <p className={"text-h2 font-bold "}>{post.title}</p>

                  <div className={"gap-2 flex mt-[9px]"}>
                    <div
                      className={
                        "h-[20px] 2xl:h-[20px] bg-black text-h7 text-white rounded-md px-[5px]"
                      }
                    >
                      {post.tag1}
                    </div>
                    <div
                      className={
                        "h-[20px] 2xl:h-[20px] bg-black text-h7 text-white rounded-md px-[5px]"
                      }
                    >
                      {post.tag2}
                    </div>
                    <div
                      className={
                        "h-[20px] 2xl:h-[20px] bg-black text-h7 text-white rounded-md px-[5px]"
                      }
                    >
                      {post.tag3}
                    </div>
                  </div>
                  {authorityOfClub <= 2 ? (
                    <button
                      className="flex items-center gap-[5px] ml-auto mr-[35px] bg-[#29CCC7] text-white text-[18px] w-[120px] h-[40px] rounded-md"
                      onClick={() => {
                        setTagModfy(!tagModfy);
                      }}
                    >
                      <div class="material-symbols-outlined ml-[7px]">edit</div>
                      <div>수정하기</div>
                    </button>
                  ) : null}
                </div>

                <p className={"text-h3 ml-8"}>{post.sub_content}</p>
                <p className={"text-h6 px-8 py-4 text-darkgray"}>
                  {post.main_content}
                </p>
              </> //수정 중인 동아리 정보 관련 창
            ) : (
              <>
                <div className={"flex p-2 mt-[20px] ml-[24px] gap-3 "}>
                  <p className={"text-h2 font-bold "}>{post.title}</p>

                  <div className={"gap-2 w-[370px] flex mt-[9px]"}>
                    <input
                      type="text"
                      maxLength={7}
                      value={post.tag1}
                      placeholder="태그1"
                      className={
                        "h-[20px] w-[100px] 2xl:h-[20px] bg-black text-h7 text-white rounded-md px-[5px] outline-none"
                      }
                      onChange={(e) => {
                        let copy = { ...post };
                        copy.tag1 = e.target.value;
                        setpost(copy);
                      }}
                    />
                    <input
                      type="text"
                      maxLength={7}
                      value={post.tag2}
                      placeholder="태그2"
                      className={
                        "h-[20px] w-[100px] 2xl:h-[20px] bg-black text-h7 text-white rounded-md px-[5px] outline-none"
                      }
                      onChange={(e) => {
                        let copy = { ...post };
                        copy.tag2 = e.target.value;
                        setpost(copy);
                      }}
                    />
                    <input
                      type="text"
                      maxLength={7}
                      value={post.tag3}
                      placeholder="태그3"
                      className={
                        "h-[20px] w-[100px] 2xl:h-[20px] bg-black text-h7 text-white rounded-md px-[5px] outline-none"
                      }
                      onChange={(e) => {
                        let copy = { ...post };
                        copy.tag3 = e.target.value;
                        setpost(copy);
                      }}
                    />
                  </div>
                  <button
                    className="flex items-center gap-[5px] ml-auto mr-[35px] bg-[#29CCC7] text-white text-[18px] w-[120px] h-[40px] rounded-md"
                    onClick={() => {
                      //완료 버튼 클릭시 내용수정 반영
                      setTagModfy(!tagModfy);

                      axios
                        .put("/api/club/" + id, {
                          //입력받은 사용자 정보 api전달
                          title: post.title,
                          main_content: post.main_content,
                          sub_content: post.sub_content,
                          user_objid: post.user_objid,
                          image_urls: post.image_urls,
                          activity_tags: post.activity_tags,
                          nickname: post.nickname,
                          tag1: post.tag1,
                          tag2: post.tag2,
                          tag3: post.tag3,
                          classification: post.classification,
                          last_updated: post.last_updated,
                          president: post.president,
                          executive: post.executive,
                          member: post.member,
                        })
                        .then((res) => {
                          //랜더링
                          axios.get("/api/club/" + id).then((response) => {
                            setpost(response.data[0]);
                          });
                        });
                    }}
                  >
                    <div class="material-symbols-outlined ml-[7px]">edit</div>
                    <div>완료하기</div>
                  </button>
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    maxLength={70}
                    value={post.sub_content}
                    placeholder="제목을 입력해주세요"
                    className={"text-h3 ml-8 outline-none"}
                    onChange={(e) => {
                      let copy = { ...post };
                      copy.sub_content = e.target.value;
                      setpost(copy);
                    }}
                  />
                  <input
                    type="text"
                    maxLength={200}
                    value={post.main_content}
                    placeholder="내용을 입력해주세요"
                    className={"text-h6 px-8 py-4 text-darkgray outline-none"}
                    onChange={(e) => {
                      let copy = { ...post };
                      copy.main_content = e.target.value;
                      setpost(copy);
                    }}
                  />
                </div>
              </>
            )}
            <div className={"grid place-content-center"}>
              <div className={"border-t mt-2 border-gray2 w-[573px] h-[120px]"}>
                <div className={"mt-[24px]"} />
                <div className={"flex gap-4"}>
                  <p className={"font-bold text-h3"}>
                    우리는 이런 활동을 해요!
                  </p>
                  <p
                    className={
                      "text-midgray list-disc list-outside text-h4 mt-[5px]"
                    }
                  >
                    가입 인원{" "}
                    <span className={"font-bold"}>{post.member.length}</span>명
                  </p>
                </div>
                <div
                  className={"flex flex-wrap gap-y-0 text-center max-h-[180px]"}
                >
                  {post.activity_tags.map((tags, i) => {
                    return (
                      <div className="h-[40px]">
                        {tagModfy ? null : (
                          <>
                            <div className="relative flex justify-end">
                              <div
                                className="absolute text-center flex flex-col justify-center rounded-full bg-[#FF0303] w-[20px] h-[20px] cursor-pointer"
                                onClick={() => {
                                  axios
                                    .delete(
                                      "/api/club/activity_tag/index?objid=" +
                                        id +
                                        "&index=" +
                                        i
                                    )
                                    .then((res) => {
                                      readOneClub(id).then((res) =>
                                        setpost(res.data[0])
                                      );
                                    });
                                }}
                              >
                                <span class="material-symbols-outlined text-white text-[10px] font-thin">
                                  close
                                </span>
                              </div>
                            </div>
                          </>
                        )}
                        <div
                          className={
                            "border border-sub text-sub rounded-lg h-[30px] font-[600] px-[10px] mt-[10px] mr-[10px]"
                          }
                        >
                          {tags}
                        </div>
                      </div>
                    );
                  })}
                  {addTag ? ( //활동추가 시 태그 추가 칸 생성됨
                    <input
                      className={
                        //http://vnthf.logdown.com/post/2016/05/18/front-input-box
                        "border border-sub text-sub rounded-lg h-[30px] font-[600] px-[10px] mt-[10px] outline-none w-[120px] mr-[10px]"
                      }
                      onChange={(e) => {
                        setTagInput(e.target.value);
                      }}
                    ></input>
                  ) : null}
                  {tagModfy ? null : (
                    <div className="h-[40px]">
                      <button
                        className=" bg-sub text-white rounded-lg h-[30px] font-[600] px-[10px] mt-[10px]"
                        onClick={() => {
                          // 태그 추가되도록 설정
                          setAddTag(!addTag);
                          if (tagInput != null){
                            axios
                              .post(
                                `/api/club/activity_tag/push?objid=${id}&activity_tag=${tagInput}`
                              )
                              .then((res) => {
                                readOneClub(id).then((res) =>
                                  setpost(res.data[0])
                                )
                              })
                              .catch(err => {console.log(err)})
                            setTagInput(null);
                          }    
                          
                        }}
                      >
                        + 활동 추가
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"h-[40px]"} />

        <div className={"flex gap-8 "}>
          {/*동아리 프로그램*/}
          <div
            className={
              "2xl:w-[358px] 2xl:h-[512px] rounded-xl shadow-xl grid place-content-center relative"
            }
          >
            {/* <div className="bg-main from-white absolute top-0"></div> */}
            <div className="flex w-[315px] gap-[17px]">
              <div className={"font-bold text-h2 py-6"}>동아리 프로그램</div>
              {clubProgramModfy ? ( //수정 버튼
                authorityOfClub <= 2 ? (
                  <button
                    className="flex items-center gap-[5px] ml-auto my-6 bg-[#29CCC7] text-white text-[18px] w-[95px] h-[40px] rounded-md"
                    onClick={() => {
                      setClubProgramModfy(!clubProgramModfy);
                    }}
                  >
                    <div class="material-symbols-outlined ml-[7px]">edit</div>
                    <div>수정</div>
                  </button>
                ) : null
              ) : (
                //취소, 완료 버튼
                <div className="flex gap-1 ml-auto">
                  <button
                    className="text-center gap-[5px] my-6 bg-[#29CCC7] text-white text-[18px] w-[70px] h-[30px] rounded-md"
                    onClick={() => {
                      setClubProgramModfy(!clubProgramModfy);
                    }}
                  >
                    취소
                  </button>
                  <button
                    className="flex items-center gap-[5px] ml-auto my-6 bg-[#29CCC7] text-white text-[18px] w-[70px] h-[30px] rounded-md"
                    onClick={() => {
                      setClubProgramModfy(!clubProgramModfy);
                      programs.map((program) => {
                        axios
                          .put("/api/club_programs/" + program._id, {
                            //입력받은 사용자 정보 api전달
                            title: String(program.title),
                            content: String(program.content),
                            club_objid: id,
                          })
                          .then((res) => {
                            //랜더링
                            axios
                              .get("/api/club_programs/" + id)
                              .then((response) => {
                                setPrograms(response.data);
                              });
                          });
                      });
                    }}
                  >
                    <div class="material-symbols-outlined ml-[7px] text-[15px]">
                      edit
                    </div>
                    <div>완료</div>
                  </button>
                </div>
              )}
            </div>
            <div
              className={
                "w-full h-[430px] border-t border-gray2 overflow-y-scroll"
              }
            >
              {/* 동아리 프로그램 세부내용 */}
              {clubProgramModfy ? null : ( //3항연산자 써서 수정 버튼 눌렀을 때 ui바꿔줌
                <button //활동내역 추가 클릭 시 동작
                  className="w-[160px] h-[32px] bg-gray2 text-[16px] text-[3B3B3B] rounded-md font-[500] mt-5 text-center grid content-center"
                  onClick={() => {
                    axios
                      .post("/api/club_programs", {
                        //빈 정보 추가
                        title: "",
                        content: "",
                        club_objid: id,
                      })
                      .then((res) => {
                        //랜더링
                        axios
                          .get("/api/club_programs/" + id)
                          .then((response) => {
                            setPrograms(response.data);
                          });
                      });
                  }}
                >
                  + 활동내역 추가
                </button>
              )}
              <div className={"w-full p-[10px]"}></div>
              {programs.map((program, i) => {
                //수정중일 때와 아닐때를 3항 연산자로 구분
                return (
                  <>
                    {clubProgramModfy ? ( //기본 화면
                      <div className={"h-[60px]"}>
                        <p className={"text-h4 text-black mt-[10px]"}>
                          {program.title}
                        </p>
                        <p className={"text-h7 text-darkgray"}>
                          {program.content}
                        </p>
                      </div>
                    ) : (
                      //수정 중
                      <div className={"h-[100px]  grid"}>
                        <input
                          type="text"
                          maxLength={70}
                          value={program.title}
                          placeholder="제목을 작성해주세요"
                          className={
                            "text-h4 text-black mt-[10px] outline-none"
                          }
                          onChange={(e) => {
                            let copy = [...programs];
                            copy[i].title = e.target.value;
                            setPrograms(copy);
                          }}
                        />
                        <input
                          type="text"
                          maxLength={200}
                          value={program.content}
                          placeholder="내용을 작성해주세요"
                          className={"text-h7 text-darkgray outline-none"}
                          onChange={(e) => {
                            let copy = [...programs];
                            copy[i].content = e.target.value;
                            setPrograms(copy);
                          }}
                        />
                        <div className="flex justify-end ">
                          {/* 삭제버튼 클릭시 해당 내용 삭제 */}
                          <button
                            className="w-[47px] h-[32px] bg-gray rounded-md text-white font-[400] text-[12px] mt-[15px]"
                            onClick={() => {
                              axios
                                .delete("/api/club_programs/" + program._id)
                                .then((res) => {
                                  axios
                                    .get("/api/club_programs/" + id)
                                    .then((response) => {
                                      setPrograms(response.data);
                                    });
                                });
                            }}
                          >
                            삭제
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
          {/*주요 활동내역 프로그램*/}
          <div
            className={
              "w-[454px] h-[512px] 2xl:w-[454px] 2xl:h-[512px] rounded-xl shadow-xl grid place-content-center"
            }
          >
            {/* 활동내역 소제목 */}
            <div className="flex w-full">
              <div className={"font-bold text-h2 py-6"}>주요 활동내역</div>
              {clubHistoryModfy ? ( //수정 버튼
                authorityOfClub <= 2 ? (
                  <button
                    className="flex items-center gap-[5px] ml-auto my-6 bg-[#29CCC7] text-white text-[18px] w-[95px] h-[40px] rounded-md"
                    onClick={() => {
                      setClubHistoryModfy(!clubHistoryModfy);
                    }}
                  >
                    <div class="material-symbols-outlined ml-[7px]">edit</div>
                    <div>수정</div>
                  </button>
                ) : null
              ) : (
                //취소, 완료 버튼
                <div className="flex gap-1 ml-auto">
                  <button
                    className="text-center gap-[5px] my-6 bg-[#29CCC7] text-white text-[18px] w-[95px] h-[40px] rounded-md"
                    onClick={() => {
                      setClubHistoryModfy(!clubHistoryModfy);
                    }}
                  >
                    취소
                  </button>
                  <button
                    className="flex items-center gap-[5px] my-6 bg-[#29CCC7] text-white text-[18px] w-[95px] h-[40px] rounded-md"
                    onClick={() => {
                      setClubHistoryModfy(!clubHistoryModfy);
                      activity.map((acti) => {
                        axios
                          .put("/api/club_activity_history/" + acti._id, {
                            //입력받은 사용자 정보 api전달

                            title: String(acti.title),
                            year: String(acti.year),
                            month: String(acti.month),
                            club_objid: id,
                          })
                          .then((res) => {
                            //랜더링
                            axios
                              .get("/api/club_activity_history/" + id)
                              .then((response) => {
                                setActivity(response.data);
                              });
                          });
                      });
                    }}
                  >
                    <div class="material-symbols-outlined ml-[7px]">edit</div>
                    <div> 완료</div>
                  </button>
                </div>
              )}
            </div>
            <div
              className={
                "border-t border-gray2 w-[390px] h-[430px] overflow-y-scroll"
              }
            >
              {clubHistoryModfy ? null : ( //3항연산자 써서 수정 버튼 눌렀을 때 ui바꿔줌
                <button //활동내역 추가 시 동작
                  className="w-[160px] h-[32px] bg-gray2 text-[16px] text-[3B3B3B] rounded-md font-[500] mt-5 text-center grid content-center"
                  onClick={() => {
                    axios
                      .post("/api/club_activity_history", {
                        //빈 정보 추가
                        title: "",
                        year: "2023",
                        month: "1",
                        club_objid: id,
                      })
                      .then((res) => {
                        //랜더링
                        axios
                          .get("/api/club_activity_history/" + id)
                          .then((response) => {
                            setActivity(response.data);
                          });
                      });
                  }}
                >
                  + 활동내역 추가
                </button>
              )}
              {activity.map((acti, i) => {
                //연도 선택적으로 시각화(우회해서 작성)
                prev_length = list.length; //연도 추가전 리스트 길이 저장
                if (list.find((element) => element == acti.year) == null) {
                  //현재 데이터의 연도가 리스트에 들어와 있지 않을 때만 해당 연도를 추가함(리스트 중복 제거 코드)
                  list.push(acti.year);
                }
                after_length = list.length; //연도 추가 후 리스트 길이 저장

                return (
                  <>
                    {clubHistoryModfy ? ( //3항연산자 써서 수정 버튼 눌렀을 때 ui바꿔줌
                      // 기본화면
                      <>
                        <div className={"mt-4 flex"}>
                          {
                            prev_length != after_length ? ( //추가전 리스트 길이와 추가 후 리스트 길이가 다를 때만 연도 출력
                              <div
                                className={
                                  "w-[70px] h-auto text-[30px] font-light"
                                }
                              >
                                {acti.year}
                              </div>
                            ) : (
                              <div
                                className={
                                  "w-[70px] h-auto text-[30px] font-light text-white"
                                }
                              >
                                {acti.year}
                              </div>
                            )
                            //길이 같을 때는 너비 맞춰주기 위해 흰색으로 출력
                          }
                          <div className={"w-[320px] h-auto"}>
                            {/* 세부적인 데이터들 출력(월, 타이틀) */}

                            <ul
                              className={
                                "marker:text-main_default list-disc list-inside ml-5"
                              }
                            >
                              <div className="relative">
                                {/* list dot 주변에 길게 늘어진 선 ui */}
                                <div className="absolute ml-[2px] mt-[13px] w-[1px] h-[70px] bg-gray2 z-[-1]"></div>
                              </div>
                              <li className={"text-h4 mt-[5px]"}>
                                <span className={"text-h3 mr-6 text-gray"}>
                                  {String(acti.month).padStart(2, "0")}
                                </span>
                                {acti.title}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </>
                    ) : (
                      //수정 화면
                      <>
                        <div className="mt-4 flex">
                          {/* <div className="flex gap-[3px]"> */}
                          <input
                            type={"number"}
                            min={1900}
                            max={2100}
                            placeholder="연도"
                            className={
                              "w-[70px] text-[24px] font-light outline-none self-start"
                            }
                            value={acti.year}
                            onChange={(e) => {
                              let copy = [...activity];
                              copy[i].year = e.target.value;
                              setActivity(copy);
                            }}
                          />
                          {/* 연도 변경 */}
                          {/* <div className="flex flex-col"> //변경 버튼 따로 생성한 ui
                              <span class="material-symbols-outlined  w-[20px] h-[16px] text-[18px] text-gray bg-gray3 cursor-pointer">
                                expand_less
                              </span>
                              <span class="material-symbols-outlined  w-[20px] h-[16px] text-[18px] text-gray bg-gray3 cursor-pointer">
                                expand_more
                              </span>
                            </div> */}
                          {/* </div> */}

                          <div className={"w-[320px] h-auto"}>
                            {/* 세부적인 데이터들 출력(월, 타이틀) */}

                            <ul
                              className={
                                "marker:text-main_default list-disc list-inside ml-5"
                              }
                            >
                              <div className="relative">
                                {/* list dot 주변에 길게 늘어진 선 ui */}
                                <div className="absolute ml-[2px] mt-[13px] w-[1px] h-[110px] bg-gray2 z-[-1]"></div>
                              </div>
                              <div className="flex ">
                                <li className={"text-h4 "}></li>

                                <div className="flex gap-[3px] mr-[12px] ">
                                  <input
                                    type={"number"}
                                    min={1}
                                    max={12}
                                    placeholder="월"
                                    className={
                                      "text-h3 text-gray w-[40px] outline-none"
                                    }
                                    value={acti.month}
                                    onChange={(e) => {
                                      let copy = [...activity];
                                      copy[i].month = e.target.value;
                                      setActivity(copy);
                                    }}
                                  />
                                  {/* {String(acti.month).padStart(2, "0")} */}
                                  {/* 월 변경 */}
                                  {/* <div className="flex flex-col "> //변경 버튼 따로 생성한 ui
                                    <span class="material-symbols-outlined  w-[20px] h-[16px] text-[18px] text-gray bg-gray3 cursor-pointer">
                                      expand_less
                                    </span>
                                    <span class="material-symbols-outlined  w-[20px] h-[16px] text-[18px] text-gray bg-gray3 cursor-pointer">
                                      expand_more
                                    </span>
                                  </div> */}
                                </div>
                                <input
                                  type="text"
                                  name="history"
                                  id="history"
                                  maxLength={200}
                                  placeholder="내용을 작성해주세요."
                                  value={acti.title}
                                  className="outline-none"
                                  onChange={(e) => {
                                    let copy = [...activity];
                                    copy[i].title = e.target.value;
                                    setActivity(copy);
                                  }}
                                />
                              </div>

                              <div className="flex justify-end ">
                                {/* 삭제버튼 클릭시 해당 내용 삭제 */}
                                <button
                                  className="w-[47px] h-[32px] bg-gray rounded-md text-white font-[400] text-[12px] mt-[5px]"
                                  onClick={() => {
                                    axios
                                      .delete(
                                        "/api/club_activity_history/" + acti._id
                                      )
                                      .then((res) => {
                                        axios
                                          .get(
                                            "/api/club_activity_history/" + id
                                          )
                                          .then((response) => {
                                            setActivity(response.data);
                                          });
                                      });
                                  }}
                                >
                                  삭제
                                </button>
                              </div>
                            </ul>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                );
              })}
            </div>
          </div>
          {/*홍보 게시판 프로그램-현재 ui만 있음 개발예정*/}
          <div
            className={
              "w-[430px] h-[512px] 2xl:w-[454px] 2xl:h-[512px] rounded-xl shadow-xl grid place-content-center"
            }
          >
            <div className="flex w-full gap-[17px]">
              <div className={"font-bold text-h2 py-6"}>홍보 게시판</div>
              {authorityOfClub <= 2 ? (
                <button
                  className="flex items-center ml-auto my-6 bg-[#29CCC7] text-white text-[18px] w-[167px] h-[40px] rounded-md"
                  onClick={() => {
                    alert("서비스 준비중입니다");
                  }}
                >
                  <div className="ml-[10px]">게시물 등록하기</div>
                  <span class="material-symbols-outlined">chevron_right</span>
                </button>
              ) : null}
            </div>
            <div className={"border-t border-gray2 w-[390px] h-[430px]"}>
              <div className={"h-[24px]"} />

              <div className={"text-midgray h-[340px] ml-[100px] pt-[100px]"}>
                둥록된 게시물이 없습니다.
              </div>
              <div className={"flex text-h6 ml-[140px]"}>
                <button
                  className={
                    "border w-[28px] h-[28px] text-center border-gray2 rounded"
                  }
                  onClick={() => {}}
                >
                  <span class="material-symbols-outlined">chevron_left</span>
                </button>
                <button className={"mx-2"} onClick={() => {}}>
                  <span className="font-bold">1</span> / 1
                </button>
                <button
                  className={
                    "border w-[28px] h-[28px] text-center border-gray2 rounded"
                  }
                  onClick={() => {}}
                >
                  <span class="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
              {/* {promotions.map((promotion) => {
                  return (
                    <>
                      <div
                        className={
                          "w-[171px] h-[180px] 2xl:w-[171px] 2xl:h-[322px] rounded-xl shadow-lg transition hover:scale-110"
                        }
                        onClick={() => {
                          navigate("/promotiondetail/" + promotion._id);
                        }}
                      >
                        <img
                          src={`${baseUrl}/${promotion.image_url}`}
                          alt={"1"}
                          className={"h-[258px]"}
                        ></img>
                        <div
                          className={"h-16 text-h5 font-bold px-[10px] py-2"}
                        >
                          {promotion.title}
                        </div>
                      </div>
                    </>
                  );
                })} */}
            </div>
          </div>
        </div>
        <div className={"h-[80px]"} />
      </div>
    </>
  );
}

function Addimg() {
  //동아리 이미지 수정 모달
  const [AddImg, setAddImg] = useRecoilState(addingImgState); //이미지 추가하는 모달 창 여는 변수

  return (
    <>
      <div className="fixed w-full h-full top-0 left-0 flex justify-center items-center z-[51]">
        <div className="bg-black w-full h-full opacity-50"></div>
        <div className="absolute w-[454px] h-[570px] bg-white rounded-2xl ">
          <div className="grid grid-rows-2 gap-[15px] px-[40px] py-[40px] h-[330px] ">
            <div>
              <div className="font-[700] text-[20px]">파일 첨부</div>
              <p className="text-[16px] mt-[10px]">
                10MB 이하의 jpg, jpeg, png, gif 이미지 파일만 업로드 가능합니다.
              </p>
            </div>
            <UploadImageForm />
          </div>
        </div>
      </div>
    </>
  );
}

const UploadImageForm = () => {
  const { id } = useParams(); // club_objid
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [AddImg, setAddImg] = useRecoilState(addingImgState); //이미지 추가하는 모달 창 여는 변수
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    // console.log(URL.createObjectURL(e.target.files[0]));
    // console.log(e.target.files[0]);
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleDelete = () => {
    setImage({ preview: "", raw: "" });
  };

  /*
  const fetchFn = (formData) => {
    return axios
      .post("/upload/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // console.log(res.data.image_url);
        axios
          .put(
            `/api/club/image/update?club_objid=${id}&image_url=${res.data.image_url}`
          )
          .then((res) => {
            setAddImg(false);
          });
      });
  };

  const useUploadImageQuery = (formData) => {
    return useQuery(["upload_image"], () => fetchFn(formData));
  };

  const { isLoading } = useUploadImageQuery();
*/

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // 여기도 매우 중요함. 여기의 "image_file" 이랑 fastapi의 받는 변수명 똑같이 맞춰야함
    formData.append("image_file", image.raw);

    if (image.raw == "") {
      Swal.fire({
        title: "올릴 이미지가 없습니다",
        text: "이미지를 업로드 해 주세요 !",
        icon: "error",
        confirmButtonText: "확인",
      });
      return false;
    }

    setLoading(true);

    axios
      .post("/upload/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // console.log(res.data.image_url);
        axios
          .put(
            `/api/club/image/update?club_objid=${id}&image_url=${res.data.image_url}`
          )
          .then((res) => {
            setAddImg(false);
            setLoading(false);
          });
      });
  };

  return (
    <div>
      <label
        className="flex flex-col justify-center text-center bg-main_mid w-[152px] h-[48px] text-white rounded-xl text-[18px] cursor-pointer"
        htmlFor={"upload-button"}
      >
        사진 파일 선택
      </label>
      <div className={"mt-[20px]"} />
      <div className="grid grid-rows-2">
        <div>
          <div className="flex">
            <div className="flex items-center gap-[15px] border border-[#E5E5E5] p-[10px] h-[150px]">
              <label htmlFor="upload-button" className={"cursor-pointer"}>
                {image.preview ? (
                  <img
                    src={image.preview}
                    alt="dummy"
                    width="140"
                    height="140"
                  />
                ) : (
                  <>
                    <span className="fa-stack fa-2x mt-3 mb-2">
                      {/*<i className="fas fa-circle fa-stack-2x" />*/}
                      <i className="fas fa-store fa-stack-1x fa-invesrse" />
                    </span>
                    <h5 className="text-center">사진을 업로드 하세요.</h5>
                  </>
                )}
              </label>
              <input
                type="file"
                id="upload-button"
                style={{ display: "none" }}
                onChange={handleChange}
                accept={"image/*"}
              />
              <div
                className="text-center flex flex-col justify-center rounded-full bg-[#C1C1C1] w-[20px] h-[20px] cursor-pointer hover:bg-red_error"
                onClick={handleDelete}
              >
                <span className="material-symbols-outlined text-white text-[10px] font-thin">
                  close
                </span>
              </div>
            </div>
          </div>
        </div>
        {loading ? (
          <div className="transition animate-pulse text-h2">업로드 중 ...</div>
        ) : (
          <div className=" flex place-self-end gap-[10px] text-[16px]">
            <button
              className="w-[87px] h-[40px] border border-[#E5E5E5] rounded-md"
              onClick={() => {
                setAddImg(false);
              }}
            >
              취소
            </button>
            <button
              className="bg-[#29CCC7] text-white w-[87px] h-[40px] rounded-md"
              onClick={handleUpload}
            >
              업로드완료
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
