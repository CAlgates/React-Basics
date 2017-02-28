import React from 'react';
import { createStore } from 'redux'



function counter(state = "", action) {
  console.log("action",action);
  switch (action.type) {
  case 'WRAPPER':
    return state=action.text
  case 'HEAD':
    return state=action.text
  default:
    return state
  }
}


let store = createStore(counter);


store.subscribe(() =>console.log(store.getState()) )




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "text":"My Text",
            "headText":"My Head"
      } 

      this.onWebsite=this.onWebsite.bind(this);
    }

    onWebsite(){
        store.dispatch({ type: 'WRAPPER',text:"Wrapper Action" })
    }

	render() {
	    return (
    	    <div>
        	    <p style={{color:'blue'}}>Hello World{this.state.text}</p>
                <button onClick={this.onWebsite}>Website</button>
        	    <Heads Headprops={this.state}/>
                <Foot />
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
        this.onHead=this.onHead.bind(this);
    }

    onHead(){
        store.dispatch({ type: 'HEAD',text:"Head Action" })
    }

	render() {
	    return (
    	    <div>
        	    <p>This is the head content!!! {this.props.Headprops.headText}</p>
                <p>This is from head {this.state.headContent}</p>
                <button onClick={this.onHead}>Head</button>
        	</div>
    	);
   	}
}

class Foot extends React.Component {
    constructor(props){
        super(props);
   
    }
    render() {
        return (
            <div>
               <p>This is the foot content!!!</p> 
              
            </div>
        );
    }
}

export default App;


