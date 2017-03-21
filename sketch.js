function setup(){
    createCanvas (600,400);
    background(0);
}

function draw(){
    strokeWeight(4);
    stroke(255);
    
    var x = 0;
    
    while(x<width){
        fill(138, 22, 188);
        rect(x,   100, 25, 25);
        x = x + 50;        
    }

    for(var x = 0; x < 650; x = x + 50){
        fill (66,244,244);
        rect(x,   340, 25, 25);

    }
    
}
   
