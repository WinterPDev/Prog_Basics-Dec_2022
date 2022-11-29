// var x = '20';
// var y = 20;

// x == y; // false

// x != y; // true

// x === y; // false

// x === y; // false

// Declaring variables to check the door and the door's lock.
var doorOpen = true;
var doorLock = false;

// Checking if the Door is Open
if (doorOpen == true) {
    // If the Door is open, close the door (set to false)
    doorOpen = false;
    console.log('Door was Open, Door is now Closed!')

    // Checking if the door is locked if it was also open
} else if (doorLock == false) {
    // The door is now locked because it was unlocked and open
    doorLock = true;
    console.log('Door was Open and Unlocked, Door is now Closed and Locked!')
}
