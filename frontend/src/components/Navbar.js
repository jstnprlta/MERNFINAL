//import { Link } from "react-router-dom";
//import { Avatar, Grid, Paper } from "@mui/material";
//import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';



export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="secondary"
            aria-label=""
            sx={{ height:"75" }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar><SportsGymnasticsIcon/></Avatar>
          <Typography variant="h5" align='center' sx={{ flexGrow: 1 }} color="seconday">
            Welcome To FitnessSocial
          </Typography>
          <Button color="secondary" >Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

 
 
 
 
 
 
/*export default Navbar;*/
 

/*const Navbar = () => {*/
  /*const paperClasses = { padding: 50, height: "25vh", width: 5000 };
  return (
    <Grid>
      <Paper elevation={5} style={paperClasses}>
        <Grid>
          <Avatar>
            <SelfImprovementIcon />
          </Avatar>
          <h3> Welcome to Fitness Social </h3>
        </Grid>
      </Paper>
    </Grid>
  );
};*/



/*const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;*/
