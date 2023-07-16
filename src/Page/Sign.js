import styled from "styled-components";
import Button from "@mui/material/Button";
import React from "react";
import { ReactComponent as Success } from "../assets/img/memberSuccess.svg";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import AgreeTerms from "./SignUp/AgreeTerms";
import { useState } from "react";
import MemberAgree from "./SignUp/MemberAgree";
import { useNavigate } from "react-router";

const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//페이지 종류
const Title1 = styled.div`
  margin-top: 140px;
  height: 68px;

  font-size: 42px;
  font-weight: semiBold;
  color: #4f4747;
`;

//네비게이션 바
const NavDiv = styled(Div)`
  height: 65px;
  margin-top: 8px;
`;

const Hr = styled.div`
  width: 72px;
  border-top: 3px solid #f2f2f2;
  margin-top: 23px;
`;

const Hrmid = styled(Hr)`
  width: 222px;
  border-top: 3px solid #f2f2f2;
  margin-top: 23px;
`;

const ActiveCircle = styled.div`
  border-radius: 50px;
  height: 51px;
  width: 51px;
  background-color: #007b59;
  justify-content: column;
`;

const Circle = styled(ActiveCircle)`
  border-radius: 50px;
  height: 38px;
  width: 38px;
  margin-top: 5px;
  background-color: #f2f2f2;
`;

const SubDiv = styled(Div)`
  height: 50px;
  align-items: row;
`;

const SubText = styled.div`
  display: flex;
  flex-direction: column;

  color: #b5b5b5;
  font-size: 20px;
  font-weight: regular;
`;

const ActivesubText = styled(SubText)`
  width: 80px;
  height: 35px;

  color: #007b59;
  font-size: 20px;
  font-weight: regular;
`;

// 주의 문구
const Title2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 68px;
  margin-top: 19px;

  & > div {
    display: flex;
    align-items: center;
    margin-bottom: 21px;

    font-weight: regular;
    font-size: 24px;
    color: #1d1d1d;
  }
