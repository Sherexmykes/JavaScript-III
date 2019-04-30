/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global or Window Binding is when the context is outside of the fuction. This would refer to the the window or global binding if there is nothing else defined. Points to the forest.
* 2. Implicit binding uses a proceeding dot. The object that this is refering to is on the left side of the dot. It also is a function that is inside of variable. Points to the tree.
* 3. New Binding is a when a constructor function is used. When that happens then this refers to that instance of that object that was created by that function. It uses the new keyword. The function becomes an object creator. Kinda like planting your own tree and then pointing to it.
* 4. Explicit binding referrs to whenever you use the keywords call and apply. You can use it to override the object for the contstructor function.
*
* write out a code example of each explanation above
*/

// Principle 1
function myName(name) {
    console.log(this);
    return name;
  }
  myName("Sheila");
// code example for Window Binding




// Principle 2
const mySheila ={greeting: 'Hello',
sayHello: function(name){ console.log (`${this.greeting} my name is ${name}`);
console.log (this);
}
};
mySheila.sayHello('Sheila');

// code example for Implicit Binding



// Principle 3
function niceSheila(me) {
    this.greeting = 'Hello ';
    this.me = me;
    this.speak = function() {
      console.log(this.greeting + this.me);
      console.log(this);
    };
  }
  
  const Sheila = new niceSheila('Dan');
  
  
  Sheila.speak();
// code example for New Binding



// Principle 4
function niceSheila(me) {
    this.greeting = 'Hello ';
    this.me = me;
    this.speak = function() {
      console.log(this.greeting + this.me);
      console.log(this);
    };
  }
  
  const Sheila = new niceSheila('Dan');
  const Ashley = new niceSheila('Dan');
  
  
  Sheila.speak.call('Ashely'); 
  Ashley.speak.apply('Sheila');
// code example for Explicit Binding