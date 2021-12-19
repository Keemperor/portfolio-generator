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
const promptUser = () => {
 return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
      validate: GitHubInput => {
        if (GitHubInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },

    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
    },

    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => {
        if (confirmAbout) {
          return true;
        } else {
          return false;
        }
      }
    }

  ])

};

const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
`);
if (!portfolioData.projects) {
  portfolioData.projects =  [];
};
  
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
      validate: projectName => {
        if (projectName) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: projectDescription => {
        if (projectDescription) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)',
      validate: GitHubLink => {
        if (GitHubLink) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
   
  ])
  .then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    } else {
      return portfolioData;
    }
    });
   
  };

 



promptUser()
.then(promptProject)
.then(portfolioData => {
  console.log(portfolioData);
});


//console.log(inquirer);
