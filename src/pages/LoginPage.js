import React, { useState } from "react";
import styled from "styled-components";
import Auth from "./Auth";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledHead = styled.div`
  width: 100%;
  height: 80px;
  border-width: 1px 0px;
  border-style: solid;
  border-color: #353535;
  color: red;
  display: flex;
  justify-content: center;
`;
const Div1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1267px;
  height: 59px;
  margin-top: 9px;
`;
const MainButton = styled.button`
  font-size: 24px;
  background-color: white;
  border: none;
  font-weight: bold;
`;
const SubButton1 = styled.button`
  font-size: 18px;
  background-color: white;
  border: none;
`;
const SignUpBtn = styled.button`
  width: 106px;
  height: 59px;
  background-color: black;
  color: white;
  border-radius: 5px;
`;
const Main = styled.div`
  display: flex;
  background-color: #eae9e4;
  justify-content: center;
  /* height: 100vh; */
  /* align-items: center; */
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1054px;
  width: 571px;
  background-color: white;
  margin-top: 99px;

  padding: 25px;
  & > .h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  & > .Input {
    font-size: 20px;
    width: 509px;
    height: 67px;
    margin-bottom: 17px;
    border: 1px solid #747474;
  }
  & > .div {
    display: flex;
    flex-direction: row;
  }
`;
const LoginBtn = styled.button`
  height: 67px;
  width: 509px;
  background-color: #007b59;
  border: none;
  color: white;
  font-size: 22px;
`;
const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 509px;

  padding-top: 27px;
  font-size: 15px;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const FindBtn = styled.button`
  background-color: white;
  border: none;
`;
const ProductBtn = styled.button`
  display: flex;
  margin-top: 36px;
  margin-bottom: 4px;
  border-radius: 50%;
  width: 59px;
  height: 59px;
  border: solid #D9D9D9;
  background-color : white;

  > img {
    width: auto;
    display: block;
    margin: auto;
  }
`;
const KakaBtn = styled.button`
  width: 509px;
  height: 67px;
  background-color: #f6e24b;
  margin-top: 6px;
  font-size: 22px;
  color: #4f4747;
  border: none;
  text-decoration-line: none;
  text-color: black;
`;
const SignBtn = styled.button`
  width: 509px;
  height: 67px;
  margin-top: 15px;
  font-size: 20px;
  color: #686868;
  border: 1px solid #a8a8a8;
  background-color: white;
`;
const AdverBtn = styled.button`
  margin-top: 63px;
  width: 506px;
  height: 243px;
  border: none;
  background-color: white;
`;
const Bottom1 = styled.footer`
  background-color: #007b59;
  height: 514px;
`;
const SubTitle = styled.h2`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: white;
`;
const Div3 = styled.div`
  margin-top: 102px;
  margin-left: 50px;
  display: flex;
  justify-content: space-between;
`;
const IMG = styled.div`
  width: 362px;
  height: 362px;
  border: 1px solid black;
  margin-right: 141px;
`;
const LookBtn = styled.button`
  font-size: 20px;
  width: 187px;
  height: 64px;
  border: 1px solid white;
  border-radius: 50px;
  background-color: #007b59;
  color: white;
`;
const Bottom2 = styled.footer`
  background-color: #eae9e4;
  height: 186px;
  padding-left: 42px;
`;
const Div4 = styled.div`
  width: ${(props) => props.width};
  display: flex;
  justify-content: space-between;
`;
const H3 = styled.h3`
  font-size: 24px;
  font-weight: ${(props) => props.fontWeight};
`;
const H4 = styled.h4`
  font-size: 20px;
  margin-top: 0px;
