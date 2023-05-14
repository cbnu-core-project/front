import { atom } from "recoil";

export const postsState = atom({
  key: "postsState",
  default: [],
});

export const homeClubTabState = atom({
  key: "homeClubTabState",
  default: 0,
});

export const homePromotionTabState = atom({
  key: "homePromotionTabState",
  default: 0,
});
