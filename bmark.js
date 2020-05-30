(function(){const a = document.createElement('script'), b = document.createElement('style'), c = new XMLHttpRequest();
a.type = "javascript";
a.src = 'https://github.com/Foxcapades/kdp-panel/raw/dev/dist/fxcpds-kdp.js';
c.open("GET", 'https://github.com/Foxcapades/kdp-panel/raw/dev/dist/fxcpds-kdp.css');
c.onreadystatechange = () => {if (c.readyState === XMLHttpRequest.DONE) {b.textContent = c.responseText}};
c.send();
document.body.appendChild(a);
document.head.appendChild(b);}());
