import React from "react";
import { Paper, Typography, Grid, IconButton } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { ReactComponent as Logo } from './Group 726.svg';

const Read = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter"],
    },
  });
   return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={0}>
        {}
        <Grid
          item
          md={12}
          xs={12}
          sx={{
            pl: { md: 6, xs: 6 },
            pt: { md: 10, xs: 3 },
            pb: { md: 5, xs: 3 },
            pr: { xs: 3 },
            textAlign: "center",
          }}
        >
          <Paper
            sx={{
              p: 4,
              fontSize: { md: "1.2rem", xs: "0.8 rem" },
              borderRadius: "20px",
            }}
            elevation={3}
          >
            
            <Typography
              variant="h5"
              fontWeight={600}
              gutterBottom
              sx={{ textAlign: { md: "center", sx: "center" } }}
            >
              Trusted by Over 40+ Businesses
            </Typography>
            <Logo />
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Read;
