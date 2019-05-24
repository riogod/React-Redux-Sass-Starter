import React, { Component } from "react";
import * as mainstateActions from "../actions/mainstateActions";
import { connect } from "react-redux";
import Catalog from "../components/Catalog";



export class ModCatalogController extends Component {

  render() {
    return (
      <Catalog {...this.props}/>
    );
  }
}



export const mapStateToProps = store => {
  return {
    main_state: store.main_state
  };
};


export default connect(mapStateToProps, mainstateActions)(Catalog);
