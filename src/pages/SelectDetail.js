import { ThemeProvider  } from '@mui/material/styles';
import In3ightTheme from "../theme";
import styled from "styled-components";
import { useState } from "react";
import Head from "../Components/head";
import Footer from "../Components/footer";
import Button from '@mui/material/Button';
import { ReactComponent as Yellow} from "../assets/img/highlight.svg"
import { ReactComponent as Brown} from "../assets/img/brown.svg"
import { ReactComponent as Line} from "../assets/img/Line.svg";
import { ReactComponent as Crown} from "../assets/img/crown.svg";
import { ReactComponent as FlowerLv} from "../assets/img/flower-level.svg"; 
import {ReactComponent as Flower} from "../assets/img/Flower.svg"
import {ReactComponent as Badge} from "../assets/img/badge.svg"
import {ReactComponent as Calendar} from "../assets/img/calendar.svg"




const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Center = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main1 =  styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;


const Div1 = styled.div`
    width: 356px;
    height: 485px;
    flex-shrink: 0;

    margin-top: 149px;
    margin-bottom: 401px;
`;

const Title = styled.div`
    display: flex;
    width: 332px;
    height: 37px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;

    color: #3E4659;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 68px; /* 212.5% */

`;

// const HighLight = styled.div`
//     width: 96px;
//     height: 27px;

//     background: rgba(240, 193, 1, 0.53);
// `;

const Img_m = styled.img`
    width: 351px;
    height: 280px;
    flex-shrink: 0;

    margin-top: 65px;

`;

const Div2 = styled.div`
    margin-top: 25px;
    height: 78px;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Img_s = styled.img`
    width: 103px;
    height: 75px;
    border-radius: 5px;
    flex-shrink: 0;

`;

const Div3 =  styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: center;

    width: 875px;
    height: 585px;
    // margin-top: 137px;
    margin-left: 137px;
`;

// 상품 타이틀
const Title2 =styled.div`
    display: flex;
    width: 230px;
    flex-direction: column;
    justify-content: center;
    margin-top: 55px;
    margin-left: 32px;

    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 68px;
`;

const Level = styled.div`
    display: flex;
    flex-direction: row;
    height: 42px;
    align-items: center;
    gap: 10px; 
    margin-left: 32px;

    & > div{
        align-items: center;
    }
`;

const Box = styled.div`
    display: flex;
    flex-direction: row;
    width: 681px;
    height: 168px;
    margin-top: 9px;
    margin-left: 32px;
    border-radius: 15px;
    background: #FBFBFB;
    box-shadow: 2px 2px 7px 0px rgba(0, 0, 0, 0.14);

    & > img{
        width: 95px;
        height: 95px;
        margin-top: 20px;
        margin-left: 18px;
    }

    &> div {
        // width: 350px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        margin-left: 40px;
    }
`;

const Subbox = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    margin-top: 18px;
    width: 681px;
    height: 47px;

    border-radius: 30px;
    background: #FBFBFB;
    box-shadow: 2px 2px 7px 0px rgba(0, 0, 0, 0.14);

    & > div {
    display: flex;
    height: 35px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 6px;
    margin-left: 0px;
    gap: 10px;
    }
`;

const DivP = styled.div`
width: 700px;
  text-align: left;
  font-size: 24px;
  margin-left: 20px;
  margin-right: 30px;
  margin-top: 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DivC = styled.div`
    display: flex;
    width: 672px;
    height: 52px;
    flex-direction: row;

    & > div {
        display: flex;
        width: 222px;
        height: 16px;
        flex-direction: column;
        justify-content: center;

    }
`;

const DivD= styled.div`
display: flex;
width: 327px;
height: 86px;
flex-direction:row;
justify-content: center;
margin-top: 19px;

color: #007B59;
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 68px; /* 425% */

& > div {
    color: #007B59;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 68px;
}
`;

const Select = styled.select`
// margin-left: 0px;
width: 315px;
height: 38px;
border: 1px solid #000000;
margin-top: 5px;
border-radius: 30px;
font-weight: bold;
font-size: 16px;
font-family: Pretendard;
`;

const DivB = styled.div`
    margin-top: 141px;
    margin-bottom: 50px;
    margin-left: 80px;

    // width: 531px;
    height: 68px;
`;

