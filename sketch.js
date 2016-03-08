new p5(p => {
	"use strict"

	//sketch variables
	const FPS = 60
	p.angleMode(p.DEGREES)

	//class imports
	let Ship = classes.Ship
	let Mine = classes.Mine
	let Starfield = classes.Starfield
	let HUD = classes.HUD

	// array for all objects
	let objects = []
	// create background Starfield
	let starfieldBG = new Starfield(p)

	// add player ship
	let playerShip = new Ship(p,'Player Ship')
	playerShip.setLocation(p.windowWidth * .5, p.windowHeight * .5)
	playerShip.setAngle(0)  // p5 rotates clockwise, e.g. angle 45 is quadrant IV, not I
	objects.push(playerShip)

	// get map
	let map = map0

	// get things from map by type and add to objects
	let mines = []
	for (let i=0; i<map.mines.length; i++) {
		mines[i] = new Mine(p, map.mines[i].name)
		mines[i].setAngularMomentum(-1)
		objects.push(mines[i])
	}

	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight)
		p.frameRate(FPS)
		// set thing locations by type here so off screen-starting things will be rendered when needed
		for (let i=0; i<mines.length; i++) {
			mines[i].setLocation(map.mines[i].startX, map.mines[i].startY)
		}
	}

	p.draw = () => {
		p.background(0)
		starfieldBG.draw()
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