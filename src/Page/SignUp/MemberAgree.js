import styled from "styled-components";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import AgreeTerms from "./AgreeTerms";

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
  margin-top: 121px;
  width: 146px;
  height: 68px;

  font-size: 42px;
  font-weight: semiBold;
  color: #4f4747;
`;

//네비게이션 바
const NavDiv = styled(Div)`
  height: 65px;
  margin-top: 31px;
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
  margin-top: 41px;

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
  height: 458px;
  display: flex;
  justify-content: center;
  margin-top: 49px;
  //margin-bottom: 116px;

  border-radius: 30px;
  border: 1px solid #b5b5b5;
  font-size: 15px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center;
  align-items: flex-start;
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

const Div1 = styled.div`
  display: flex;
  align-items: flex-start;
  width: 525px;

  line-height: 140%;
  font-weight: medium;
  font-size: 13px;
  color: #1d1d1d;
`;

const Div2 = styled(Div)`
  width: 116px;
  height: 58px;
  margin-top: 12px;
  margin-left: 490px;

  & > button {
    width: 116px;
    height: 58px;
    border-radius: 30px;
    border: none;
    background-color: #e1e1e1;
    //background-color: $(props=>props.bg);
    // background-color: { Next==true ? ${(props) =>
      (props.bg = "#007B59")} : ${(props) => (props.bg = "#1D1D1D")}};

    font-weight: Bold;
    font-size: 23px;
    color: white;
  }
`;

const MemberAgree = (props) => {
  // 체크되었을 때(=true)일 때 Next를 true로 바꿔라(=bg color=녹색)

  const [Next, setNext] = useState(false);
  const [checked, setChecked] = useState(false);

  // const handleChange = (event) => {()=>
  //   setChecked(true, event.target.checked);
  // };

  return (
    <Div>
      <Center>
        <Title1>회원가입</Title1>

        <NavDiv>
          <Circle></Circle>
          <Hr />
          <Circle></Circle>
          <Hrmid />
          <ActiveCircle></ActiveCircle>
          <Hr />
          <Circle></Circle>
        </NavDiv>

        <SubDiv>
          <SubText>본인인증</SubText>
          <SubText style={{ marginLeft: "40px", marginRight: "111px" }}>
            정보입력
          </SubText>
          <ActivesubText style={{ marginLeft: "80px" }}>약관동의</ActivesubText>
          <SubText style={{ marginLeft: "40px" }}>가입완료</SubText>
        </SubDiv>

        <Title2>
          <div style={{ fontSize: "24px" }}>
            실제와 일치하는 정보를 입력하셔야 회원가입이 완료됩니다.
          </div>
          <div style={{ fontSize: "20px", color: "#939393" }}>
            *입력하신 정보는 회원가입 여부에만 사용되며 저장되지 않습니다.
          </div>
        </Title2>

        {/* 체크되었을 때(=true)일 때 Next를 true로 바꿔라(=bg color=녹색) */}

        <Box>
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

            <Div1>{AgreeTerms}</Div1>
          </Content>
        </Box>
        {/* { checked==true ? setNext(true) : setNext(false)} */}
        {/* { Next==true ? props.bg='#007B59' :  props.bg='#1D1D1D'} */}
        <Div2>
          <button variant="contained" bg="#1D1D1D">
            {/* // style={{width:'116px', height:'58px', marginTop:'12px', marginLeft:'490px', background: 'blue',fontweight:'Bold', fontSize:'23px', borderRadius:'30px'}} disabled */}
            다음단계
          </button>
        </Div2>
      </Center>
    </Div>
  );
};

export default MemberAgree;
