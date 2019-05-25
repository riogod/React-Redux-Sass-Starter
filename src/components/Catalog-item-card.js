import React, {Component} from "react";
import PropTypes from "prop-types";
import SvgButton from "./svg-button/svg-button";
import {Link} from "react-router-dom";


 class CatalogItemCard extends Component {
    render() {
        return (
          <Link className="catalog-item" to={"/catalog/1"} >
            <div className="additional"/>
            <div className="catalog-item__left">
              <div className="title">{this.props.title}</div>
              <div className="description">{this.props.description}</div>
            </div>
            <div className="catalog-item__right">
              <div className="additional-ico">
                <SvgButton className="card-btn" icon="multimedia" width="24" height="24"/>
                <SvgButton className="card-btn" icon="edit" width="24" height="24"/>
                <SvgButton className="card-btn" icon="exit" width="24" height="24"/>


              </div>
            </div>

          </Link>
        );
    }
}


CatalogItemCard.propTypes = {
    actionClick: PropTypes.func,
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string
};

export default CatalogItemCard;