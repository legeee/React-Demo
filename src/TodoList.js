import React, { Component,Fragment } from 'react';
import TodoItem from './TodoItem.js';
import Test from './Test.js';
import './style.css';
class TodoList extends Component {
//每一个class里面都有constructor方法，且在首位
  constructor(props){
    super(props);
    //state负责存储组件里的数据，当组件的state或props发生变化时，render函数就会重新执行
    this.state = {
      inputValue: '',
      list: []
    }
    //把this的绑定统一放在顶部，不影响性能
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);    
  }
  

//事件绑定的时候可以用bind对函数的作用域进行变更，在JSX中使用JS需要加{}
//在React中，绑定事件的时候，第二个字母大写开头，onChange,onClick...  
  render() {
    return (
      <Fragment>
      {/*注释*/}
        <div>
           <label htmlFor='insertArea'>输入内容</label>
           <input 
           id='insertArea'
           className='input' 
           value={this.state.inputValue} onChange={this.handleInputChange} />
           <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
            {this.getTodoItem()}
        </ul>
        <Test content={this.state.inputValue}/>
      </Fragment>
    );
  }

  getTodoItem(){
     return this.state.list.map((item,index)=>{
        return (
          <div key={index}>
            {/*父组件content、index传递值，deleteItem传递方法；循环的时候每一项需要一个不一样的key值，这里暂时等于index，不是很好*/}
            <TodoItem 
              content={item} 
              index={index} 
              deleteItem={this.handleItemDelete}
              />
          </div>
                )
              })    
  }

  //
 //对state里面的数据项进行变更，不能直接this.state.inputValue,要通过设置this.setState里面变更
  handleInputChange(e){
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }))
  }
  handleBtnClick(){
    // setState接收一个prevState参数，表示修改数据前一次的数据，这里等价于this.state
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }
  handleItemDelete(index){
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index,1);
      return {list}
    })    
  }
}

export default TodoList;
