import './App.css';
// import { Card, CardDeck, Button, Container } from 'react-bootstrap';

import { Jumbotron, Button } from 'react-bootstrap';

function App() {
    return (
        <div>
            <div className="container">
                <div className="panel-heading" > whatever you want to write</div>
                <Jumbotron className="recipeBox">
                    <Button className="addRecipeBtn" bsStyle='primary'>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        <span> Add recipe</span>
                    </Button>
                </Jumbotron>
            </div>
        </div>
    );
}

export default App;