const Div4 = styled.div`
width: 865px;
height: 160px;

margin-top: 27px;

& > h2 {
    text-align: left;
}

& > h2 {
    text-align: left;
    color: #000;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    }
`;

const Main2 = styled(Main1)`
    flex-direction: column;
`;

const Title3 =styled(Title)`
display: flex;
width: 672px;
height: 52px;
flex-direction: column;
// justify-content: center;
text-align: left;

color: #000;
font-family: Pretendard;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 68px;

& > p {
    text-align: left; 
}

& > div {
    text-align: left;
    color: #2C2C2C;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px; /* 166.667% */
}

`;
const Details = styled.div`
    display: flex;
    width: 905px;
    height: 360px;
    flex-direction: column;
    justify-content: center;

    margin-right: 500px;
    margin-top: 63px;
`;

const Line1 = styled.div`
    width: 1429px;
    height: 1px;
    background: #6E6E6E;
    margin-top: 34px;
`;

// wrap
const Detail2 = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 133px;
`;

const Box1= styled.div`
    display: flex;
    flex-direction: column;
    width: 979px;
    height: 466px;
    border-radius: 30px;
    background: rgba(247, 247, 247, 0.78);
    margin-top: 27px;
    margin-bottom: 200px;
`;

const Div5 = styled.div`
margin-top: 25px;
height: 78px;

display: flex;
justify-content: space-around;
align-items: center;

`;

const Div6 = styled.div`
margin-top: 50px;
width: 925px;
height: 225px;

display: flex;
justify-content: space-around;
align-items: center;
gap: 5px;

`;

const Img_d = styled.div`
    width: 280px;
    height: 220px;
    border-style: solid;
    border-radius: 5px;
    flex-shrink: 0;
`;

const Div7 = styled.div`
display: flex;
align-items: center;
justify-content: center;

width: 925px;
height: 200px;
justify-content: space-around;
align-items: center;

& > div{
    color: #000;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px; /* 166.667% */
}
`;


const Detail3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;

    & > h2 {
        text-align: left;
    }
`;

const Main3 = styled(Main1)`
display: flex;
flex-direction: column;

`;

const Div8 = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

height: 425px;
`;

const Div9 = styled(Div1)`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 257px;

    & > h1 {
    }
`;

const DivL =styled.div`
    width: 145px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;

`;

const Div11 = styled(Div7)`

height: 20px;
width: 145px;
margin-top: 10px;
// align-items: center;

