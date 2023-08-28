import UserApplicationForm from "../../components/clubsignup/UserApplicationForm";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl } from "../../common/global";
import { useRecoilState, useSetRecoilState } from "recoil";
import { listsState, userInfoState, viewButtonState } from "../../store";
import ViewApplicationForm from "../../components/clubsignup/ViewApplicationForm";
import { usePagination } from "@mantine/hooks";
import { Pagination } from "@mantine/core";

axios.defaults.baseURL = baseUrl;

export default function ClubSignUp() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    gender: [],
    phone_number: [],
    email: [],
    address: [],
    questions: [],
    school_number: [],
  });
  const [listData, setListData] = useRecoilState(listsState);
  const [submitData, setSubmitData] = useState({});

  //가입 신청 양식 설정한 것(form)을 데이터 가져오는 함수
  function getClubApplicationForm() {
    //주요활동내역 가져옴
    axios.get(`api/club_application_form/club_objid/${id}`).then((res) => {
      setFormData(res.data[0]);
    });
  }
  //해당 동아리 지원한 사람들의 리스트 -> 관리자 입장에서 approval로 승인, 거절 선택할 수 있음
  function getClubApplicationLists() {
    axios.get(`api/club_application_lists/${id}`).then((res) => {
      setListData(res.data);
    });
  }

  //동아리에 제출한 내용 가져옴
  function getClubApplicationSubmit() {
    axios.get(`api/club_application_submit/club_objid/${id}`).then((res) => {
      setSubmitData(res.data);
    });
  }

  useEffect(() => {
    getClubApplicationForm();
    getClubApplicationLists();
    getClubApplicationSubmit();
  }, []);

  return (
    <>
      <UserSignUp formData={formData} id={id} listData={listData} />
      <ManagerSignUp formData={formData} id={id} submitData={submitData} />
    </>
  );
}

