import styled from "styled-components";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router";

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
  display: flex;
  align-items: center;
  margin-top: 169px;
  height: 68px;

  font-size: 42px;
  font-weight: semiBold;
  color: #4f4747;
`;

// 주의 문구
const Title2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 68px;
  margin-top: 3px;

  & > div {
    display: flex;
    align-items: center;
    margin-bottom: 21px;

    font-weight: regular;
    font-size: 24px;
    color: #1d1d1d;
  }
`;

const Box = styled.div`
  width: 792px;
  height: 500px;
  display: flex;
  justify-content: center;
  //margin-bottom: 174px;

  border-radius: 30px;
  border: 1px solid #b5b5b5;
  font-size: 15px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 555px;
  height: 117px;
  margin-top: 70px;

  & > p {
    width: 63px;
    height: 68px;
    margin-left: 20px;
    margin-top: 27px;
    display: flex;
    align-items: center;

    font-weight: regular;
    font-size: 24px;
    color: #1d1d1d;
  }

  & > input {
    margin-top: 43px;
    //margin-left: 37px;
    margin-left: 60px;
    width: 304px;
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  //width: 555px;
  height: 60px;
  margin-top: 20px;

  & > p {
    height: 68px;
    margin-left: 40px;
    margin-right: 10px;
    margin-top: 2px;
    display: flex;
    align-items: center;

    font-weight: regular;
    font-size: 24px;
    color: #1d1d1d;
  }

  & > input {
    width: 304px;
    height: 36px;
    margin-top: 19px;
    display: flex;
    align-items: center;
  }

  & > button {
    display: flex;
    margin-top: 19px;
    margin-left: 13px;

    font-size: 13px;
    font-weight: bold;
    border-radius: 15px;
    background-color: #007b59;
  }
`;

const Div3 = styled.div`
  display: flex;
  justify-content: row;
  flex-direction: column;
  width: 555px;
  height: 100px;

  & > input {
    width: 304px;
    height: 36px;
    margin-top: 11px;
    margin-left: 141px;

    display: flex;
    justify-content: center;
  }

  // a {
  //   display: flex;
  //   flex-direction: row;
  //   & : visited{
  //     color: none;
  //   }
  // }

  & > div {
    width: 310px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-left: 138px;
  }
`;

const A = styled.a`
  display: flex;
  flex-direction: row;
  &:visited {
    text-decoration: none;
  }
`;

const Div4 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 265px;
  margin-top: 15px;
  height: 68px;

  & > button {
    display: flex;
    margin-right: 230px;

    font-size: 20px;
    font-weight: bold;
  }
`;

const PhoneAuth = () => {
  const navigate = useNavigate();
  return (
    <Div>
      <Center>
        <Title1>핸드폰번호 인증하기</Title1>

        <Title2>
          <div style={{ fontSize: "20px" }}>
            핸드폰 인증을 통해 본인인증을 쉽게 하세요.
          </div>
        </Title2>

        <Box>
          <Content>
            <Div1>
              <p>성명</p>
              <input placeholder=""></input>
            </Div1>
            <Div2>
              <p>휴대폰번호</p>
              <input
                placeholder=" (-) 없이 입력 (예 01012345678)"
                type=""
              ></input>

              <Button
                variant="contained"
                style={{
                  width: "118px",
                  height: "43px",
                  backgroundColor: "#007B59",
                }}
              >
                인증번호 발송
              </Button>
            </Div2>
            <Div3>
              <input placeholder=" 인증번호 입력"></input>
              <div>
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="success" />}
                  label="약관동의하기"
                  labelPlacement="end"
                />

                <button
                  style={{
                    margin: "0px",
                    backgroundColor: "white",
                    padding: "0px",
                    border: "none",
                  }}
                  onClick={() => navigate("/sign")}
                >
                  | 회원가입
                </button>
              </div>
            </Div3>
            <Div4>
              <Button
                variant="contained"
                style={{
                  width: "312px",
                  height: "42px",
                  backgroundColor: "#B2B2B2",
                }}
              >
                다음
              </Button>
            </Div4>
          </Content>
        </Box>
      </Center>
    </Div>
  );
};

export default PhoneAuth;
