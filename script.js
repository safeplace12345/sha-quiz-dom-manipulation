const body = document.querySelector('body');
const para = document.createElement('p');
para.textContent = "Hey i'm red!";
para.style.color = 'red';

const blue_h3 = document.createElement('h3');
blue_h3.textContent = "Hey I'm blue";
blue_h3.style.color = 'blue';
const div = document.createElement('div');
div.style.border = 2 + 'px';
div.innerHTML = "<h1>I am a div</h1> <br><p>ME TOO!</p>";

body.appendChild(para);
body.appendChild(blue_h3);
body.appendChild(div);
