import React from 'react';
import ListComponent from './listComponent'
import listData from './listData';

class ListContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      notesText: "My Notes",
      listData: listData,
      dialogHandler: false,
      title: "",
      task: ""
    }
    this.dialogOpen = this.dialogOpen.bind(this)
    this.dialogClose = this.dialogClose.bind(this)
    this.addEvent = this.addEvent.bind(this)
    this.confirm = this.confirm.bind(this)
    this.checkEvent = this.checkEvent.bind(this)
  }

  // DIALOG BOXES TO ADD NEW NOTES 
  dialogOpen() {
    this.setState({ dialogHandler: true })
  };

  dialogClose() {
    this.setState({ dialogHandler: false })
  };


  // ADD NEW EVENT
  addEvent(event) {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })

  }

  // UPDATE NOTES LIST
  confirm() {
    
    var dummyId = 101

    this.setState(previousState => {
       previousState.listData.push({
        id : dummyId,
        title: this.state.title,
        content: this.state.task,
        completed: false
      })
    })
    this.dialogClose()
  }

  // CHECKS THE CHECKBOX EVENT
  checkEvent(event, id) {

    var status = event.target.checked

    this.setState((previousState) => {
      const updatedListData = previousState.listData.map(item => {
        if (item.id === id) {
          item.completed = status
        }
        return item
      })
      console.log("UPDATED STATE LIST DATA : ", updatedListData)
      return {
        listData: updatedListData
      }
    })
  }


  render() {

    return (
      <ListComponent
        data = {this.state}
        dialogOpen ={ this.dialogOpen}
        dialogClose = {this.dialogClose}
        addEvent = {this.addEvent}
        confirm = {this.confirm}
        checkEvent = {this.checkEvent}
      />
    );
  }
}

export default ListContainer;
