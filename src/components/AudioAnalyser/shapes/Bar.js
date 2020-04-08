class Bar {
    constructor(context, x, y, width,height) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.context.beginPath();
    }
   
    
    draw() {
        this.context.fillRect(this.x, this.y, this.width, this.height);
      
    }
}

export default Bar;