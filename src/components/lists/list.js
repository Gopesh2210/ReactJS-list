import React from 'react';
import './list.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import listData from './listData';
import Todo from '../todo/todo';


class List extends React.Component {

  constructor() {
    super()
    this.state = {
      notesText: "My Notes",
      listData: listData
    }
    this.checkEvent = this.checkEvent.bind(this)
  }

 
  checkEvent(event,id) {

    // console.log("EVENT : " + event.target.checked + " | ID : " + id);
    var status = event.target.checked

    this.setState((previousState) =>{
      const updatedListData  = previousState.listData.map(item =>{
        if(item.id === id){
          item.completed =  status
        }
        return item
      })
      console.log("UPDATED STATE LIST DATA : ",updatedListData)
      return {
        listData : updatedListData
      }
    })
  }

  render() {

    return (
      <div className="list">
        <div className="notesText">{this.state.notesText}</div>
        <Card className="list-box">
          <CardContent className="background">
            <div className="list-items">
              {this.state.listData.map(item => (
                <Todo 
                key = {item.id} 
                todoItem = {item} 
                checkEvent={this.checkEvent}/>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default List;
