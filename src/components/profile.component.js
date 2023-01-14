import React, { Component } from "react";
import ProfileDataService from "../services/profile.service";
import { withRouter } from '../common/with-router';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeDisplayName = this.onChangeDisplayName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeWorkNumber = this.onChangeWorkNumber.bind(this);
    this.onChangeHomeNumber = this.onChangeHomeNumber.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.onClear = this.onClear.bind(this)

    this.state = {
      currentProfile: {
        id: null,
        firstName: "",
        lastName: "",
        displayName: "",
        email: "",
        phoneNumberWork: "",
        phoneNumberHome: "",
        location: "",
      },
      message: ""
    };
  }

  componentDidMount() {
    // hardcoding the id for now for later changes.
    this.getProfile(1);
  }

  onChangeFirstName(e) {
    const firstName = e.target.value;

    this.setState(function(prevState) {
      return {
        currentProfile: {
          ...prevState.currentProfile,
          firstName: firstName
        }
      };
    });
  }

  onChangeLastName(e) {
    const lastName = e.target.value;
    
    this.setState(prevState => ({
      currentProfile: {
        ...prevState.currentProfile,
        lastName: lastName
      }
    }));
  }

  onChangeDisplayName(e) {
    const displayName = e.target.value;

    this.setState(function(prevState) {
      return {
        currentProfile: {
          ...prevState.currentProfile,
          displayName: displayName
        }
      };
    });
  }

  onChangeEmail(e) {
    const email = e.target.value;
    
    this.setState(prevState => ({
      currentProfile: {
        ...prevState.currentProfile,
        email: email
      }
    }));
  }

  onChangeWorkNumber(e) {
    const phoneNumberWork = e.target.value;

    this.setState(function(prevState) {
      return {
        currentProfile: {
          ...prevState.currentProfile,
          phoneNumberWork: phoneNumberWork
        }
      };
    });
  }

  onChangeHomeNumber(e) {
    const phoneNumberHome = e.target.value;
    
    this.setState(prevState => ({
      currentProfile: {
        ...prevState.currentProfile,
        phoneNumberHome: phoneNumberHome
      }
    }));
  }


  onChangeLocation(e) {
    const location = e.target.value;
    
    this.setState(prevState => ({
      currentProfile: {
        ...prevState.currentProfile,
        location: location
      }
    }));
  }

  onClear(e) {
    ProfileDataService.get(1)
      .then(response => {
        this.setState({
          currentProfile: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  getProfile(id) {
    ProfileDataService.get(id)
      .then(response => {
        this.setState({
          currentProfile: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateProfile() {
    ProfileDataService.update(
      this.state.currentProfile.id,
      this.state.currentProfile
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The profile was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentProfile } = this.state;

    return (
      
      <div>
        <Grid container columns={{ md: 8 }}>
        <Grid item xs={5}>
        <Grid container direction={'row'} spacing={24}>
        <Grid item  xs={8}>
        <Box sx={{ width: '100%', maxWidth: 500 }}>
          <Typography variant="h3" gutterBottom>
            Good Morning, {this.state.currentProfile.displayName}
          </Typography>
          <Typography variant="h5" gutterBottom>
            January 15, 2023
          </Typography>
        </Box>
          </Grid>
          <Grid item xs={12}>
        {currentProfile ? (
          <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '50ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h5" gutterBottom>
            My Profile
          </Typography>
          <div>
            <TextField
              id="outlined-helperText"
              label="First Name"
              value={currentProfile.firstName}
              onChange={this.onChangeFirstName}
            />

            <TextField
              id="outlined-helperText"
              label="Last Name"
              value={currentProfile.lastName}
              onChange={this.onChangeLastName}
            />

            <TextField
              id="outlined-helperText"
              label="Display Name"
              value={currentProfile.displayName}
              onChange={this.onChangeDisplayName}
            />

            <TextField
              id="outlined-helperText"
              label="Email"
              value={currentProfile.email}
              onChange={this.onChangeEmail}
            />

            <TextField
              id="outlined-helperText"
              label="Phone Number (Work)"
              value={currentProfile.phoneNumberWork}
              onChange={this.onChangeWorkNumber}
            />

            <TextField
              id="outlined-helperText"
              label="Phone Number (Home)"
              value={currentProfile.phoneNumberHome}
              onChange={this.onChangeHomeNumber}
            />

            <TextField
              id="outlined-helperText"
              label="Location"
              value={currentProfile.location}
              onChange={this.onChangeLocation}
            />
           
          </div>
        </Box>
            
        ) : (
          <div>
            <br />
            <p>Please Login...</p>
          </div>
        )}
        </Grid>
        <Grid item  xs={5}>

        <Stack spacing={5} direction="row">
              <Button style={{ textTransform: "none", borderRadius: 35, backgroundColor: "red", padding: "14px 0px" , fontSize: "18px"}}  fullWidth variant="outlined" onClick={this.updateProfile}>
                Update
              </Button>
              
              <Button style={{ textTransform: "none", borderRadius: 35, backgroundColor: "red", padding: "14px 0px", fontSize: "18px"}}  fullWidth variant="outlined" onClick={this.onClear}>
                Reset</Button>
          </Stack>
          <p>{this.state.message}</p>
        </Grid>
        </Grid>
        </Grid>

        <Grid item xs={3} >
        <Grid container direction={'row'} spacing={24}>
        <Grid item  xs={8}>
        </Grid>
        <Grid item xs={12}>
          <center>
        <Box
            component="img"
            sx={{
              height: 320,
              width: 320,
            }}
            alt="User"
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          />
          <Typography variant="h6" gutterBottom>
            {currentProfile.firstName} {currentProfile.lastName}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {currentProfile.email}
          </Typography>
          </center>
        </Grid>
        </Grid>
        </Grid>
        </Grid>
      </div>
      
    );
  }
}

export default withRouter(Profile);