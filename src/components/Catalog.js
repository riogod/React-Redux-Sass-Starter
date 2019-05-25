import React, { Component } from "react";
import PropTypes from "prop-types";
import CatalogHeader from "../containers/Catalog-header";
import JIApi from "../services/serverAPI";
import CatalogItemCard from "./Catalog-item-card";




class Catalog extends Component {

    jiData = new JIApi();



    constructor(props) {
        super(props);
        console.log("Construct");
        this.state = {
            itemList: null
        };
    }


    updateCategory() {
        const { search_phrase } = this.props.main_state;
        const { setCurrentCategory } = this.props;
        const categoryId = parseInt(this.props.match.params.number);
        const catalogId = (!isNaN(categoryId)) ? categoryId : 0;
        console.log("ComponentUpdate func");
        setCurrentCategory(catalogId);
        this.jiData.getCatalogData(catalogId, search_phrase.toLowerCase()).then((item) => {
            console.log("ComponentUpdate func async");
            this.setState({
                itemList: item
            });
        });
    }

    catalogList(arr) {
        return !arr ? null : arr.map(({id, title, description}) => {
            return (
              <CatalogItemCard key={id} title={title} description={description} id={id} actionClick={this.categoryClick}/>
            );
        });
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps");

    }

    componentDidMount()     {
        const { setViewContent } = this.props;
        this.updateCategory();
        console.log("ComponentMount");
        setViewContent("catalog");


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const categoryId = this.props.match.params.number;
        console.log("ComponentUpdate");
        if(categoryId !== prevProps.match.params.number || this.props.main_state.search_phrase !== prevProps.main_state.search_phrase) {
            this.updateCategory();
        }
    }


    render() {
        // console.error("test");
        console.log("Catalog render:", this.props);
        return (
          <React.Fragment>
            <CatalogHeader/>
            <div className="category-cards">
              {this.catalogList(this.state.itemList)}
            </div>
          </React.Fragment>
        );
    }
}

Catalog.propTypes = {
    selected_content: PropTypes.string,
    setViewContent: PropTypes.func,
    setCurrentCategory: PropTypes.func,
    main_state: PropTypes.array,
    number: PropTypes.number,
    match: PropTypes.array,
    categoryId: PropTypes.number
};




export default Catalog;