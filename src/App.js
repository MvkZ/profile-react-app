import React, { Component } from "react";
import Profile from "./components/profile.component"
import DrawerPanel from "./components/drawer";
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';

class App extends Component {
  render() {
    return (
      <div>
        <Grid container columns={{ md: 10 }}>
        <Grid item xs={2}>
          <DrawerPanel />
          </Grid>
          <Grid item xs={8} >
            <Profile />
          </Grid>
          </Grid>
      </div>
    );
  }
}

export default App;
