import {
    Card,
    CardActions,
    CardMedia,
    IconButton,
    Typography,
  } from "@mui/material";
  import Favorite from "@mui/icons-material/Favorite";
  
  const Cards = () => {
    return (
      <Card width="307px">
        <CardMedia
          component="img"
          height="215"
          width="307px"
          image="/Image/example.png"
          alt="사진"
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            width="100%"
            variant="body2"
            color="text.secondary"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <h2>성남시 분당구</h2>
            <div style={{ display: "flex" }}>
              <h3
                style={{
                  color: "#007B59",
                  marginRight: "7px",
                  fontSize: "16px",
                }}
              >
                추천
              </h3>
              <h3 style={{ color: "#FF2E2E", fontSize: "16px" }}>HOT</h3>
              <CardActions>
                <IconButton style={{ padding: "0px" }}>
                  <Favorite />
                </IconButton>
              </CardActions>
            </div>
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3 style={{ fontSize: "20px" }}>3월 27일 ~ 4월 1일</h3>
            <h5 style={{ fontSize: "16px" }}>35,000 원 / 박</h5>
          </div>
        </div>
      </Card>
    );
  };
  export default Cards;
  