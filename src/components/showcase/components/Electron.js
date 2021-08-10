/* electron.js
author: Codie Cottrell
*/
import * as PIXI from "pixi.js";

let electron;

export default class Electron extends PIXI.Sprite {
    constructor(x = 0, y = 0, image, radius = 10, startRadian=0, speed=1) {
        // like PIXI.texture.from to create sprite from texture
        loadElectron(image);
        //work with it set values
        super(electron);
        this.centerY = y; //k
        this.centerX = x; //h
        this.radius = radius;
        this.radian = startRadian;
        this.xLower = (this.centerX - this.radius); // the start of the diameter
        this.xHigher = (this.centerX + this.radius); // the end of the diameter
        this.y = this.centerY; // 0 starting point
        this.x = this.xHigher;
        this.anchor.set(0.5, 0.5)
        this.scale.x = .17;
        this.scale.y = .17;

        this.speed = speed;
    }

    reposition(x){
        this.x = (x + this.radius);
    }

    reset() {
        this.y = this.centerY + this.radius;
        this.x = this.centerX + this.radius;
    }

    move() {
        this.x = this.centerX + (this.radius * Math.cos(this.radian));
        this.y = this.centerY + (this.radius * Math.sin(this.radian));
        this.radian += 0.01*(this.speed);
        this.rotation = this.radian*2;
    }
}

//set the image as the player
function loadElectron(image) {
    electron = new PIXI.Texture.from(String(image));
}