//일반 유저가 동아리 신청할 때 보이는 양식
function UserSignUp(props) {
  const [realname, setRealName] = useState("");
  const [department, setDepartment] = useState("");
  const [schoolNumber, setSchoolNumber] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [questions, setQuestions] = useState([]);
  const [shortForm, setShortForm] = useState(""); //questions 주관식
  const [attachment, setAttachment] = useState(""); // questions 첨부파일
  const [post, setPost] = useState("");
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  //파일
  const [filename, setFilename] = useState([]);
  var d = new Date();

  const required = (bool_list) => {
    if (bool_list[1] == true) {
      return <span className={"text-sub"}>(필수)</span>;
    } else {
      return null;
    }
  };

  const handleDelete = () => {
    // setFiles({ raw: "" });
  };

  const uploadFile = (e, data, i) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    axios
      .post("/upload/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        let copy = [...questions];
        console.log(i);
        copy[i] = {
          type: 1,
          question: data.question,
          answer: res.data.file_url,
        };
        setQuestions(copy);

        let copy2 = [...filename];
        copy2[i] = res.data.filename;
        setFilename(copy2);
      });
  };

  const testType = (data, i) => {
    //주관식
    if (data.type == 0) {
      return (
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>
            {data.question}
            {data.required == true ? (
              <span className={"text-sub"}>(필수)</span>
            ) : null}
          </div>
          <input
            className={
              "bg-gray3 w-[550px] h-[300px] rounded-xl text-h5 overflow-y-scroll p-3"
            }
            onChange={(e) => {
              if (e.target.value.length <= 2000) {
                let copy = [...questions];
                copy[i] = {
                  type: 0,
                  question: data.question,
                  answer: e.target.value,
                };
                setQuestions(copy);
              }
            }}
          ></input>
        </div>
      );
    } else if (data.type == 1) {
      //첨부파일일 때
      return (
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>
            {data.question}
            {data.required == true ? (
              <span className={"text-sub"}>(필수)</span>
            ) : null}
          </div>
          <div>
            <div className="w-[80px] h-[80px] bg-gray3 rounded-xl text-h8 font-normal relative">
              <label
                for={"input_file" + i}
                className="block p-4 -bottom-10 w-[80px] h-[80px] bg-gray3 rounded-xl text-h8 font-normal overflow-hidden"
              >
                {filename[i] == undefined ? (
                  <>
                    <img
                      src="/images/attach_file.png"
                      className="px-[14px] mb-1"
                    ></img>
                    파일 추가
                  </>
                ) : (
                  filename[i]
                )}
              </label>
            </div>
            <input
              type="file"
              accept="*.*"
              required
              id={"input_file" + i}
              className="hidden"
              onChange={(e) => uploadFile(e, data, i)}
              // onChange={(e) => {}}
            />
          </div>
        </div>
      );
    }
  };

  // useEffect(() => { console.log(questions)}, [questions]);

  return (
    <div className={"text-h1 font-bold "}>
      <p className={"text-sub ml-[618px]"}>가입 신청서</p>

      {/*가입신청 양식이 설정되지 않을 경우 예외처리*/}
      {props.formData == undefined ? (
        <div className={"mt-[50px]"}>
          <img
            src={"/images/금지표시.jpg"}
            alt="img"
            className={"rounded-lg h-[150px] ml-[628px]"}
          />
          <div
            className={
              "ml-[530px] mt-12 w-[360px] px-[24px] py-[32px] font-[Pv] rounded-md font-bold text-center text-h5 text-white bg-sub "
            }
          >
            {" "}
            아직 가입신청 양식이 생성되지 않았습니다!
          </div>
        </div>
      ) : (
        <>
          {/*가입신청 양식이 설정되었을 때*/}
          <div className={"w-[780px] h-auto rounded-xl shadow-lg mx-auto"}>
            {/*이름 (보이게하는것, 필수인지 체크)*/}
            {props.formData.realname == true ? (
              <div
                className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}
              >
                <div className={"w-[150px] p-2 mt-[32px]"}>
                  이름
                  <span className={" text-sub"}>(필수)</span>
                </div>
                <input
                  className={
                    "bg-gray3 h-[48px] rounded-xl text-h5 p-3 mt-[32px]"
                  }
                  placeholder={"ex) 홍길동"}
                  value={realname}
                  onChange={(e) => {
                    if (e.target.value.length <= 12) {
                      setRealName(e.target.value);
                    }
                  }}
                ></input>
              </div>
            ) : (
              <div></div>
            )}

            {/*학과 (보이게 하 는것, 필수인지 체크)*/}
            {props.formData.department == true ? (
              <div
                className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}
              >
                <div className={"w-[150px] p-2"}>
                  학과 <span className={"text-sub"}>(필수)</span>
                </div>
                <input
                  className={"bg-gray3 h-[48px] rounded-xl text-h5 p-3"}
                  placeholder={"ex) OO학과"}
                  value={department}
                  onChange={(e) => {
                    if (e.target.value.length <= 16) {
                      setDepartment(e.target.value);
                    }
                  }}
                ></input>
              </div>
            ) : (
              <div></div>
            )}

            {/*학번 (보이게 하는 것, 필수인지 체크)*/}
            {props.formData.school_number == true ? (
              <div
                className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}
              >
                <div className={"w-[150px] p-2"}>
                  학번 <span className={"text-sub"}>(필수)</span>
                </div>
                <input
                  className={"bg-gray3 h-[48px] rounded-xl text-h5 p-3"}
                  placeholder={"ex) 2021070015"}
                  value={schoolNumber}
                  onChange={(e) => {
                    if (e.target.value.length <= 10) {
                      setSchoolNumber(e.target.value);
                    }
                  }}
                ></input>
              </div>
            ) : (
              <></>
            )}

            {/*성별 (보이게 하는 것, 필수인지 체크)*/}
            {props.formData.gender[0] == true ? (
              <form
                className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}
              >
                <div className={"w-[150px] p-2 "}>
                  성별 {required(props.formData.gender)}
                </div>
                <div className="">
                  <input
                    type="radio"
                    className="form-checkbox h-5 w-5 text-black rounded-sm border-black border my-[11px]"
                    value={"남자"}
                    id="male"
                    name="gender"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                  <label className="text-h5 font-normal ml-[4px]" for={"male"}>
                    남자
                  </label>
                </div>
                <div className=" ml-[8px]">
                  <input
                    type="radio"
                    className="form-checkbox h-5 w-5 text-black rounded-sm border-black border my-[11px]"
                    value={"여자"}
                    id="female"
                    name="gender"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                  <label
                    className="text-h5 font-normal ml-[4px]"
                    for={"female"}
                  >
                    여자
                  </label>
                </div>
              </form>
            ) : (
              <></>
            )}

            {/*연락처 (보이게 하는 것, 필수인지 체크)*/}
            {props.formData.phone_number[0] == true ? (
              <div
                className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}
              >
                <div className={"w-[150px] p-2"}>
                  연락처 {required(props.formData.phone_number)}
                </div>
                <input
                  className={"bg-gray3 h-[48px] rounded-xl text-h5 p-3"}
                  placeholder={"ex) 010-0000-0000"}
                  value={phoneNumber}
                  onChange={(e) => {
                    if (e.target.value.length <= 13) {
                      setPhoneNumber(e.target.value);
                    }
                  }}
                ></input>
              </div>
            ) : (
              <div></div>
            )}

            {/*이메일 (보이게 하는 것, 필수인지 체크)*/}
            {props.formData.email[0] == true ? (
              <div
                className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}
              >
                <div className={"w-[150px] p-2"}>
                  이메일 {required(props.formData.email)}
                </div>
                <input
                  className={"bg-gray3 h-[48px] rounded-xl text-h5 p-3"}
                  placeholder={"ex) 0000@naver.com"}
                  value={email}
                  onChange={(e) => {
                    if (e.target.value.length <= 30) {
                      setEmail(e.target.value);
                    }
                  }}
                ></input>
              </div>
            ) : (
              <div></div>
            )}

            {/*주소 (보이게 하는 것, 필수인지 체크)*/}
            {props.formData.address[0] == true ? (
              <div
                className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}
              >
                <div className={"w-[150px] p-2"}>
                  주소
                  {required(props.formData.address)}
                </div>
                <input
                  className={
                    "bg-gray3 h-[48px] w-[550px] rounded-xl text-h5 p-3"
                  }
                  placeholder={"주소를 작성해주세요."}
                  value={address}
                  onChange={(e) => {
                    if (e.target.value.length <= 40) {
                      setAddress(e.target.value);
                    }
                  }}
                ></input>
              </div>
            ) : null}
            {/*추가적으로 설정*/}
            {props.formData.questions.map((data, i) => {
              return <>{testType(data, i)}</>;
            })}

            {/*제출하면 lists에 신청서 제출하게 된다.*/}
            <button
              type={"submit"}
              className={
                "w-[87px] h-[40px] text-h5 text-white bg-sub rounded-md transition hover:scale-110"
              }
              onClick={() => {
                const data = {
                  title: props.formData.title,
                  content: props.formData.content,
                  club_objid: props.id,
                  user_objid: userInfo._id.toString(),
                  club_name: props.formData.club_name,
                  deadline: d,
                  announcement_of_acceptance: d,
                  realname: realname,
                  department: department,
                  school_number: schoolNumber,
                  gender: gender,
                  phone_number: phoneNumber,
                  email: email,
                  address: address,
                  questions: questions,
                };
                axios
                  .post("api/club_application_lists", {
                    user_objid: userInfo._id.toString(),
                    club_objid: props.id,
                    title: props.formData.title,
                    club_name: props.formData.club_name,
                    approval: 1,
                    classification: 0,
                    data: data,
                  })
                  .then((res) => {
                    axios
                      .get("/api/club_application_lists")
                      .then((response) => {
                        setPost(response.data);
                      });
                  });
                alert("제출됨");
              }}
            >
              제출하기
            </button>
          </div>
        </>
      )}
    </div>
  );
}
//동아리 관리자 가입 신청 현황
function ManagerSignUp(props) {
  //가입 양식 설정하는 페이지 뜨도록 하는 state
  const [modal, setModal] = useState(false);
  //승인
  const [state, setState] = useState(false);
  const [listData, setListData] = useRecoilState(listsState);
  const [viewBtnState, setViewBtnState] = useRecoilState(viewButtonState);
  const [page, onChange] = useState(1);
  const [approvalModal, setApprovalModal] = useState(-1);

  const pagination = usePagination({
    total: Math.ceil(listData.length / 8),
    page,
    onChange,
  });

  // //전체 선택하게 하기
  // const checkAll = (hello) => {
  //   const checkboxes = document.getElementsByName("click");

  //   checkboxes.forEach((checkbox) => {
  //     checkbox.checked = hello.checked;
  //   });
  // };

  //승인 상태 확인하는 className 함수 1: 대기 2: 불합격 0: 합격
  const approvalClassName = (approval) => {
    if (approval == 1) {
      return "signup_wait";
    } else if (approval == 2) {
      return "signup_deny";
    } else {
      return "signup_done";
    }
  };
  //승인 상태 확인하는 글자 함수
  const approvalState = (approval) => {
    if (approval == 1) {
      return "승인대기";
    } else if (approval == 2) {
      return "불합격";
    } else {
      return "합격";
    }
  };

  // useEffect(() => {

  // }, []);

  return (
    <>
      <div
        className={
          modal == true
            ? "top-0 bottom-0 right-0 left-0 z-100 h-auto bg-black bg-opacity-40"
            : ""
        }
      >
        <div className={" ml-[64px] w-[1306px] h-[40px] flex"}>
          <div className={"text-h1 font-bold text-sub ml-[580px] -z-10 "}>
            가입신청 현황
          </div>

          <button
            className={
              "ml-auto w-[155px] h-[40px] rounded-md bg-sub text-white flex py-[10px] pl-[14px]"
            }
            onClick={() => {
              setModal(!modal);
            }}
          >
            <p className="text-h3 font-semibold">가입 양식 설정</p>
            <button className="material-symbols-outlined">chevron_right</button>
          </button>
        </div>
        <div className={"h-[26px]"} />
        <div className="relative">
          {state == true ? <ViewApplicationForm /> : null}
          {modal == true ? (
            <UserApplicationForm
              formData={props.formData}
              id={props.id}
              objid={props.objid}
            />
          ) : null}
          <div
            className={
              "w-[1306px] h-[648px] ml-[64px] rounded-xl overflow-hidden shadow-xl "
            }
          >
            <div
              className={
                "h-[72px] border-b-[2px] border-gray2 grid justify-center"
              }
            >
              <div
                className={
                  "my-[16px] mx-[40px] w-[1226px] h-[40px] py-[6px] flex text-h5"
                }
              >
                <div className="w-[48px]">
                  <p className="">선택</p>
                </div>

                <div className={"w-[56px]"}>
                  <p className="text-center">순번</p>
                </div>

                <div className="w-[132px]">
                  <p className="text-center">승인 현황</p>
                </div>

                <div className={"w-[85px]"}>
                  <p className="text-center">이름</p>
                </div>

                <div className={"w-[152px]"}>
                  <p className={"text-center"}>학과</p>
                </div>

                <div className={"w-[147px]"}>
                  <p className="text-center">학번</p>
                </div>

                <div className={"w-[170px]"}>
                  <p className="text-center">전화번호</p>
                </div>

                <div className={"w-[143px]"}>
                  <p className="text-center">신청 일자</p>
                </div>

                <div className={"w-[156px] grid justify-center"}>
                  <p className="text-center">신청서 보기</p>
                </div>

                <div className={"w-[95px] grid justify-end"}>
                  <p className="text-center">승인</p>
                </div>
              </div>
            </div>
            {/*정보 가져오기*/}
            {listData.slice((page - 1) * 8, page * 8).map((post, i) => {
              return (
                <>
                  <li
                    className={
                      i === 8
                        ? "px-[45px] py-[16px] flex justify-betweenrounded-[20px]"
                        : "px-[45px] py-[16px] flex justify-between border-b-[0.5px] border-gray2  "
                    }
                  >
                    <div className={"flex w-[1216px] h-[40px]"}>
                      <div className={"w-[48px]"}>
                        <input
                          type="checkbox"
                          name="click"
                          value={i + 8 * (page - 1) + 1}
                          className="w-[17px] h-[17px] my-[9px] -z-10"
                          // onClick={checkAll}
                        ></input>
                      </div>

                      <div className={"w-[56px]"}>
                        <div className={"py-[6px] text-center"}>
                          {i + 8 * (page - 1) + 1}
                        </div>
                      </div>
                      <div className="w-[132px] grid justify-center">
                        <button className={approvalClassName(post.approval)}>
                          {approvalState(post.approval)}
                        </button>
                      </div>
                      <div className={"w-[85px]"}>
                        <p className={"text-h5 py-[6px] text-center text-gray"}>
                          {post.data.realname}
                        </p>
                      </div>
                      <div className={"w-[152px]"}>
                        <p className={"text-h5 text-center py-[6px]"}>
                          {post.data.department}
                        </p>
                      </div>
                      <div className={"w-[147px]"}>
                        <p className={"text-h5 text-center py-[6px]"}>
                          {post.data.school_number}
                        </p>
                      </div>
                      <div className={"w-[170px]"}>
                        <p className={"text-h5 py-[6px] text-center"}>
                          {post.data.phone_number}
                        </p>
                      </div>
                      <div className={"w-[143px]"}>
                        <p className={"text-h5 text-center py-[6px]"}>
                          2023.07.06
                        </p>
                      </div>
                      <div className={"w-[156px] grid justify-center"}>
                        <button
                          className={
                            "border border-[#C1C1C1] rounded-md w-[100px] h-[40px] transition hover:scale-110"
                          }
                          onClick={() => {
                            setState(!state);
                            setViewBtnState(i + 8 * (page - 1));
                          }}
                        >
                          신청서보기
                        </button>
                      </div>
                      <div className={"w-[140px] "}>
                        <button
                          className={"signup_accept"}
                          onClick={() => {
                            // {
                            //   post.approval == 1
                            //     ? axios.post(
                            //         `api/club_application_lists/approval?objid=${post._id}&approval=0`
                            //       )
                            //     : axios.post(
                            //         `api/club_application_lists/approval?objid=${post._id}&approval=2`
                            //       );
                            // }
                            // console.log(i)
                            if (i + 8 * (page - 1) + 1 === approvalModal) {
                              setApprovalModal(-1);
                            } else {
                              setApprovalModal(i + 8 * (page - 1) + 1);
                              // console.log(i)
                            }
                          }}
                        >
                          승인여부
                        </button>

                        {/*멤버의 합격, 불합격, 대기를 선택할 수 있도록 만든 모달창*/}
                        {approvalModal === i + 8 * (page - 1) + 1 ? (
                          <div className="w-[200px] h-[200px] border absolute bg-white mt-[15px]">
                            <div className="m-6 grid gap-4">
                              <button
                                className="signup_accept"
                                onClick={() => {
                                  axios.post(
                                    `api/club_application_lists/approval?objid=${post._id}&approval=0`
                                  );
                                }}
                              >
                                합격
                              </button>
                              <button
                                className="signup_accept"
                                onClick={() => {
                                  axios.post(
                                    `api/club_application_lists/approval?objid=${post._id}&approval=2`
                                  );
                                }}
                              >
                                불합격
                              </button>
                              <button
                                className="signup_accept"
                                onClick={() => {
                                  axios.post(
                                    `api/club_application_lists/approval?objid=${post._id}&approval=1`
                                  );
                                }}
                              >
                                대기
                              </button>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </div>

          <div className="flex content-between">
            <button
              className="w-[129px] h-[40px] bg-[#C1C1C1] rounded-md text-white text-h3 -z-10 "
              // onClick={checkAll}
            >
              전체 선택
            </button>
            <button className="w-[129px] h-[40px] bg-[#C1C1C1] rounded-md text-white text-h3 -z-10">
              선택 삭제
            </button>
          </div>
          <div className={"w-full p-8 flex justify-center"}>
            <div>
              <Pagination
                total={Math.ceil(listData.length / 8)}
                boundaries={1}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
