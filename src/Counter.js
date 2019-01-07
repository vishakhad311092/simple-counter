import React,{Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0 
        }
    }

    decrementCounter = () =>{
        const {count} = this.state;
        this.setState({
            count: count -1
        })
    }

    incrementCounter = () => {
        const {count} = this.state;
        this.setState({
            count: count +1
        })
    }

    render(){
        return(
            <div>
                {this.props.title}
                <br/>
                <button onClick={this.decrementCounter}>-</button>
                <span> {this.state.count} </span>
                <button onClick={this.incrementCounter}>+</button>
            </div>
        )
    }
}

export default Counter;