import React, { Component } from "react";
import ico from "./icons.svg";
import "./svg-button.scss";
import PropTypes from "prop-types";




export default class SvgButton extends Component {


    icoAdd()  {
        const { btnStyle } = this.props;
        switch (btnStyle) {
            case "circleHighlight":
                    return (
                      <React.Fragment>
                        <circle cx={this.props.width/2} cy={this.props.height/2} r={this.props.width/2} />
                        <use x="8" y="8" width={this.props.width-15} height={this.props.height-15} xlinkHref={`${ico}#${this.props.icon}`} />
                      </React.Fragment>
                    );
            default:
                return (
                  <React.Fragment>
                    <use width={this.props.width} height={this.props.height} xlinkHref={`${ico}#${this.props.icon}`} />
                  </React.Fragment>
                );
        }

    };

    render() {

        const { disabled } = this.props;

        const activeVal = (disabled) ? "active" : "";

        const btnClasses = `header-button ${this.props.className} ${activeVal}`;

        return (
          <div className={btnClasses}>
            <svg width={this.props.width} height={this.props.height} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              {this.icoAdd()}
            </svg>
          </div>
        );
    }
}

SvgButton.propTypes = {
    btnStyle: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,

};


