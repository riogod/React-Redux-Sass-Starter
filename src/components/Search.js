import React, { Component } from "react";
import PropTypes from "prop-types";




class Search extends Component {




    hoverIn(el = this.props)  {


        if(el.querySelector("input") != null) {
            if (!el.querySelector("input").value) {
                el.classList.toggle("animate-in");
                el.querySelector("input").focus();
                document.getElementById("clear-input").style.display = "block";

                // console.log("asdas");

            }
        }

    }

    hoverOut(el = this.props)  {


        if(el.querySelector("input") != null) {
            if (!el.querySelector("input").value) {
                el.classList.remove("animate-in");
                el.querySelector("input").blur();
                document.getElementById("clear-input").style.display = "none";
            }
        }
    }

    onChangeEl(el, {setSearchPhrase} = this.props) {


            setSearchPhrase(el.value);

    }

    ClearSearch(el, {setSearchPhrase} = this.props) {
        el.parentElement.querySelector("input").value = "";
        el.parentElement.querySelector("input").focus();
        setSearchPhrase("");
    }



    render() {


        return (
          <div className="search-field search-in"
               onMouseEnter={(e) => this.hoverIn(e.target)}
               onMouseLeave={(e) => this.hoverOut(e.target)}

               onBlur={(e) => this.hoverOut(e.target)}>
            <input type="text" className="search-field" placeholder="Type here to search..."
                   onChange={(e) => this.onChangeEl(e.target)}
                />
            <div id="clear-input" onClick={(e) => this.ClearSearch(e.target)}/>
          </div>
        );
    }
}

Search.propTypes = {
    main_state: PropTypes.array,
    setSearchPhrase: PropTypes.func
};




export default Search;



