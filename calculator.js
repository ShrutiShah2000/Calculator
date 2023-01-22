const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.get("/bmiCalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator/index.html");
});

app.listen(3000,function(){
  console.log("server on 3000.");
});

app.post("/",function(req,res){
  var number1=Number(req.body.num1);
  var number2=Number(req.body.num2);
  var result=number1+number2;
  res.send("answer="+result);
});

app.post("/bmiCalculator",function(req,res){
  var w=parseFloat(req.body.weight);
  var h=parseFloat(req.body.height);
  var result=w/(h*h);
  res.send("BMI is = " + result);
});
