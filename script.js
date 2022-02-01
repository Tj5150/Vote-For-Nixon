//Makes Flag Showup
document.getElementById('imgNixon').addEventListener('mouseover', hov)
document.getElementById('imgNixon').addEventListener('mouseleave', leave)
document.getElementById('imgNixon').addEventListener('click', add);
function hov(){
    document.getElementById('flag').style.visibility = 'visible'
}
function leave(){
    document.getElementById('flag').style.visibility = 'hidden'
}

// Voting click

 document.getElementsByClassName('imggeorge')[0].addEventListener('mousedown', down2)
 function down2(){
     confirm('Yikes! Are you sure?')
     confirm('Sorry, WRONG choice')
 }

//onpage load
window.addEventListener('DOMContentLoaded',start)

function start(){
    alert('Welcome to the 1968 Election!')
    window.removeEventListener('DOMContentLoaded',start)
}



//Context Menu
document.getElementById('nd').addEventListener('contextmenu', down3)
function down3(){
    alert('The first Republican president was Abraham Lincoln')
}

//Client X and Y
document.addEventListener('mousemove', log);

function log(e){
    if(e.clientX>=730){
        document.body.style.background = '#010B94'
        document.getElementById('gd').style.color = 'skyblue';
        document.getElementById('george').style.border = '7px solid skyblue'
    }
    
    else{
        document.body.style.background = 'darkred'
        document.getElementById('gd').style.color = 'lightblue';
        document.getElementById('george').style.border = '7px solid lightblue'
    }
}

document.getElementById('imgNixon').addEventListener('mousedown', big)

function big(){
    this.style.transform = "scale(1.2)";
}

document.getElementById('imgNixon').addEventListener('mouseup', norm)

function norm(){
    this.style.transform = "scale(1)";
    alert("Great Choice! Thanks for voting Nixon!");
}

function add(){
    for(let i=0; i<=5; i++){
        document.getElementById('bod').innerHTML+=`<img src="pictures/confetti.gif" id="fett" style="position: absolute; width: 100%; left: 0; top: ${i*5}%">`
    }
}

