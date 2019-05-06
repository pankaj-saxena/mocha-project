const operation = ['a','s','m','d'];
const usage = 'Operation - [a]ddition, [s]ubtraction, [m]ultiply, [d]ivide';

function calculate(opr, n1,n2){

    if (opr == null || opr == ''){
        throw (new Error('Operation can not be blank. ' + usage));
    }

    if(operation.indexOf(opr)==-1){
        throw (new Error('Invalid operation. ' + usage));
    }
    if(typeof n1 != typeof NaN || typeof n2 != typeof NaN){
        throw (new Error('one or more operands found to be non-integer'));
    }

    let result;

    switch(opr){
        case 'a' : result = n1+n2; break;
        case 's' : result = n1-n2; break;
        case 'm' : result = n1*n2; break;
        case 'd' : result = n1/n2; break;
    }
    
    return result;

}

module.exports.calculate=calculate;