export default class ClassRoom {
    constructor(maxStudentSize) {
        this._maxStudentSize = maxStudentSize;
    }
}

const classRoom1 = new ClassRoom(10);
console.log(classRoom1._maxStudentSize);