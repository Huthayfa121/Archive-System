import { Component } from 'react';
import React from 'react';
import logo from './Images/palestine.png';
import { MenuData } from './MenuData'
import "./NavBarStyles.css"


class NavBar extends Component{
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    } 
    render() {
        return (
            <nav className='NavBarItems'>
                <div className='logo'>
                    <h1>Palestine </h1>
                     <img src={logo} alt="Logo"/>
                </div>

                <div className='menu-icons' onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked? "nav-menu active" : "nav-menu"}>
                    {MenuData.map((item, index) => {
                    return (
                         <li key={index}>
                            <a href={item.url} className={item.cName}><i className={item.icon}></i>{item.title}</a>
                        </li>
                     )   
                    })}
                </ul>
        </nav>
        );
    }
}

export default NavBar;
