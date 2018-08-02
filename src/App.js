import React, { Component } from 'react';
import './App.css';
var images = ["burger1", "burger2", "burger3", "burger4", "burger5","burger6","burger7","burger8","burger9"]
var click = []  
var score = 0;
var topscore = 0;
var imageName1 = require(`../public/images/${images[0]}.jpg`)
var imageName2 = require(`../public/images/${images[1]}.jpg`)
var imageName3 = require(`../public/images/${images[2]}.jpg`)
var imageName4 = require(`../public/images/${images[3]}.jpg`)
var imageName5 = require(`../public/images/${images[4]}.jpg`)
var imageName6 = require(`../public/images/${images[5]}.jpg`)
var imageName7 = require(`../public/images/${images[6]}.jpg`)
var imageName8 = require(`../public/images/${images[7]}.jpg`)
var imageName9 = require(`../public/images/${images[8]}.jpg`)



class App extends Component {

  render() {
    displayImages(shuffle(images));
    
    function imagehasbeenclicked(OneClicked){
              var k = OneClicked;
              for(var i = 0; i<click.length; i++){
                  if(k === click[i]){
                    return true;
                  }
              }
              click.push(k);
              return false;

    }
    const imageClick = (a) => {
      if(imagehasbeenclicked(a)){
        alert("Game Over!!");
        score = 0;
        click = [];
        this.forceUpdate()
      }
      else{
        if(click.length === 9){
          alert("You Win!")
        }
        score++;
        if(score > topscore){
          topscore = score;
        }
        displayImages(shuffle(images));
        this.forceUpdate()
      }
    } 
    function displayImages(a) {
     imageName1 = require(`../public/images/${a[0]}.jpg`)
     imageName2 = require(`../public/images/${a[1]}.jpg`)
     imageName3 = require(`../public/images/${a[2]}.jpg`)
     imageName4 = require(`../public/images/${a[3]}.jpg`)
     imageName5 = require(`../public/images/${a[4]}.jpg`)
     imageName6 = require(`../public/images/${a[5]}.jpg`)
     imageName7 = require(`../public/images/${a[6]}.jpg`)
     imageName8 = require(`../public/images/${a[7]}.jpg`)
     imageName9 = require(`../public/images/${a[8]}.jpg`)
    
    } 

    function shuffle() {
      for (let i = images.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [images[i], images[j]] = [images[j], images[i]];
      }

      return images;
    }


    return (
      <div className="container">
      <footer className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h4>Clicky game: Don't click the same burger twice!</h4>
              <h3>Current score:{score}</h3>
              <h4>Topscore: {topscore}</h4>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <img src={imageName1} onClick={() => imageClick(imageName1)} id="reload"/>
          <img src={imageName2} onClick={() => imageClick(imageName2)} id="reload"/>
          <img src={imageName3} onClick={() => imageClick(imageName3)} id="reload"/>
          <img src={imageName4} onClick={() => imageClick(imageName4)} id="reload"/>
          <img src={imageName5} onClick={() => imageClick(imageName5)} id="reload"/>
          <img src={imageName6} onClick={() => imageClick(imageName6)} id="reload"/>
          <img src={imageName7} onClick={() => imageClick(imageName7)} id="reload"/>
          <img src={imageName8} onClick={() => imageClick(imageName8)} id="reload"/>
          <img src={imageName9} onClick={() => imageClick(imageName9)} id="reload"/>
          </div>
      </footer>
  </div>
    );
  }
}

export default App;
