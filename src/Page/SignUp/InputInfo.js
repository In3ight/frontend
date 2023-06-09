import styled from "styled-components";
import Button from '@mui/material/Button';
import React from "react";

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
  margin-top: 152px;
  width: 146px;
  height: 68px;

  font-size: 42px;
  font-weight: semiBold;
  color: #4F4747;
`;

//네비게이션 바
const NavDiv = styled(Div)`
   height: 65px;
   margin-top: 8px;
`;

const Hr = styled.div`
    width: 72px;
    border-top: 3px solid #F2F2F2;
    margin-top: 23px;
`;

const Hrmid = styled(Hr)`
    width: 222px;
    border-top: 3px solid #F2F2F2;
    margin-top: 23px;
`;

const ActiveCircle=styled.div`
    border-radius: 50px;
    height: 51px;
    width: 51px;
    background-color: #007B59;
    justify-content: column;
`;

const Circle=styled(ActiveCircle)`
    border-radius: 50px;
    height: 38px;
    width: 38px;
    margin-top: 5px;
    background-color: #F2F2F2;
`;

const SubDiv = styled(Div)`
  height: 50px;
  align-items: row;
`;

const SubText = styled.div`
    display: flex;
    flex-direction: column;

    color: #B5B5B5;
    font-size: 20px;
    font-weight: regular;
`;

const ActivesubText = styled(SubText)`
    width: 80px;
    height: 35px;

    color: #007B59;
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
}

  & > div {
    display: flex;
    align-items: center;
    margin-bottom: 21px;

    font-weight: regular;
    font-size: 24px;
    color: #1D1D1D;
    }
`;

const Box = styled.div`
  width: 606px;
  height: 353px;
  display: flex;
  justify-content: center;
  margin-top: 99px;
  margin-bottom: 174px;

  border-radius: 30px;
  border: 1px solid #b5b5b5;
  font-size: 15px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  }
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 555px;
  height: 117px;

& > p {
    width: 63px;
    height: 68px;
    margin-left: 40px;
    margin-top: 27px;
    display: flex;
    align-items: center;

    font-weight: regular;
    font-size: 24px;
    font-color: #1D1D1D;
  }

  & > input {
    margin-top: 43px;
    margin-left: 37px;
    width: 304px;
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Div2 = styled.div`
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
    font-color: #1D1D1D;
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

const Div3 = styled.div`
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
    font-color: #1D1D1D;
    height:68px;
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

const Div4 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 265px;
  margin-top: 15px;
  height: 68px;

  & > button {
    display: flex;
    margin-top: 10px;
    margin-left: 13px;

    font-size: 12px;
    font-weight: bold;
    border-radius: 15px;
    background-color: #007B59;
  }
`;

const InputInfo = () => {

  const [useremail, setUseremail ]= React.useState("");
  const [userpw, setUserpw ]= React.useState("");
  //const [user]

  //email, 비밀번호 정규식  
  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const pwRegEx = /^[A-Za-z0-9]{8,20}$/

  const emailChk = (useremail) => {
    return emailRegEx.test(useremail);
  }
  const pwChk=(userpw) => {
    if(userpw.match(pwRegEx)===null){
      alert('비밀번호 형식을 확인해주세요.')
      console.log('비밀번호 형식 화긴');
      return;
    } else{
      console.log('형식이 맞아요')
    }
  }

  return (
    <Div>
      <Center>
        <Title1>회원가입</Title1>

        <NavDiv>
            <Circle></Circle>
            <Hr/>
            <ActiveCircle></ActiveCircle>
            <Hrmid/>
            <Circle></Circle>
            <Hr/>
            <Circle></Circle>
        </NavDiv>

        <SubDiv>
            <SubText>본인인증</SubText>
            <ActivesubText style={{marginLeft:'40px',marginRight:'111px'}}>정보입력</ActivesubText>
            <SubText style={{marginLeft:'80px'}}>약관동의</SubText>
            <SubText style={{marginLeft:'40px'}}>가입완료</SubText>
        </SubDiv>

        <Title2>
          <div style={{fontSize:'24px'}}>실제와 일치하는 정보를 입력하셔야 회원가입이 완료됩니다.</div>
          <div style={{fontSize:'20px', color:'#939393'}}>*입력하신 정보는 회원가입 여부에만 사용되며 저장되지 않습니다.</div>
        </Title2>

        <Box>
          <Content>
              <Div1 > 
               <p>아이디</p>
               <input 
               _onchange={(e)=>{setUseremail(e.target.value); emailChk(e.target.value)}}
               placeholder="이메일" type="email"></input>
              </Div1>    
              <Div2 >
                <p>비밀번호</p>
                <input 
                _onchange={(e)=>{setUserpw(e.target.value); pwChk(e.target.value)}}
                placeholder="영문 대소문자, 숫자를 혼합해 8자 이상 입력" type="password"></input>
              </Div2>
              <Div3>
                <p>거주지역</p>
                <input placeholder="드롭다운"></input>
              </Div3>
              <Div4>
                <Button variant="contained" style={{width:"75px", height:"36px", backgroundColor:'#007B59'}}>다음단계</Button>
              </Div4>
          </Content>
        </Box>
      </Center>
    </Div>
  );
};

export default InputInfo;
