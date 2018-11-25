import React from "react";
import DoctorList from "../containers/DoctorList";

class DoctorPage extends React.Component {
  state = {
    doctors: []
  };

  componentDidMount() {
    fetch(
      "https://api.betterdoctor.com/2016-03-01/practices?name=therapist&skip=0&limit=100&user_key=21802ea0d6d2c565488582088e578a6c")
      .then(response => response.json())
      .then(doctors => {
        this.setState({
          doctors: doctors
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Doctor's Page</h1>
        <div>
          <DoctorList doctors={this.state.doctors} />
        </div>
      </div>
    );
  }
}
export default DoctorPage;
