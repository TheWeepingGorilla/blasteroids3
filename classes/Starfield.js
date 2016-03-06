var classes

(c => {
 	"use strict"

 	class Starfield {
 		constructor(sketch) {
 			this.p = sketch
 			this.numOfStars = 400
 			this.starArray = []
 			for (let i=0;i<this.numOfStars;i++) {
 				this.starArray[i] = {
 					"x" : this.p.random(0,100),
 				 	"y" : this.p.random(0,100),
 				 	"width" : 5,
 				 	"height" : 5}
 			}
 		}
 		draw() {
 			for (let i=0;i<this.numOfStars;i++) {
 				this.p.ellipse(this.p.map(this.starArray[i].x, 0, 100, 0, this.p.windowWidth),
 											 this.p.map(this.starArray[i].y, 0, 100, 0, this.p.windowHeight),
 											 this.starArray[i].width, this.starArray[i].height)
 			}
 		}
 	}

 	c.Starfield = Starfield
})(classes || (classes = {}))

