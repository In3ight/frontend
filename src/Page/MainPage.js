import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Bottom from "../Components/bottom";
import Cards from "../Components/cards";

import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 4320px;
`;
const Main1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(/Image/carrier.png);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  width: 1920px;
  height: 1080px;
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
  width: 750px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 210px;
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
const Box = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1585px;
  height: 654px;
  background-color: rgba(222, 222, 222, 0.71);
  margin-top: 110px;
  & > button {
    width: 246px;
    height: 68px;
    border-radius: 30px;
    background-color: #007b59;
    color: white;
    border: none;
    font-size: 18px;
    margin-top: 77px;
    margin-left: 1200px;
  }
`;
const Div3 = styled.div`
  width: 1000px;
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
`;
const Div4 = styled.div`
  text-align: left;
  font-size: 24px;
  margin-left: 5px;
`;
const DatePickerWrapper = styled(DatePicker)`
  width: 315px;
  height: 38px;
  background-color: rgba(222, 222, 222, 0.71);
  border: 1px solid #000000;
  font-weight: bold;
  font-size: 16px;
  border-radius: 30px;
  margin-top: 5px;
`;
const Div5 = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: bold;
  width: 1100px;
  justify-content: space-between;
  margin-top: 112px;
`;
const Select = styled.select`
  background-color: rgba(222, 222, 222, 0.71);
  width: 315px;
  height: 38px;
  border: 1px solid #000000;
  margin-top: 5px;
  border-radius: 30px;
  font-weight: bold;
  font-size: 16px;
`;
const Select2 = styled.select`
  height: 33px;
  background-color: rgba(222, 222, 222, 0.71);
  border: none;
  border-bottom: 1px solid black;
  font-size: 24px;
  font-weight: bold;
  width: 150%;
  margin-top: 30px;
`;
const Main2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1920px;
  height: 1080px;
  background-color: white;
`;
const Ti = styled.div`
  display: flex;
  align-items: center;
`;
const Div1 = styled.div`
  height: 48px;
  width: 180px;
  justify-content: space-between;
  display: flex;
  margin-right: 36px;
  align-items: center;
  font-size: 24px;
`;
const Div2 = styled.div`
  height: 88px;
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 20px;
`;
const Bell = styled.div`
  display: flex;
  margin-top: 124px;
`;
const Dis = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: space-between;
  width: 1500px;
`;
const Con = styled.div`
  & > div {
    position: relative;
    background-image: url(/Image/circle.png);
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    width: 249px;
    height: 249px;
    margin-bottom: 30px;
  }
`;
const InnerImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Btns = styled.div`
  display: flex;
  /* width: 531px; */
  justify-content: flex-end;
  margin-top: 174px;
  & > button {
    border-radius: 30px;
    width: 246px;
    height: 68px;
    margin-left: 40px;
    color: ${(props) => props.color || "white"};
    background: ${(props) => props.background || "#007B59"};
    border: ${(props) => props.border || "#007B59"};
  }
