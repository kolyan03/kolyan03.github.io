// var human = {
// 	name: 'Adam',
// 	age: '2000 B.C.',
// 	sex: 'male',
// 	height: '180 sm',
// 	weight: '80 kg'
// };

// var worker = {
// 	job: 'AMK',
// 	wage: '$120',
// 	working: function() {
// 		console.log('Needed more!');
// 	}
// };

// var student = {
// 	'Alma Mater': 'GoIT',
// 	scholarship: '$50',
// 	'Watch TV': function() {
// 		console.log('You think it is good?');
// 	}
// };

// worker.__proto__ = Human();

// student.___proto__ = Human();


function Human() {
	this.name = 'Adam',
		this.age = '2000 B.C.',
		this.sex = 'man',
		this.height = '180 sm',
		this.weight = '50 kg'
};

function Worker() {
	this.job = 'AMK',
		this.wage = '$120',
		this.working = function () {
			alert('Needed more job!');
		}
};

function Student() {
	this.AlmaMater = 'GoIT',
		this.scholarship = '$50',
		this.WatchTV = function () {
			alert('You think it is good?');
		}
};
Worker.prototype = new Human();
Student.prototype = new Human();
var newWorker = new Worker();
var newStudent = new Student();


alert('A Im A ' + newWorker.sex + '!');
newWorker.working();


Student.prototype.WatchTV = function () {
	alert('I am a student and my weight is ' + newStudent.weight  + '.');
}();