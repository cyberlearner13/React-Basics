import React from 'react'
import ReactDOM from 'react-dom'
import Header from "./components/header.js";
import TestingFormElements from "./components/formTest.js";
import Footer from "./components/footer.js";

class TestComponent extends React.Component{
    constructor(){
        super();
        this.state = {name : 'Arkadeep'};
    }
    render(){
        return(
            <div>
                <Header headerText="Hello All" />
                <p>Welcome to my world of React. I am {this.state.name}</p>
                <TestingFormElements />
                <Footer />
            </div>
        );
    }
        
}
ReactDOM.render(<TestComponent />,document.getElementById('app'));
