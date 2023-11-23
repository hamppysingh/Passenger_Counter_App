const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory

// No need to manually handle the '/Passenger-Counter-App/main' request
// Let the static middleware handle it

app.use('/Passenger-Counter-App/main',express.static(path.join(__dirname, '../Passenger_Counter_App')));

//Here the the control of the url path directly handled by the middle ware and then after that the url is directed to the my url automatically from / to /Passenger-Counter-App/main

app.get('/', (req, res) => {
  res.redirect('/Passenger-Counter-App/main');
});

app.listen(port, ()=>{
    require('child_process').exec('start http://localhost:3000/Passenger-Counter-App/main');//will directly open the passenger counter web app on the default browser
});