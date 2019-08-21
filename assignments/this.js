/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding 
    I think of window binding as the "global" for the this function. If you were to run it w/o 'strict' you would end up pulling 'this' for the browser which pulls all of JS. 
* 2. implicit binding
    implicit binding is when you're using . this to target a specific item. implicate.this
* 3. new binding
    new binding allows constructor functions to work properly when you're using the new binding you're capable of creating a whole
    new object by inputing the parameters that are parsed with this._parameter name_
* 4. explicit binding
    explicit binding is when you use the object methods associated with 'this' (call() apply() bind())
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding


//###commented out so it never runs. guess I could also use strict lol   

// console.log(this)




// Principle 2

/*    ### Commented out so it doesn't compete with prototype.js
function Humanoid(type){
    CharacterStats.call(this, type)
    this.team = type.team;
    this.weapons = type.weapons;
    this.language = type.language;
  }

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

*/

// code example for Implicit Binding

// Principle 3

function Snappysnaps(snapping){
    this.snap = snapping;
}

let mySnappySnipSnap = new Snappysnaps(`Snip snap`);

console.log(mySnappySnipSnap.snap);



// code example for New Binding

// Principle 4
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}.`;
};

// code example for Explicit Binding