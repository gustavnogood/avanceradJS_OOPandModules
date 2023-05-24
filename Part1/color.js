class color {
    constructor(r,g,b){
        this.r = r;
        this.g = g;
        this.b = b;
    }
}

color.prototype.rgb = function(){
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
}

color.prototype.hex = function(){
    let hexR = this.r.toString(16).padStart(2,'0');
    let hexG = this.g.toString(16).padStart(2,'0');
    let hexB = this.b.toString(16).padStart(2,'0');
    return `#${hexR}${hexG}${hexB}`
}

color.prototype.rgba = function(a){
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${a})`;
}

let blueColor = new color(0, 0, 255)

console.log(blueColor.rgb())
console.log(blueColor.hex())
console.log(blueColor.rgba(0.6)) 

document.body.style.backgroundColor = blueColor.rgb();

