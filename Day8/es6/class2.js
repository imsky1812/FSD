class Student{
    constructor(rollNo, name, branch, section){
        this.rollNo = rollNo;
        this.name = name;
        this.branch = branch;
        this.section = section;
    }
    greet(){
        console.log(`Hello, I am ${this.name} from ${this.branch} branch.`);
    }
}
const student1 = new Student(1, "abc", "elce", "A");
const student2 = new Student(2, "abc2", "elce", "A");
student1.greet();

console.log(student1["name"]);
student1["name"] = "XYZ";
console.log(student1.name);