// pop up login 

const body =document.querySelector("#main-body");
const loginBtn=document.querySelector("#login");
const loginWrap=document.querySelector("#login-wrap");

const registerBtn=document.querySelector("#register");
const registerWrap=document.querySelector("#register-wrap");

const cancelBtn=document.querySelector("#cancel-btn");
const regCancel=document.querySelector("#reg-cancel-btn");

let mainContainer=document.querySelector("#main-div");

function loginPop(){
  loginWrap.classList.add("main-wrap-login");
  mainContainer.classList.add("login-blur");
}

loginBtn.onclick=function(){
  loginPop();
}

function loginClose(){
  loginWrap.classList.remove("main-wrap-login")
  mainContainer.classList.remove("login-blur");
}

cancelBtn.onclick=function(){
  loginClose();
}

function registerPop(){
   
   body.style.overflow = "hidden";
   registerWrap.classList.add("main-wrap-login");
   mainContainer.classList.add("login-blur");
}

registerBtn.onclick=function(){
  registerPop();
}

function registerClose(){
  body.style.overflow = "auto";
  registerWrap.classList.remove("main-wrap-login")
  mainContainer.classList.remove("login-blur");
}

regCancel.onclick=function(){
  registerClose();
  console.log("Im");
}

let chatbotBtn=document.querySelector("#bot-btn");
let chatbotWrap=document.querySelector("#msg-wrap");
let closeChat=document.querySelector("#close-chat");
function chatbot(){
  chatbotWrap.classList.toggle("msg-wrap");
}

chatbotBtn.onclick=function(){
  chatbot();
}
