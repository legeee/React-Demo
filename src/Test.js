import React, { Component } from 'react';
class Test extends Component{
	//当父组件的render函数被运行时，他的子组件render也将被重新运行一次
	render(){
		return <div>{this.props.content}</div> 
	}
}
export default Test;