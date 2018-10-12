/**
 * Create MYMODULE new Class instance.
 *
 * Options
 * @class Represents a MYMODULE
 * @param arg1
 */
function MYMODULE() { //Constructor
    this.publicPropery = 'public value'; //set public property

}

/**
 * public function
 */

MYMODULE.prototype.publicFunction = function() {
    console.log(this.publicPropery); //get public property (can also be accessed also from outside)
    console.log(privateProperty); //get private property
};

/**
 * Private function
 */

function privateFunction() {

};

var privateProperty = 'private value'; //set private property

module.exports = new MYMODULE(); //Instantiate the Object