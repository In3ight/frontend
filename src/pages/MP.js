import { useState } from "react";
// import ReactDatePicker from "react-datepicker";
import styled from "styled-components";
// import "react-datepicker/dist/react-datepicker.css";
const Div = styled.div`
  object-fit: cover;
  width: 1920px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 100vw;
  height: 70px;
`;
const Center = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const User = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  align-items: center;
  & > button {
    width: 138px;
    height: 37px;
    border-radius: 15px;
    background-color: #007b59;
    color: white;
    border: none;
  }
  & > div > img {
    margin-left: 10px;
  }
`;
const Main1 = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  background-image: url(${"/images/carrier.png"});
  background-repeat: no-repeat;
  background-size: cover; /* 이미지를 화면에 꽉 채우도록 설정할 수 있습니다. */
`;
const Name = styled.div`
  display: flex;
  flex-direction: column;
  & > h1 {
    margin-bottom: 20px;
    font-size: 96px;
  }
  & > h4 {
    font-size: 28px;
    margin: 0px;
    color: #494949;
  }
`;
const Bottom = styled.footer`
  height: 500px;
  background-color: #f6f6f6;
  width: 1600px;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Cen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1000px;

  align-items: stretch;
`;
const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MainPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <Div>
      <Head>
        <Center>
          <Title>
            <Logo>
              <img src="images/logo.png" alt="logo" />
              <img src="images/suit-carrier.png" alt="suit-carrier" />
            </Logo>
            <div>인기매물 확인</div>
            <div>매물 등록하기</div>
            <div>CONTACT_US</div>
          </Title>
          <User>
            <button>Sign Up</button>
            <div>
              <img src="images/alarm.png" />
              <img src="images/user.png" />
            </div>
          </User>
        </Center>
      </Head>
      <Main1>
        <Name>
          <h1>Suit-carrier</h1>
          <h4>
            사기는 아깝지만 여행에 꼭 필요한 캐리어, 이제는 대여로 해결하세요
          </h4>
        </Name>
        <Bottom>
          <Cen>
            <Row1>
              <div>
                <div>
                  <img src="images/place.png" />
                  <h3>동네 선택</h3>
                </div>
                <select>
                  <option>서울시</option>
                </select>
              </div>
              <div>
                <h3>대여 기간</h3>
                <div>
                  {/* <ReactDatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                  />
                  <ReactDatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                  /> */}
                </div>
              </div>
            </Row1>
            <div></div>
          </Cen>
        </Bottom>
      </Main1>
    </Div>
  );
};
export default MainPage;
