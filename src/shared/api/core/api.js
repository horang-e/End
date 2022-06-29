import axios from "axios";
import { getCookie } from "../../Cookie";

//1. axios 인터셉터 생성
export const api = axios.create({
  //baseURL: "http://3.39.177.59:8080",

  baseURL: "URL",

  headers: {
    "content-type": "application/json; charset=UTF-8",
    accept: "application/json",
  },
  // withCredentials: false,
});

export const instances = axios.create({
  //baseURL: "http://3.39.177.59:8080",

  baseURL: "URL",

  headers: {
    "Content-Type": "multipart/form-data",
    accept: "application/json",
  },
});

//2. 요청 인터셉터
api.interceptors.request.use(
  //요청직전 호출
  (config) => {
    const token = getCookie("token");
    config.headers = {
      "Content-Type": "multipart/form-data",
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  //에러 전 호출
  (err) => {
    console.log(err);
  }
);

instances.interceptors.request.use(
  //요청직전 호출
  (config) => {
    const token = getCookie("token");
    // const tokens = Token.split('=')[1];
    config.headers = {
      "Content-Type": "multipart/form-data",
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  //에러 전 호출
  (err) => {
    console.log(err);
  }
);

//3. 응답 인터셉터
api.interceptors.response.use(
  (success) => {
    const response = success.data;

    if (
      response.statusCode === 200 &&
      response.responseMessage === "조회 성공"
    ) {
      return response.posts;
    }

    return success;
  },
  (error) => {
    console.log(error);
    }
);

// export const TokenCheck = localStorage.getItem("token") ? true : false;