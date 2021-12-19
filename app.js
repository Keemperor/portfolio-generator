/*var message = 'Hello World!';

var sum = 5 + 3;

console.log(message);
console.log(sum);

var commandLineArgs = process.argv;

console.log(commandLineArgs);

var profileDataArgs = process.argv.slice(2, process.arg.length);
console.log(profileDataArgs);*/

/*const animalArray = ['dog', 'cat', 'pig'];

animalArray.push('cow');
animalArray.push('tiger');

const personObj = {
  name: 'Lernantino',
  age: 99
};

personObj.age = 100;
personObj.occupation = 'Developer';
personObj.hobbies = 'Warhammer 40K'

console.log(animalArray);
console.log(personObj);*/

// const  profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs);


/*const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);*/

//const name = profileDataArgs[0];
//const github = profileDataArgs[1];

//console.log(name, github);
//console.log(generatePage(name, github));

const inquirer = require('inquirer');

/*const fs = require ('fs');

const generatePage = require('./src/page-template.js');

const  profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

const pageHTML = generatePage(name, github);

fs.writeFile('index.html',  pageHTML, err  => {
  if (err) throw err;
  console.log('Portfolio complete! Check out index.html to see the output');
});*/

inquirer
.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  }
])
.then(answers => console.log(answers));

//console.log(inquirer);
