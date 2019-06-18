var assert = require('assert');
var expect = require('chai').expect;
var calc = require('../module/calculator');
var {}= require('chai').should();

describe.skip('Testing Calculator', function(){
    it('should calculate the sum of two numbers', function(){
        //assert.equal(calc.calculate('a', 9, 3),12,'passed');
        var result = calc.calculate('a', 9, 3);
        result.should.be.equal(12);
    });
    it('should calculate the difference of two numbers', function(){
        //assert.equal(calc.calculate('s', 9, 3),6,'passed');
        var result = calc.calculate('s', 9, 3);
        result.should.be.equal(6);
    });
    it('should calculate the product of two numbers', function(){
        //assert.equal(calc.calculate('m', 9, 3),27,'passed');
        var result = calc.calculate('m', 9, 3);
        result.should.be.equal(27);
    });
    it('should calculate the dividend of two numbers', function(){
        //assert.equal(calc.calculate('d', 9, 3),3,'passed');
        var result = calc.calculate('d', 9, 3);
        result.should.be.equal(3);
    });

})

describe.skip('Testing Calculator-Exceptions',function(){
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

describe('Testing async api',()=>{
    it.skip("Using setTimeout to simulate asynchronous code!", function(done){
        setTimeout(function() {
            console.log("Test");
            done();
        }, 200);
    });

    it.skip("Using setTimeout to simulate asynchronous code!", function(done){
        setTimeout(function() {
            done(new Error("This is a sample failing async test"));
        }, 200);
    });

    it.skip("Using a Promise that resolves successfully!", function(done) {
        var testPromise = new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve("Hello!");
            }, 200);
        });
    
        testPromise.then(function(result) {
            expect(result).to.equal("Hello World!");
            done();
        }, done);
    });

    it.skip("Using a Promise that resolves successfully!", function(done) {
        var testPromise = new Promise(resolve=> {
            setTimeout(function() {
                resolve("Hello World!");
            }, 2000);
        });
    
        testPromise.then(function(result){
            try {
                expect(result).to.equal("Hello!");
                done();
            } catch(err) {
                done(err);
            }
        }, done);
    });

    it("Using a Promise that resolves successfully with correct expectation!", function() {
        var testPromise = new Promise(function(resolve) {
            setTimeout(function() {
                resolve("Hello World!");
            }, 200);
        });
    
        return testPromise.then(function(result){
            expect(result).to.equal("Hello World!");
        });
    });

    it("Using a Promise with async/await that resolves successfully with wrong expectation!", async function() {
        var testPromise = new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve("Hello World!");
            }, 200);
        });
    
        var result = await testPromise;
    
        expect(result).to.equal("Hello!");
    });
});