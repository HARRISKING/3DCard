import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      degs: ''
    }
  }
  mouseleave(){
    this.setState({
      degs: 'rotateX(0deg) rotateY(0deg)'
    })
  }
  mouseMove(e){
    const boxWidth = 631.58
    const boxHeight = 315.79
    // const thisPX = this.refs.bgBox.offsetTop
    const thisPX = 100
    const thisPY = this.refs.bgBox.offsetLeft 
    const pageX = e.pageX - thisPX    
    const pageY = e.pageY - thisPY

    const X = (pageX - boxWidth/2)/50
    const Y = (boxHeight/2 - pageY)/50

    console.log('offsettop',thisPX,thisPY)
    let degs=`rotateX(${X}deg) rotateY(${Y}deg)`
    this.setState({
      degs: degs
    })
  }
  render() {
   console.log('state',this.state)
   let pos = {
     transform:this.state.degs 
   }
    return (
    <div className="banner">
        <div className="bg" style={pos} onMouseMove={this.mouseMove.bind(this)} onMouseLeave={this.mouseleave.bind(this)} ref="bgBox">
        <span className="img a"></span>
        <span className="text b">以傲慢与偏执<br/>回敬傲慢与偏见</span>
        <span className="copyright c">code by qingjin.me | picture from t.tt</span>
        </div>
    </div>     
   );
  }
}

export default App;