`;
const LoginPage = () => {
  const REST_API_KEY = "089967149185843522d3d4b4ae9a3b3d";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const SERVER_URL = 'http://localhost:8080/';

  const navigate = useNavigate();

  const pwdRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,12}$/;
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setLoginInfo({...loginInfo, [event.target.name] : event.target.value});
  }

  const handleLogin = () => {
    if(loginInfo.email === "") {
      alert('이메일을 입력해주세요.');
    } else if(!pwdRegex.test(loginInfo.password)) {
      alert('형식에 맞게 비밀번호를 입력해주세요.');
    } else {
      axios.post(SERVER_URL + 'auth/login',
      {
        email: loginInfo.email,
        password: loginInfo.password
      }
      )
      .then(response => {
        if (response.ok) {
          alert('반갑습니다!');
          navigate("/");
        } else {
          alert('존재하지 않는 회원정보이거나 아이디/비밀번호가 틀렸습니다.');
        }
      })
      .catch(err => console.error(err))
    }
  }

  const handleSignUp = () => {
    navigate("/selfAuth");
  }

  return (
    <Div>
      <StyledHead>
        <Div1>
          <div>
            <MainButton>SUIT-CARRIER</MainButton>
            <SubButton1>SUIT-CARRIER</SubButton1>
            <SubButton1>SUIT-CARRIER</SubButton1>
          </div>
          <SignUpBtn>Sign Up</SignUpBtn>
        </Div1>
      </StyledHead>
      <Main>
        <Box>
          <h3>로그인</h3>
          <input className="Input" placeholder="이메일" name="email" value={loginInfo.email} onChange={handleChange}></input>
          <input
            type="password"
            className="Input"
            placeholder="비밀번호 영문, 특수문자, 숫자혼합 8~12자"
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
          ></input>
          <LoginBtn onClick={handleLogin}>로그인</LoginBtn>
          <div>
            <Div2>
              <div>
                <div>
                  <input type="radio" />
                  아이디 저장
                </div>
                <div>
                  <FindBtn>이메일 찾기</FindBtn>|
                  <FindBtn onClick={() => navigate("/findPw")}>
                    비밀번호 찾기
                  </FindBtn>
                </div>
              </div>
              <div>
                <div>
                  <ProductBtn><img src="images/kakao.png" height="60%"/></ProductBtn>카카오톡
                </div>
                <div>
                  <ProductBtn><img src="images/naver.png" height="50%"/></ProductBtn>네이버
                </div>
                <div>
                  <ProductBtn><img src="images/facebook.png" height="60%"/></ProductBtn>페이스북
                </div>
                <div>
                  <ProductBtn><img src="images/phone.png" height="60%"/></ProductBtn>휴대폰
                </div>
              </div>
              <KakaBtn>
                <a href={KAKAO_AUTH_URL}><img src="images/kakao_signup.png" height="100%"/></a>
              </KakaBtn>
              <SignBtn onClick={handleSignUp}>회원가입</SignBtn>

              <AdverBtn><img src="images/ad.png" width='100%'/></AdverBtn>
            </Div2>
          </div>
        </Box>
      </Main>
      <Bottom1>
        <div>
          <Div3>
            <div>
              <SubTitle fontSize="32px" fontWeight="bold">
                SUIT CARRIER에 대해 더 알고 싶다면?
              </SubTitle>
              <SubTitle fontSize="20px" fontWeight="normal">
                요즘 인기있는 캐리어 디자인, 사이즈를 확인해보세요
              </SubTitle>
              <SubTitle fontSize="20px" fontWeight="normal">
                요즘 인기있는 캐리어 디자인, 사이즈를 확인해보세요
              </SubTitle>
              <LookBtn>케리어 둘러보기</LookBtn>
            </div>
            <IMG>이미지넣기</IMG>
          </Div3>
        </div>
      </Bottom1>
      <Bottom2>
        <Div4 width="70%">
          <H3 fontWeight="bold">Contact Us</H3>
          <H3 fontWeight="bold">gogoogle13@gamil.com</H3>
          <H3 fontWeight="normal">서울시 관악구 봉천동 100-3 (캐리어빌딩)</H3>
        </Div4>
        <Div4 width="30%">
          <H4>Tel | 010-1234-5678</H4>
          <H4>Tel | 010-1234-5678</H4>
        </Div4>
        <H4>E-mail | suitcarrier_@naver.com</H4>
      </Bottom2>
    </Div>
  );
};
export default LoginPage;
