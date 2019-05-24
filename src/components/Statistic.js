import React, { Component } from "react";
import PropTypes from "prop-types";





class ModStatistic extends Component {


    componentDidMount() {
        const { setViewContent } = this.props;
        setViewContent("statistic");
    }




    render() {


        return (
          <div>
            Statistic

          </div>
        );
    }
}

ModStatistic.propTypes = {
    selected_content: PropTypes.string,
    setViewContent: PropTypes.func,
    main_state: PropTypes.array
};



export default ModStatistic;



