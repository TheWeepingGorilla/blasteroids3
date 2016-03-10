var classes

(c => {
 	"use strict"

 	class HUD {
 		constructor(sketch) {
 			this.p = sketch
 			this.mapToggle = 84 // 'T'
 			this.togglePressed = false
 			this.mapDisplay = false
 		}

 		control(objects) {
 			if (!(this.p.keyIsDown(this.mapToggle))) {
 				this.togglePressed = false
 			}
 			if ((this.p.keyIsDown(this.mapToggle)) && (this.togglePressed === false)) {
 				this.togglePressed = true
 				this.mapDisplay = !(this.mapDisplay)
 			}
 			if (this.mapDisplay === true) {
 				this.draw(objects)
 			}
 		}

 		draw(objects) {
 			this.p.push()
 			// map background
 			this.p.stroke(127)
 			this.p.fill(0)
 			this.p.rect(this.p.windowWidth * .8, 0, this.p.windowWidth * .2, this.p.windowHeight * .34)
 			// ship
 			this.p.stroke(objects[0].getHUDColor())
 			this.p.fill(objects[0].getHUDColor())
 			this.p.ellipse(this.p.windowWidth * .9, this.p.windowHeight * .17, 5, 5)
 			// objects
 			for (let i=1;i<objects.length;i++) {
 				if ((this.p.abs(objects[i].getX()) < 10000) && (this.p.abs(objects[i].getY()) < 10000)) {
 					let mapX = this.p.map(objects[i].getX(), -10000, 10000, this.p.windowWidth * .8, this.p.windowWidth)
 					let mapY = this.p.map(objects[i].getY(), -10000, 10000, 0, this.p.windowHeight * .34)
 					this.p.stroke(objects[i].getHUDColor())
 					this.p.fill(objects[i].getHUDColor())
 					this.p.ellipse(mapX, mapY, 5, 5)
 				}
 			}
 			this.p.pop()
 		}
 	}

 	c.HUD = HUD
})(classes || (classes = {}))