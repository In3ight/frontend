import styled from "styled-components";
const Bottom1 = styled.div`
  background-color: #007b59;
  height: 700px;
`;
const SubTitle = styled.h2`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: left;
  color: white;
`;
const Div3 = styled.div`
  padding-top: 144px;
  padding-left: 50px;
  display: flex;
  justify-content: space-between;
`;
const Dis = styled.div`
  padding-right: 80px;
  font-weight: bold;
  font-size: 60px;
  color: white;
  width: 582px;
  align-items: end;
  display: flex;
  flex-direction: row;
`;
const IMG = styled.img`
  width: 362px;
  height: 362px;
`;
const LookBtn = styled.button`
  font-size: 24px;
  width: 198px;
  height: 68px;
  border: 1px solid white;
  border-radius: 50px;
  background-color: #007b59;
  color: white;
`;
const Bottom2 = styled.div`
  background-color: #eae9e4;
  height: 380px;
  width: 1920px;
  padding-left: 42px;
`;
const Div4 = styled.div`
  width: ${(props) => props.width};
  display: flex;
  justify-content: space-between;
`;
const H3 = styled.h3`
  font-size: 24px;
  font-weight: ${(props) => props.fontWeight};
`;
const H4 = styled.h4`
  font-size: 20px;
  margin-top: 0px;
`;
const Bottom = () => {
  return (
    <div>
      <Bottom1>
        <div>
          <Div3>
            <div>
              <SubTitle
                fontSize="35px"
                fontWeight="bold"
                style={{ marginBottom: "22px" }}
              >
                SUIT CARRIER에 대해 더 알고 싶다면?
              </SubTitle>
              <SubTitle fontSize="28px" fontWeight="normal">
                우리 집 창고 속 캐리어를, 우리 동네 캐리어로 !
              </SubTitle>
              <SubTitle fontSize="28px" fontWeight="normal">
                공간 차지가 큰 캐리어를 SUIT CARRIER를 활용해보세요.
              </SubTitle>
              <SubTitle fontSize="28px" fontWeight="normal">
                요즘 인기있는 캐리어 디자인, 사이즈를 확인해보세요
              </SubTitle>
              <div
                style={{
                  display: "flex",
                  marginTop: "46px",
                  width: "450px",
                  justifyContent: "space-between",
                }}
              >
                <LookBtn>케리어 둘러보기</LookBtn>
                <LookBtn>CONTACT_US </LookBtn>
              </div>
            </div>
            <div>
              <Dis>
                <IMG src="/Image/c_logo.png" alt="logo" />
                SUIT-
                <br />
                CARRIER
              </Dis>
            </div>
          </Div3>
        </div>
      </Bottom1>
      <Bottom2>
        <Div4 width="70%">
          <H3 fontWeight="bold">Contact Us</H3>
          <H3 fontWeight="bold">gogoogle13@gamil.com</H3>
          <H3 fontWeight="normal">서울시 관악구 봉천동 100-3 (캐리어빌딩)</H3>
        </Div4>
        <Div4 width="30%">
          <H4>Tel | 010-1234-5678</H4>
          <H4>Tel | 010-1234-5678</H4>
        </Div4>
        <H4>E-mail | suitcarrier_@naver.com</H4>
      </Bottom2>
    </div>
  );
};
export default Bottom;
