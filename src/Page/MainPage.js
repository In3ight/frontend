import styled from "styled-components";
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
const Box = styled.div``;
const Main2 = styled.div``;
const Main3 = styled.div``;

const Main4 = styled.div``;
const MainPage = () => {
  return (
    <Div>
      <Main1>
        <Head>
          <Center>
            <Title>
              <Logo>
                <img src="Image/logo.png" alt="logo" />
                <img src="Image/suit-carrier.png" alt="suit-carrier" />
              </Logo>
              <div>인기매물 확인</div>
              <div>매물 등록하기</div>
              <div>CONTACT_US</div>
            </Title>
            <User>
              <button>Sign Up</button>
              <div>
                <img src="Image/alarm.png" />
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
        <Box></Box>
      </Main1>
      <Main2></Main2>
      <Main3></Main3>
      <Main4></Main4>
    </Div>
  );
};
export default MainPage;
