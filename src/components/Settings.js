import React, { Component } from "react";
import PropTypes from "prop-types";




class ModSettings extends Component {


    componentDidMount() {
        const { setViewContent } = this.props;
        setViewContent("settings");
    }




    render() {


        return (
          <div>
            Settings

          </div>
        );
    }
}

ModSettings.propTypes = {
    selected_content: PropTypes.string,
    setViewContent: PropTypes.func,
    main_state: PropTypes.array
};




export default ModSettings;



