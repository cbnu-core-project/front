export default function ClubFAQ() {
  let count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12];
  return (
    <>
      <div className={"text-[38px] font-bold text-main ml-[628px]"}>자주 묻는 질문</div>
      <div className={"mt-[36px]"}/>
      <ul
        className={
          "overflow-hidden rounded-[20px] text-h4 w-[1306px] h-[704px] shadow-lg overflow-y-scroll mx-auto"
        }
      >
        {count.map((index) => {
          return (
            <li
              className={
                index === 10
                  ? "px-[24px] py-[32px] flex justify-between hover:bg-gray3 rounded-[20px]"
                  : "px-[24px] py-[32px] flex justify-between border-b-[0.5px] border-gray2 hover:bg-gray3 "
              }
            >
                <div className={"flex"}>
              <p className={"text-main text-h4 "}>Q</p>
              <p className={"ml-5"}>코어는 어떤 사람을 뽑나요?</p>
              </div>
              <button class="material-symbols-outlined"> expand_more </button>
            </li>
          );
        })}
      </ul>
      <div className={"h-[117px]"}/>
    </>
  );
}
