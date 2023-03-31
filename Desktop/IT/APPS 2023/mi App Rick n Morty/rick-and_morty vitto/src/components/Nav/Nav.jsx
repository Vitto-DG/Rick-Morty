import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom"
import '../../components/Nav/Nav.modules.css'

class Nav extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="navBarContainer">
            <button>LOG OUT</button>
            <Link to="/" >
                <h3 className="homeLink">LOGIN</h3>
            </Link>
            <Link to="/home" >
                <h3 className="homeLink">HOME</h3>
            </Link>
            <Link to="/about" className="aboutLin">
                <h3 className="aboutLink">ABOUT</h3>
            </Link>
            <SearchBar onSearch={this.props.onSearch} className="searchBar"/>

            </div> 
        );
    }
}

export default Nav;