import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Chip, Avatar } from "@mui/material";
import React from "react";
import collage from  "../../items/Frame5.jpg";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Body from "../Body/Body"
import { ThemeProvider, createTheme } from "@mui/material";
const BasicInfo = () => {
   const theme = createTheme({
     typography: {
       fontFamily: ["Georgia"],
     },
   });
  return (
    <ThemeProvider theme={theme}>
    <>
    <Grid>
    <Box mt={10} ml={4}>
      </Box> 
    </Grid>
      <Grid container>
        <Grid item md={6} xs={12} sx={{ p: { md: 7, xs: 3 } }}>
          <Typography variant="h3" fontWeight={700} sx={{textAlign : {xs : "center", md:"left"}}} gutterBottom>
          End-to-end content related services. Hire writers fast. 
          </Typography>
          <Typography variant="h6" sx={{textAlign : {xs : "center", md:"left"}}}>
          Colourisko offers a one-stop shop for content-related services.
Leverage the network of our writers to get the best content fast. Unlimited revisions, quality content, multiple checks and fast deliveries!

          </Typography>
        </Grid>
        <Grid item1 md={6} xs={14} sx={{ p: { md: 7, xs: 3 } }}>
        <Avatar
            variant={"rounded"}
            alt="The image"
            src={collage}
            style={{
              width: 450,
              height: 270,
              background: "FFFFFF",
            
            }}
          />
          <Box mt={3} ml={12}>
          <Chip
            
            label="Join Creator's Community"
            variant="outlined"
            // size="medium"
            sx={{
              mr: {md : 3},
              fontSize: { md: "1rem", xs: "0.8 rem" },
              px: 1,
              py: 3,
              // borderRadius: "5000px",
              bgcolor: "#383838",
              color: "#FFFFFF",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#FFB24D",
              },
              fontWeight : 600,
            }}
            onClick ={()=> window.open("zevamp.com")}
          />
        </Box>
        </Grid>
      </Grid>
      <Body/>
    </>
    </ThemeProvider>
  );
};

export default BasicInfo;
