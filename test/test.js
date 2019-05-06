var assert = require('assert');
var calc = require('../module/calculator');

describe('Testing Calculator', function(){
    it('should calculate the sum of two numbers', function(){
        assert.equal(calc.calculate('a', 9, 3),12,'passed');
    });
    it('should calculate the difference of two numbers', function(){
        assert.equal(calc.calculate('s', 9, 3),6,'passed');
    });
    it('should calculate the product of two numbers', function(){
        assert.equal(calc.calculate('m', 9, 3),27,'passed');
    });
    it('should calculate the dividend of two numbers', function(){
        assert.equal(calc.calculate('d', 9, 3),3,'passed');
    });

})

describe('Testing Calculator-Exceptions',function(){
    it('should return error for blank operation', function(){
        assert.throws(()=>{calc.calculate('',3,3);}, /Error: Operation can not be blank. Operation - \[a\]ddition, \[s\]ubtraction, \[m\]ultiply, \[d\]ivide/,'failed');        
    });
    it('should return error for invalid operation', function(){
        assert.throws(()=>{calc.calculate('e',3,3);},/Error: Invalid operation. Operation - \[a\]ddition, \[s\]ubtraction, \[m\]ultiply, \[d\]ivide/,'failed');
    });
    it('should return error for incorrect operands', function(){        
        assert.throws(()=>{calc.calculate('a','s',3);},/Error: one or more operands found to be non-integer/,'failed');  
    });
})

