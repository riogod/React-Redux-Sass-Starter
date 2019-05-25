import React, { Component } from "react";
import PropTypes from "prop-types";
import CatalogHeader from "../containers/Catalog-header";
import JIApi from "../services/serverAPI";




class Catalog extends Component {

    jiData = new JIApi();

    constructor(props) {
        super(props);
        this.updateCategory();

        this.state = {
            itemList: null
        };
    }


    updateCategory() {
        const { search_phrase } = this.props.main_state;
        const catalogId = (this.props.match.params.number >= 0) ? this.props.match.params.number : 0;

        this.jiData.getCatalogData(catalogId, search_phrase.toLowerCase()).then((item) => {
            this.setState({
                itemList: item
            });
        });
    }


    componentDidMount()     {
        const { setViewContent } = this.props;
        setViewContent("catalog");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.number !== prevProps.match.params.number || this.props.main_state.search_phrase !== prevProps.main_state.search_phrase) {
            this.updateCategory();
        }
    }


    render() {
        console.log(this.props);
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
    main_state: PropTypes.array,
    match: PropTypes.array,
    number: PropTypes.number
};




export default Catalog;