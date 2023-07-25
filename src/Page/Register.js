import styled, { css } from "styled-components";
import Head from "../Components/head";
import { Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useDetectClose from "../hooks/useDetectClose";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const H1 = styled.h1`
  margin-top: 100px;
  display: flex;
  height: 68px;
  font-size: 32px;
  font-weight: bold;
`;
const Main = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: column;
  & > h2 {
    display: flex;
    justify-content: flex-start;
  }
`;
const Box1 = styled.div`
  background-color: #fafafa;
  width: 1232px;
  height: 278px;
  border-radius: 30px;
  margin-top: 20px;
`;
const Box2 = styled.div`
  background-color: #fafafa;
  width: 1232px;
  height: 120px;
  border-radius: 30px;
  margin-top: 20px;
`;
const H3 = styled.h3`
  font-weight: "Bold";
  font-size: 24px;
  color: #f0c101;
`;
const Dis = styled.div`
  display: flex;
  width: ${(props) => props.width};
  margin-left: ${(props) => props.marignLeft};
  margin-top: ${(props) => props.marignTop};
  justify-content: space-between;
  align-items: center;
`;
const H4 = styled.h3`
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: flex-start;
  margin-left: ${(props) => props.paddingLeft};
`;
const Input = styled.input`
  width: 375px;
  height: 66px;
  border-radius: 30px;
  font-size: 22px;
  font-weight: bold;
  text-indent: 50px;
  border: 1px solid black;
`;
const H5 = styled.h4`
  font-size: 20px;
  text-decoration: underline;
  color: #007b59;
`;
const Btn = styled.div`
  margin-top: 66px;
  display: flex;
  justify-content: flex-end;
  & > button {
    width: 168px;
    height: 45px;
    background-color: #007b59;
    border-radius: 30px;
    border: none;
    color: white;
    font-size: 18px;
    font-weight: bold;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  text-align: center;
`;

const Menu = styled.div`
  background: white;
  position: absolute;
  top: 52px;
  left: 50%;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  &:after {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 12px solid transparent;
    border-top-width: 0;
  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
      left: 50%;
    `};
`;

const Ul = styled.ul`
  & > li {
    margin-bottom: 10px;
  }

  & > li:first-of-type {
    margin-top: 10px;
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const LinkWrapper = styled.a`
  font-size: ${(props) => props.font};
  font-weight: ${(props) => props.weight};

  text-decoration: none;
  color: black;
`;
const Li = styled.li`
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginButtom};
`;
const IMG = styled.div`
  display: columns;
  width: 209px;
  height: 218px;
  align-items: center;
  margin-left: 24px;
  margin-right: 24px;
  & > h4 {
    font-size: 23px;
  }
`;
const day = ["6일", "10일", "15일", "선택없음"];
const percent = ["3%", "5%", "10%", "선택없음"];
const size = ["20인치", "24~25인치", "27~28인치", "30~31인치"];
const colors = ["갈색", "흰색", "파란색", "주황색", "초록색"];
const brand = ["샘소나이트", "내셔널지오그래픽", "샤오마", "스위스밀리터리"];

const Register = () => {
  const [sizeIsOpen, sizeRef, sizeHandler] = useDetectClose(false);
  const [guideIsOpen, guideRef, guideHandler] = useDetectClose(false);
  const navigate = useNavigate();
  return (
    <Div>
      <Head />
      <Main>
        <H1>캐리어 등록하기</H1>
        <Box1>
          <Dis width="1149px" marignLeft="48px" marignTop="45px">
            <Dis width="247px">
              <img src="Image/photo.png" />
              <H3>사진 등록하기</H3>
            </Dis>
            <DropdownContainer onClick={guideHandler} ref={guideRef}>
              <H5>*캐리어 등록 가이드 확인하기</H5>
              <Menu isDropped={guideIsOpen} width="812px" height="408px">
                <Ul>
                  <Li>
                    <Li marginTop="35px" marginButtom="34px">
                      <LinkWrapper font="36px" weight="bold">
                        상세 사진 가이드
                      </LinkWrapper>
                    </Li>
                    <Li style={{ display: "flex" }}>
                      <IMG>
                        <img src="Image/pt1.png" /> <h4>측면</h4>
                      </IMG>
                      <IMG>
                        <img src="Image/pt2.png" /> <h4>정면</h4>
                      </IMG>
                      <IMG>
                        <img src="Image/pt3.png" /> <h4>후면</h4>
                      </IMG>
                    </Li>
                  </Li>
                </Ul>
              </Menu>
            </DropdownContainer>
          </Dis>
          <H4 paddingLeft="40px" style={{ marginTop: 40 }}>
            *사진은 전면 / 후면 / 측면 모두 올려야 캐리어 등록이 가능합니다.
          </H4>
        </Box1>
        <Box2>
          <Dis width="569px" marignLeft="33px" marignTop="21px">
            <H3>가격 설정하기</H3>
            <Input placeholder="가격을 입력해주세요."></Input>
          </Dis>
        </Box2>
        <Box2>
          <Dis width="1043px" marignLeft="33px" marignTop="21px">
            <H3>장기 대여 시 할인</H3>
            <Dis width="810px">
              <Dis width="369px">
                <Autocomplete
                  disablePortal
                  id="combo-box1-demo"
                  options={day}
                  sx={{ width: 194, borderRadius: 30 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="기간"
                      style={{ borderRadius: 30 }}
                    />
                  )}
                />
                <H4>기간 이상 대여하면, </H4>
              </Dis>
              <Dis width="409px">
                <Autocomplete
                  disablePortal
                  id="combo-box2-demo"
                  options={percent}
                  sx={{ width: 194 }}
                  renderInput={(params) => (
                    <TextField {...params} label="할인 퍼센트" />
                  )}
                />
                <H4>를 할인해줄 수 있습니다. </H4>
              </Dis>
            </Dis>
          </Dis>
        </Box2>
        <Box2>
          <Dis width="1100px" marignTop="21px" marignLeft="33px">
            <Dis width="290px">
              <H3>색상</H3>
              <Autocomplete
                disablePortal
                id="combo-box4-demo"
                options={colors}
                sx={{ width: 194 }}
                renderInput={(params) => <TextField {...params} label="색상" />}
              />
            </Dis>
            <Dis width="290px">
              <H3>크기</H3>
              <Autocomplete
                disablePortal
                id="combo-box5-demo"
                options={size}
                sx={{ width: 194 }}
                renderInput={(params) => <TextField {...params} label="크기" />}
              />
            </Dis>
            <Dis width="290px">
              <H3>브랜드</H3>
              <Autocomplete
                disablePortal
                id="combo-box6-demo"
                options={brand}
                sx={{ width: 194 }}
                renderInput={(params) => (
                  <TextField {...params} label="브랜드 " />
                )}
              />
            </Dis>
          </Dis>
        </Box2>

        <DropdownContainer onClick={sizeHandler} ref={sizeRef}>
          <H5>*캐리어 사이즈 구분</H5>

          <Menu isDropped={sizeIsOpen} width="308.59px" height="150px">
            <Ul>
              <Li>
                <Li marginButtom="7px">
                  <LinkWrapper font="20px">20인치 기내 반입 사이즈</LinkWrapper>
                </Li>
                <Li marginButtom="7px">
                  <LinkWrapper font="20px">24~25인치 중간 사이즈</LinkWrapper>
                </Li>
                <Li marginButtom="7px">
                  <LinkWrapper font="20px">27~28인치 화물 사이즈</LinkWrapper>
                </Li>
                <Li marginButtom="7px">
                  <LinkWrapper font="20px">30~31인치 특대 사이즈</LinkWrapper>
                </Li>
              </Li>
            </Ul>
          </Menu>
        </DropdownContainer>

        <Box1>
          <Dis marignLeft="36px" marignTop="45px">
            <H3>상품 설명</H3>
          </Dis>
          <H4 style={{ paddingLeft: 42 }}>
            *상품과 관련된 자세한 설명 / 반납시 유의 사항 / 개인적인 스토리 등을
            작성해주시면, 대여 확률이 200% 증가!
          </H4>
        </Box1>
        <Btn>
          <button onClick={() => navigate("/registerSuccess")}>등록하기</button>
        </Btn>
      </Main>
    </Div>
  );
};
export default Register;
