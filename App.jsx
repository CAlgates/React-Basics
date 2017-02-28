import React from 'react';
import { ReactDom } from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "text":"My Text",
            "headText":"My Head"
      } 
      this.fun=this.fun.bind(this);
    }

    fun(a){
        console.log(a);
        console.log(this.state.headText);
        this.setState({headText:a});

    }

    render() {
        return (
            <div>
                <p style={{color:'blue'}}>Hello World{this.state.text}</p>
                <p>{this.state.headText}</p>
                <Heads fun={this.fun} Headprops={this.state}/>
            </div>
        );
    }
}

class Heads extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "headContent":"this is head"
        }
    }
    render() {
        return (
            <div>
                <p>This is the head content!!! {this.props.Headprops.headText}</p>
                <p>This is from head {this.state.headContent}</p>
                <button onClick={this.props.fun.bind(this,this.state.headContent)}>click</button>
            </div>
        );
    }
}

export default App;


