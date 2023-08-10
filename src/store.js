import { atom } from "recoil";
import dayjs from "dayjs";

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
  default: [
    {
      title: "",
      content: "",
      color: "",
      start_datetime: new Date(),
      end_datetime: new Date(),
    },
  ],
});

export const selectedUserScheduleDateState = atom({
  key: "selectedUserScheduleDateState",
  default: new Date(),
});

export const selectedClubScheduleDateState = atom({
  key: "selectedClubScheduleDateState",
  default: dayjs("1999-08-25"),
});

export const addingImgState = atom({
  key: "addingImgState",
  default: false,
});

// 로그인 되었으면, 여기에 로그인한 유저정보가 기본적으로 저장됨.
// 유저정보 필요할 때 이 state를 불러와서 사용하면 됨.
export const userInfoState = atom({
  key: "userInfoState",
  default: { nickname: "", realname: "", clubs: [], interestes: [] },
});

export const sidebar_ui = atom({
  key: "sidebar_ui",
  default: "standard", //로그인할 때 뜨는 사이드바 ui
});

export const postStatusState = atom({
  key: "postStatusState",
  default: false,
});

export const updateScheduleState = atom({
  key: "updateScheduleState",
  default: {
    club_objid: "",
    club_name: "",
    title: "",
    start_datetime: dayjs(),
    end_datetime: dayjs(),
    place: "",
    users: [],
    content: "",
    color: "red",
  }, // 수정할 기존의 스케줄 데이터
});

export const clubScheduleSelectedStatusState = atom({
  key: "clubScheduleSelectedStatus",
  default: false,
});
