var getElementsButtonClass = document.getElementsByClassName('button');
console.log(getElementsButtonClass);
console.log(getElementsButtonClass.length);
for (var i = 0; i < getElementsButtonClass.length; i++) {
    button_nr = i + 1;
    console.log('Text on button number ' + button_nr + ': ' + getElementsButtonClass[i].innerText);
}