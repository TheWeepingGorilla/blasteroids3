new p5(p => {
	"use strict"

	//class imports
	let Example = classes.Example
	let example0 = new Example(p,'Robot')

	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight)
	}

	p.draw = () => {
		p.background(0)
		example0.whoAmI()
	}

	p.windowResized = () => {
		p.resizeCanvas(p.windowWidth, p.windowHeight)
	}

})