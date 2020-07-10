import React from 'react'
import './jokes.css'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Jokes extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            plot: "",
            punchline: ""
        }
    }

    componentDidMount() {
        this.setState({isLoading:true})
        fetch('https://official-joke-api.appspot.com/jokes/random')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    isLoading: false,
                    plot: data.setup,
                    punchline: data.punchline
                })
            });
    }

    render() {
        const plot = this.state.isLoading ? "loading..." : this.state.plot
        return (
            <div className="container">
                <Card className="list-box">
                    <CardContent className="jokes-background">
                        <div className="jokes-title">JOKATHON</div>
                        <div className="tip">(hit refresh for more)</div>
                        <Accordion className="accordianTemplate">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <Typography className="plot-text">{plot}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className="punchline-text">
                                    {this.state.punchline}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default Jokes