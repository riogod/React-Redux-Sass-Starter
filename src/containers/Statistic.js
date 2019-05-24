import React, { Component } from "react";
import * as mainstateActions from "../actions/mainstateActions";
import { connect } from "react-redux";


import PropTypes from "prop-types";
import ModStatistic from "../components/Statistic";




export class ModStatisticController extends Component {


  render() {



    return (
      <ModStatistic {...this.props}/>
    );
  }
}



export const mapStateToProps = store => {
  return {
    main_state: store.main_state
  };
};



export default connect(mapStateToProps, mainstateActions)(ModStatistic);
