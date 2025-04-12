//Using Object Literal
const student = {
    name: "Gaius Okoase Oreoluwa",
    age: 22,
    grade: "Legendary",
    greet: () => {
    return `Hello, ${student.name} from the ${student.grade} grade!`;
    } 
};
console.log(student.greet());


//Using Class Constructor
class Student {
     constructor(ogName, age, ogLevel) {
        this.name = ogName;
        this.age = age;
        this.grade = ogLevel;
     }
        greetOg() {
        return `Hello, student ${this.name} 😎 from the ${this.grade} grade! 💪🏽`;
        } 
};
const student1 = new Student("Gaius Okoase Oreoluwa", 22, "Legendary");
console.log(student1.greetOg());

//What exactly is "this" in JavaScript? I've read about it, but I don't understand it.
//The "this" keyword refers to the object it belongs to. It has different values depending on where it is used:
// In a method, this refers to the owner object. In this case, this refers to the student object.
// Alone, this refers to the global object. In this case, this refers to the window object.