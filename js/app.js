//player class
    class Player {
    //Constructor
        constructor(){
        //properties
            //x cordinates
                this.x = 0;
            //y cordinates
                this.y = 0;
            //player image
                this.sprite ='mages/char-pink-girl.png';
            }
        //methods

            //update position
                //check for collision
                    //does player x&y === enemy x&y
                //check for win
                    //does player enter top of grid
            //Render the Player


            //Handle Keyboard input
                //update the player in accordance with x & y
            //Reset the Player
                //Return player to starting block

    }


// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // x cordinate
    // y cordiante

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //if enemy has NOT reached end of board
        // move forward
        //increment x by speed * dt
    //else (enemy reaches end of board)
        //Reset pos to start


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

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
