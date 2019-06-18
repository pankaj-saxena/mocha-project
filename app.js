/* eslint-disable no-console */
console.log('starting node applicationn...');
const calc = require('./module/calculator.js');

try {
    console.log(typeof NaN);
    console.log('Outcome:%d',calc.calculate('a', 9,3));
    
}catch(err){
    console.log(err);
}

