const rootDiv = document.getElementById('container');
const innerDiv = document.createElement('div');
innerDiv.classList.add('innerContainer');
const heading = document.createElement('h1');
heading.classList.add('heading');
heading.textContent = 'Hello World!';
innerDiv.appendChild(heading);
rootDiv.appendChild(innerDiv);