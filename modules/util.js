let util = {	
	sleep: function(tick){
		return new Promise(resolve => setTimeout(resolve, tick))
	},
	rng: function(max){
		return Math.floor(Math.random() * Math.floor(max))
	},
	line: function(x1, y1, x2, y2, color){
		canvas.context.beginPath()
		canvas.context.strokeStyle = color
		canvas.context.moveTo(x1, y1)
		canvas.context.lineTo(x2, y2)	
		canvas.context.stroke()
		canvas.context.closePath()
	},
	collide: function(x1, y1, scale1, x2, y2, scale2){
		if (x1 < x2 + scale2 &&
			x1 + scale1 > x2 &&
			y1 < y2 + scale2 &&
			scale1 + y1 > y2) {
				return true
		}
	},
	vectoryze: function(x1, y1, x2, y2){
		return {x: x1 - x2, y: y1 - y2}
	}
}
