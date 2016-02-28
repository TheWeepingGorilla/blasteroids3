new p5(p => {
	"use strict"

	//sketch variables
	const FPS = 60
	p.angleMode(p.DEGREES)

	//class imports
	let Ship = classes.Ship
	let Mine = classes.Mine

	//sketch objects
	let objects = []

	let playerShip = new Ship(p,'Player Ship')
	playerShip.setLocation(p.windowWidth * .5, p.windowHeight * .5)
	playerShip.setAngle(0)  // p5 rotates clockwise, e.g. angle 45 is quadrant IV, not I
	objects.push(playerShip)

	let mine0 = new Mine(p,'mine0')
	mine0.setLocation(p.windowWidth * .25, p.windowHeight * .5)
	mine0.setAngularMomentum(-1)
	objects.push(mine0)

	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight)
		p.frameRate(FPS)
	}

	p.draw = () => {
		p.background(0)
		let mainVector = playerShip.getShipVector()
		for (let i=0;i<objects.length;i++) {
			objects[i].control()
			objects[i].applyAngularMomentum()
			objects[i].setVector(mainVector)
			objects[i].applyVector()
			objects[i].draw()
		}
	}

	p.windowResized = () => {
		p.resizeCanvas(p.windowWidth, p.windowHeight)
	}

})