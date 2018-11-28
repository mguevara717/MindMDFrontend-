import React from "react";
import DoctorProfile from "./DoctorProfile";

class DoctorCard extends React.Component {


  render() {
    // console.log(this.props)

    return (
      <div className="ui unstackable items">
        <div className="item">
          <div className="image">
            <img alt="oh no!" src="DocAvatar.png" />
            <div align="center" className="profile-info">
              <br />
              <DoctorProfile docProfile={this.props.doctorInfo}/>
            </div>
          </div>
          <div className="content">
            <br />
            <p id="main-header" className="header">
              Dr. {this.props.doctorInfo.first_name} <br />
            </p>
            <p id="main-header" className="header">
              {this.props.doctorInfo.last_name}
            </p>
            <div className="meta">
              <span>{this.props.doctorInfo.title}</span>
            </div>
            <div className="description">
              <p>{this.props.doctorInfo.office_name}</p>
              <address>
                {this.props.doctorInfo.street}
                <br />
                <span>{this.props.doctorInfo.city}, </span>
                {this.props.doctorInfo.street}
                <br />
                {this.props.doctorInfo.zip}
              </address>
            </div>
            <div className="extra">Phone: {this.props.doctorInfo.phone}</div>
            <hr />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorCard;
