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

export const PromotionTabState = atom({
  key: "PromotionTabState",
  default: 0,
});
