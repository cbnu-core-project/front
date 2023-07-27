//동아리 관리자 가입 신청 양식 설정
import DropdownMenu from "../../components/DropDownMenu";
import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../common/global";

export default function UserApplicationForm(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [gender, setGender] = useState([false]);
  const [forms, setForms] = useState([]);
  const [type, setType] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  

  const handleMenuClick = (props) => {
    setIsOpen(!isOpen);
  };

  const [data, setData] = useState({
    title: "",
    content: "",
    questions: [{}],
  });
  const k = [1, 2, 3, 4, 5];
  var d = new Date();

  function createApplicationForm() {
    axios
      .put(`api/club_application_form/${props.id}`, {
        title: title,
        content: content,
        club_objid: `${props.id}`,
        club_name: "1",
        deadline: d,
        announcement_of_acceptance: d,
        realname: true,
        department: true,
        school_number: true,
        gender: [true, true],
        phone_number: [true, true],
        email: [true, true],
        address: [true],
        questions: forms,
      })
      .then((res) => {
        axios.get(`api/club_application_form/${props.id}`).then((response) => {
          setData(response.data[0]);
          console.log(data);
        });
      });
  }

  function getClubApplicationForm() {
    //주요활동내역 가져옴
    axios.get(`api/club_application_form/${props.id}`).then((res) => {
      setData(res.data[0]);
    });
  }

  useEffect(() => {
    getClubApplicationForm();

  }, []);

  return (
    <div className={"text-h1 font-bold"}>
      <p className={"text-sub text-center"}> 가입 신청서 양식 설정</p>
      <div className={"w-[780px] rounded-xl shadow-lg mx-auto"}>
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2 mt-[32px]"}>제목</div>
          <input
            className={
              "bg-gray3 h-[48px] w-[550px] rounded-xl text-h5 p-3 mt-[32px]"
            }
            value={title}
            onChange={(e) => {
              if (e.target.value.length <= 40) {
                setTitle(e.target.value);
              }
            }}
            placeholder={"ex) OOO 3기 팀원 모집"}
          ></input>
        </div>

        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>설명</div>
          <input
            className={"bg-gray3 h-[48px] w-[550px] rounded-xl text-h5 p-3"}
            placeholder={"ex) 가입신청 관련 유의사항 및 공지내용"}
            value={content}
            onChange={(e) => {
              if (e.target.value.length <= 40) {
                setContent(e.target.value);
              }
            }}
          ></input>
        </div>
        <div
          className={
            "w-[700px] h-auto mx-auto mt-[32px] text-h3 flex font-bold"
          }
        >
          신청서로 받아볼 항목들을 선택해주세요.
        </div>
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>
            이름 <span className={"text-sub"}>(필수)</span>
          </div>
          <div className={"w-[150px] p-2"}>
            <input
              type="checkbox"
              checked
              disabled
              className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
              value={true}
            />
          </div>
        </div>
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>
            학과 <span className={"text-sub"}>(필수)</span>
          </div>
          <div className={"w-[150px] p-2"}>
            <input
              type="checkbox"
              checked
              disabled
              className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
              value={true}
            />
          </div>
        </div>
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>
            학번 <span className={"text-sub"}>(필수)</span>
          </div>
          <div className={"w-[150px] p-2"}>
            <input
              type="checkbox"
              checked
              disabled
              className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
              value={true}
            />
          </div>
        </div>
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>
            연락처 <span className={"text-sub"}>(필수)</span>
          </div>
          <div className={"w-[150px] p-2"}>
            <input
              type="checkbox"
              checked
              disabled
              className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
              value={true}
            />
          </div>
        </div>
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>성별</div>
          <div className={"w-[150px] p-2"}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
              value={true}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
          </div>
          <div className={"w-[150px] p-2"}>필수 여부</div>
          <div className={"w-[150px] p-2"}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
              value={true}
              onChange={(e) => {
                let copy = [gender];
                console.log(copy);
                copy.push(e.target.value)
                setGender(copy);
                console.log(gender);
              }}
            />
          </div>
        </div>
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>이메일</div>
          <div className={"w-[150px] p-2"}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
            />
          </div>
          <div className={"w-[150px] p-2"}>필수 여부</div>
          <div className={"w-[150px] p-2"}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
            />
          </div>
        </div>
        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2"}>주소</div>
          <div className={"w-[150px] p-2"}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
            />
          </div>
          <div className={"w-[150px] p-2"}>필수 여부</div>
          <div className={"w-[150px] p-2"}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
            />
          </div>
        </div>

        <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
          <div className={"w-[150px] p-2 flex"}>
            질문 추가
            <button
              className="bg-gray2 h-7 w-7 rounded-full flex items-center justify-center text-black ml-[10px] mt-[3px]"
              onClick={() => {
                let copy = [...forms];
                copy.unshift({
                  type: 0,
                  required: true,
                  question: "m",
                });
                setForms(copy);
              }}
            >
              +
            </button>
          </div>
        </div>
        {console.log(forms)}
        {forms.map((form) => {
          return (
            <div className="">
              <div
                className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex "}
              >
                {/*주관식인지 첨부파일인지 선택하는 드롭박스*/}
                <div className="relative inline-block">
                  <button
                    className="py-2 px-4 bg-gray3 text-black text-h5 rounded-lg focus:outline-none"
                    onClick={handleMenuClick}
                  >
                    형식 선택 ▾
                  </button>
                  {isOpen && (
                    <div className="absolute mt-2 bg-gray3 rounded-lg shadow-lg">
                      <a
                        href="#"
                        className="block rounded-lg  py-2 px-4 text-h5 hover:bg-gray"
                        onClick={() => {
                          let copy = type;
                          copy = 0;
                          setType(copy);
                          form.type = type
                        }}
                        
                      >
                        주관식
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg  py-2 px-4 text-h5 hover:bg-gray"
                        onClick={() => {
                          let copy = type;
                          copy = 1;
                          setType(copy);
                          form.type = type

                        }}
                      >
                        첨부파일
                      </a>
                    </div>
                  )}
                </div>
                <div className={"w-[150px] p-2 text-h5 ml-[20px]"}>
                  필수 여부
                </div>
                <div className={"w-[150px] p-2"}>
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-black rounded-sm border"
                  />
                </div>
              </div>
              <div
                className={"w-[700px] h-auto mx-auto mt-[16px] text-h3 flex"}
              >
                <input
                  className={
                    "bg-gray3 h-[48px] w-[1000px] rounded-xl text-h5 p-3"
                  }
                  placeholder={"제목을 입력해주세요."}
                ></input>
              </div>
            </div>
          );
        })}

        <div
          className={
            "w-[700px] h-auto mx-auto mt-[16px] text-h3 flex justify-end mb-[10px] "
          }
        >
          <button
            type={"submit"}
            className={
              "w-[87px] h-[40px] text-h5 text-black border border-sub bg-white rounded-md mr-[10px]"
            }
          >
            미리보기
          </button>
          <button
            type={"submit"}
            className={"w-[87px] h-[40px] text-h5 text-white bg-sub rounded-md"}
            onClick={() => {
              createApplicationForm();
            }}
          >
            제출하기
          </button>
        </div>
      </div>
    </div>
  );
}
