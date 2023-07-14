import axios from "axios";
import { getCookie, removeCookie, setCookie } from "./cookie";

export function setAccessToken(access_token) {
  if (access_token) {
    localStorage.setItem("access_token", access_token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
  } else {
    localStorage.removeItem("access_token");
    delete axios.defaults.headers.common["Authorization"];
  }
}

export function setRefreshToken(refresh_token) {
  if (refresh_token) {
    setCookie("refresh_token", refresh_token, {
      path: "/",
      secure: true,
      maxAge: 60 * 60 * 24 * 7,
    });
  } else {
    removeCookie("refresh_token");
  }
}

export function getAccessToken() {
  const access_token = localStorage.getItem("access_token");
  if (access_token) {
    return access_token;
  } else {
    return false;
  }
}
export function getRefreshToken() {
  const refresh_token = getCookie("refresh_token");
  if (refresh_token) {
    return refresh_token;
  } else {
    return false;
  }
}

// access_token 디코딩을 위한 함수
function decodeToken(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  const decodedData = JSON.parse(window.atob(base64));
  return decodedData;
}

export function checkAccessTokenAndRefreshToken() {
  const access_token = localStorage.getItem("access_token");
  const refresh_token = getCookie("refresh_token");

  if (!access_token) {
    if (!refresh_token) {
      return false;
    }
  }
  if (access_token) {
    // access_token 의 유효성 검사
    const decodedAccessToken = decodeToken(access_token);
    const currentTime = Math.floor(Date.now() / 1000);
    if (decodedAccessToken.exp < currentTime) {
      // 토큰이 만료되었으므로 로그아웃 또는 새로운 토큰 요청 등의 처리를 수행
      if (!refresh_token) {
        return false;
      }
    }
  }

  // access_token이 만료되지 않았거나, 리프레시 토큰이 존재한다면
  return refresh_token;
}
