/****************************************************************************
*	Assignment 2
*	I declare that this assignment is my own work in accordance with Seneca Academic Policy.
*	No part of this assignment has been copied manually or electronically from any other source
*	(including web sites) or distributed to other students.
*	Name: Omar Hussein	Student ID: 118073204	Date: Feb 6, 2021 	
****************************************************************************/

// TASK 1---------------------------------------------------------------------
console.log("/***************************** Task1 *************************/\n");

var courses = [
    {code: "APC100", 
    name: "Applied Professional Communication", 
    hours: 3, 
    url: "http:/www.senecacollege.ca"},
    {code: "IPC144",
    name: "Introduction to C Programming",
    hours: null,
    url: "http:/www.senecacollege.ca/ipc"},
    {code: "ULI101",
    name: "Linux and the Internet",
    hours: 4,
    url: "http:/www.senecacollege.ca/lin"},
    {code: "ISO110",
    name: "Windows Operating System",
    hours: 4,
    url: "http:/www.senecacollege.ca/ios"},
    {code: "EAC150",
    name: "College English",
    hours: 3,
    url: null}];


console.log("Welcome to SENECA these are your current courses ----->:");
courses.forEach(function(display){
    console.log(display);
});


var BTP200 = {
    code: "BTP200",
    name: "The OO Paradigm Using C++",
    hours: 3,
    url: "http:/www.senecacollege.ca/~btp200"},
    BTD210 = {
    code: "BTD210",
    name: "Database Design Principles",
    hours: 3,
    url: null},
    BTI225 = {
    code: "BTI225",
    name: "Web Programming Principles",
    hours: 3,
    url: "http:/www.web222.ca"},
    BTC240 = {
    code: "BTC240",
    name: "Interpersonal Communications in Organizations",
    hours: 3,
    url: null};


var removed = courses.pop();
console.log("\n\nThe Course \"" + removed.code + "\" with the following information has been removed:");
console.log(removed);

console.log("\n\nThe Following courses have been added to your timeline:");
console.log("\"BTP200\", \"BTD210\", \"BTI225\", \"BTC240\"\n");
courses.push(BTP200, BTD210, BTI225, BTC240);

console.log("The remaining courses are ----->:");

var total = 0;
for (var x in courses){
    console.log(courses[x]);
    if (isNaN(courses[x].hours) || courses[x].hours == null){
        continue;
    }
    total += parseFloat(courses[x].hours);
}
console.log("\nThe total hours for these courses are: " + total + "-Hours");

// TASK 2---------------------------------------------------------------------
console.log("\n/***************************** Task2 *************************/\n");

var Student = {
    name: "",
    dob: new Date(),
    sid: "",
    program: "",
    gpa: Number,
    print:  function(){
        return String("Student info for \'" + this.name + "\' born on \'" + this.dob.toString().substr(0, 15) + 
        "\',\nID is \'" + this.sid + "\' in program \'" + this.program + 
        "\',\nwith a current GPA of \'" + String(this.gpa) + "\'.\n");
    }
}
var stu1 = Object.create(Student);
stu1.name = "Omar";
stu1.dob = new Date('1998/Feb/25')
stu1.sid = "100001";
stu1.program = "Softweare Development";
stu1.gpa = 3.7;

var stu2 = Object.create(Student);
stu2.name = "Mohamed";
stu2.dob = new Date('1993/Jul/4');
stu2.sid = "100002";
stu2.program = "Information Security";
stu2.gpa = 3.8;

var stu3 = Object.create(Student);
stu3.name = "Elena";
stu3.dob = new Date('1994/Sep/1');
stu3.sid = "100003";
stu3.program = "Tourism and Hospitality";
stu3.gpa = 4.0;

var stu4 = Object.create(Student);
stu4.name = "Shen";
stu4.dob = new Date('1987/Nov/13');
stu4.sid = "100004";
stu4.program = "Business Administration";
stu4.gpa = 2.9;

var students = [stu1, stu2, stu3, stu4];

students.forEach(function(stu){
console.log(stu.print());
});