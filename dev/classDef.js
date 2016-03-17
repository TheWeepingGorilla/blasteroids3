// Cut and paste below & change myClass to whatever you need

var classes

(c => {
 	"use strict"

 	class myClass {
 		constructor(sketch) {
 			this.p = sketch
 		}
 	}

 	c.myClass = myClass
})(classes || (classes = {}))