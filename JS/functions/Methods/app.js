const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log("THIS IS:", this);// here, this refers to cat
        console.log(`${this.name} says MEOWWWW`);
    }
}

const meow2 = cat.meow;// when we call meow2 this refers to window