const calculate = {}

calculate.add = function(num1, num2, callback){
    //console.log("the values are:", num1, num2)
    if(!num1){
        return callback("number1 reqired");
    }
    if(!num2){
        return callback("number2 required");
    }
    console.log("values are:", num1, num2);
    //console.log("calculated value")
    // setTimeout(function(req, res){
    //     return res.json({

    //     })
    // })  
}
calculate.sub = function(num1, num2, callback){
    if(!num1){
        return callback("number1 req")
    }
    if(!num2){
        return callback("number 2 req")
    }
    console.log("values are:", num1, num2)
}

calculate.mul = function(num1, num2, callback){
    if(!num1){
        return callback("number1 req")
    }
    if(!num2){
        return callback("number 2 req")
    }
    console.log("values are:", num1, num2)
}

calculate.div = function(num1, num2, callback){
    if(!num1){
        return callback("num1 req")
    }
    if(!num2){
        return callback("num2 req")
    }
    console.log("values are:", num1, num2)
}


module.exports = calculate;