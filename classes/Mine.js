var classes

(c => {
 	"use strict"

 	const Thing = c.Thing // import

 	class Mine extends Thing {
    draw() {
			this.p.strokeWeight(4)
			this.p.stroke(240)
			this.p.ellipse(0,0,15,15)
			this.p.stroke(200)
			this.p.triangle(-5,0,0,-15,5,0)
			this.p.triangle(-5,0,0,15,5,0)
			this.p.triangle(0,-5,15,0,0,5)
			this.p.triangle(0,-5,-15,0,0,5)
		}

		drawThrust() {
		}
 	}

 	c.Mine = Mine
})(classes || (classes = {}))