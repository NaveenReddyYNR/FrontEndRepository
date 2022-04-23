// ==============
// FUNCTION SCOPE
// ==============
let totalEggs = 0;
function collectEggs() {
  totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs);

const bird = "Scarlet Macaw";
function birdWatch() {
  const bird = "Great Blue Heron";
  console.log(bird);
}
birdWatch();

// ==============
// BLOCK SCOPE
// ==============
// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159;
//     let msg = 'HIII!'
// }
// console.log(radius);
// console.log(msg)

// for (let i = 0; i < 5; i++) {
//     let msg = "ASKLDJAKLSJD";
//     console.log(msg)
// }
// console.log(msg)
// console.log(i)

// ==============
// LEXICAL SCOPE
// ==============

function bankRobbery() {
  const heroes = ["Spiderman", "Wolverine", "Black Panther", "Batwoman"];
  function cryForHelp() {
    let color = "purple";
    function inner() {
      for (let hero of heroes) {
        console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
      }
    }
    inner();
  }
  cryForHelp();
}

//// this in arrow function

const person = {
  fname: "ram",
  lname: "charan",
  fullName: function () {
    return `${this.fname} ${this.lname}`;
  },
  fullName2: () => {
    return `${this.fname} ${this.lname}`; // this wont work this ref to window obj
  },
  shoutName: function () {
    // setTimeout(function () {
    //   console.log(this.fullName2()); // this wont work
    // }, 3000);
    setTimeout(() => {
      console.log(this.fullName()); // fullName2 wont work
    }, 3000);
  },
};
