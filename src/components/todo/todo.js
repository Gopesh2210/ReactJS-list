import React from 'react';
import './todo.css';
import Checkbox from '@material-ui/core/Checkbox';

class Todo extends React.Component {

  constructor(){
    super()
    this.state ={
      
    }
  }
 
  render() {
    return (
      <div>
        <div key={this.props.todoItem.id} className="items-container">
          <div className="checklist-container">
            <div className="checkbox-container">
            <Checkbox
              checked={this.props.todoItem.completed}
              onChange={(e) => this.props.checkEvent(e, this.props.todoItem.id)} />
            </div>
            <div className="title-container">
              <div className="title">{this.props.todoItem.title}</div>
            </div>
          </div>
          <div className="content-container">
            <div className={this.props.todoItem.completed ? "content-complete strike":"content"}>{this.props.todoItem.content}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
