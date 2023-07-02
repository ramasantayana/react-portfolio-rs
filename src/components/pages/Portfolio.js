import React from 'react';
import "./portfiolio.css";
let project1Picture = "/images/Password Generator.png";
let project2Picture = "/images/WorkDay Scheduler.png";
let project3Picture = "/images/JS Bootcamp Code Quiz.png";
let project4Picture = "/images/Project 1.png";
let project5Picture = "/images/Project 2.png";
let project6Picture = "/images/Note Taker.png";
export default function Portfolio() {
  return (
    <div className="row">
      <h1>Portfolio</h1>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      <div className= "project col-md-5"> 
        <h2>Project 1: JavaScript Password Generator</h2>
        <a target="_blank" href="https://ramasantayana.github.io/Javascript-Password-Generator-By-RS/"> <img height = "400px" width = "400px" src={process.env.PUBLIC_URL + project1Picture} className=" float-left myPic" alt="Rama Santyana Head Shot" /></a>
      <p>For the code click <a target="_blank" href="https://github.com/ramasantayana/Javascript-Password-Generator-By-RS">here</a></p>
      </div>

      <div className = "project col-md-5"> 
        <h2>Project 2: Work Day Scheduler</h2>
        <a target="_blank" href="https://ramasantayana.github.io/Work-Day-Scheduler-RS/"> <img height = "400px" width = "400px" src={process.env.PUBLIC_URL + project2Picture} className=" float-left myPic" alt="Rama Santyana Head Shot" /></a>
      <p>For the code click <a target="_blank" href="https://github.com/ramasantayana/Work-Day-Scheduler-RS">here</a></p>
      </div>

      <div className = "project col-md-5"> 
        <h2>Project 3: JavaScript Bootcamp Code Quiz</h2>
        <a target="_blank" href="https://ramasantayana.github.io/js-bootcamp-code-quiz/"> <img height = "400px" width = "400px" src={process.env.PUBLIC_URL + project3Picture} className=" float-left myPic" alt="Rama Santyana Head Shot" /></a>
      <p>For the code click <a target="_blank" href="https://github.com/ramasantayana/js-bootcamp-code-quiz">here</a></p>
      </div>

      <div className = "project col-md-5"> 
        <h2>Project 4: Bites-n-Booze Recipe Page</h2>
      <a target="_blank" href="https://odobashigenci.github.io/Bites-n--booze/homepage.html"> <img height = "400px" width = "400px" src={process.env.PUBLIC_URL + project4Picture} className=" float-left myPic" alt="Project 1 Picture" /></a>
      <p>For the code click <a target="_blank" href="https://github.com/odobashigenci/Bites-n--booze/branches">here</a></p>
      </div>

      <div className = "project col-md-5"> 
        <h2>Project 5: Solo Traveler Application</h2>
      <a target="_blank" href="https://thawing-eyrie-64621.herokuapp.com/"> <img height = "400px" width = "400px" src={process.env.PUBLIC_URL + project5Picture} className=" float-left myPic" alt="Project 2 Picture" /></a>
      <p>For the code click <a target="_blank" href="https://github.com/Cashew1337/Travel-Planner">here</a></p>
      </div>

      <div className = "project col-md-5"> 
        <h2>Project 6: Express.js Note Taker</h2>
      <a target="_blank" href="https://notetaker-rs.herokuapp.com/notes"> <img height = "400px" width = "400px" src={process.env.PUBLIC_URL + project6Picture} className=" float-left myPic" alt="Note Taker" /></a>
      <p>For the code click <a target="_blank" href="https://github.com/ramasantayana/Express.js-Note-Taker-RS">here</a></p>
      </div>
    </div>
  );
}
