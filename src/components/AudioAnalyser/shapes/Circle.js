class Circle {
    constructor(context, x, y, r,colour, startAngle = 0, endAngle = 2 * Math.PI) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.colour = colour;
        this.context.beginPath();
    }
    // Getter0
    // get fill() {
    //   return this.calcArea();
    // }

    // Getter
    // set fill() {
    //   return this.calcArea();
    //   this.context.fill
    // }
    // Method
    draw() {
        this.context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, false);
        this.context.fillStyle = this.colour;
        this.context.fill();
    }
}

export default Circle;

// context.beginPath();
// context.arc(centerX, centerY, audioData[0], 0, 2 * Math.PI, false);
// context.fillStyle = 'green';
// context.fill();
//arc(x, y, radius, startAngle, endAngle [, anticlockwise]);