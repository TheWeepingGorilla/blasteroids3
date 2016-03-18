var classes

(c => {
 	"use strict"

 	class Collision {
 		constructor(sketch, objects) {
 			this.p = sketch
 			this.objectsX = objects
 			this.objectsY = objects
 		}
 		check() {
 			// sort object X and object Y arrays into order by X and Y respectively
 			this.objectsX.sort(this.sortBy('X', false))
 			this.objectsY.sort(this.sortBy('Y', false))
 			// check in ascending order for objectsX.
 			// If no collision, skip to next object until last object reached
 			// when done with X, repeat with objectsY
 			for (let i=0; i<(this.objectsX.length -1); i++) {
 				for (let j=i; j<(this.objectsX.length -1); j++) {
	 				if (this.collisionCheck(this.objectsX[i], this.objectsX[j+1])) {
	 					console.log(this.objectsX[i].name + " collided with " + this.objectsX[j+1].name)
	 					// set objects to collided status
	 				}
	 				else {
	 					break
	 				}
	 			}
 			}
 			for (let i=0; i<(this.objectsY.length -1); i++) {
 				for (let j=i; j<(this.objectsY.length -1); j++) {
	 				if (this.collisionCheck(this.objectsY[i], this.objectsY[j+1])) {
	 					console.log(this.objectsY[i].name + " collided with " + this.objectsY[j+1].name)
	 					// set objects to collided status
	 				}
	 				else {
	 					break
	 				}
	 			}
 			}
 		}

 		collisionCheck(object1, object2) {
 			if ((object1.collision.type = 'Circle') && (object2.collision.type = 'Circle')) {
 				if (this.p.dist(object1.X, object1.Y, object2.X, object2.Y) <=
 					(object1.collision.diameter / 2) + (object2.collision.diameter / 2)) {
 					return true
 				}
 				else {
 					return false
 				}
 			}
 		}
 		// http://stackoverflow.com/questions/979256/sorting-an-array-of-javascript-objects?rq=1
 		sortBy (field, reverse, primer) {
			let key = primer ? function(x) {return primer(x[field])} : function(x) {return x[field]}
   		reverse = !reverse ? 1 : -1
   		return function (a, b) {
      	return a = key(a), b = key(b), reverse * ((a > b) - (b > a))
    	}
		}
 	}

 	c.Collision = Collision
})(classes || (classes = {}))