`;
const Main3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1920px;
  height: 1080px;
  background-color: white;
`;
const Txt = styled.div`
  display: flex;
  align-items: center;
  width: 1600px;
  justify-content: space-between;
  & > div {
    display: flex;
    font-size: 32px;
  }
`;
const Items = styled.div`
  /* height: 316px; */
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Main4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1920px;
  height: 1080px;
`;
const MainPage = () => {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const setChangeDate = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const today = new Date();
  const futureDate = new Date(
    today.getFullYear() + 1,
    today.getMonth(),
    today.getDate()
  );
  return (
    <Div>
      <Main1>
        <Head>
          <Center>
            <Title>
              <Logo>
                <img
                  src="Image/logo.png"
                  alt="logo"
                  style={{ width: "34px", height: "34px" }}
                />
                <img src="Image/suit-carrier.png" alt="suit-carrier" />
              </Logo>
              <div>인기매물 확인</div>
              <div>매물 등록하기</div>
              <div>CONTACT_US</div>
            </Title>
            <User>
              <button onClick={() => navigate("/login")}>Sign Up</button>
              <div>
                <img src="Image/bell.png" />
                <img src="Image/user.png" />
              </div>
            </User>
          </Center>
        </Head>
        <Name>
          <h1>Suit-carrier</h1>
          <h4>
            사기는 아깝지만 여행에 꼭 필요한 캐리어, 이제는 대여로 해결하세요
          </h4>
        </Name>
        <Box>
          <Div3>
            <div style={{ display: "flex" }}>
              <img
                src="Image/place.png"
                style={{ width: "32px", height: "32px" }}
              />
              <Div4>
                동네 선택
                <br />
                <Select>
                  <option>성남시 이매동</option>
                  <option>용인시 역북동</option>
                </Select>
              </Div4>
            </div>
            <Div4>
              대여 기간
              <div>
                <DatePickerWrapper
                  selectsRange={true}
                  locale={ko}
                  dateFormat="yyyy년 MM월 dd일"
                  selected={startDate}
                  startDate={startDate}
                  endDate={endDate}
                  minDate={today}
                  maxDate={futureDate}
                  onChange={(dates) => setChangeDate(dates)}
                />
              </div>
            </Div4>
          </Div3>
          <Div5>
            <div>
              색상
              <br />
              <Select2>
                <option>빨간색</option>
                <option>주황색</option>
                <option>노란색</option>
                <option>초록색</option>
                <option>파란색</option>
                <option>남색</option>
                <option>보라색</option>
              </Select2>
            </div>
            <div>
              사이즈
              <br />
              <Select2>
                <option>18인치</option>
                <option>20인치</option>
                <option>24인치</option>
                <option>27인치</option>
              </Select2>
            </div>
            <div>
              예산
              <br />
              <Select2>
                <option>10만원 이내</option>
                <option>20민원 이내</option>
                <option>30만원 이내</option>
              </Select2>
            </div>
            <div>
              브랜드
              <br />
              <Select2>
                <option>Samsonite</option>
                <option>리모와</option>
                <option>투미</option>
                <option>샤오미</option>
              </Select2>
            </div>
          </Div5>
          <button>매물 확인하기</button>
        </Box>
      </Main1>
      <Main2>
        <Bell>
          <div>
            <Ti>
              <Div1>
                <img src="Image/bell.png" />
                <div>공지사항</div>
                <div>|</div>
              </Div1>
              <Div2>
                현재 태풍으로 인해 고객님의 지역(성남시 분당구)의 거래가
                지연되고 있습니다.
                <br />
                판매자와의 연락을 통해 거래 일정을 조율하시기 바랍니다.
              </Div2>
            </Ti>
            <Dis>
              <Con>
                <div>
                  <InnerImg src="Image/calculator.png" />
                </div>
                캐리어 대여하기
              </Con>
              <Con>
                <div>
                  <InnerImg src="Image/card.png" />
                </div>
                캐리어 빌려주기
              </Con>
              <Con>
                <div>
                  <InnerImg src="Image/alarm.png" />
                </div>
                거래 규칙 살펴보기
              </Con>
              <Con>
                <div>
                  <InnerImg src="Image/gift.png" />
                </div>
                서비스 둘러보기
              </Con>
            </Dis>
            <Btns>
              <button
                style={{
                  color: "white",
                  background: "#007B59",
                  border: "1px solid #007B59",
                  fontSize: "18px",
                }}
              >
                매물 확인하기
              </button>
              <button
                style={{
                  color: "#3E4659",
                  background: "white",
                  border: "1px solid #3E4659",
                  fontSize: "18px",
                }}
              >
                우리집 캐리어 대여
              </button>
            </Btns>
          </div>
        </Bell>
      </Main2>
      <Main3>
        <Txt>
          <div>
            <h2 style={{ color: "#3E4659", marginRight: "10px" }}>내 검색과</h2>
            <h2 style={{ color: "#007B59" }}>비슷한 제품</h2>
          </div>
          <div>
            <button
              style={{
                fontSize: "20px",
                height: "44px",
                border: "none",
                borderBottom: "1px solid #6e6e6e",
                color: "#6e6e6e",
                backgroundColor: "white",
              }}
            >
              전체 매물 보러가기
            </button>
            <button
              style={{
                fontSize: "20px",
                height: "44px",
                border: "none",
                color: "#6e6e6e",
                backgroundColor: "white",
              }}
            >
              <AiOutlineRight />
            </button>
          </div>
        </Txt>
        <Items>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Items>
        <h2
          style={{
            color: "#3E4659",
            marginRight: "10px",
            fontSize: "45px",
            fontWeight: "bold",
            width: "1600px",
            textAlign: "start",
            marginTop: "60px",
          }}
        >
          SUIT-CARRER가 추천해요
        </h2>
        <Items>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Items>
      </Main3>
      <Main4>
        <Bottom />
      </Main4>
    </Div>
  );
};
export default MainPage;
