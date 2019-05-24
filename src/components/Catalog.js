import React, { Component } from "react";
import PropTypes from "prop-types";
import CatalogHeader from "../containers/Catalog-header";
// import JIApi from "../services/serverAPI";




class Catalog extends Component {

    // jidata = new JIApi();

    componentDidMount() {
        const { setViewContent } = this.props;
        setViewContent("catalog");
    }


    render() {


        return (
          <React.Fragment>
            <CatalogHeader/>
qweqwe
          </React.Fragment>
        );
    }
}

Catalog.propTypes = {
    selected_content: PropTypes.string,
    setViewContent: PropTypes.func,
    main_state: PropTypes.array
};




export default Catalog;