&> div {
    color: #3E4659;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;


const Div12 = styled. div`

`;

const Profile = styled.div`
    width: 257px;
    height: 257px;
    border-radius: 257px;
    box-shadow: 2px 4px 7px 0px rgba(0, 0, 0, 0.38);
`;

const Trade = styled.div`
// width: 825px;
height: 255px; 
// margin-top: 50px;
margin-bottom: 250px;
margin-left: 50px;

& > h2 {
    text-align: left;
    color: #000;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    }
`;

const Date = styled.div`
display: flex;
flex-direction: row;
width: 620px;
margin-right: 400px;

& > h2{
    margin-top: 24px;
}

`;

const Cal = styled.div`
display: flex;
width: 415px;
height: 387px;
padding: 16px;
flex-direction: column;
align-items: flex-start;
gap: 20px;
flex-shrink: 0;

border: 2px solid;
margin-top: 24px;
margin-left: 20px;
margin-bottom: 102px;
`;

const SelectDetail = () => {

    return(
        <ThemeProvider theme={In3ightTheme}>
        <Div>
            <Center> 
               <Head/>
                <Main1>
                <Div1>
                    <Title>캐리 님의 Suit - carrier</Title>
                    <Img_m></Img_m>
                    <Div2>
                        <Img_s></Img_s>
                        <Img_s></Img_s>
                        <Img_s></Img_s>
                    </Div2>
                </Div1>

                <Div3>
                    <Title2>샘소나이트 25인치 갈색 가방</Title2>
                    <Level>
                        <Crown/><div> 상위 5% 대여자</div>
                        <FlowerLv/><div>탄소발자국 꽃 레벨</div>
                    </Level>

                    <Box>
                        <img></img>
                        <div>
                            <p>20대를 함께한 여행 메이트인 가방입니다.</p>
                            <p> 내부의 주머니가 많아 정리할 때 매우 편리합니다.</p>
                        </div>
                    </Box>
                    <Subbox>
                        <div>크기 <Line/> 25인치</div>
                        <div>색깔 <Line/><Brown/> 갈색</div>
                        <div>브랜드 <Line/>샘소나이트</div>
                    </Subbox>

                    <DivP>
                        만남 장소
                        <br />
                        <Select>
                            <option> 이매1동 놀이터</option>
                        </Select>
                    
                        <Calendar/>
                        <div>3월 27일-4월 1일</div>                       
                    </DivP>

                    <DivD>
                        희망거래가격 | 
                        <div>&nbsp;17,000&nbsp;원&nbsp;</div>
                        / 박
                    </DivD>

                    <DivB>
                        <Button variant="contained"
                        sx={{
                            width: 246,
                            height: 68,
                            borderRadius: 30,
                            marginRight: 1,
                        
                            fontSize: 18,
                            fontWeight: 700
                        }}
                        >대여하기</Button>
                        <Button variant="outlined"
                        sx={{
                            width: 246,
                            height: 68,
                            borderRadius: 30,
                            fontSize: 18,
                            fontWeight: 700,
                            borderColor:'sub1.main',
                            color: 'sub1.main'
                        }}
                        >찜하기</Button>
                    </DivB>
                </Div3>

                 </Main1>

                 <Main2>
                    <Details>
                        <Title3>"20대의 여행을 같이 한 나의 여행메이트"
                            <div>30인치의 캐리어로 캐리어 바깥에 2개의 수납공간이 추가로 있습니다.</div>
                        </Title3>

                        
                        <Level style={{marginTop:'29px', marginLeft: '0px'}}>
                                <Crown/><div> 상위 5% 대여자</div>
                                <FlowerLv/><div>탄소발자국 꽃 레벨</div>
                        </Level>

                        <Div4>
                            <h2>&lt;제품 특징&gt;</h2>
                            <h2>202X년에 구매하였습니다. <br></br>
                            사용감이 있으며 브라운 컬러의 심플한 디자인이라 어떤 옷이랑도 매치가 잘 됩니다. <br></br>
                            내부에는 수납공간이 여러개로 있어 여행 때 매우 유용하게 사용하실 수 있습니다.</h2>
                        </Div4>
                    </Details>

                    <Line1/>

                    <Detail2>
                        
                        <Box1>
                            <h1>파손여부</h1>
                        <Div6>
                            <Img_d></Img_d>
                            <Img_d></Img_d>
                            <Img_d></Img_d>
                    
                        </Div6>
                        <Div7>
                            <div>측면</div>
                            <div>정면</div>
                            <div>후면</div>
                        </Div7>

                        </Box1>
                  
                        <Detail3>
                            <h2>정면 위쪽에 약간의 스크레치가 있습니다.</h2><br/>
                            <h2>사용 중 가벼운 스크레치 정도는 문제 삼지 않습니다.<br/>
                                하지만 캐리어가 파손되거나 페인팅이 벗겨지는 경우 수리비가 청구됩니다.
                            </h2>
                        </Detail3>
                    </Detail2>
                 </Main2>

                 <Main3>
                    <Div8>
                        <Div9>
                            <Profile></Profile>
                            <h1>판매자 캐리님</h1>
                        <Div12>
                            <DivL>
                                <Badge/><Flower/>
                            </DivL>
                                <Div11 style={{height:''}}>
                                    <div>대표배지</div>
                                    <div>등급</div>
                                </Div11>
                         </Div12>
                        </Div9>

                    <Trade>
                            <h2>&lt;거래설명&gt;</h2>
                            <h2>판교역쪽에서 직거래를 희망하여 2023년 4월에서 5월 사이 모두 거래 가능합니다.<br></br>
                            오래 대여하시면 네고 해드릴 수 있습니다.</h2><br></br>
                            <h2>요청사항 | 대여기간이 끝난 후에는 저희 지역까지 물건을 가지고 와주셨으면 좋겠습니다. <br></br>
                            제품이 마음에 드셨다면 편하게 채팅 주세요~</h2>
                    </Trade>

                    </Div8>
                   
                    <Line1 style={{marginTop: '155px'}}/>

                    <Date>
                        <h2>희망 거래날짜</h2>
                        <Cal></Cal>
                    </Date>

                    
                 </Main3>
               <Footer/>
            </Center>
        </Div>
    </ThemeProvider>
    );
};
export default SelectDetail;
