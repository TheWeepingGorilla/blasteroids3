var classes

(c => {
 	"use strict"

 	class Map {
    constructor (sketch, map) {
    	this.mines = []
    	for (let i=0;i<map.mines.length;i++) {
    		this.mines[i] = map.mines[i]
    	}
    }
  }

  c.Map = Map
})(classes || (classes = {}))