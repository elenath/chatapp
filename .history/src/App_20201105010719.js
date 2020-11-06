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

    return (
        <div>
            <div className="container">
                <div className="panel-heading" > Example test basic chat room app</div>
                <Jumbotron className="recipeBox">
                    <Container>
                        <CardDeck>
                            { seats.forEach((item) => {
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <div className="bi bi-lock"></div>
                                    <Card.Body>
                                        <Card.Title>Seat 1</Card.Title>
                                        <Card.Text>{ seat1.open ? 'Seat is taken by: ' : 'Empty seat' }</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button variant="primary">{ seat1.open ? 'Take a seat' : 'Release' } </Button>
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
