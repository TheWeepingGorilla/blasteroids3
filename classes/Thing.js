var classes

(c => {
 	"use strict"

 	class Thing {
 		constructor(sketch, name) {
 			this.p = sketch
 			this.name = name
 			this.X = 0
 			this.Y = 0
 			this.angle = 0
 			this.angMomentum = 0
 		}

 		whoAmI() {
			console.log("I am " + this.name)
    }

    setLocation(x,y) {
    	this.X = x
    	this.Y = y
    }

    setAngle(angle) {
    	this.angle = angle
    }

    setAngularMomentum(momentum) {
    	this.angMomentum = momentum
    }

    applyAngularMomentum() {
    	this.angle += this.angMomentum
    }
 	}

 	c.Thing = Thing
})(classes || (classes = {}))