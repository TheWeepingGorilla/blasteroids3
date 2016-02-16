var classes

(c => {
 	"use strict"

 	const Thing = c.Thing // import

 	class Ship extends Thing {
    draw() {
			this.p.strokeWeight(4)
			this.p.stroke(240)
			this.p.line(24, 0, -16, -12)
			this.p.line(-16, -12, 0, 0)
			this.p.line(0, 0, -16, 12)
			this.p.line(-16, 12, 24, 0)
		}

		drawThrust() {
			this.p.strokeWeight(2)
			this.p.stroke(240)
			this.p.line(-8, 4, -24, 0)
			this.p.line(-24, 0, -8, -4)
		}
 	}

 	c.Ship = Ship
})(classes || (classes = {}))