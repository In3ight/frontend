import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Heads = styled.div`
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
const Head = () => {
  const navigate = useNavigate();
  return (
    <div className="Head">
      <Heads>
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
      </Heads>
    </div>
  );
};
export default Head;
