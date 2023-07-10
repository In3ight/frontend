import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import SelfAuth from "./Page/SignUp/SelfAuth";
import InputInfo from "./Page/SignUp/InputInfo";
import MemberAgree from "./Page/SignUp/MemberAgree";
import MemberSuccess from "./Page/SignUp/MemberSuccess";

import LoginPage from "./Page/LoginPage";
import KakaoLogin from "./Page/KaKaoLogin";
import Auth from "./Page/Auth";
import Profile from "./Page/Profile";
import FindPw from "./Page/FindPw";
import MainPage from "./Page/MainPage";


function App() {
  const [hello, setHello] = useState('')

//    useEffect(() => {
//        axios.get('http://localhost:8080/api/hello')
//        .then(response => setHello(response.data))
//        .catch(error => console.log(error))
//    }, []);

   return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/oauth/kakao/callback" element={<Auth />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/findPw" element={<FindPw />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        
        {/* <Route path="/oauth/kakao/callback" element={<Auth />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/findPw" element={<FindPw />}></Route> */}
        <Route path="/selfAuth" element={<SelfAuth/>}></Route>
        <Route path="/inputInfo" element={<InputInfo/>}></Route>
        <Route path="/memberAgree" element={<MemberAgree/>}></Route>
        <Route path="/memberSuccess" element={<MemberSuccess/>}></Route>

      </Routes>
    </BrowserRouter>
  </div>
   );
}

export default App;
