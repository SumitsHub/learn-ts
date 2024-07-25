class Player {
  //   first: String;
  //   last: string;

  // class variable - useful if we need to initialize value for all instance variables
  // score: number = 0;
  score = 0; // type inferred to number

  // readonly modifier
  readonly nickName: string;
  //* public property - can be accessed from anywhere - it's just convention for developers don't add anything extra
  public someVar = "Something";
  public readonly sport: string;

  //* Declaring private variable
  private netWorth: number = 120000;
  // OR - use JS syntax
  #netWorth = 120000;

  //* protected modifier - only accessible within class 'Player' and its subclasses
  protected sharedVar: string = "Something shared to inherited class only";

  //   constructor(first: string, last: string) {
  //     this.first = first;
  //     this.last = last;

  //   this.nickName = last;

  //   this.sport = "Football";
  //   }

  //* parameters properties shorthand
  constructor(public first: string, public last: string) {
    this.nickName = last;

    this.sport = "Football";
  }

  //* getter and setter
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get worth(): number {
    return this.#netWorth - 10000;
  }

  // NOTE: setter cannot return anything - so will not have any return type
  set worth(newWorth: number) {
    if (newWorth < 0) throw new Error("net worth cannot be negative");
    this.#netWorth = newWorth;
  }
}

class SuperPlayer extends Player {
  readWorth() {
    // return this.netWorth; // ERROR - Property 'netWorth' is private and only accessible within class 'Player'.
  }

  getProtectedVar() {
    return this.sharedVar;
  }
}

const elton = new Player("Elton", "Steele");
// elton.nickName = 'Something'; // ERROR- Cannot assign to 'nickName' because it is a read-only property.

console.log(elton);

// elton.netWorth; // ERROR - Property 'netWorth' is private and only accessible within class 'Player'.
// elton.#netWorth; // ERROR- not accessible outside of the class

elton.worth = 123000;
console.log(elton.worth);


const sp = new SuperPlayer("Christiano", "Ronaldo");
console.log(sp.getProtectedVar());

// console.log(sp.sharedVar); // ERROR - Property 'sharedVar' is protected and only accessible within class 'Player' and its subclasses.



//* implementing interface

interface Bike {
    color: string;
}

class MT15 implements Bike {
    // color = 'Red';
    // OR
    constructor(public color: string) {}
}

class Bullet implements Bike {
    constructor(public brand: string, public color: string) {}
}

interface Printable {
    print(): void;
}

class Printer implements Printable {
    print(): void {
        console.log('This is printable!');
        
    }
}


//* Abstract class - similar to interface, cannot be instantiated - this is specific to TS
abstract class Employee {
  constructor(public name: string) {}

  // defining abstract method which will be implemented by child class
  abstract getSalary(): number;

  greet() {
    console.log(`Hello, I am ${this.name}.`);
  }
}


//* cannot create instance of abstract class
// const emp = new Employee('John'); // ERROR - Cannot create an instance of an abstract class.

//* extending abstract class
class Developer extends Employee {
  constructor(name: string, public salary: number) {
    super(name);
  }

  // implementing abstract method
  getSalary(): number {
    return this.salary;
  }
}

//* creating instance of Developer class
const dev = new Developer('John', 120000);
console.log('Salary %d', dev.getSalary()); // Salary 120000
