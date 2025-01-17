import './App.css';
import { Card, CardDeck, Button, Container, Jumbotron } from 'react-bootstrap';
import { Component } from 'react';
import { getOrCreatePeerId } from './utils';
import createLibp2p from './libp2pCore';

class Room extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                id: 1,
                name: 'John'
            },
            seats: [{
                key: 1,
                open: true,
                user: {}
            },
            {
                key: 2,
                open: true,
                user: {}
            }],
            peerId: 0,
            libp2p: null,
            started: false,
        };

        // this.changeStatus = this.changeStatus.bind(this);
        // this.seatChanged = this.seatChanged.bind(this);
        this.tick = this.tick.bind(this);
    }

    checkIfThereIsOpenSeat() {}
    notifyRoom() {}

    changeStatus(seat) {
        console.log(11, this.state.seats);

        if (!seat.open) {
            console.log('Releasing seat');
            this.seatChanged(seat, true);
            return;
        }

        const openSeats = this.checkIfThereIsOpenSeat() || 1;

        if (openSeats > 0) {
            this.seatChanged(seat, false, this.state.user);
            this.notifyRoom({ seat });
        } else {
            console.log('no open seats');
        }
    }

    seatChanged(seat, open, user = {}) {
        const newArray = this.state.seats.map((item) => {
            console.log('X', item.key);
            if (item.key === seat.key) {
                item.open = open;
                item.user = user;
            }

            return item;
        });

        this.setState({
            seats: newArray
        });
    }

    startP2P() {
        if (!this.state.peerId) {
            console.info('Getting our PeerId');
            getOrCreatePeerId().then((id) => {
                this.setState({
                    peerId: id
                });
            });

            return;
        }

        if (!this.state.libp2p) {
            (async () => {
                console.info('Creating our Libp2p instance');
                const node = await createLibp2p(this.state.peerId);
                console.log(111, node);
                this.setState({
                    libp2p: node,
                    started: true
                });
            })();
        }
    }

    tick() {
        const openSeats = this.checkIfThereIsOpenSeat();
        this.startP2P();
        console.log(1, openSeats, this.state.libp2p);
    }

    componentDidMount() {
        console.log('component did mount');
        this.timer = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        console.log("component will unmount");

        clearInterval(this.timer);
    }

    render() {
        const logedUserSeat = this.state.seats.some((item) => item.user.id === this.state.user.id);

        return (
            <div>
                <div className="container">
                    <div className="panel-heading">Example test basic chat room app</div>
                    <Jumbotron>
                        <Container>
                            <CardDeck>
                                { this.state.seats.map((item, idx) => {
                                    return <Card>
                                        <div className="bi bi-lock"></div>
                                        <Card.Body>
                                            <Card.Title>Seat { item.key }</Card.Title>
                                            <Card.Text>{ !item.open ? 'Seat is taken by: '  + item.user.name : 'Empty seat' }</Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button disabled = { !item.user.id && logedUserSeat } onClick={() => this.changeStatus(item)} variant="primary">{ item.open ? 'Take a seat' : 'Release' }</Button>
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
