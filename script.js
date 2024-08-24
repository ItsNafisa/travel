let numbers=document.querySelectorAll('.numbers .num');
let section=document.querySelector('.section6 .numbers');
let started=false;
let sections=document.querySelectorAll('.allSections');
let mysidebar=document.getElementById('mysidebar');
let firstSection=document.getElementById('firstSection');
// start count 
window.onscroll=function(){
if(window.scrollY >= section.offsetTop - 100){
    if(!started){
        numbers.forEach((num)=>count(num));
    }
   started=true;
}
}

function count(e){
    let goal=e.dataset.goal;
    let c=setInterval(()=>{
e.textContent++;
if(e.textContent==goal){
clearInterval(c);
}
    },2000 / goal);
}
// end count 

//remove sidebar when scroll to bottom
window.addEventListener('scroll',()=>{
      if(window.scrollY >= (firstSection.offsetTop - 100)){
        console.log(';;;');
        mysidebar.classList.remove('fleX');
    }
})
