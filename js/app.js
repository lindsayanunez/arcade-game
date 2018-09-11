//player class
    class Hero {
    //Constructor
        constructor(){
        //properties
            //size of steps the player taks
                this.sideStep = 101;
                this.straightStep = 83;
            //starting position for the player
                this.beginX = this.sideStep * 2;
                this.beginY = this.straightStep * 5;
            //x cordinates
                this.x = this.beginX;
            //y cordinates
                this.y = this.beginY;

            //player image
                this.sprite = 'images/char-boy.png';
            }
        //methods
            //Render the Player
            render(){
                //renders player image on the coordinate
                ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
            }
            //update position
                //check for collision
                    //does player x&y === enemy x&y
                //check for win
                    //does player enter top of grid
            //Handle Keyboard input
           // * @param {string} input //- Player's travel directions
            handleInput(input){
                //update the player in accordance with x & y
                switch(input){
                    case 'left':
                        if(this.x > 0){ //parameter to stay on board
                        this.x -= this.sideStep;
                        }
                    break;
                    case 'up':
                        if(this.y > 0){
                        this.y -= this.straightStep;
                        }
                    break;
                    case 'right':
                        if(this.x < this.beginX * 2){
                        this.x += this.sideStep;
                        }
                    break;
                    case 'down':
                        if(this.y < this.beginY){
                        this.y += this.straightStep;;
                        }
                    break;
                }
            //Reset the Player
                //Return player to starting block
            }
        }

const player = new Hero();



// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // x cordinate
    this.x = 0;

    // y cordiante
    this.y = 0;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.sideStep = 101;
    this.bugStop = this.sideStep * 5;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //if enemy has NOT reached end of board
    if(this.x < this.bugStop){
        // move forward
        //increment x by speed * dt
        this.x +=200 * dt;
    }
    else{
        this.x =0;
    }

    //else (enemy reaches end of board)
        //Reset pos to start


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

const bug1 = new Enemy();
const allEnemies = [];
allEnemies.push(bug1);

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
