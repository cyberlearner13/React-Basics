import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <h1 className="jumbotron">{this.props.headerText}</h1>
            );
    }
}

module.exports = Header;