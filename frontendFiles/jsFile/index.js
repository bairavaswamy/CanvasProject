
const canvas = document.querySelector("canvas")

canvas.width = innerWidth
canvas.height = innerHeight

const all = canvas.getContext("2d");
// all.fillStyle = "rgba(255,100,0,0.4)"
// all.fillRect(320,100,100,100)
// all.fillStyle = "rgba(255,100,100,0.4)"
// all.fillRect(450,200,100,100)


// all.beginPath();
// all.moveTo(50,300);
// all.lineTo(40,100);
// all.lineTo(300,100);
// all.lineTo(50,300);
// all.strokeStyle= "#ff00ff"
// all.stroke();

function Circle(x,y,dx,dy,radius,color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;

    this.draw = function(){
        all.beginPath();
        all.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        all.strokeStyle = this.color;
        all.stroke()
    }

    this.anime = function(){
        if(this.x+this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx
        }
        if(this.y+this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy
        }
        this.x += this.dx
        this.y += this.dy
        this.draw()
    }
}

const arrayCicles = []

for(let i =0;i<200;i++){
    let radius = Math.random() * 30;
    let x = Math.random() * (innerWidth-radius * 2) + radius;
    let y =  Math.random() * (innerHeight-radius*2) + radius;
    let dx = (Math.random() - 0.5) ;
    let dy = (Math.random() - 0.5) ;
    let r = Math.random() * 255
    let g = Math.random() * 255
    let b = Math.random() * 255
    let color = `rgba(${r},${g},${b},0.9)`
    arrayCicles.push(new Circle(x,y,dx,dy,radius,color))
}

function animate(){
    requestAnimationFrame(animate)
    all.clearRect(0,0,innerWidth,innerHeight);
    for(let i=0;i<arrayCicles.length;i++){
        arrayCicles[i].anime();
    }
}
animate()