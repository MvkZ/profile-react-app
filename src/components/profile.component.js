import React, { Component } from "react";
import ProfileDataService from "../services/profile.service";
import { withRouter } from '../common/with-router';

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
        {currentProfile ? (
          <div className="edit-form">
            <h4>Profile</h4>
            <form>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={currentProfile.firstName}
                  onChange={this.onChangeFirstName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={currentProfile.lastName}
                  onChange={this.onChangeLastName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="displayName">Display Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="displayName"
                  value={currentProfile.displayName}
                  onChange={this.onChangeDisplayName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={currentProfile.email}
                  onChange={this.onChangeEmail}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumberWork">Phone Number (Work)</label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumberWork"
                  value={currentProfile.phoneNumberWork}
                  onChange={this.onChangeWorkNumber}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumberHome">Phone Number (Home)</label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumberHome"
                  value={currentProfile.phoneNumberHome}
                  onChange={this.onChangeHomeNumber}
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  value={currentProfile.location}
                  onChange={this.onChangeLocation}
                />
              </div>

            </form>

           
            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateProfile}
            >
              Update
            </button>
            <p>{this.state.message}</p>
            <button
              type="submit"
              className="badge badge-success"
              onClick={this.onClear}
            >
              Reset
            </button>
          </div>
        ) : (
          <div>
            <br />
            <p>Please Login...</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Profile);