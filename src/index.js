// First project : greetings with time

import React from 'react';
import reactDom from 'react-dom';
import './index.css';


//let myTime = new Date();
// date() object returns the full integer values. Like 1,2.. (hours)
// Usually date() object returns the real date and time automatically 
//but for checking my project, I am putting the values statically by my own
// I am commenting out the line no 8

let myTime = new Date(2022, 2 , 16 , 20);      // parameter one> year,two>month,three>day,four>time
myTime = myTime.getHours();     
let greeting = '';


//creating an object for coloring the greeting part
// And changing the greeting color according to time

let colorGreet = {};


if(myTime>=1 && myTime<12){
   greeting = 'good morning!';
   colorGreet.color = 'Green';
}else if(myTime>=12 && myTime<19){
   greeting = 'good evening!';
   colorGreet.color = 'Orange';
}else{
    greeting = 'good night!';
    colorGreet.color = 'red';
}

reactDom.render(
    <>
       <div>
          <h1>Hello Sir, <span style={colorGreet}>{greeting}</span></h1>
       </div>
    </>,
    document.getElementById('root')
);
