import React from 'react';
import './contactcard.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';


function ContactCard(props) {
    // console.log(props);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [showText, setShowText] = React.useState(false);

    
    const popupOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setShowText(true)
    };

    const popupClose = () => {
        setAnchorEl(null);
        setShowText(false)
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className="spacing">
            <Card className="card-style">
                <CardContent>
                    <Typography className="text-01">
                        Name :  {props.contact.name}
                    </Typography>
                    <Typography className="text-01" gutterBottom>
                        Designation :  {props.contact.designation}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Phone : {props.contact.phone}
                        <br />
                        Email : {props.contact.email}
                    </Typography>
                </CardContent>
                <div className="inline-container">
                <CardActions>
                    <Button size="medium" onClick={popupOpen} style={{ backgroundColor: "#f29e29", color: "white" }}>HI There!</Button>
                </CardActions>
                {showText ? <div className="conditional-text">HOLA!</div> : null}
                </div>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={popupClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}>
                        <Typography className={"popoverText"}>Hello I am {props.contact.name}</Typography>
                    </Popover>
            </Card>
        </div>
    );
}

export default ContactCard;
