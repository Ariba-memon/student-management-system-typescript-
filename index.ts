#! /usr/bin/env node
class Person {
    name?: string;
}

class Student extends Person {
    course?: string;
    rollNumber?: string;

}
class Teacher extends Person {
    course?: string;
    timing?: string;
}
class Course {
    classTeacher?: Teacher;
    students?: Student[];
    timing?: string;
}
//Creating Students individually 
const student1: Student = new Student();
student1.name = "Student1";
student1.rollNumber = "1"
const student2: Student = new Student();
student2.name = "Student2";
student2.rollNumber = "2";

const student3: Student = new Student();
student3.name = "Student3";
student3.rollNumber = "3";
//Created a Teacher Object
const teacher: Teacher = new Teacher();
teacher.name = "Teacher 1";
teacher.course = "PIAIC";
teacher.timing = "6-10";
//Createing a Course Object
const course: Course = new Course();
course.classTeacher = teacher;
course.timing = teacher.timing;
student1.course = teacher.course;
student2.course = teacher.course;
student3.course = teacher.course;
//Created an Array of Students 
const stdArray: Student[] = [student1, student2, student3];
course.students = stdArray;
//Printing the Structure of how the course will be looking in the memory.
console.log(course);

//Changed to timing to see is it Pass by Value or Pass By Reference
teacher.timing = "10-11";
console.log(course);