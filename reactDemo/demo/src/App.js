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
    // 目标元素宽高 
    const boxWidth = this.refs.bgBox.offsetWidth
    const boxHeight = this.refs.bgBox.offsetHeight
    // 元素距离浏览器边缘距离

    const thisPX = this.refs.bgBox.offsetTop
    console.log('thisPX',thisPX)
    const thisPY = this.refs.bgBox.offsetLeft 
    console.log('thisPY',thisPY)
    // 计算鼠标在目标元素内的横纵坐标值 
    const pageX = e.pageX - thisPX 
    console.log('pageX',pageX)   
    const pageY = e.pageY - thisPY
    console.log('pageY',pageY)
    // 最终偏移角度 
    const X = (pageX - boxWidth/2)/50
    const Y = (boxHeight/2 - pageY)/50

    console.log('offsettop',thisPX,thisPY)
    let degs=`rotateX(${Y}deg) rotateY(${X}deg)`
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
