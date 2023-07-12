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
  padding: 144px;
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
  display: flex;
  background-color: #eae9e4;
  height: 380px;
  width: 1920px;
  padding-left: 42px;
`;
const Div4 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  width: 80%;
  white-space: nowrap;
  overflow: visible;
  text-overflow: ellipsis;
`;
const Div5 = styled.div`
  margin-left: 10px;
  margin-right: 86px;
`;
const Div6 = styled.div`
  font-size: 28px;
  align-items: end;
  justify-content: end;
  margin-right: 68px;
  margin-bottom: 75px;
  width: 40%;
  display: flex;
  text-align: right;
  white-space: nowrap;
  overflow: visible;
  text-overflow: ellipsis;
  & > img {
    width: 204px;
    height: 204px;
  }
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
                <IMG src="/images/c_logo.png" alt="logo" />
                SUIT-
                <br />
                CARRIER
              </Dis>
            </div>
          </Div3>
        </div>
      </Bottom1>
      <Bottom2>
        <Div4>
          <h2>Contact Us</h2>
          gogoogle13@gmail.com
          <div
            style={{ display: "flex", marginTop: "20px", marginBottom: "35px" }}
          >
            Tel |
            <Div5 style={{ lineHeight: "170%" }}>
              010-1234-5678
              <br />
              02-1234-5678
            </Div5>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", marginBottom: "14px" }}>
                Fax |<Div5>010-1234-5678</Div5>
              </div>
              <div style={{ display: "flex" }}>
                Lns |<Div5>@suit_carrier0703</Div5>
              </div>
            </div>
            서울시 관악구 봉천동 100-3 (캐리어 빌딩)
          </div>
          E-mail | suitcarrier_@naver.com
        </Div4>
        <Div6>
          <div style={{ marginRight: "27px" }}>
            <h2>SUIT-CARRIER</h2>
            우리 집 창고 속 캐리어를, 우리 동네 캐리어로 !
          </div>
          <img src="images/logo.png" alt="로고" />
        </Div6>
      </Bottom2>
    </div>
  );
};
export default Bottom;
