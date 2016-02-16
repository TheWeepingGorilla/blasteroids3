var classes

(c => {
 	"use strict"

 	class Example {
 		constructor(sketch, name) {
 			this.p = sketch
 			this.name = name
 		}

 		whoAmI() {
      this.p.textSize(32)
      this.p.fill(0, 102, 153)
			this.p.text("I am a good example", this.p.width / 2, this.p.height / 2)
    }
 	}

 	c.Example = Example
})(classes || (classes = {}))