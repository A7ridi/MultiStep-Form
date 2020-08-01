import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";;

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    // Process Form //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Success' />
            <h1>Thank you for your submission</h1>
            <p>You will be notified with further instructions</p>  
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
