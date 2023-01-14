#! /usr/bin/env node
class Person {
    name;
}
class Student extends Person {
    course;
    rollNumber;
}
class Teacher extends Person {
    course;
    timing;
}
class Course {
    classTeacher;
    students;
    timing;
}
//Creating Students individually 
const student1 = new Student();
student1.name = "Student1";
student1.rollNumber = "1";
const student2 = new Student();
student2.name = "Student2";
student2.rollNumber = "2";
const student3 = new Student();
student3.name = "Student3";
student3.rollNumber = "3";
//Created a Teacher Object
const teacher = new Teacher();
teacher.name = "Teacher 1";
teacher.course = "PIAIC";
teacher.timing = "6-10";
//Createing a Course Object
const course = new Course();
course.classTeacher = teacher;
course.timing = teacher.timing;
student1.course = teacher.course;
student2.course = teacher.course;
student3.course = teacher.course;
//Created an Array of Students 
const stdArray = [student1, student2, student3];
course.students = stdArray;
//Printing the Structure of how the course will be looking in the memory.
console.log(course);
//Changed to timing to see is it Pass by Value or Pass By Reference
teacher.timing = "10-11";
console.log(course);
export {};
