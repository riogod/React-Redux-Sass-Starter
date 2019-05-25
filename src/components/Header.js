import React, { Component } from "react";
import PropTypes from "prop-types";
import {setContent} from "../actions/mainstateActions";
import {Link} from "react-router-dom";
import SvgButton from "./svg-button/svg-button";


const LinkWrapper = (props) => {

    return (!props.active_content) ? <Link to={props.to}>{props.children}</Link> : <React.Fragment>{props.children}</React.Fragment>;
};

class Header extends Component {






    render() {
            const {selected_content} = this.props.main_state;
        // console.log(this.props);
        return (
          <div className="header">
            <LinkWrapper active_content={(selected_content === "catalog")} to={"/"}><div  className="logo">JInterview</div> </LinkWrapper>


            <div className="nav">
              <LinkWrapper to={"/statistic"} active_content={(selected_content === "statistic")}>
                <SvgButton className="header-ico" disabled={("statistic" === this.props.main_state.selected_content)} btnStyle="circleHighlight" icon="graph" width="50" height="50"/>
              </LinkWrapper>
              <LinkWrapper to={"/settings"} active_content={(selected_content === "settings")}>
                <SvgButton className="header-ico" disabled={("settings" === this.props.main_state.selected_content)}  btnStyle="circleHighlight" icon="help" width="50" height="50"/>
              </LinkWrapper>
            </div>

          </div>
        );
    }
}

Header.propTypes = {
    selected_content: PropTypes.string,
    LinkWrapper: PropTypes.func,
    main_state: PropTypes.array
};

LinkWrapper.propTypes = {
    to: PropTypes.string,
    children: PropTypes.any,
    active_content: PropTypes.bool
};


export default Header;



