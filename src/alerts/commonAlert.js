import Swal from "sweetalert2";

// authority(int)(0 ~ 4)를 class(str)계급으로 바꿔 줌
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

/**
 * catch에서 받은 error를 1번 파라미터로 넘겨줌.
 * 2번 파라미터에는 title을 적어줌
 * */
export const commonErrorAlert = (error, title) => {
  Swal.fire({
    title: title,
    text: `${error.response.data.detail.message} ${_verifyAndPrintAuthority(
      error
    )}`,
    icon: "error",
    confirmButtonText: "확인",
  });
};

/**
 * 삭제 확인 버튼을 눌렀을 때 실행될 함수를 파라미터로 넣어준다.
 * */
export const commonDeleteConfirmAlert = (deleteFunction) => {
  Swal.fire({
    title: "정말로 삭제 하시겠습니까 ?",
    text: "한 번 삭제하면, 다시 되돌릴 수 없습니다.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "네, 삭제하겠습니다.",
    cancelButtonText: "취소",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteFunction();
    }
  });
};