`;

const Box = styled.div`
  width: 606px;
  height: 353px;
  display: flex;
  justify-content: center;
  margin-top: 50px;

  border-radius: 30px;
  border: 1px solid #b5b5b5;
  font-size: 15px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > p {
    margin-left: 41px;
    margin-top: 116px;
    display: flex;
    font-weight: regular;
    font-size: 24px;
    color: #1d1d1d;
    width: 60px;
  }

  & > input {
    margin-top: 106px;
    margin-left: 112px;
    width: 304px;
    height: 36px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;

  & > p {
    margin-left: 41px;
    margin-top: 20px;
    display: flex;
    font-weight: regular;
    font-size: 24px;
    color: #1d1d1d;
    width: 147px;
    height: 68px;
  }

  & > input {
    margin-top: 13.5px;
    margin-left: 22px;
    width: 304px;
    height: 36px;
    display: flex;
    flex-direction: col;
    justify-content: center;
  }
`;

const Div3 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 325px;
  margin-top: 49px;
  width: 230px;
  height: 68px;

  & > p {
    margin-top: 20px;
    //margin-left: 200px;
    display: flex;
    font-weight: regular;
    font-size: 15px;
    color: #1d1d1d;
  }

  & > button {
    display: flex;
    margin-top: 10px;
    margin-left: 13px;

    font-size: 13px;
    font-weight: bold;
    border-radius: 15px;
    background-color: #007b59;
  }
`;

const Div4 = styled.div`
  display: flex;
  flex-direction: row;
  width: 555px;
  height: 117px;

  & > p {
    height: 68px;
    margin-left: 40px;
    margin-top: 27px;
    display: flex;
    align-items: center;

    font-weight: regular;
    font-size: 24px;
    color: #1d1d1d;
  }

  & > input {
    margin-top: 43px;
    margin-left: 37px;
    width: 304px;
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
const SubTitle = styled.div`
  width: 150px;
  height: 68px;
  display: flex;
  justify-content: space-between;

  color: #4f4747;
  font-size: 16px;
  font-weight: bold;
`;
const H1 = styled.div`
  display: flex;
  align-items: flex-start;
  width: 525px;

  line-height: 140%;
  font-weight: medium;
  font-size: 13px;
  color: #1d1d1d;
`;
const Box1 = styled.div`
  width: 606px;
  height: 458px;
  display: flex;
  justify-content: center;
  margin-top: 49px;
  //margin-bottom: 116px;

  border-radius: 30px;
  border: 1px solid #b5b5b5;
  font-size: 15px;
`;
const Div5 = styled.div`
  display: flex;
  flex-direction: row;
  width: 555px;
  height: 117px;

  & > p {
    height: 68px;
    margin-left: 40px;
    margin-top: 9px;
    display: flex;
    align-items: center;

    font-weight: regular;
    font-size: 24px;
    color: #1d1d1d;
  }

  & > input {
    width: 304px;
    height: 36px;
    margin-top: 19px;
    margin-left: 17px;
    display: flex;
    align-items: center;
  }
`;
const Div6 = styled.div`
  display: flex;
  flex-direction: row;
  width: 555px;
  height: 45px;

  & > p {
    margin-left: 40px;
    margin-top: 10px;
    display: flex;
    font-weight: regular;
    font-size: 24px;
    color: #1d1d1d;
    height: 68px;
  }

  & > input {
    width: 304px;
    height: 36px;
    margin-top: 3px;
    margin-left: 17px;
    display: flex;
    justify-content: center;
  }
`;

const Div7 = styled.div`
  display: flex;
  align-items: center;
  height: 68px;

  font-weight: bold;
  font-size: 24px;
`;

const Icon = styled.div`
  width: 175px;
  height: 175px;
  margin-top: 124px;
`;
const Btn = styled.div`
  margin-top: 10px;
  & > button {
    width: 116px;
    height: 58px;
    border-radius: 30px;
    border: none;
    background-color: #e1e1e1;
    font-weight: Bold;
    font-size: 23px;
    color: white;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const Sign = () => {
  const [useremail, setUseremail] = useState("");
  const [userpw, setUserpw] = useState("");

  const [Next, setNext] = useState(false);
  const [checked, setChecked] = useState(false);
  const [num, setNum] = useState(0);

  const navigate = useNavigate();
  //const [user]

  //email, 비밀번호 정규식
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const pwRegEx = /^[A-Za-z0-9]{8,20}$/;

  const emailChk = (useremail) => {
    return emailRegEx.test(useremail);
  };
  const pwChk = (userpw) => {
    if (userpw.match(pwRegEx) === null) {
      alert("비밀번호 형식을 확인해주세요.");
      console.log("비밀번호 형식 확인");
      return;
    } else {
      console.log("형식이 맞아요");
    }
  };

  const addNum = () => {
    setNum(num + 1);
  };
  const minusNum = () => {
    setNum(num - 1);
  };
  return (
    <Div>
      <Center>
        <Title1>회원가입</Title1>

        <NavDiv>
          {num == 0 ? <ActiveCircle></ActiveCircle> : <Circle></Circle>}
          <Hr />
          {num == 1 ? <ActiveCircle></ActiveCircle> : <Circle></Circle>}
          <Hrmid />
          {num == 2 ? <ActiveCircle></ActiveCircle> : <Circle></Circle>}
          <Hr />
          {num == 3 ? <ActiveCircle></ActiveCircle> : <Circle></Circle>}
        </NavDiv>
        <SubDiv>
          {num == 0 ? (
            <ActivesubText>본인인증</ActivesubText>
          ) : (
            <SubText>본인인증</SubText>
          )}
          {num == 1 ? (
            <ActivesubText style={{ marginLeft: "40px", marginRight: "111px" }}>
              정보입력
            </ActivesubText>
          ) : (
            <SubText style={{ marginLeft: "40px", marginRight: "111px" }}>
              정보입력
            </SubText>
          )}
          {num == 2 ? (
            <ActivesubText style={{ marginLeft: "80px" }}>
              약관동의
            </ActivesubText>
          ) : (
            <SubText style={{ marginLeft: "80px" }}>약관동의</SubText>
          )}
          {num == 3 ? (
            <ActivesubText style={{ marginLeft: "40px" }}>
              가입완료
            </ActivesubText>
          ) : (
            <SubText style={{ marginLeft: "40px" }}>가입완료</SubText>
          )}
        </SubDiv>

        <Title2>
          <div style={{ fontSize: "24px" }}>
            실제와 일치하는 정보를 입력하셔야 회원가입이 완료됩니다.
          </div>
          <div style={{ fontSize: "20px", color: "#939393" }}>
            *입력하신 정보는 회원가입 여부에만 사용되며 저장되지 않습니다.
          </div>
        </Title2>
        {num == 0 && (
          <div>
            <Box>
              <Content>
                <Div1>
                  <p>성명</p>
                  <input placeholder="이름"></input>
                </Div1>
                <Div2>
                  <p>법적생년월일</p>
                  <input placeholder="nnnn-nn-nn"></input>
                </Div2>
                <Div3>
                  <p>본인인증하러가기</p>
                  <Button
                    variant="contained"
                    style={{
                      width: "96px",
                      height: "37px",
                      backgroundColor: "#007B59",
                    }}
                    onClick={() => navigate("/phone")}
                  >
                    본인인증
                  </Button>
                </Div3>
              </Content>
            </Box>
            <Btn>
              <button onClick={addNum}>다음단계</button>
            </Btn>
          </div>
        )}
        {num == 1 && (
          <div>
            <Box>
              <Content>
                <Div4>
                  <p>아이디</p>
                  <input
                    _onchange={(e) => {
                      setUseremail(e.target.value);
                      emailChk(e.target.value);
                    }}
                    placeholder="이메일"
                    type="email"
                  ></input>
                </Div4>
                <Div5>
                  <p>비밀번호</p>
                  <input
                    _onchange={(e) => {
                      setUserpw(e.target.value);
                      pwChk(e.target.value);
                    }}
                    placeholder="영문 대소문자, 숫자를 혼합해 8자 이상 입력"
                    type="password"
                  ></input>
                </Div5>
                <Div6>
                  <p>거주지역</p>
                  <input placeholder="드롭다운"></input>
                </Div6>
              </Content>
            </Box>
            <Btn>
              <button onClick={minusNum}>이전단계</button>
              <button onClick={addNum}>다음단계</button>
            </Btn>
          </div>
        )}
        {num == 2 && (
          <div>
            <Box1>
              <Content>
                <SubTitle>
                  <FormControlLabel
                    value="start"
                    control={<Checkbox color="success" />}
                    label="약관동의하기"
                    labelPlacement="start"
                    // onChange={handleChange}
                  />
                </SubTitle>

                <H1>{AgreeTerms}</H1>
              </Content>
            </Box1>
            <Btn>
              <button onClick={minusNum}>이전단계</button>
              <button onClick={addNum}>다음단계</button>
            </Btn>
          </div>
        )}
        {num == 3 && (
          <Content>
            <Icon>
              <Success onClick={() => navigate("/")} />
            </Icon>
            <Div7>가입이 완료되었습니다.</Div7>
          </Content>
        )}
      </Center>
    </Div>
  );
};
export default Sign;
