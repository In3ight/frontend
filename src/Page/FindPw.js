import styled from "styled-components";
const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Center = styled.div`
  margin-top: 41px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title1 = styled.div`
  font-size: 32px;
  font-weight: bold;
`;
const Title2 = styled.div`
  font-size: 15px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;

    height: 68px;
  }
  & > button {
    background-color: white;
    border: none;
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 14px;
  width: 653px;
  height: 530px;
  border-radius: 30px;
  border: 1px solid #b5b5b5;
  font-size: 15px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > input {
    display: flex;
    width: 510px;
    height: 45px;
    border-radius: 15px;
    border: 1px solid #c5c5c5;
    font-size: 20px;
    padding-left: 20px;
  }
`;
const Name = styled.div`
  color: #4f4747;
  width: 100%;
  display: flex;
  margin-top: 49px;
  margin-left: 15px;
  font-size: 24px;
  height: 68px;
  font-weight: bold;
  align-items: center;
`;
const Div1 = styled.div`
  margin-top: 50px;
  margin-bottom: 86px;
  width: 510px;
  display: flex;
  justify-content: space-between;
`;
const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 242px;
  height: 243px;

  & > button {
    height: 46px;
    width: 242px;
    border: none;
    background-color: #007b59;
    color: white;
    border-radius: 30px;
  }

  & > img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 195px;
    height: 178px;
  }
`;

const FindPw = () => {
  return (
    <Div>
      <Center>
        <Title1>비밀번호 찾기</Title1>
        <Title2>
          <div>비밀번호가 기억나지 않으세요? 원하시는 방법을 선택해주세요</div>
          <button>|회원가입</button>
        </Title2>
        <Box>
          <Content>
            <Name>새 비밀번호 설정</Name>
            <input placeholder="아이디를 입력해주세요"></input>
            <Div1>
              <Div2>
                <img src="Image/phone.png" alt="phone" />
                <button>휴대전화 인증</button>
              </Div2>
              <Div2>
                <img src="Image/email.png" alt="phone" />
                <button>이메일 인증</button>
              </Div2>
            </Div1>
          </Content>
        </Box>
      </Center>
    </Div>
  );
};
export default FindPw;
