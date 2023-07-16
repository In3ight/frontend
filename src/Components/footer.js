import { ThemeProvider  } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import In3ightTheme from "../theme";

const Footer = () => {
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={In3ightTheme}>
                <Box
                    sx={{
                        width: 1920,
                        height: 560,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '100%',
                            height: 360,
                            backgroundColor: 'primary.main',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: 1200,
                                height: '100%',
                            }}
                        >
                            <Box
                                sx={{
                                    marginRight: '30px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'left',
                                    justifyContent: 'center',
                                    height: '100%',
                                }}
                            >
                                <Box
                                    sx={{
                                        marginBottom: '20px',
                                        fontSize: 28,
                                        fontWeight: 600,
                                        color: 'white',
                                        textAlign: 'left',
                                    }}
                                >
                                    SUIT CARRIER에 대해 더 알고 싶다면?
                                </Box>
                                <Box
                                    sx={{
                                        marginBottom: '20px',
                                        fontSize: 20,
                                        color: 'white',
                                        textAlign: 'left',
                                    }}
                                >
                                    우리 집 창고 속 캐리어를, 우리 동네 캐리어로!
                                    <br></br>
                                    공간 차지가 큰 캐리어를 SUIT CARRIER를 활용해보세요
                                    <br></br>
                                    요즘 인기있는 캐리어 디자인, 사이즈를 확인해보세요
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-around',
                                    }}
                                >
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            width: 170,
                                            height: 60,
                                            fontSize: 18,
                                            fontWeight: 500,
                                            color: 'white',
                                            backgroundColor: 'primary.main',
                                            borderRadius: 10,
                                            border: "2px solid",
                                            borderColor: "white",
                                            '&:hover': {
                                                color: 'primary.dark',
                                                border: "2px solid",
                                                borderColor: "white",
                                                backgroundColor: "white",
                                            }
                                        }}
                                    >
                                        캐리어 둘러보기
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            width: 170,
                                            height: 60,
                                            fontSize: 18,
                                            fontWeight: 500,
                                            color: 'white',
                                            backgroundColor: 'primary.main',
                                            borderRadius: 10,
                                            border: "2px solid",
                                            borderColor: "white",
                                            '&:hover': {
                                                color: 'primary.dark',
                                                border: "2px solid",
                                                borderColor: "white",
                                                backgroundColor: "white",                                           }
                                        }}
                                    >
                                        Contact Us
                                    </Button>
                                </Box>
                            </Box>    
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Box
                                    sx={{
                                    }}
                                >
                                    <img style={{width: 180+'px', }} src="images/c_logo.png" alt="로고" />
                                </Box>
                                <Box
                                    sx={{
                                        marginLeft: '20px',
                                        width: 150,
                                        fontSize: 30,
                                        fontWeight: 700,
                                        textAlign: 'left',
                                        color: 'white',
                                    }}
                                > 
                                    SUIT-
                                    <br></br>
                                    CARRIER
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '100%',
                            height: 220,
                            backgroundColor: 'sub2.main',
                        }}
                    >
                        <Box
                            sx={{
                                width: 1200,
                                height: '100%',
                                backgroundColor: 'sub2.main',
                            }}
                        >
                            <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: 1200,
                                height: '100%',
                            }}
                            >
                                <Box
                                    sx={{
                                        marginRight: '30px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'left',
                                        justifyContent: 'center',
                                        height: '100%',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            marginBottom: '20px',
                                            fontSize: 28,
                                            fontWeight: 600,
                                            color: 'black',
                                            textAlign: 'left',
                                        }}
                                    >
                                        Contact US
                                    </Box>
                                    <Box
                                        sx={{
                                            marginBottom: '20px',
                                            fontSize: 20,
                                            color: 'black',
                                            textAlign: 'left',
                                        }}
                                    >
                                        E-mail | <a href="mailto:test@suitcarrier.co.kr">📧 test@suitcarrier.co.kr</a>
                                    </Box>
                                </Box>    
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            marginTop: '70px',
                                            marginRight: '20px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: '100%',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                fontSize: 18,
                                                fontWeight: 700,
                                                textAlign: 'right',
                                                color: 'black',
                                            }}
                                        > 
                                            SUIT-CARRIER
                                        </Box>
                                        <Box
                                            sx={{
                                                marginTop: '4px',
                                                fontSize: 16,
                                                fontWeight: 500,
                                                textAlign: 'right',
                                                color: 'black',
                                            }}
                                        > 
                                            우리 집 창고 속 캐리어를, 우리 동네 캐리어로!
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                        }}
                                    >
                                        <img style={{width: 140+'px', }} src="images/logo.png" alt="로고" />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    )
}

export default Footer;
