/* Character.js
a character class for FernQuest
author: Codie Cottrell
*/
import * as PIXI from "pixi.js";

let playerSheet = {};
let speed = 2;

export default class Character extends PIXI.AnimatedSprite {
    constructor(x = 0, y = 0) {
        // like PIXI.texture.from to create sprite from texture
        //fromFrames(textures);
        createPlayerSheet();
        super(playerSheet.stand);
        //work with it set values
        this.animationSpeed = .3;
        this.anchor.set(0.5);
        this.loop = false;
        this.y = y;
        this.x = x;
        this.scale.x = 1;
        this.scale.y = 1;
    }

    setSpeed(newSpeed) {
        speed = newSpeed;
    }

    move() {
        if(!this.playing){
            this.textures = playerSheet.walk;
            this.play();
        }
        this.x += speed;
    }

    jump() {
        if(!this.playing){
            this.textures = playerSheet.jump;
        }
    }

}

function createPlayerSheet() {
    const loader = new PIXI.Loader();
        
    // add resources to the loader to use later
    loader.add('character1', '.src/component/runner/images/yasuko.json'); //character

    playerSheet["stand"] = [
        new PIXI.Texture.from('walk-4-0.png')
    ]

    //load walking directions from stylesheet
    playerSheet["walk"] = [
        new PIXI.Texture.from('walk-0-0.png'),
        new PIXI.Texture.from('walk-1-0.png'),
        new PIXI.Texture.from('walk-2-0.png'),
        new PIXI.Texture.from('walk-3-0.png'),
        new PIXI.Texture.from('walk-4-0.png')
    ];
    playerSheet["jump"] = [
        new PIXI.Texture.from('jump-0-0.png'),
        new PIXI.Texture.from('jump-1-0.png'),
        new PIXI.Texture.from('jump-2-0.png'),
        new PIXI.Texture.from('jump-3-0.png')
    ];
    playerSheet["land"] = [
        new PIXI.Texture.from('land-0-0.png'),
        new PIXI.Texture.from('land-1-0.png'),
    ];
    
    
}