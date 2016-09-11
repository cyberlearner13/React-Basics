import React from 'react';
import DistChoices from "./distComponents/distchoices.js"; 

export default class TestingFormElements extends React.Component{
    constructor(props){
        super(props);
        this.state = { checked : false ,option : false};
        
    }
    handleClick(e){
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
    optionSelected(e){
       if(e.target.value === "Policy"){
            this.setState({
                option : false
            });
        }
        else if(e.target.value === "Distribution"){
             this.setState({
                option : true
            });
        }
        else{
            console.log('Error occurred during setting boolean value');
        }
    }
    render(){
        const div = (<div>hi</div>);
        const choices = (<DistChoices />);
        return(
            <form>
                    <label style={{"color":"#1295c7"}}>Are you a Star Wars fan</label>
                    <input type="checkbox" className="formControl" onClick={this.handleClick.bind(this)} />
                    <br/>
                    {this.state.checked ? div : null}
                    <label style={{"color":"#1295c7"}}>Select any one:</label>
                    <select onChange = {this.optionSelected.bind(this)}>
                        <option value="Policy">Policy #</option>
                        <option value="Distribution">Distribution #</option>
                    </select>
                    {this.state.option ? choices : null}
                </form>
            );
    }
}

