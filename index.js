const inquirer = require('inquirer');
const fs = require('fs')
const {Circle, Square, Triangle, Logo} = require('./Lib/classes')

inquirer
  .prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'what is your shape?',
      choices: ['circle','square','triangle']
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'what is your shape color?'
      },
      {
        type: 'input',
        name: 'textcolor',
        message: 'what is your text color?'
      },
      {
        type: 'input',
        name: 'text',
        message: 'what is your text?'
      }
  ])
  .then((answers) => {
    console.log(answers);
    var shape;
    switch(answers.shape){
        case 'circle':
        shape = new Circle(answers.shapecolor)
        break
        case 'square':
        shape = new Square(answers.shapecolor)
        break
        case 'triangle':
        shape = new Triangle(answers.shapecolor)
        break
    }
  })


  // creating test
  // 
  