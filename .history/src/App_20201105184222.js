import './App.css';
import { Card, CardDeck, Button, Container, Jumbotron } from 'react-bootstrap';
import { Component } from 'react';

class Room extends Component {

    constructor(props) {
        super(props);

        this.seats = [
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
    }

    checkIfThereIsOpenSeat() {}
    notifyRoom() {}

    changeStatus(seat) {
        console.log(11, this.seats);

        if (!seat.open) {
            console.log('Releasing seat');
            this.seatChanged(true);
            return;
        }

        const openSeats = this.checkIfThereIsOpenSeat();

        if (openSeats > 0) {
            this.seatChanged(seat.num, false);
            this.notifyRoom({ seat });
        } else {
            console.log('no open seats');
        }
    }

    seatChanged(seat, open) {
        console.log(seat, open);

        const target = this.seats.find((item) => {
            console.log('X', item.num);
            return item.num === seat;
        });

        console.log('XX', target);

        if (target) {
            target.open = open;
        }

        console.log(this.seats);

    }

    init() {
        setInterval(() => {
            const openSeats = this.checkIfThereIsOpenSeat();

            for(let i = openSeats - 1; i > -1; i--) {
                this.seats[i].open = true;
            }
        });
    }

    render() {

        this.init();

        return (
            <div>
                <div className="container">
                    <div className="panel-heading" >Example test basic chat room app</div>
                    <Jumbotron>
                        <Container>
                            <CardDeck>
                                { this.seats.map((item, idx) => {
                                    return <Card>
                                        <div className="bi bi-lock"></div>
                                        <Card.Body>
                                            <Card.Title>Seat { item.num }</Card.Title>
                                            <Card.Text>{ !item.open ? 'Seat is taken by: '  + item.user : 'Empty seat' }</Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button onClick={() => this.changeStatus(item)} variant="primary">{ item.open ? 'Take a seat' : 'Release' }</Button>
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
