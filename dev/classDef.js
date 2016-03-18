// Cut and paste below & change myClass to whatever you need
// if extending, add extends and constructor calls super like this:
// constructor (sketch, name) {
//    	super(sketch, name)
//    }
// constructor can be omitted if new class is only adding or overriding methods

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