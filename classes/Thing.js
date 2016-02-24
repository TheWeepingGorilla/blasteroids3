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
 			this.vector = this.p.createVector(0,0)
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

    modifyAngularMomentum(amount) {
    	this.angMomentum += amount
    }

    applyAngularMomentum() {
    	this.angle += this.angMomentum
    }

    setVector(x,y) {
    	this.vector = this.p.createVector(x,y)
    }

    addVector(modVector) {
    	this.vector.add(modVector)
    }

    applyVector() {
    	this.X += this.vector.x
    	this.Y += this.vector.y
    }

    draw(){}
    control(){}
 	}

 	c.Thing = Thing
})(classes || (classes = {}))