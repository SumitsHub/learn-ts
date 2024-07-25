class Player {
  first: String;
  last: string;

  // class variable - useful if we need to initialize value for all instance variables
  // score: number = 0;
  score = 0; // type inferred to number

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const elton = new Player("Elton", "Steele");
