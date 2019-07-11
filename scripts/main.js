function setHeading(name){
  document.querySelector('h1').textContent='hello,'+name+'!';
}
function setUserName(){
  let myName=prompt('请输入你的名字');
  localStorage.setItem('name',myName);
  setHeading(myName);
}
let storeName=localStorage.getItem('name');
if(!storeName){
  setUserName();}
else {
  setHeading(storeName);
}
let btn=document.querySelector('button');
btn.onclick=setUserName;