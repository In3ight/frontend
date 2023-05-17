import styled from "styled-components";
import Button from '@mui/material/Button';

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
  font-size: 42px;
  font-weight: semiBold;
  color: #4F4747;

  margin-top: 152px;
  width: 146px;
  height: 68px;
`;

//네비게이션 바
const NavDiv = styled(Div)`
    height: 65px;
    margin-top: 31px;
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
    font-color: #1D1D1D;
    }
`;

const Box = styled.div`
  width: 615px;
  height: 376px;
  display: flex;
  justify-content: center;
  margin-top: 31px;
  margin-bottom: 196px;
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
  justify-content: space-between;

& > p {
    margin-left: 41px;
    margin-top: 116px;
    display: flex;
    font-weight: regular;
    font-size: 24px;
    font-color: #1D1D1D;
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
    font-color: #1D1D1D;
    width: 147px;
    height:68px;
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
    font-color: #1D1D1D;
  }

  & > button {
    display: flex;
    margin-top: 10px;
    margin-left: 13px;

    font-size: 13px;
    font-weight: bold;
    border-radius: 15px;
    background-color: #007B59;
  }
`;

const SelfAuth = () => {
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
               <p>성명</p>
               <input placeholder="이름"></input>   
              </Div1>    
              <Div2 >
                <p>법적생년월일</p>
                <input placeholder="nnnn-nn-nn"></input>
              </Div2>
              <Div3 >
                <p>본인인증하러가기</p>
                <Button variant="contained" style={{width:"96px", height:"37px", backgroundColor:'#007B59'}}>본인인증</Button>
              </Div3>
          </Content>
        </Box>
      </Center>
    </Div>
  );
};
export default SelfAuth;
