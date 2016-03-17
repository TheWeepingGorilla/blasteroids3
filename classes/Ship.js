var classes

(c => {
 	"use strict"

 	const Thing = c.Thing // import

 	class Ship extends Thing {
    constructor (sketch, name) {
    	super(sketch, name)
    	// ascii values of keys (capitals, p5.js will detect lowercase also)
    	this.thrust = 69  	// E
    	this.rotateCCW = 70	// F
    	this.rotateCW = 83	// S
    	this.stopRotateCCW = 71 // G
    	this.stopRotateCW = 65 // A
    	this.stopRotatingCCW = false
    	this.stopRotatingCW = false
    	this.HUDColor = 'rgb(22,148,206)'
    	this.collision = {
    		type : "Circle",
    		diameter : 15
    	}
    }

 		control() {
 			if (this.p.keyIsDown(this.thrust)) {
 				this.drawThrust()
 				// apply thrust - angles are opposite for application to other objects
 				let modVectorX = this.p.cos(this.angle - 180)
 				let modVectorY = this.p.sin(this.angle - 180)
 				let modVector = this.p.createVector(modVectorX, modVectorY)
 				modVector.mult(.2)
 				this.addVector(modVector)
 			}
 			if (this.p.keyIsDown(this.rotateCCW)) {
 				this.drawCounterClockwiseThrust()
 				this.angMomentum += .25
 			}
 			if (this.p.keyIsDown(this.rotateCW)) {
 				this.drawClockwiseThrust()
 				this.angMomentum -= .25
 			}
 			if (this.p.keyIsDown(this.stopRotateCCW) && this.angMomentum > 0) {
 				this.stopRotatingCCW = true
 			}
 			if (this.p.keyIsDown(this.stopRotateCW) && this.angMomentum < 0) {
 				this.stopRotatingCW = true
 			}
 			if (this.stopRotatingCCW) {
 				if (this.angMomentum > .25) {
 					this.drawClockwiseThrust()
 					this.angMomentum -= .25
 				} else {
 					this.drawClockwiseThrust()
 					this.angMomentum = 0
 					this.stopRotatingCCW = false
 				}
 			}
 			if (this.stopRotatingCW) {
 				if (this.angMomentum < -.25) {
 					this.drawCounterClockwiseThrust()
 					this.angMomentum += .25
 				} else {
 					this.drawCounterClockwiseThrust()
 					this.angMomentum = 0
 					this.stopRotatingCW = false
 				}
 			}
 		}

 		getShipVector() {
 			return this.vector
 		}

 		// override Vector Set for player ship so draw loop won't alter ship's motion
 		setVector() {}

    draw() {
			this.p.push()
			// ship always in center of screen
			this.p.translate(this.p.windowWidth / 2, this.p.windowHeight /2)
			this.p.rotate(this.angle)
			this.p.strokeWeight(4)
			this.p.stroke(240)
			this.p.line(24, 0, -16, -12)
			this.p.line(-16, -12, 0, 0)
			this.p.line(0, 0, -16, 12)
			this.p.line(-16, 12, 24, 0)
			this.p.pop()
		}

		drawThrust() {
			this.p.push()
			this.p.translate(this.p.windowWidth / 2, this.p.windowHeight /2)
			this.p.rotate(this.angle)
			this.p.strokeWeight(2)
			this.p.stroke(240)
			this.p.line(-8, 4, -24, 0)
			this.p.line(-24, 0, -8, -4)
			this.p.pop()
		}

		drawClockwiseThrust() {
			this.p.push()
			this.p.translate(this.p.windowWidth / 2, this.p.windowHeight /2)
			this.p.rotate(this.angle)
			this.p.strokeWeight(2)
			this.p.stroke(240)
			this.p.line(24,0,20,-8)
			this.p.line(20,-8,16,0)
			this.p.line(-16,12,-12,18)
			this.p.line(-12,18,-8,12)
			this.p.pop()
		}

		drawCounterClockwiseThrust() {
			this.p.push()
			this.p.translate(this.p.windowWidth / 2, this.p.windowHeight /2)
			this.p.rotate(this.angle)
			this.p.strokeWeight(2)
			this.p.stroke(240)
			this.p.line(24,0,20,8)
			this.p.line(20,8,16,0)
			this.p.line(-16,-12,-12,-18)
			this.p.line(-12,-18,-8,-12)
			this.p.pop()
		}
 	}

 	c.Ship = Ship
})(classes || (classes = {}))