import React, { Component } from "react";
import PropTypes from "prop-types";
import Search from "../containers/Search";




class CatalogHeader extends Component {


    render() {


        return (
          <div className="catalog-header">
            <div className="catalog-header__left">
                Каталог
            </div>
            <div className="catalog-header__right">
              <Search/>
            </div>

          </div>
        );
    }
}

CatalogHeader.propTypes = {
    selected_content: PropTypes.string,
    LinkWrapper: PropTypes.func,
    main_state: PropTypes.array
};




export default CatalogHeader;