'use strict';


class Tamagochy {

    // points from 0 to 10
    constructor (name){
        this.name = name;
        this.food = 10;
        this.dehydration = 0;
        this.tired = 0;
        this.happiness = 10;
        this.health = 10;
        this.available = true;
        this._say("I'm alive!");
    }

    /**
     * Feed method will increase food pet param and simulate pet life in the end
     */
    feed(){
        if(this.food > 10) {
            this._say("I don't want eat!");
        } else {
            this._say("I'm eating ...");
            this.food = 10;
        }
        this._simulate();
    }

    drink(){
        if(this.dehydration <= 0) {
            this._say("I don't want drink!");
        } else {
            this._say("I'm drinking...");
            this.dehydration = 0;
        }

        this._simulate();
    }

    sleep(){
        // additional logic to emulate pet life
        // if it's hungary or need some water?
        if (this.food <= 3 && this.dehydration >= 7) {
            this._say("I don't want sleep!");
            if (this.food <= 3) {
                this._say("I'm hungry!");
            }
            if (this.dehydration >= 7) {
                this._say("I want drink!");
            }
        } else {
            // we can put him sleep and decrement food and water
            this.food -= 3;
            this.dehydration += 3;
            this.tired = 0;
            this._say('Sleeping...');
            this._say('Im wake up');
        }

        this._simulate();
    }

    play() {
        if (this.happiness <= 3 ||
            this.health <= 3 ||
            this.food <= 3 ||
            this.dehydration <= 3 ||
            this.tired <= 3
        ) {
            this._say("I don't want play");
        } else {
            this.playing = 10;
            this._say('Playing...');
        }
        this._simulate();
    }

    /**
     * Private method which is used in every public method.
     * It's used to create some kind of life simulation
     * @private
     */
    var _simulate = function(){
        this.food -= 1;
        this.dehydration += 1;
        this.tired += 1;
        this.happiness -= 1;
        this.health -= 1;

        if (this.food <= 5) {
            this.happiness--;
            this.health--;
            this._say("I'm hungry!");
        }

        if (this.dehydration >= 5) {
            this.health -= 2;
            this.tired += 2;
            this._say("I want to drink!");
        }

        if (this.tired >= 9) {
            this._say("I'm tired!");
        }

        if (this.food <= 0 && this.dehydration >= 10) {
            this._say("You are bad owner! Good bye!");
            this.available = false;
        }

        if (this.playing <=5 && this.happiness >=4 && this.health >=7){
            this._say("I want play!");
        }

        if (this.food <=0 || this.dehydration >=10 || this.tired >=10){
            this._say("I died!");
            this.available = false;
        }
    }

    isAvailable(){
        return this.available;
    }

    var _say = function(msg){
        console.log("%c"+ this.name + " says: " + msg, 'background: #222; color: #bada55');
        alert(this.name + " says: " + msg);
    }
}
