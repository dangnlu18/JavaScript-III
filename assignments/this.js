/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. global binding: This is the default object that "this" binds to. It is also known as window binding. 

* 2. implicit binding: general rule is anthing left of the "." is what is bound to the "this " keyword. Using ".this" allows one to retrieve  values in objects.

* 3. new binding: new binding is referred to when we use a constructor function to instantiate a new object. 

* 4. explicit binding: this type of binding is when you pass in values that you want "this" to bind to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const toyota = {
	make: 'Toyota',
	type: 'sedan',
	whatType: function(){console.log(this.type)}
}

// Principle 3

// code example for New Binding

function Car(carObj){
	this.year = carObj.year,
	this.make = carObj.make,
	this.model = carObj.model,
	this.cost = carObj.cost
	
};

Car.prototype.sold = function(){
	console.log(`Your ${this.make} has been sold!`)
};
Car.prototype.value = function(){
	console.log(`Your ${this.make} has been sold for ${this.cost}!`)
};

const bmw = new Car({
	year: 2013,
	make: 'BMW',
	model: '335i',
	cost: 58000
});

// Principle 4

// code example for Explicit Binding

let audi = new Car({
	year: 2018,
	make: 'Audi',
	model: 'R8',
	cost: 115000
})

let honda = new Car({
	year: 2012,
	make: 'Honda',
	model: 'Civic',
	cost: 24000
})

audi.value.call(honda, 24562);

