import './App.css';
import { Card, CardDeck, Button, Container, Jumbotron } from 'react-bootstrap';

function App() {

    const seats = [
        {
            open: true
        },
        {
            open: false
        }
    ];

    const changeStatus = (event) => {
        console.log(event);

    };

    return (
        <div>
            <div className="container">
                <div className="panel-heading" >Example test basic chat room app</div>
                <Jumbotron>
                    <Container>
                        <CardDeck>
                            { seats.forEach((item) => {
                                console.log(11, item);
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        <Card.Title>Seat 1</Card.Title>
                                        <Card.Text>{ item.open ? 'Seat is taken by: ' : 'Empty seat' }</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button  onClick={changeStatus} variant="primary">{ item.open ? 'Take a seat' : 'Release' }</Button>
                                    </Card.Footer>
                                </Card>
                            })}
                        </CardDeck>
                    </Container>
                </Jumbotron>
            </div>
        </div>
    );
}

export default App;
