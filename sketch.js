new p5(p => {
	"use strict"

	//class imports
	let Ship = classes.Ship

	//sketch objects
	let playerShip = new Ship(p,'Player Ship')

	//sketch variables
	const FPS = 60
	p.angleMode(p.DEGREES)

	let objects = []
	objects.push(playerShip)
	playerShip.setLocation(p.windowWidth/2, p.windowHeight/2)
	playerShip.setAngle(0)  // p5 rotates clockwise, e.g. angle 45 is quadrant IV, not I

	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight)
		p.frameRate(FPS)
	}

	p.draw = () => {
		p.background(0)
		for (let i=0;i<objects.length;i++) {
			p.push()
			p.translate(objects[i].X, objects[i].Y)
			p.rotate(objects[i].angle)
			objects[i].draw()
			p.pop()
		}
	}

	p.windowResized = () => {
		p.resizeCanvas(p.windowWidth, p.windowHeight)
	}

})