import React from 'react';
import Button from 'react-bootstrap/Button';

// games
import Pong from './simplePong/src/components/Pong';
// import Runner from './runner/Runner';

// pong styling
import './simplePong/src/style.css';
import '../styles/games.css';

export default class Games extends React.Component {


    render () {
        return(
        <div>
            <div className="game-header">
                <h1>Games</h1>
            </div>
            <div id="Runner" className="runner">
                {/* <Runner/> */}
            </div>
            <div className="game-header">
                    <h3>Pong</h3>
            </div>
            <div id="Pong" className="pong">
                <Pong/>
            </div>
            <div className="game-footer">
                <p>My rendition of pong using the Pixi.js library and React framework</p>
                <a href="https://github.com/code-c/simplePong" target="blank">
                    <Button>
                        Github Repo
                    </Button>
                </a>
            </div>
        </div>
            

        )
    }
}