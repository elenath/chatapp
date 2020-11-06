import './App.css';
import { Card, CardDeck, Button, Container, Jumbotron } from 'react-bootstrap';

function App() {

    const checkIfThereIsOpenSeat = () => {};
    const notifyRoom = () => {};

    const seats = [
        {
            open: true
        },
        {
            open: false
        }
    ];

    const changeStatus = (idx) => {
        console.log(11, seats);

        const openSeats = checkIfThereIsOpenSeat();

        if (openSeats > 0) {
            userSat
        } else {
            console.log('no open seats');
        }
    };

    const userSat = (seat) => {
        seats[seat].open = !seats[seat].open;

        notifyRoom({ seat });
    };

    setInterval(() => {
        const openSeats = checkIfThereIsOpenSeat();

        for(let i = openSeats - 1; i > -1; i--) {
            seats[i].open = true;
        }
    });

    return (
        <div>
            <div className="container">
                <div className="panel-heading" >Example test basic chat room app</div>
                <Jumbotron>
                    <Container>
                        <CardDeck>
                            { seats.map((item, idx) => {
                                return <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <div className="bi bi-lock"></div>
                                    <Card.Body>
                                        <Card.Title>Seat 1</Card.Title>
                                        <Card.Text>{ item.open ? 'Seat is taken by: ' : 'Empty seat' }</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button onClick={() => changeStatus(idx)} variant="primary">{ item.open ? 'Take a seat' : 'Release' }</Button>
                                    </Card.Footer>
                                </Card>;
                            })}
                        </CardDeck>
                    </Container>
                </Jumbotron>
            </div>
        </div>
    );
}

export default App;
