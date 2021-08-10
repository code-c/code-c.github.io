/* atom.js
author: Codie Cottrell
*/
import Electron from "./Electron.js";

let electrons = [];

export default class Atom {
    constructor(x = 0, y = 0, maxRadius = 100, speed = .100) {
        // parameters
        this.centerX = x; //h
        this.centerY = y; //k
        this.maxRadius = maxRadius;
        this.radius = 20;
        this.speed = speed;
        this.rings = 4;
    }

    reposition(x){
        this.centerX = x;
        electrons.forEach(electron => electron.x = electron.reposition(x))
    }

    move() {
        // moves each electron along curve
        electrons.forEach(electron => electron.move());
    }

    reset() {
        electrons.forEach(electron => electron.reset());
    }

    loadRings(stage, images) {
        // setting variables
        let lastNumElectrons = 0; // count of total electrons 
        let numElectrons = 2; // initialized with first rings alloted electron count
        const totalElectrons = images.length; // limit the number of electrons to size of image array

        // scaling factors to adjust as more rings and electrons are added
        const radiusScale = this.maxRadius/this.rings;
        const speedScale = 1/(2 * this.rings);

        for(let qn=0; qn<this.rings; qn++){
            //set direction
            let direction = 1;

            // weird maths to get # of electrons in a normal atom
            numElectrons = 2*Math.pow(qn,2);

            // switch direction of the row
            if(qn%2){
                direction = direction * -1;
            }

            // change number of electrons if they go over the image lists size
            if (numElectrons > (totalElectrons - lastNumElectrons)){
                numElectrons = (totalElectrons - lastNumElectrons);
            }

            // load electrons for this ring
            this.loadElectrons(stage, images, lastNumElectrons, numElectrons, (direction * this.speed));

            // set parameters for next loop through
            this.radius += radiusScale;
            this.speed += speedScale;
            lastNumElectrons += numElectrons;
        }
    }

    loadElectrons(stage, images, lastNumElectrons, numElectrons, speed){

        const spacing = (2*Math.PI)/numElectrons;
        let initialRadian = 0;

        for(let i = 0; i < numElectrons; i++) {
            // create new electron
            let newElectron = new Electron(this.centerX, this.centerY, images[lastNumElectrons + i], this.radius , initialRadian, speed);
            // add the electron to the valance shells
            electrons.push(newElectron);
            // add electron to stage
            stage.addChild(newElectron);
            // add spacing to start radian for next electron
            initialRadian += spacing;
        }
    }
}