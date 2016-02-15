new p5(p => {
	"use strict"

	//class imports
	const Example = classes.Example

	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight)
	}

	p.draw = () => {
		p.background(0)
	}

	p.windowResized = () => {
		p.resizeCanvas(p.windowWidth, p.windowHeight)
	}

})