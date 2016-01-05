# Week 2

## Functions (02-01)

### Syntax

	function functionName(parameters){
		code;
	}

	function welcomeMsg(){
		alert("Welcome to Javascript");
	}

	function welcomeMsg(msg){
		alert(msg);
	}


### Return values

	function welcomeMsg(msg){
		alert(msg);
		var name = prompt("So what's your name?");
		return name;
	}



## Code Placement (02-02)

### In the head
- can be done
- <script> </script> wrappers

### External file
- possible to reuse in multiple files
- no special tag
- <script> src="assets/js/file.js"></script>
 		- if incorrect, will not run at all



## Folder structure (02-03)

### Conventions
- folder structure is a convention by itself
- separate css, js and images
		- can group into assets folder
- html are all top-level



## Events (02-04)

### Interactivity with Javascript!
- through events, through the js API

### Well-known events

- onclick
		- user clicks on an html element
- onmouseover
		- user moves the mouse over an html element
- onresize
		- browser window is resized
- onload
		- browser finishes loading the page
		- very useful to synchronize code execution with page state

### How it works
- any element can react to an event
- you need to add the event to the tag and include what you want


### Quotes
- can use single quotes or double quotes for the event result
- double quotes make it easier if you want to pass string parameters inside
		- you use both, not a single one though
- don't copy quotes most of the time, might have problematic matching


### Changing the program flow
- events cause the program to run continuously (API is listening all the time)
		- can slow down execution of the page

### More Events
- mouse-based
		- onclick, ondblclick, onmousedown, onmousecenter, onmouseleave, onmousemove, ...
- keyboard-based
		- onkeydown, onkeypress, onkeyup
- frame-based
		- onload, onresize, onscroll, onerror

### Review
- events are useful, but mostly annoying, they mess with usability
- without them, javascript interaction would be limited to DOM modifications




## this (02-05)
- pointer to self...
		- okay once you know about it
		- code is http://codepen.io/anon/pen/gPmwrN


## Photo Gallery (02-06)

- background-image
		- always put background-color as fallback in case of missing url linked image

- element text
		- document.write() or innerHTML
