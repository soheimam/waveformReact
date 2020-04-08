class Circle {
    constructor(context, x, y, r, startAngle = 0, endAngle = 2 * Math.PI) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.context.beginPath();
    }
    // Getter
    // get area() {
    //   return this.calcArea();
    // }
    // Method
    draw() {
        this.context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, false);
        this.context.fill();
    }
}

export default Circle;

// context.beginPath();
// context.arc(centerX, centerY, audioData[0], 0, 2 * Math.PI, false);
// context.fillStyle = 'green';
// context.fill();
//arc(x, y, radius, startAngle, endAngle [, anticlockwise]);