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

export const schedulesState = atom({
  key: "schedulesState",
  default: [{ start_datetime: new Date(), end_datetime: new Date() }],
});

export const selectedDateState = atom({
  key: "selectedDateState",
  default: new Date(),
});

export const addingImgState = atom({
  key: "addingImgState",
  default: false,
});

export const club_application_form = atom({
  key: "club_application_form",
  default: [],
});
