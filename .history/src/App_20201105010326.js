import './App.css';
import { Card, CardDeck, Button, Container, Jumbotron } from 'react-bootstrap';

function App() {

    // const seats = [
    //     {
    //         open: true
    //     },
    //     {
    //         open: false
    //     }
    // ];

    const seat1 = {
        open: true
    };
    const seat2 = {
        open: false
    };

    return (
        <div>
            <div className="container">
                <div className="panel-heading" > Example test basic chat room app</div>
                <Jumbotron className="recipeBox">
                    <Container>
                        <CardDeck>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <div className="bi bi-lock"></div>
                                <Card.Body>
                                    <Card.Title>Seat 1</Card.Title>
                                    <Card.Text>{ seat1.open ? 'Seat is taken by: ' : 'Empty seat' }</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>Seat 2</Card.Title>
                                    <Card.Text>{ seat2.open ? 'Seat is taken by: ' : 'Empty seat' }</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </Container>
                </Jumbotron>
            </div>
        </div>
    );
}

export default App;
