import axios from "axios";
import { baseUrl } from "../common/global";
import { useState } from "react";
import setAuthorization from "../utils/setAuthorizationToken";

axios.defaults.baseURL = baseUrl;

export default function Login() {
  const [message, setMessage] = useState("");

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("클릭?");

            const form_data = {
              username: e.target.username.value,
              password: e.target.password.value,
            };
            console.log(form_data);
            axios
              .post("/api/login", form_data, {
                headers: {
                  "content-type": "application/x-www-form-urlencoded",
                },
              })
              .then((res) => {
                const { access_token } = res.data;
                setMessage("로그인 성공!" + access_token);
                localStorage.setItem("access_token", access_token);
                setAuthorization(access_token);
              })
              .catch((err) => {
                console.log(err.response.data.detail);
                setMessage(err.response.data.detail);
              });
          }}
        >
          <div>
            <input className={"border"} type="text" name="username" />
          </div>
          <div>
            <input className={"border"} type="password" name="password" />
          </div>
          <div>{message}</div>
          <button type={"submit"} className={"border"}>
            제출
          </button>
        </form>
        <div>
          <button
            onClick={() => {
              axios
                .get("/protected")
                .then((res) => {
                  setMessage("로그인 되어있네" + res.data);
                })
                .catch((err) => {
                  setMessage(err.response.data.detail);
                  console.log(err.response.data.detail);
                });
            }}
          >
            현재 로그인 되어있나? 서버에 확인
          </button>
        </div>
      </div>
    </>
  );
}
