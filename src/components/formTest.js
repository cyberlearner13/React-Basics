import React from 'react';

export default class TestingFormElements extends React.Component{
    constructor(props){
        super(props);
        this.state = { checked : false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        if(this.state.checked === false){
            this.setState({
                checked : true
            });
        }
         else if(this.state.checked === true){
            this.setState({
                checked : false
            });
        }
        else{
            console.log('Error is setting the boolean value');
        }
        
    }
    render(){
        const div = (<div>hi</div>);
        return(
            <form>
                    <input type="checkbox" className="formControl" onClick={this.handleClick} />
                    <label style={{"color":"#1295c7"}}>Click Me</label>
                    {this.state.checked ? div : null}
                </form>
            );
    }
}

