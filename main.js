//https://teachablemachine.withgoogle.com/models/n5ciGiOp5/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/n5ciGiOp5/' , modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(){
if(error){
    console.log(error);
}else{
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;
document.getElementById("result_label").innerHTML='You can hear the sound of-'+results[0].label;
document.getElementById("result_confidence").innerHTML='Accuracy-'+(results[0].confidence*100).toFixed(1)+'%';
document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

img=document.getElementById("cat");
img1=document.getElementById("cow");
img2=document.getElementById("dog");
img3=document.getElementById("lion");
     if(results[0].label=="Meow"){
         img.src="cat.gif";
         img1.src="cow.jpg";
         img2.scr="dog.jpg";
         img3.src="lion.jpg";
     }else if(results[0].label=="Moo"){
        img.src="cat.jpg";
        img1.src="cow.gif";
        img2.scr="dog.jpg";
        img3.src="lion.jpg";
     }else if(results[0].label=="Bark"){
        img.src="cat.jpg";
        img1.src="cow.jpg";
        img2.scr="dog.gif";
        img3.src="lion.jpg";
     }else{
        img.src="cat.jpg";
        img1.src="cow.jpg";
        img2.scr="dog.jpg";
        img3.src="lion.gif";
     }
}
}


