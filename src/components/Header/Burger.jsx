import React, { Component } from 'react';
import "./Header.scss";

class Burger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
                <div className='header-burger' onClick={this.handleClick}>
                    <span className="span-1"></span>
                    <span className={this.state.isToggleOn ? 'app' : 'false'}></span>
                </div>
        );
    }
}

export default Burger;