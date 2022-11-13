
class Person {
    name;
    age;
    weight;
    height;
    constructor(name, age, weight, height) {
        this.name= name;
        this.age = age;
        this.weight = weight;
        this.height = height;


    }
    get getAge() {
        return this.age;

    }
  
    info() {
        return "Class belongs to Person and your gender is not defined";
    }




}

const personObj = new Person('Ram', 21, '24kg', '5.7ft');
let personAge = personObj.getAge;
console.log("Person Age = " + personAge);
console.log(personObj.info());

class Men extends Person {
    gender;
    constructor(name, age, weight, height, gender) {
        super(name, age, weight, height);
        this.gender = gender;

    }
    //method Overriden
    info() {
        return "class  belongs to Men and your gender is "+this.gender;
    }
    nameDisplay() {
        return "Men class: Your name is " + this.name;
    }



}
console.log("********** Men Class Strat from here **********")
const menObj = new Men('Hari', 23, '24kg', '5.7ft', 'male');
// console.log("Your name is " + menObj.nameDisplay());
console.log(menObj.nameDisplay());

let menAge = menObj.getAge;
console.log("Men Age = " + menAge);
console.log(menObj.info());
class Women extends Person {
    gender;
    constructor(name, age, weight, height, gender) {
        super(name, age, weight, height);
        this.gender = gender;

    }

    nameDisplay() {
        return "Women class: Your name is " + this.name;
    }
    info() {
        return "You are belongs to Women and your gender is " + this.gender;

    }
}
console.log("********** Women Class Strat from here **********")
const womenObj = new Women('Sita', 25, '44kg', '5.7ft', 'female');
console.log( womenObj.nameDisplay())
let womenAge = womenObj.getAge;
console.log("woMen Age = " + womenAge);
console.log(womenObj.info());
