import styled from "styled-components";
import { ReactComponent as Success } from "../../assets/img/memberSuccess.svg";

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
  color: #4F4747;
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
  margin-top: 41px;
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
  height: 458px;
  display: flex;
  justify-content: center;
  margin-top: 49px;

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

const Icon=styled.div`
  width: 175px;
  height: 175px;
  margin-top: 124px;
`;

const Div1 = styled.div`
  display: flex;
  align-items: center;
  height: 68px;

  font-weight: bold;
  font-size: 24px;
`;

const MemberSuccess = () => {

  return (

    <Div>
      <Center>
        <Title1>회원가입</Title1>

        <NavDiv>
            <Circle></Circle>
            <Hr/>
            <Circle></Circle>
            <Hrmid/>
            <Circle></Circle>
            <Hr/>
            <ActiveCircle></ActiveCircle>
        </NavDiv>

        <SubDiv>
            <SubText>본인인증</SubText>
            <SubText style={{marginLeft:'40px',marginRight:'111px'}}>정보입력</SubText>
            <SubText style={{marginLeft:'80px'}}>약관동의</SubText>
            <ActivesubText style={{marginLeft:'40px'}}>가입완료</ActivesubText>
        </SubDiv>

        <Title2>
          <div style={{fontSize:'24px'}}>실제와 일치하는 정보를 입력하셔야 회원가입이 완료됩니다.</div>
          <div style={{fontSize:'20px', color:'#939393'}}>*입력하신 정보는 회원가입 여부에만 사용되며 저장되지 않습니다.</div>
        </Title2>

        <Content>
          <Icon><Success/></Icon>
          <Div1>가입이 완료되었습니다.</Div1>     
        </Content>
        
      </Center>
    </Div>
  );
};

export default MemberSuccess;
