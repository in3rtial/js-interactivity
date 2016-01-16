# Week 4

## Simple Forms (04-01)

### Forms
- used to pass data
- users input data and it should be checked (form validation)
- WARNING:


### HTML Form tags
- form, label and input


### example

- the name for="name" is used so that hitting text will work, not just the box
- input type="submit" is essential

    <form>

      <label for="name">Name </label>
      <input type="text", id="name" name="name"<br/>

      <label>Email: <input type="email" name="email"></label><br/>

      <label for="birth">Birth</label>
      <input type="date" id="birth" value="birth"><br/>

      <input type="submit" value="Click Here">
    </form>


### Portability
- forms aren't consistent between browsers (for example, pop-up calendar not present in safari)


### Common Input Types
- textfield
- email: will perform basic validation
- password: comes with view protection
- radiobutton: can select only amongst many
- checkbox: can select many amongst many
- submit: necessary for form submission (once it's completed)

### More Input Types
- number: sometimes has a spinner (integer it seems, what about float)
- range: back and forth slider
- color: color wheel popup
- date: calendar popup
- url: expects http:// start string


### Type Checking
- browser will type check the input
- on mobile devices, custom keyboards can be selected

### Attributes
- name
  - each input must have a name so that it can be used in the backend
- id:
  - used for labels
  - really essential because it works well with javascript



### Additional Attributes
- value
      - button: text inside the button
      - textfield: provides a default value (which would count as completed field)

- placeholder
    - provides suggestion
    - not usabe as an official value (doesn't count as a completed field)
    - e.g. for email "me@gmail.com"


## Simple Validation (04-02)


### What to Validate?
- type
    - number vs string, float, int ...
- string format
    - url/email correctly formatted
    - phone number with spaces, hyphens, etc...


### How To Validate
- html5 input types
    - email, number, url
    - will perform basic validation
- html5 attributes
    - required, placeholder, min, max
    - allows users to add
- custom javascript functions



### Input Types
- require that the browser validate the format of the input
- when supported, it will halt the submit process for non-valid input
- first non-valid input is put into focus
- if not supported, input type is defaulted to a textfield
    - WARNING! browser-dependent, maybe the browser doesn't support it yet
    - shouldn't suppose this is enough


### Input Attributes
- required
    - halts the submit process if any of the required elements are empty
    - can cause issues when developing code, so sometimes it is paired with the NOVALIDATE attribute
        - ignores all of the required attributes
- pattern
    - textfield pattern (regular expressions)
    - e.g. credit cards, phone numbers, etc...
    - best used with placeholder and supporting text to give the user a hint
    - look them up http://html5patterns.com

- limiting numbers
    - min, max, step (python's range-like)


### Pattern vs Max/Min
- zip code
- check that it is five digits
  - 1: use input = number with min and max
      - min="00000" max="99999"
      - won't work because it doesn't check for number of digits (0 is accepted)
  - 2: use input = text and a pattern (prefer this one personally, more uniform)
      - "[0-9]{5}"
      - this one works correctly


## Comparing Two Inputs (04-03)
- it's pretty much like argparse in python
    - choices, patterns, etc...

### Comparing Two Strings (emails)
- html: email input type are required attribute
- javascript to do so
- validate on command (when the repeated email is entered)


### Validating at Input Time
- event
    - oninput and onchange are both valid options
- comparison method
    - compare inputs, attribute of inputs?
- output
    - let the user know that the check worked out (check mark icon?)
    - JavaScript alert

### Example

#### HTML

<form>
<label> Preferred Email Address:
  <input type="email"
         id="email_addr"
         name="email1"
         value="me@me.com"
         required>
 </label>

 <label>Repeat Email Address:
    <input type="email"
           id="email_repeat"
           name="email2"
           required
           onchange="check_email()">
 </label>

<input type="submit"
       value="Confirm Emails
       onclick="return check_email();">

 </form>

#### JavaScript
function check_email(){
  var email1 = document.getElementById("email_addr");
  var email2 = document.getElementById("email_repeat");
  if( email1.value != email2.value){
    alert("The two emails must match");
    return false;
  }
}


### Stopping the Form Submission if they don't match
- want to check on the submit
- always do the basic form before the interactive checking (just cleaner and better)



## Checkboxes and Radio Buttons

### Checkboxes
- used to select options with a single click
- typically square boxes that can be cliqued
- options share a single name


#### Example
- labels make it easier to check checkboxes with "fat fingers"...

    <form>
      Favorite Foods <br/>
      <label>
        <input type="checkbox"
               name="food"
               value="Pizza">
               Pizza
       </label>

      <label>
        <input type="checkbox"
               name="food"
               value="Chips">
               Chips
      </label>


      <label>
        <input type="checkbox"
               name="food"
               value="Kale">
               Kale
      </label>

      <input type="submit">
    </form>

### Radio buttons
- use labels as for checkboxes
- pretty much the same, but exclusive (only can select one amongst many)
    - unselect mechanism when you click on other radio button of same name
- WARNING! group elements logically (using the name attribute)


### JavaScript and buttons
- new input field creation
- onchange with javascript funciton that changes the display of a node on the HTML tree
    - none <-> inline
    - .setAttribute("required", true);
    - must remove if the button gets unchecked (and unset required attribute)
        - it's actually the harder part of it
- mostly done through .getElementById(id).checkAttribute(x)


### Review
- purpose of forms is to allow user interaction with the page
- checkboxes are commonly used to trigger events
- can't really do proper forms unless you do the back-end programming as well as front-end
- check http://wufoo.com for good easy forms (although it seems to be paying)
