import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import LoginPage from "./Page/LoginPage";
import KakaoLogin from "./Page/KaKaoLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Page/Auth";
import Profile from "./Page/Profile";
import FindPw from "./Page/FindPw";
function App() {
  const [hello, setHello] = useState("");

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:8080/api/hello")
  //       .then((response) => setHello(response.data))
  //       .catch((error) => console.log(error));
  //   }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/oauth/kakao/callback" element={<Auth />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/findPw" element={<FindPw />}></Route>
          {/* 백엔oginPag드에서 가져온 데이터입니다: {hello} */}
          {/*  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
