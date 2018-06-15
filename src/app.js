require('./app.scss');
var name = require('./name.js');

const hey = "Hello";

var para = document.getElementById('heading');
var text = document.createTextNode(hey+" "+name.name);
para.appendChild(text);
//document.body.appendChild(para);
