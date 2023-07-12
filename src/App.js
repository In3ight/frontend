import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import SelfAuth from "./pages/SignUp/SelfAuth";
import InputInfo from "./pages/SignUp/InputInfo";
import MemberAgree from "./pages/SignUp/MemberAgree";
import MemberSuccess from "./pages/SignUp/MemberSuccess";

import LoginPage from "./pages/LoginPage";
import KakaoLogin from "./pages/KaKaoLogin";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import FindPw from "./pages/FindPw";
import MainPage from "./pages/MainPage";

import Footer from "./components/footer";


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
        {/* <Route path="/" element={<Footer />}></Route> */}
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
