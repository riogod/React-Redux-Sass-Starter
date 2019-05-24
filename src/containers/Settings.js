import React, { Component } from "react";
import ModSettings from "../components/Settings";
import * as mainstateActions from "../actions/mainstateActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";




export class ModSettingsController extends Component {

  render() {
    return (
      <ModSettings {...this.props}/>
    );
  }
}



export const mapStateToProps = store => {
  return {
    main_state: store.main_state
  };
};

ModSettingsController.propTypes = {
  setViewContent: PropTypes.func
};

export default connect(mapStateToProps, mainstateActions)(ModSettings);
