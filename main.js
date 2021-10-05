function setup(){
canvas=createCanvas(400,400)
canvas.center()
video=createCapture(VIDEO)
video.hide()
classyfier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/jtEJyHMGl/model.json',modelLoaded)
}
function modelLoaded(){
    console.log("modelLoaded")
}
function draw(){
image(video,0,0,400,400)
classyfier.classify(video,gotresult)
}
function gotresult(error,results){
if (error) {
    console.log(error)
}
else{
    console.log(results)
    document.getElementById("ron").innerHTML=results[0].label
    document.getElementById("roa").innerHTML=results[0].confidence*100 +"%"
}
}
