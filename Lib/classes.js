class Shape {
    constructor(color){
        this.color = color;
    }
};

class Circle extends Shape {
    constructor(color){
        super(color);
    }
    render(){
        return`<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
};

class Square extends Shape {
    constructor(color){
        super(color);
    }
    render(){
        return`<rect x='25' y='12.5' width="250" height="175" fill="${this.color}" />`
    }
};

class Triangle extends Shape {
    constructor(color){
        super(color);
    }
    render(){
        return`<polygon points="150,10 275,190 25,190" fill="${this.color}" />`
    }
};

class Logo {
    constructor(shape, color, text){
        this.shape = shape;
        this.color = color;
        this.text = text;
    }
    render() {
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${this.shape.render()}
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
      
      </svg>`;
      }
    };

    module.exports = {Circle, Square, Triangle, Logo}