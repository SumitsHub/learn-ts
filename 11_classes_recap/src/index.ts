class Player {
  first: String;
  last: string;

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

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;

    this.nickName = last;

    this.sport = "Football";
  }
}

const elton = new Player("Elton", "Steele");
// elton.nickName = 'Something'; // ERROR- Cannot assign to 'nickName' because it is a read-only property.

// elton.netWorth; // ERROR - Property 'netWorth' is private and only accessible within class 'Player'.
// elton.#netWorth; // ERROR- not accessible outside of the class