//global vars
//set strings
let string = "hello"; 
let i = 0;

document.getElementById('inputString').value = "hello";

// Get the container element where the button will be added
const RvsButtoncontainer = document.getElementById('RvsButton');

// Create a new button element
const Rvsbutton = document.createElement('Rvsbutton');

// Set the button's text content
Rvsbutton.textContent = 'Reverse String';

// Add an event listener to the button
Rvsbutton.addEventListener('click', () => {
    if (document.getElementById('inputString').value != undefined){
        string = document.getElementById('inputString').value
    }
    // alert('Button was clicked!');
    let array = string.split('');
    array.reverse();
    let reverseString = array.join('');
    // reverseString(string);
    alert(reverseString);
    console.log(string + " -> " + reverseString);
    string = reverseString;
    document.getElementById('inputString').value = string
});

// Append the button to the container
RvsButtoncontainer.appendChild(Rvsbutton);



// Get the container element where the button will be added
const vowelCountButtoncontainer = document.getElementById('vowelCountButton');

// Create a new button element
const VCButton = document.createElement('VCButton');

// Set the button's text content
VCButton.textContent = 'Count characters';

// Add an event listener to the button
VCButton.addEventListener('click', () => {
    if (document.getElementById('inputString').value != undefined){
        string = document.getElementById('inputString').value
    }

    // alert('Button was clicked!');
    let array = string.split('');
    while (i < array.length){
        i++
    }

    alert(i);
    console.log(i);
});

// Append the button to the container
vowelCountButtoncontainer.appendChild(VCButton);