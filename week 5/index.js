//Implements class ClassRoom and assign maxStudentSize to _maxStudentSize
export default class ClassRoom {
    constructor(maxStudentSize) {
        this._maxStudentSize = maxStudentSize;
    }
}
//Creates an instance of class ClassRoom with maximu student size of 10
const classRoom1 = new ClassRoom(10);
console.log(classRoom1._maxStudentSize);
