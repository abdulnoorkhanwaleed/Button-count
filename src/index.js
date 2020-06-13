import React, { Component } from 'react';
import ReactDom from 'react-dom';
class Employee extends Component{
  constructor(props){
    super(props);
    this.state={
      name: this.props.name,
      count: this.props.count,
    }
    this.clickme=this.clickme.bind(this);
  }

  clickme() {
  let count=this.state.count;
  let name=this.state.name;

  if (count===1){
    name="PIAIC BOOTCAMP"
  }
  if(count===2){
    name="PIAIC FAISAILABAD"
  }
  if(count===3){
    name="Sir Zia Khan is My Mentor "
  }
  if(count===4){
    name="Thanks for your services"
  }
    this.setState({count: ++count});
    this.setState({name: name});
    
  }
  render(){
    return(
      <>
        <h1> {this.state.name} </h1>
        <h1>Total Click : {this.state.count}</h1>
        <button onClick={this.clickme}>Click to count</button>
      </>
    )
  }

}
ReactDom.render(<Employee name="Assignment Practice" count="0"/>, document.getElementById('root'))