import { atom } from "recoil";

//데이터 저장
export const clubsState = atom({
  key: "clubsState",
  default: [],
});

export const promotionsState = atom({
  key: "promotionsState",
  default: [],
});

export const noticesState = atom({
  key: "noticesState",
  default: [],
});

// 탭바
export const homeClubTabState = atom({
  key: "homeClubTabState",
  default: 0,
});

export const homePromotionTabState = atom({
  key: "homePromotionTabState",
  default: 0,
});

export const promotionTabState = atom({
  key: "promotionTabState",
  default: 0,
});

export const tokenState = atom({
  key: "tokenState",
  default: "",
});

export const userSchedulesState = atom({
  key: "userSchedulesState",
  default: [{ start_datetime: new Date(), end_datetime: new Date() }],
});
export const clubSchedulesState = atom({
  key: "clubSchedulesState",
  default: [{ start_datetime: new Date(), end_datetime: new Date() }],
});

export const selectedUserScheduleDateState = atom({
  key: "selectedUserScheduleDateState",
  default: new Date(),
});

export const selectedClubScheduleDateState = atom({
  key: "selectedClubScheduleDateState",
  default: new Date(),
});

export const addingImgState = atom({
  key: "addingImgState",
  default: false,
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {},
});

export const sidebar_ui =atom({
  key: "sidebar_ui",
  default: "standard",//로그인할 때 뜨는 사이드바 ui
});

export const userState =atom({
  key: "userState",
  default: [],//유저 정보
});

//가입 신청 현황 리스트 가져오기
export const listsState = atom({
  key: "listsState",
  default: [{
    user_objid: "",
    club_objid: "",
    title: "",
    club_name: "",
    approval: 1,
    classification: 0,
    data: {},
  }]
});


//신청서 보기 버튼 클릭시 user_objid가 state값에 젖아
export const viewButtonState = atom({
  key: "viewButtonState",
  default: 0,
})
