var classes

(c => {
 	"use strict"

 	class Collision {
 		constructor(sketch, objects) {
 			this.p = sketch
 			this.objects = objects
 		}

 		check() {
 			// naive algo, could be optimized
 			for (let i=0; i<this.objects.length; i++) {
 				for (let j=0; j<this.objects.length; j++) {
 					if (i !== j) {
		 				if (this.collisionCheck(this.objects[i], this.objects[j])) {
		 					console.log(this.objects[i].name + " collided with " + this.objects[j].name)
		 					// set objects to collided status
		 				}
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
 	}

 	c.Collision = Collision
})(classes || (classes = {}))