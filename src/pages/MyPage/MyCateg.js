import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { ReactComponent as MyData } from "../../assets/img/myData.svg";
import { ReactComponent as MySecurity} from "../../assets/img/mySecurity.svg";
import { ReactComponent as MyCoupon } from "../../assets/img/myCoupon.svg";
import { ReactComponent as MyLike } from "../../assets/img/myLikes.svg";
import { ReactComponent as MyUseage } from "../../assets/img/myUseage.svg";
import { ReactComponent as MyPlace } from "../../assets/img/myPlace.svg";
import { ReactComponent as MyChat } from "../../assets/img/myChat.svg";
import { ReactComponent as MyLevel } from "../../assets/img/myLevel.svg";

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header=styled.div`
    height: 70px;
    width: 100%;

    border: 3px black solid;
`;

const Title=styled.div`
    width: 505px;
    height: 110px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 110px;
    margin-right: 600px;

    & > h1 {
      font-size: 48px;
    }
`;

const Circle=styled.div`
  width: 84px;
  height: 84px;

  border-radius: 50px;
  border: 3px black solid;
  margin-left: 7px;
`;

const Box = styled.div`
  width: 1119px;
  height: 603px;
  background-color: #F3F3F3;
  
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 4px 4px 4px 4px #AFB4BE;

  display: flex;
  justify-content: center;
  margin-top: 23px;
  margin-bottom: 168px;
  border-radius: 30px;
  font-size: 15px;
`;

const Content = styled.div`
  height: 495px;
  width: 640px;
  margin-top: 62px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Div1 =styled.div`
    height: 80px;
    width: 640px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const Sub=styled.div`
    width: 640px;
    margin-top: 23px;
    margin-left: 25px;

    font-size: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const Div2 =styled.div`
    height: 80px;
    width: 640px;
    margin-top: 50px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const Div3 =styled.div`
    height: 80px;
    width: 300px;
    margin-top: 50px;
    margin-right: 190px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

// const Button=styled.div`
//   width: 74px;
//   height: 76px;
//   //margin-top: 124px;
// `;

const MyCateg = () => {

    return (
    
     <Center>
        <Header style={{fontSize:'24px'}}>헤더입니다</Header>
        <Title>
            <Circle></Circle>
            <h1>마이페이지</h1>
            {/* 추후 링크 투 수정 */}
            <Link to="/" style={{fontSize:'24px'}}>프로필로 이동</Link>
        </Title>
        <Box>
            <Content>
              <Div1>
                <Button color="success"><MyData/></Button>
                <Button color="success"><MySecurity/></Button>
                <Button color="success"><MyCoupon/></Button>
              </Div1>
              <Sub><div>개인정보</div><div>&nbsp;&nbsp;&nbsp;로그인 및 보안</div><div>결제 및 쿠폰</div></Sub>
              <Div2>
                <Button color="success"><MyLike/></Button>
                <Button color="success"><MyUseage/></Button>
                <Button color="success"><MyPlace/></Button>
              </Div2>
              <Sub style={{width:'650px', marginLeft:'45px'}}><div>찜 목록</div><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이용 내역</div><div>선택 지역 확인</div></Sub>
              <Div3>
                <Button color="success"><MyLevel/></Button>
                <Button color="success"><MyChat/></Button>
              </Div3>
              <Sub style={{width:'400px', marginRight:'150px', marginLeft:'0px', justifyContent: 'space-between'}}><div>나의 등급 및 뱃지</div><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;채팅 내역</div><div></div></Sub>
            </Content>
        </Box>
      </Center>
    );
 };

export default MyCateg;
