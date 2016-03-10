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
 			this.HUDColor = 'rgb(185,46,18)'
 		}

 		whoAmI() {
			console.log("I am " + this.name)
    }

    getX() {
    	return this.X
    }

    getY() {
    	return this.Y
    }

    getHUDColor() {
    	return this.HUDColor
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

    setVector(vector) {
    	this.vector = vector
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