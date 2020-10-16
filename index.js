// calculator for add, sub, mul, and div

const chalk = require('chalk');
const express = require('express');
const app = express();
//console.log(app);

const PORT = 8777;
app.use(express.json());
app.use(express.urlencoded());

var calculateRoute = require('./routes-mvc/restApiCal.js')
console.log(calculateRoute);
app.post('/add', calculateRoute.add);
app.post('/sub', calculateRoute.sub);
app.post('/mul', calculateRoute.mul);
app.post('/div', calculateRoute.div);








app.listen(PORT, function(){
    console.log("application is started on port:", PORT);
})


//// rest api
// REST ARCHITECTURE - REPRESENTSTIONAL STATE TRANSFER
// MONOLITHIC APPLICATION - means the front end and backend code are lying in the same project file.
// API - APPLIATION PROTOCOL INTERFACE
// RETURNS THE OBJECT IN FORM OF JSON
// GRAPH.FACEBOOK.COM - EG OF REST API
// GUIDING PRINCIPLES OF REST- SEE BOOKMARKS
// TOKEN...? - RANDOM STRING



// *************************************************************
//   EG: IN JSON FILE
// GET - https://eagle-server.com/users/payal-yadav
// {
//      "success": true,
//      "message": "successfully retrieved user profile",
//       "data": {
//              "username": "payal yadav"
//              "name:" "payal yadav",
//               "d.o.b": "30-11-2000",
//              "city": "kolkata",
//              "country": "india"
//                  "followers": "7876",
//                "profile": "https://eagle-images.com/payal.jpg"
//      }
//  }
// GET - https://eagle-server.com/users/bipul-yadav

//      "success": true,
//      "message": "successfully retrieved user profile",
//       "data": {
//              "username": "bipul yadav"
//              "name:" "bipul yadav",
//               "d.o.b": "24-08-1996",
//              "city": "kolkata",
//              "country": "india"
//                  "followers": "7",
//                "profile": "https://eagle-images.com/bipul.jpg"
//      }
//  }
// *****************************************************************////

// Parsing - when data is send from the client side to server side, the data should be in proper form

