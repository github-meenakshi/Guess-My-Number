'use strict';
// document.querySelector('.message').innerHTML = 'Dekh Kya ra hai Guess kar na laude!!';
// document.querySelector('.guess').value = 23;
// document.querySelector('.check').addEventListener('click',function(){
//     console.log(document.querySelector('.guess').value);
//     document.querySelector('.message').innerHTML = 'Sacheta ki maa ki choot';
// })
// const value = Math.trunc(Math.random()*20)+1;
// let score = 20;
// let highscore = 0;
// document.querySelector('.check').addEventListener('click',function(){
// if(score>0){
// const val = Number(document.querySelector('.guess').value);
// if(!val){
// document.querySelector('.message').innerHTML = 'Kuch daal to de';
// }
// else if(val === value){
// document.querySelector('.message').innerHTML = 'Correct Answer';
// document.querySelector('.number').innerHTML = value;
// document.querySelector('body').style.backgroundColor='green';
// document.querySelector('.number').style.width = '60rem';
// if(score>highscore){
// highscore = score;
// document.querySelector('.highscore').innerHTML = highscore;
// }
// }
// else if(val>value){
// document.querySelector('.message').innerHTML = 'TOO high';
// score--;
// document.querySelector('.score').textContent = score;
// }
// else if(val<value){
// document.querySelector('.message').innerHTML = 'TOO low';
// score--;
// document.querySelector('.score').textContent = score;
// }
// }
// else{
// document.querySelector('.message').innerHTML = 'OOPS!!! You lose the Game';
// }
// document.querySelector('.again').addEventListener('click',function(){
// document.querySelector('.message').innerHTML = 'Start Guessing';
// score = 20;
// document.querySelector('.score').innerHTML = score;
// document.querySelector('.guess').value = "";
// document.querySelector('body').style.backgroundColor = 'black';
// document.querySelector('.number').style.width = '15rem';
// const value = Math.trunc(Math.random()*20)+1;
// document.querySelector('.number').innerHTML = value;
// })
// });
//random_number creating function
const randii = function(){
return Math.ceil(Math.random()*20);    
}
var randomValue = randii();
//input_to_text function
const inputToText = function(){
const val = document.querySelector('.guess').value;
if(val>randomValue){
document.querySelector('.message').innerHTML="Too High";
var curr_Val = document.querySelector('.score').innerHTML;
curr_Val = curr_Val-1;
if(curr_Val == 0){
document.querySelector('.heading').innerHTML="OOPS!!! You Lost!";
document.querySelector('body').style.backgroundColor="#FF6767";  
document.querySelector('.score').innerHTML=curr_Val;  
}
else{
document.querySelector('.score').innerHTML=curr_Val;
} 
}
else if(val<randomValue){
document.querySelector('.message').innerHTML="Too Low";
var curr_Val = document.querySelector('.score').innerHTML;
curr_Val = curr_Val-1;
if(curr_Val == 0){
document.querySelector('.heading').innerHTML="OOPS!!! You Lost!";
document.querySelector('body').style.backgroundColor="#FF6767";  
document.querySelector('.score').innerHTML=curr_Val;  
}
else{
document.querySelector('.score').innerHTML=curr_Val;
}     
}    
else{
document.querySelector('.message').innerHTML="You Won";
document.querySelector('body').style.backgroundColor="#A3A847";
document.querySelector('.number').innerHTML=val;
document.querySelector('.heading').innerHTML="Hurreyyyy!!!! You Won!";
var curr_score = document.querySelector('.score').innerHTML;
var curr_high = document.querySelector('.highscore').innerHTML;
if(curr_score>curr_high){
document.querySelector('.highscore').innerHTML=curr_score;    
}    
}
}
// Reset Button
document.querySelector('.check').addEventListener("click",inputToText);
const reset = function(){
document.querySelector('body').style.backgroundColor="#222";
document.querySelector('.message').innerHTML="Start guessing...";
randomValue = randii();
document.querySelector('.number').innerHTML="?";
document.querySelector('.heading').innerHTML="Guess My Number!";
document.querySelector('input').value=" ";
document.querySelector('.score').innerHTML=10;    
}
document.querySelector('.again').addEventListener("click",reset);
