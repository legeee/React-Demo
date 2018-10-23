import React,{Component} from 'react';
import PropTypes from 'prop-types';
//子组件通过this.props.content调用接收到的参数
class TodoItem extends Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	
	render(){
		const {content, test} = this.props;
		return <div onClick={this.handleClick}>{test}-{content}</div>
	}
	handleClick(){
		const {deleteItem, index} = this.props
		deleteItem(index)
	}
}
//
//子组件在接收父组件的参数时，PropTypes对参数的类型进行校验，DefaultProps在父组件没有向子组件传递值时，用于设置参数的默认值，这里的test为默认值
//
TodoItem.propTypes = {
	content: PropTypes.arrayOf(PropTypes.string, PropTypes.number),
	index: PropTypes.number,
	deleteItem: PropTypes.func,
	test: PropTypes.string.isRequired
}
TodoItem.defaultProps = {
	test: 'hello'
}
export default TodoItem;