console.log("hello");

function calculator(){
    var memory = 0;
    var total = 0;

    return {

    load: (x) => {
        if (typeof x === "number"){
            total = x;
            return x;
        }else{
            throw new Error;
        }
    },

    getTotal: () => {
        return total;
    },

    add: (x) => {
        if (typeof x === "number"){
            total += x 
            return total;
        }else{
            throw new Error;
        }
    },

    subtract: (x) => {
        if (typeof x === "number"){
            total -= x 
            return total;
        }else{
            throw new Error;
        }
    },

    multiply: (x) => {
        if (typeof x === "number"){
            total *= x 
            return total;
        }else{
            throw new Error;
        }
    },

    divide: (x) => {
        if (typeof x === "number"){
            total /= x 
            return total;
        }else{
            throw new Error;
        }
    },

    recallMemory: () => {
        return memory;
    },

    saveMemory: () => {
        memory = total;
    },

    clearMemory: () => {
        memory = 0;
    },
    }
}
