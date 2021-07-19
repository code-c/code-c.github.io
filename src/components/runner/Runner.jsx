import React from 'react';
import * as PIXI from "pixi.js";

import tiles from "./images/StaticTiles.json";
import {CompositeTilemap} from '@pixi/tilemap';

// Sprite Classes
//import character from "./Character";

//style

// the render component
export default class Render extends React.Component {

    //using componenet did mount for PIXI game loop
    componentDidMount() {

        console.log(tiles)

        // calculate pixel width needed
        const pxWidth = window.innerWidth;
        const pxHeight = 200;
       
        // PIXI renderer and settings
        const renderer = PIXI.autoDetectRenderer({
            antialias: true,
            autoDensity: true,
            resolution: window.devicePixelRatio || 1,
            width: pxWidth,
            height: pxHeight,
            // transparent: true
        });
        
        // declare variables being used regularly
        let stage;
        let tilemap;
        let player;
        let keys = {};

        // append to the body
        // use this to place to whatever div you want it in
        document.getElementById("Runner").appendChild(renderer.view);

        // listen for keys pressed
        window.addEventListener("keydown", keysDown);
        window.addEventListener("keyup", keysUp);
        // window.addEventListener('touchstart', startTouch);
        // window.addEventListener('touchmove', touchMove);
        // window.addEventListener('touchend', cancelTouch);
        
        //create the PIXI loader
        const loader = new PIXI.Loader();
        
        
        // add resources to the loader to use later
        loader.add('tilemap', tiles);

        console.log(loader.resources);

        // on the load of the loader do the following
        loader.load((_, resources) => {
            //set stage
            stage = new PIXI.Container();
            tilemap = new CompositeTilemap();
            stage.addChild(tilemap);

            // create and load players to stage
            loadPlayer();
        
            // Setup rendering loop
            PIXI.Ticker.shared.add(() => renderer.render(stage));
            PIXI.Ticker.shared.add(gameLoop);

            map();
        });

        // functions for getting input from the keyboard
        function keysDown(keyEvent) {
            keys[keyEvent.keyCode] = true;
            keyEvent.preventDefault();
        }

        function keysUp(keyEvent) {
            keys[keyEvent.keyCode] = false;
            keyEvent.preventDefault();
        }

        // function startTouch(touchEvent) {
        //     // get the coordinates of the game div
        //     var rect = document.getElementById("Runner").getBoundingClientRect();
        //     // get the touch location
        //     const currentTouch = touchEvent.touches[0].screenY;
        //     // check of touch is in the element on top or bottom and store relavent move
        //     if ((currentTouch > rect.top) && (currentTouch < (rect.top + pxHeight/2))) {
        //         touches.down = false;
        //         touches.up = true;
        //     } else if ((currentTouch > (rect.top + pxHeight/2)) && (currentTouch < rect.bottom)) {
        //         touches.down = true;
        //         touches.up = false;
        //     }    
        // }

        // function cancelTouch() {
        //     touches.up = false;
        //     touches.down = false;
        // }

        // function touchMove(touchEvent) {
        //     touchEvent.preventDefault();
        // }

        function map() {
            const tileSize = 16;
            tilemap.clear();
            tilemap.tile('grass-0', 5, 50);
        }

        function gameLoop() {
            //player.move();
        }

        function loadPlayer() {
            //store local variables based on current w/h
            const pxW = renderer.screen.width;
            const pxH = renderer.screen.height;
            // 16 pixels since its the 1/2 the width of the paddles
            //player = new character(pxH/2, pxW/2);
            // playerTwo = new Player((pxW-16), (pxH/2), 0, pxH);

            //stage.addChild(player);
        }
    };

    render() {
        return (
            <div>
            </div>
        )
    }
}