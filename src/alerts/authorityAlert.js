// authority(int)(0 ~ 4)를 class(str)계급으로 바꿔 줌
import Swal from "sweetalert2";

const _classFromAuthority = (authority) => {
  switch (authority) {
    case 0:
      return "어드민";
    case 1:
      return "동아리 회장";
    case 2:
      return "동아리 임원";
    case 3:
      return "동아리원";
    case 4:
      return "비동아리원";
    default:
      return null;
  }
};

const _verifyAndPrintAuthority = (error) => {
  if (error.response.data.detail.authority) {
    return `동아리 내 현재 당신의 위치는 "${_classFromAuthority(
      error.response.data.detail.authority
    )}" 입니다.`;
  } else {
    return "";
  }
};

// catch문에서 받은 error(err) 을 받아서 파라미터로 제공
/**
 * 대신 commonAlert 를 사용해주세요.
 * */
export const CustomAuthorityErrorAlert = (error) => {
  Swal.fire({
    title: "에러 !",
    text: `${error.response.data.detail.message} ${_verifyAndPrintAuthority(
      error
    )}`,
    icon: "error",
    confirmButtonText: "확인",
  });
};
