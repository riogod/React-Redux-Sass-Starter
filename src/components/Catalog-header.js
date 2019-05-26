import React, { Component } from "react";
import PropTypes from "prop-types";
import Search from "../containers/Search";
import {Link} from "react-router-dom";



class CatalogHeader extends Component {



    render() {

        const parent_list = this.props.main_state.category_parent_list;

        if(parent_list !== null) {
            // console.log("CAT:", parent_list.length);
            // console.log("CAT:", parent_list[parent_list.length - 1]);
            const parent_list_length = parent_list.length;


            const maplist = parent_list.map((item, i) => {
                if(item.id === 0) {
                    return (<li key={item.id}><Link to={"/catalog"} > <i className="fa fa-home"/> </Link></li>);
                }
                if(i === parent_list_length - 1) {
                    return (<li key={item.id}> {item.name} </li>);
                }

                return (<li key={item.id}><Link to={`/catalog/${item.id}`} > {item.name} </Link></li>);

            });




            // this.breadcrumb = <Link to={`/catalog/${parent_list[parent_list.length - 1].id}`} > UP </Link>;
            this.breadcrumb = <ol className="breadcrumb"> { maplist} </ol>;
        } else {
            this.breadcrumb = "Каталог";
        }



        return (
          <div className="catalog-header">
            <div className="catalog-header__left">
              {this.breadcrumb}
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
    category_parent_list: PropTypes.any,
    LinkWrapper: PropTypes.func,
    main_state: PropTypes.array
};




export default CatalogHeader;