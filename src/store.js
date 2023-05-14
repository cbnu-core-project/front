import { atom } from "recoil";

export const postsState = atom({
  key: "postsState",
  default: [],
});

export const homeTabState = atom({
  key: "homeTabState",
  default: 0,
});
