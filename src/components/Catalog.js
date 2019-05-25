import React, { Component } from "react";
import PropTypes from "prop-types";
import CatalogHeader from "../containers/Catalog-header";
import JIApi from "../services/serverAPI";
import CatalogItemCard from "./Catalog-item-card";




class Catalog extends Component {

    jiData = new JIApi();
    categoryId = this.props.match.params.number;


    constructor(props) {
        super(props);

        this.state = {
            itemList: null
        };
    }


    updateCategory() {
        const { search_phrase } = this.props.main_state;
        const catalogId = (this.categoryId >= 0) ? this.categoryId : 0;

        this.jiData.getCatalogData(catalogId, search_phrase.toLowerCase()).then((item) => {
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


    componentDidMount()     {
        const { setViewContent, setCurrentCategory } = this.props;
        this.updateCategory();
        setCurrentCategory(this.categoryId);
        setViewContent("catalog");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.categoryId !== prevProps.match.params.number || this.props.main_state.search_phrase !== prevProps.main_state.search_phrase) {
            this.updateCategory();
        }
    }


    render() {
        // console.error("test");
        console.log(this.props);
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