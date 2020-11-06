import './App.css';
// import { Card, CardDeck, Button, Container, Jumbotron } from 'react-bootstrap';
import { Component } from 'react';

class Room extends Component{

    render() {
        const checkIfThereIsOpenSeat = () => 1;
        const notifyRoom = () => {};

        const seats = [
            {
                num: 1,
                open: false,
                user: 123
            },
            {
                num: 2,
                open: true
            }
        ];

        const changeStatus = (seat) => {
            console.log(11, seats);

            if (!seat.open) {
                console.log('Releasing seat');
                seatChanged(true);
                return;
            }

            const openSeats = checkIfThereIsOpenSeat();

            if (openSeats > 0) {
                seatChanged(seat.num, false);
                notifyRoom({ seat });
            } else {
                console.log('no open seats');
            }
        };

        const seatChanged = (seat, open) => {
            console.log(seat, open);

            const target = seats.find((item) => {
                console.log('X', item.num);
                return item.num === seat;
            });

            console.log('XX', target);

            if (target) {
                target.open = open;
            }

            console.log(seats);

        };

        const init = () => {
            setInterval(() => {
                const openSeats = checkIfThereIsOpenSeat();

                for(let i = openSeats - 1; i > -1; i--) {
                    seats[i].open = true;
                }
            });
        };

        init();

        return (
            <div>
                <div className="container">
                    <div className="panel-heading" >Example test basic chat room app</div>
                    <Jumbotron>
                        <Container>
                            <CardDeck>
                                { seats.map((item, idx) => {
                                    return <Card>
                                        <div className="bi bi-lock"></div>
                                        <Card.Body>
                                            <Card.Title>Seat { item.num }</Card.Title>
                                            <Card.Text>{ !item.open ? 'Seat is taken by: '  + item.user : 'Empty seat' }</Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button onClick={() => changeStatus(item)} variant="primary">{ item.open ? 'Take a seat' : 'Release' }</Button>
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
}

export default Room;
