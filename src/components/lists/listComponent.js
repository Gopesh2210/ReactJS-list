import React from 'react';
import './list.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Todo from '../todo/todo';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function ListComponent(props){
    return (
        <div className="list">
          <div className="notesText">{props.data.notesText}</div>
  
          {/* VIEW ITEMS */}
  
          <Card className="list-box">
            <CardContent className="card-content">
              <div className="list-items">
                {props.data.listData.map(item => (
                  <Todo
                    key={item.id}
                    todoItem={item}
                    checkEvent={props.checkEvent} />
                ))}
              </div>
              <div className="add-btn-container">
                <Fab className="add-btn" aria-label="add" onClick={props.dialogOpen}>
                  <AddIcon />
                </Fab>
              </div>
            </CardContent>
          </Card>
  
          {/* ADD ITEM  */}
  
          <Dialog open={props.data.dialogHandler} onClose={props.dialogClose} fullwidth="true" maxWidth="md" aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add Note</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="task"
                label="Title"
                type="text"
                name="title"
                fullWidth
                value={props.data.title}
                onChange={props.addEvent}
              />
              <TextField
                margin="dense"
                id="task"
                label="Task"
                type="text"
                name="task"
                fullWidth
                value={props.data.task}
                onChange={props.addEvent}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={props.dialogClose} color="primary">
                Cancel
            </Button>
              <Button onClick={props.confirm} color="primary">
                Confirm
            </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}

export default ListComponent