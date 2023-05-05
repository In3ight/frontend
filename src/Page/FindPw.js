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
  width: 606px;
  height: 480px;
  border-radius: 30px;
  border: 1px solid #b5b5b5;
  font-size: 15px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    display: flex;

    margin-top: 10px;
    height: 68px;
    font-weight: bold;
  }
  & > input {
    width: 510px;
    height: 41px;
  }
`;
const Div1 = styled.div`
  width: 510px;
  display: flex;
  justify-content: space-between;
`;
const Div2 = styled.div`
  /* margin-left: 11px;
  margin-right: 11px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 242px;
  height: 243px;

  & > button {
    height: 68px;
    border: none;
    background-color: #f6e24b;
  }
`;
const IMG = styled.div`
  height: 178px;
  background-color: gray;
  display: flex;
  justify-content: space-between;
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
            <div>새 비밀번호 설정</div>
            <input placeholder="아이디를 입력해주세요"></input>
            <Div1>
              <Div2>
                <IMG>휴대폰 이미지</IMG>
                <button>휴대전화 인증</button>
              </Div2>
              <Div2>
                <IMG>이메일 이미지</IMG>
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
