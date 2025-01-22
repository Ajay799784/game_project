import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardImg from "../../Assets/Images/83057.png";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import CardSecondImg from "../../Assets/Images/creator.jpg";
import AVA from "../../Assets/Images/ava.png";

const TrendingNefts = () => {
  return (
    <Container>
      <Box
        sx={{
          mb: 2,
          mt: 6,
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h5" color="#fff" fontWeight={600}>
            Trending NFTs
          </Typography>
          <Button
            sx={{
              textTransform: "inherit",
              color: "#28ba92",
            }}
          >
            view all
          </Button>
        </Box>
        <Box mt={2} display={"flex"} gap={2} sx={{ overflowX: "auto" }}>
          {Array.from(Array(4)).map((neft, index) => (
            <Card sx={{ maxWidth: 270 }} className="trending_nefts_card">
              <CardHeader
                avatar={
                  <Box>
                    <IconButton
                      sx={{
                        textTransform: "inherit",
                        color: "#fff",
                        fontSize: 9,
                        border: "1px solid #5406b4",
                        borderRadius: 4,
                        width: "fit-content",
                        bgcolor: "#1f2431",
                      }}
                    >
                      Auction Time
                    </IconButton>
                  </Box>
                }
                action={
                  <Box display={"flex"} gap={1}>
                    <IconButton
                      sx={{
                        color: "#fff",
                        border: "1px solid #262b2e",
                        borderRadius: 4,
                        width: "3rem",
                        height: "1.5rem",
                        bgcolor: "#1f2431",
                        display: "flex",
                        gap: 1,
                      }}
                    >
                      <FavoriteBorderOutlinedIcon
                        sx={{
                          width: 14,
                          height: 14,
                        }}
                      />
                      <Typography fontSize={12}>0</Typography>
                    </IconButton>
                    <IconButton
                      sx={{
                        color: "#fff",
                        fontSize: 9,
                        border: "1px solid #262b2e",
                        borderRadius: 4,
                        width: "2rem",
                        height: "1.5rem",
                        bgcolor: "#1f2431",
                      }}
                    >
                      <MoreHorizOutlinedIcon
                        sx={{
                          width: 14,
                          height: 14,
                        }}
                      />
                    </IconButton>
                  </Box>
                }
              />
              <CardMedia
                component="img"
                height="130"
                image={CardImg}
                alt="img"
                width={100}
                sx={{
                  px: 1,
                  width: "95%",
                  borderRadius: 4,
                }}
              />
              <CardContent>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Box display={"flex"} gap={1} alignItems={"center"}>
                    <Avatar variant="rounded" src={CardSecondImg} />
                    <Box>
                      <Typography color="#556174" fontSize={12}>
                        Creator
                      </Typography>
                      <Typography fontSize={12} color="#fff">
                        Wagmi#45
                      </Typography>
                    </Box>
                  </Box>
                  <Avatar
                    sx={{
                      width: 16,
                      height: 16,
                    }}
                    src={AVA}
                  />
                </Box>
              </CardContent>
              <CardActions disableSpacing>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  width={"100%"}
                  alignItems={"center"}
                >
                  <Box>
                    <Typography fontSize={10} color="#556174">
                      Highest Offer
                    </Typography>
                    <Typography fontSize={12} color="#28ba92" fontWeight={600}>
                      3.654ETH
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      fontSize={10}
                      color="#556174"
                      textAlign={"right"}
                    >
                      Price
                    </Typography>
                    <Box display={"flex"} gap={1} alignItems={"center"}>
                      <Avatar
                        sx={{
                          width: 12,
                          height: 12,
                        }}
                        src={AVA}
                      />
                      <Typography
                        fontSize={12}
                        color="#28ba92"
                        fontWeight={600}
                      >
                        365USD
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
};
export default TrendingNefts;
