import DropdownMenu from '../../components/DropDownMenu';

export default function ClubSignUp() {
    return (
        <>
            <UserSignUp />
        </>
    );
}
  

function UserSignUp() {
    return (
        <div className={"text-h1 font-bold"}>
            <p className={"text-sub text-center"}> 가입 신청서 양식 설정</p>
            <div className={"w-[780px] max-h-screen rounded-xl shadow-lg mx-auto"}>
                <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
                    <div className={"w-[150px] p-2 mt-[32px]"}>
                        제목
                    </div>
                    <input
                        className={"bg-gray3 h-[48px] w-[550px] rounded-xl text-h5 p-3 mt-[32px]"}
                        placeholder={"ex) OOO 3기 팀원 모집"}
                    ></input>
                </div>
                <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
                    <div className={"w-[150px] p-2"}>
                        설명
                    </div>
                    <input
                        className={"bg-gray3 h-[48px] w-[550px] rounded-xl text-h5 p-3"}
                        placeholder={"ex) 가입신청 관련 유의사항 및 공지내용"}
                    ></input>
                </div>
                <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex font-bold"}>
                    신청서로 받아볼 항목들을 선택해주세요.
                </div>
                <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
                    <div className={"w-[150px] p-2"}>
                        이름 <span className={"text-sub"}>(필수)</span>
                    </div>
                    <div className={"w-[150px] p-2"}>
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
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
                            className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
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
                            className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
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
                            className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
                        />
                    </div>
                </div>
                <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
                    <div className={"w-[150px] p-2"}>
                        성별 
                    </div>
                    <div className={"w-[150px] p-2"}>
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
                        />
                    </div>
                    <div className={"w-[150px] p-2"}>
                        필수 여부
                    </div>
                    <div className={"w-[150px] p-2"}>
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
                        />
                    </div>
                </div>
                <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
                    <div className={"w-[150px] p-2"}>
                        이메일
                    </div>
                    <div className={"w-[150px] p-2"}>
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
                        />
                    </div>
                    <div className={"w-[150px] p-2"}>
                        필수 여부
                    </div>
                    <div className={"w-[150px] p-2"}>
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
                        />
                    </div>
                </div>
                <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
                    <div className={"w-[150px] p-2"}>
                        주소
                    </div>
                    <div className={"w-[150px] p-2"}>
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-black rounded-sm border-black border mr-2 mt-[5px]"
                        />
                    </div>
                    <div className={"w-[150px] p-2"}>
                        필수 여부
                    </div>
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
                      <button className="bg-gray2 h-7 w-7 rounded-full flex items-center justify-center text-black ml-[10px] mt-[3px]">
                           +
                      </button>
                    </div>
                </div>

                <div className={"w-[700px] h-auto mx-auto mt-[32px] text-h3 flex"}>
                    <DropdownMenu/>
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

                <div className={"w-[700px] h-auto mx-auto mt-[16px] text-h3 flex"}>
                    <input
                        className={"bg-gray3 h-[48px] w-[1000px] rounded-xl text-h5 p-3"}
                        placeholder={"질문을 입력해주세요."}
                    ></input>
                </div>

        
                

        

                <div className={"w-[700px] h-auto mx-auto mt-[16px] text-h3 flex justify-end mb-[10px] "}>
                    <button type={"submit"} className={"w-[87px] h-[40px] text-h5 text-black border border-sub bg-white rounded-md mr-[10px]"}>
                       미리보기
                    </button>  
                    <button type={"submit"} className={"w-[87px] h-[40px] text-h5 text-white bg-sub rounded-md"}>
                       제출하기
                    </button> 
                </div>

        
            </div>
        </div>
    );
}









