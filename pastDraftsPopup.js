function test(){
	alert('fired');
}

console.dir(this);

 window.onload = function() { 
 	console.log("window.onload ----");
 	console.log(document.getElementById('button'));


 } 


function generatePopupWindow(htmlString){
	var win = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top="+(screen.height-400)+",left="+(screen.width-840));
	win.document.body.innerHTML = htmlString;
}

function getEditorState() {
	return document.querySelector('.editor-inner').innerHtml
}


/*
- on an interval in background - 
1. create a new save point consisting of:
	- document.querySelector('.editor-inner').innerHtml;
	- time stamp 
2. if contents of the new save is different that the prior save,
	Push that save point to local storage for the page. 
3. If more then 5 saves, remove oldest. 


- on open popup - 
1. Grab all of the save points in local storage for the page.
2. write control markup for each of them to the pop html 
3. attach clickHandlers which link each control to it's corresponding data,
	allowing it to (?push it's contents to the textarea?) / (?open it popup with the text?)



//create popup with contents
var win = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top="+(screen.height-400)+",left="+(screen.width-840));
win.document.body.innerHTML = "HTML";




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




