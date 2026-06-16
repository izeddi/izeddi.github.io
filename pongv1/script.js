let palaX;
let palaY;

let ampladaPala = 120;
let alcadaPala = 20;




function setup() {


    createCanvas(windowWidth, windowHeight);


    palaX = width / 2;


    palaY = height - 60;
}


function draw() {

    background(0);


    palaX = mouseX;


    palaX = constrain(
        palaX,
        ampladaPala / 2,
        width - ampladaPala / 2
    );


    fill(255);

    rectMode(CENTER);


    rect(
        palaX,
        palaY,
        ampladaPala,
        alcadaPala
    );


    fill(255);

    textAlign(CENTER);

    textSize(24);

    text(
        "Mou el ratolí o el dit",
        width / 2,
        50
    );

    textSize(18);

    text(
        "Pas 1: Control de la pala",
        width / 2,
        90
    );
}


function windowResized() {

    resizeCanvas(
        windowWidth,
        windowHeight
    );

 
    palaY = height - 60;
}

