import styled from "styled-components";
import Head from "../Components/head";

import { ReactComponent as Success } from "../assets/img/memberSuccess.svg";
import { useNavigate } from "react-router-dom";
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Main = styled.div`
  display: flex;
  width: 1200px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Icon = styled.div`
  width: 175px;
  height: 175px;
  margin-top: 230px;
`;
const H1 = styled.h1`
  display: flex;
  align-items: center;
  height: 68px;
  font-weight: bold;
  font-size: 20px;
`;
const Btn = styled.div`
  display: flex;
  margin-top: 104px;
  width: 553.67px;
  justify-content: space-between;
  & > button {
    color: white;
    border: none;
    width: 266.67px;
    height: 74.06px;
    border-radius: 30px;
    font-size: 18px;
    font-weight: bold;
  }
`;
const RegisterSuccess = () => {
  const navigate = useNavigate();
  return (
    <Div>
      <Head />
      <Main />
      <Content>
        <Icon>
          <Success />
        </Icon>
        <H1>캐리어 등록이 완료되었습니다.</H1>
        <Btn>
          <button
            style={{ backgroundColor: "#007B59" }}
            onClick={() => navigate("/")}
          >
            홈화면으로 가기
          </button>
          <button style={{ backgroundColor: "#DBDDDC" }}>
            마이페이지 가기
          </button>
        </Btn>
      </Content>
    </Div>
  );
};
export default RegisterSuccess;
