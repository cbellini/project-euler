#!/usr/bin/env node
const program = require('commander');

program
  .version('1.0.0')
  .option(`-p, --problem-number [num]`, `Project Euler
    problem number [01]`, `01`)
  .option(`-i, --inputs [inputs]`, `Comma-separated inputs for the
    problem [foo,bar]`, undefined)
  .parse(process.argv);

let probNum = program.problemNumber;
let probInputs = program.inputs;
let functionInputs = probInputs.split(',');
let solver = require(`./probs/${probNum}`);
let result = solver.solve.apply(null, functionInputs);
console.log(`Problem Number ${probNum} result: ${result}`);

console.log('\n\nDone!');
