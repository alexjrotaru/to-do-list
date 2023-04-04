

// Create a close button and append it to each list item
var myNodeList=document.getElementsByTagName('LI');
var i; 
for(i = 0; i < myNodeList.length; i++) {
	var span=document.createElement('SPAN'); // span is a generic inline container
	var txt=document.createTextNode('\u00D7');
	span.className="close";
	span.appendChild(txt);
	myNodeList[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close=document.getElementsByClassName("close");
var i; 
for(i = 0; i < close.length; i++) {
	close[i].onclick=function() {
		var div=this.parentElement; 
		div.style.display="none";
	}
}

// Add a checked symbol wen clicking on a lis item
var list=document.querySelector('UL');
list.addEventListener('click', function(event) {
	if(event.target.tagName==='LI') {
		event.target.classList.toggle('checked');
	}
})

// Create a new list item when clicking on the 'Add' button
function newElement() {
	var ul=document.getElementById('myUL');
	var li=document.createElement('li');
	var input=document.getElementById('myInput').value;
	li.appendChild(document.createTextNode(input));
	if(input.length===0) {
		alert("You must write something!");
	} else {
		ul.appendChild(li);
	}

	var span=document.createElement('SPAN'); // span is a generic inline container
	var txt=document.createTextNode('\u00D7');
	span.className="close";
	span.appendChild(txt);
	myNodeList[i].appendChild(span);

	for(i = 0; i < close.length; i++) {
	close[i].onclick=function() {
		var div=this.parentElement; 
		div.style.display="none";
		}
	}
}

// Create a new list item when entering in the input field 
var input=document.getElementById("myInput");

input.addEventListener('keypress', function(event){
	if(event.keyCode===13) {
		newElement();
	}
})