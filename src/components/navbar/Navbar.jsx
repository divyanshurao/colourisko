import React from "react";
import { AppBar, Toolbar,} from "@mui/material";
import colouriskologo from "../../items/Frame.jpg";
import { Chip,Avatar } from "@mui/material";
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
const Navbar = () => {
  return (
    <div className="navbar">
      
      <AppBar sx={{ background: "#FFFFFF" }} elevation={0}>
      <Grid>
    <Box mt={3} ml={4}>
      </Box> 
    </Grid>
        <Toolbar style={{ justifyContent: "space-between", display: "flex" }}>
          <Avatar
            variant={"rounded"}
            alt="The image"
            src={colouriskologo}
            style={{
              width: 150,
              // height: 200,
              background: "FFFFFF",
              paddingLeft:22 
            }}
          />
          
            <Chip
            label="Contact Now"
            variant="outlined"
            // size="medium"
            sx={{
              mr: {md : 3},
              fontSize: { md: "1rem", xs: "0.8 rem" },
              px: 1,
              py: 3,
              borderRadius: "5000px",
              bgcolor: "#0B0B5A",
              color: "#FFFFFF",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#FFB24D",
              },
              fontWeight : 600,
            }}
            onClick ={()=> window.open("zevamp.com")}
          />
            
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Navbar;
