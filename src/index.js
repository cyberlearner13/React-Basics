import React from 'react'
import ReactDOM from 'react-dom'

class TestComponent extends React.Component{
    constructor(){
        super();
        this.state = {name : 'Arkadeep'};
    }
    render(){
        return(
            <div>
                <h1>Hello All</h1>
                <p>Welcome to my world of React. I am {this.state.name}</p>
            </div>
        );
    }
        
}
ReactDOM.render(<TestComponent />,document.getElementById('app')
);
