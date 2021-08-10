import React from 'react';
import * as PIXI from "pixi.js";

// Sprite Classes
import Atom from './Atom.js';

import C from "./images/appImages/c.png";
import chrome from "./images/appImages/chrome.png";
import clion from "./images/appImages/clion.png";
import firefox from "./images/appImages/firefox.png";
import osx from "./images/appImages/osx.png";
import sanity from "./images/appImages/sanity.png";
import vsc from "./images/appImages/vsc.png";
import linux from "./images/appImages/linux.png";
import photoshop from "./images/appImages/photoshop.png";
import premiere from "./images/appImages/premiere.png";
import python from "./images/appImages/python.png";
import node from "./images/appImages/node.png";
import lightroom from "./images/appImages/lightroom.png";
import latex from "./images/appImages/latex.png";
import cpp from "./images/appImages/cpp.png";
import css from "./images/appImages/css.png";
import html from "./images/appImages/html.png";
import java from "./images/appImages/java.png";
import js from "./images/appImages/js.png";
import wasm from "./images/appImages/wasm.png";
import rpi from "./images/appImages/rpi.png";
import react from "./images/appImages/react.png";
import pixi from "./images/appImages/pixi.png";

//style

// the render component
export default class Render extends React.Component {

    //using componenet did mount for PIXI game loop
    componentDidMount() {

        // calculate pixel width needed
        const pxWidth = window.innerWidth;
        const pxHeight = 500;
       
        // PIXI renderer and settings
        const renderer = PIXI.autoDetectRenderer({
            antialias: true,
            autoDensity: true,
            resolution: window.devicePixelRatio || 1,
            width: pxWidth,
            height: pxHeight,
            backgroundAlpha: 0
        });
        
        // declare variables being used regularly
        let stage;
        let atom;
        let atom2;
        let images = [];

        // append to the body
        // use this to place to whatever div you want it in
        document.getElementById("Titanium").appendChild(renderer.view);

        // listen for taps
        // window.addEventListener('touchstart', startTouch);
        // window.addEventListener('touchmove', touchMove);
        // window.addEventListener('touchend', cancelTouch);
        window.addEventListener('resize', resizeWindow);
        
        //create the PIXI loader
        // normally we would use the loader like this however i dont want to
        const loader = new PIXI.Loader();
        // loader.add("Clang",C);
        // OS's
        images.push(osx);
        images.push(linux);
        // tools
        images.push(photoshop);
        images.push(vsc);
        images.push(firefox);
        images.push(premiere);
        images.push(chrome);
        images.push(lightroom);
        images.push(clion);
        images.push(rpi);

        // langauges
        images.push(C);
        images.push(sanity);
        images.push(python);
        images.push(node);
        images.push(latex);
        images.push(cpp);
        images.push(css);
        images.push(html);
        images.push(java);
        images.push(js);
        images.push(wasm);
        images.push(react);
        images.push(pixi);

        
        // add resources to the loader to use later
        // loader.add();

        // on the load of the loader do the following
        loader.load((_, resources) => {
            //set stage
            stage = new PIXI.Container();

            // create and load players to stage
            loadAtom();
        
            // Setup rendering loop
            PIXI.Ticker.shared.add(() => renderer.render(stage));
            PIXI.Ticker.shared.add(loop);
        });

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

        function resizeWindow() {
            const newPxWidth = window.innerWidth;
            renderer.resize(newPxWidth, pxHeight);
            atom2.reposition(newPxWidth);
        }


        function loop() {
            atom.move();
        }

        function loadAtom() {
            //store local variables based on current w/h
            const pxW = renderer.screen.width;
            const pxH = renderer.screen.height;
            const maxRadius = 250;
            const speed = .001;

            atom = new Atom(0, pxH/2, maxRadius, speed);
            atom2 = new Atom(pxW, pxH/2, maxRadius, speed);

            atom.loadRings(stage, images);
            atom2.loadRings(stage, images);
        }
    };

    render() {
        return (
            <div>
            </div>
        )
    }
}