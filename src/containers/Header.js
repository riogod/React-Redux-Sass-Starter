import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../components/Header";

import * as mainstateActions from "../actions/mainstateActions";
import * as counterActions from "../actions/counterActions";








export class HeaderController extends Component {

    render() {
        return (
          <Header {...this.props} />
        );
    }
}

export const mapStateToProps = store => {
    return {
        main_state: store.main_state
    };
};


export default connect(mapStateToProps, {mainstateActions, counterActions})(Header);
