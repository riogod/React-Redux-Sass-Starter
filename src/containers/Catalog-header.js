import React, { Component } from "react";
import * as mainstateActions from "../actions/mainstateActions";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import CatalogHeader from "../components/Catalog-header";



export class CatalogHeaderController extends Component {

  componentDidMount() {

  }

  render() {



    return (
      <CatalogHeader {...this.props}/>
    );
  }
}



export const mapStateToProps = store => {
  return {
    main_state: store.main_state
  };
};

CatalogHeaderController.propTypes = {
  setViewContent: PropTypes.func
};

export default connect(mapStateToProps, mainstateActions)(CatalogHeader);
