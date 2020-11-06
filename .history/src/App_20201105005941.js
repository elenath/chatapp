import './App.css';
import { Card, CardDeck, Button, Container, Jumbotron } from 'react-bootstrap';

function App() {
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
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                    </Card.Text>
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
