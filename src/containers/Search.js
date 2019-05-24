import React, { Component } from "react";
import ModSettings from "../components/Settings";
import * as mainstateActions from "../actions/mainstateActions";
import { connect } from "react-redux";

import * as counterActions from "../actions/counterActions";
import PropTypes from "prop-types";
import Search from "../components/Search";




export class SearchController extends Component {

  componentDidMount() {
    const { setViewContent } = this.props;
    setViewContent("settings");
  }

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

SearchController.propTypes = {
  setViewContent: PropTypes.func
};

export default connect(mapStateToProps, mainstateActions)(Search);
