import logo from './logo.svg';
import './App.css';

function App() {
    const cardWidth = 'width: 18rem;';

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </header>

            <div>
                <div class="card" style={{cardWidth}}>
                    <img src="seat1" className="card-img-top" alt="seat1" />
                    <div class="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
