import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './list.css';

class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInput: '',
            list: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    handleSubmit(){
        let itemsArray = this.state.userInput.split(', ');
        this.setState({
            list: itemsArray
        });
        
    }

    handleChange(e){
        this.setState({
            userInput: e.target.value,
        });
    }

    render(){
        let items = this.state.list.map(i => <li key={i}>{i}</li>) //This is to display list items
        return(
            <div className="container">
                <h1>List</h1>
                <textarea 
                    onChange = {this.handleChange}
                    value = {this.state.userInput}
                    placeholder = "Enter your Items" 
                >
                </textarea>
                <button onClick={this.handleSubmit}>Create List</button>
                <div className="listContainer">
                    <ul>{items}</ul>
                </div>
            </div>
        );
    }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<List/>);