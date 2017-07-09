var getElementsButtonClass = document.getElementsByClassName('button');
console.log(getElementsButtonClass);
console.log(getElementsButtonClass.length);
for (var i = 0; i < getElementsButtonClass.length; i++) {
    var buttonNr;
    buttonNr = i + 1;
    console.log('Text on button number ' + buttonNr + ': ' + getElementsButtonClass[i].innerText);
}