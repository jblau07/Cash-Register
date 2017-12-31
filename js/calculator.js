console.log("hello");

var calculator = (function(){
    
    var total = 0;

    function load(x){
        if (typeof x === "number"){
            total = x;
            return total;
        }else{
            throw new Error;
        }
    }

    function getTotal(){
        return total;
    }

    function add(x){
        if (typeof x === "number"){
            total += x 
            return total
        }else{
            throw new Error;
        }
    }

    function subtract(x){
        if (typeof x === "number"){
            total -= x 
            return total;
        }else{
            throw new Error;
        }
    }

    function multiply(x){
        if (typeof x === "number"){
            total *= x 
            return total;
        }else{
            throw new Error;
        }
    }

    function divide(x){
        if (typeof x === "number"){
            total /= x 
            return total;
        }else{
            throw new Error;
        }
    }

    return {
        load: load,
        getTotal: getTotal,
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide,
    };
})();