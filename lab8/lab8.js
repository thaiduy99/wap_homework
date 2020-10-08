/*Lab8: Exercise 1 - Define a filter function on the String object. The function accepts an array of strings that specifies a list of banned words. 
The function returns the string after removing all the banned words */
String.prototype.filter = function(exclude) {
	/* return this.replaceAll(exclude, "") */;
  return this.split(" ").filter(element => element != exclude).join(" ");
}
console.log('This is a not nice house'.filter('not'));

/* Lab8: Exercise 2 - Write a BubbleSort algorithm on the Array object. */
Array.prototype.pubbleSort = function(){
    Array.prototype.pubbleSort = function(){
        var array = this;
        for (let i = 0; i < array.length; i++){
            for (let j = 0; j < array.length - 1; j++){
                if (array[j] > array[j + 1]){
                        let temp = array[j];
                    array[j] = array[j + 1];
                    array[j+1] = temp;
                }
            }
            console.log(array);
        }
        return array;
    }
}
console.log([1, 4, 2, 49, 11, 45, -1, -5].pubbleSort());

/*  */
// Lab8 - Exercise 3: by Object create
const person = {
	name : 'Default',
  teach : function(subject){
  	console.log(this.name + ' is now teaching '+ subject);
  }
}
const teacher = Object.create(person);
teacher.name = 'Tina Xing';
teacher.teach('WAP');

//Lab8 - Exercise 3, by Fuction constructor
function Person(name){
	this.name = name;  
}
const teacherF = new Person('Tina Xing');
teacherF.teach = function(subject){
  	console.log(this.name + ' is now teaching '+ subject);
};
console.log(Person);
console.log(teacherF);
teacherF.teach('WAP');

//Lab8 - Q4 - object prototype approach
const person = {
	name  : 'Default',
  age 	: 41,
  greeting: function(){
  	console.log('Greetings, my name is' + name + 'and I am ' + age + 'years old.');
  },
  salute: function(){
  	console.log('Good morning!, and in case I dont see you, good afternoon, good evening and good night!');
  }
}

const student = Object.create(person);
student.setMajor = function(major){
	this.major = major;
}
student.greeting = function(){
	console.log('Hey, my name is ' + this.name + ' and I am studying ' + this.major);
}

const professor = Object.create(person);
professor.setDepartment = function(department){
	this.department = department;
}
professor.greeting = function(){
	console.log('Good day, my name is ' + this.name + ' and I am in the ' + this.department + ' department');
}

const s1 = Object.create(student);
s1.setMajor('CS');
s1.greeting();
s1.salute();

const p1 = Object.create(professor);
p1.setDepartment('Utopia');
p1.greeting();
p1.salute();

//Lab8 - Q4 - the function constructor approach.
function Person(name, age) {
	this.name = name;
  this.age = age;
}
Person.prototype.greeting = function(){
	console.log('Greetings, my name is' + name + 'and I am ' + age + 'years old.');
}
Person.prototype.salute = function(){
	console.log('Good morning!, and in case I dont see you, good afternoon, good evening and good night!');
}

const Student = function(name, age, major){
	Person.call(this, name, age);
  this.major = major;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.greeting = function(){
	console.log('Hey, my name is ' + this.name + ' and I am studying ' + this.major);
}

const Professor = function(name, age, department){
	Person.apply(this, [name, age]);
  this.department = department;
}
Professor.prototype = Object.create(Person.prototype);
Professor.prototype.greeting = function(){
	console.log('Good day, my name is ' + this.name + ' and I am in the ' + this.department + ' department');
}

const s2 = new Student('William', 20, 'CS');
s2.greeting();
s2.salute();

const p2 = new Professor('Tina', 18, 'Utopia');
p2.greeting();
p2.salute();











