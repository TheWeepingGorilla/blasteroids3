var classes

(c => {
 	"use strict"

 	const Thing = c.Thing // import

 	class Ship extends Thing {
    constructor (sketch, name) {
    	super(sketch, name)
    	// ascii values of keys (capitals, p5.js will detect lowercase also)
    	this.thrust = 69  	// E
    	this.rotateCCW = 83	// S
    	this.rotateCW = 70	// F
    }

 		control() {
 			if (this.p.keyIsDown(this.thrust)) {
 				this.drawThrust()
 				// apply thrust
 			}
 			if (this.p.keyIsDown(this.rotateCCW)) {
 				this.drawCounterClockwiseThrust()
 				// modify angular momentum
 			}
 			if (this.p.keyIsDown(this.rotateCW)) {
 				this.drawClockwiseThrust()
 				// apply angular momentum
 			}
 		}

    draw() {
			this.p.push()
			this.p.translate(this.X, this.Y)
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
			this.p.translate(this.X, this.Y)
			this.p.rotate(this.angle)
			this.p.strokeWeight(2)
			this.p.stroke(240)
			this.p.line(-8, 4, -24, 0)
			this.p.line(-24, 0, -8, -4)
			this.p.pop()
		}

		drawClockwiseThrust() {
			this.p.push()
			this.p.translate(this.X, this.Y)
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
			this.p.translate(this.X, this.Y)
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