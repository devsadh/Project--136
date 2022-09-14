stat = ""

function setup(){
    canvas = createCanvas(380,380)
    canvas.position(550,350)
    video = createCapture(VIDEO)
    video.hide()
}

function draw(){
    image(video,0,0,380,380)
}

function start(){
    objectDetetctor = ml5.objectDetetctor("cocossd",modelLoaded)
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
    input = document.getElementById("object").value
}

function modelLoaded(){
    console.log("ModelLoaded")
    stat = ""
}

function draw(){
    image(video,0,0,380,380)
}