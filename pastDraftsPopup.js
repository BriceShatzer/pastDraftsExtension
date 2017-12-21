function test(){
	alert('fired');
}

console.dir(this);

 window.onload = function() { 
 	console.log("window.onload ----");
 	console.log(document.getElementById('button'));
 } 

/*
- on an interval - 

create a new save point based on 


//create new node for 






//--- notes 

Every 90 seconds this chrome plugin grabs the content of the editor. It stores up to the last 5 grabs.  
Clicking on the dropdown displays the list of available grabs, clicking a grab...  

- ? writes that contents to the `<textarea />`  
- ? gets the `.innerText` and opens a model you can copy/paste from  


//--- rough idea around implementation 
var preview = document.querySelector('.editor-inner');
var str = preview.innerHTML;

...injecting?
var input = document.getElementsByName('original')[0]
var updatedStr = str.replace(/<p(.*)>.*<\/p>/g, '<p'+$1+'>taco</p>')
input.value = updatedStr

*/




