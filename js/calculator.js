console.log("hello");

function calculator(){
    var memory = 0;
    var total = 0;

    return{
    

    load: (y) => {
        if (typeof y === "number"){
            total = y;
            return y;
        }else{
            throw new Error;
        }
    },

    getTotal: () => {
        return total;
    },

    add: (y) => {
        if (typeof y === "number"){
            total += y 
            return total;
        }else{
            throw new Error;
        }
    },

    subtract: (y) => {
        if (typeof y === "number"){
            total -= y 
            return total;
        }else{
            throw new Error;
        }
    },

    multiply: (y) => {
        if (typeof y === "number"){
            total *= y
            return total;
        }else{
            throw new Error;
        }
    },

    divide: (y) => {
        if (typeof y === "number"){
            total /= y 
            return total;
        }else{
            throw new Error;
        }
    },

    recallMemory: () => {
        return memory;
    },

    saveMemory: (y) => {
        memory += y;
        return memory;
    },

    addMemory: (y) => {
        if (y > memory){
            throw new Error;
        }else{
            memory -= y;
            return memory;
        }
    },

    clearMemory: () => {
        memory = 0;
    },
    }
}








