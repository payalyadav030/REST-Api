const calculation = {}
const Model = require('./../models/restApiCal.js');



calculation.add = function(request, response){
    var number1 = request.body.number1;
    
    var number2 = request.body.number2;

    
   Model.add(number1, number2, function(error, data){
       if(error){
           return response.status(500).json(error)
       }
       return response.status(200).json(data)

   })
   var result = parseInt(number1)+ parseInt(number2);
   console.log("sum is:", result)
   response.json({
       value1 : number1,
       value2 : number2,
       results : result
   })
   

}
calculation.sub = function(request, response){
    var number1 = request.body.number1;
    var number2 = request.body.number2;

    Model.sub(number1, number2, function(error, data){
        if(error){
            return response.status(500).json(error)
        }
        return response.status(200).json(data);
    })
    var result = number1 - number2;
    console.log("sum is:", result)
    
}
calculation.mul = function(request, response){
    var number1 = request.body.number1;
    var number2 = request.body.number2;

    Model.mul(number1, number2, function(error, data){
        if(error){
            return response.status(500).json(error)
        }
        return response.status(200).json(data);
    })
    var result = number1 * number2;
    console.log("mul is:", result)
    
}
calculation.div = function(request, response){
    var number1 = request.body.number1;
    var number2 = request.body.number2;

    Model.div(number1, number2, function(error, data){
        if(error){
            return response.status(500).json(error)
        }
        return response.status(200).json(data);
    })
    var result = number1 / number2;
    console.log("div is:", result)
    
}

module.exports = calculation