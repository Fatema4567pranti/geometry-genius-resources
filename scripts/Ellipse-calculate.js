function ellipseAreaCalculate(){
    const a = getInputValueById('Ellipse-base');
    //console.log(peremiter);

    const b = getInputValueById('Ellipse-height');
    //console.log(apothem);

    const area = 3.1416 * a * b;
    //console.log(area);

    setInnerTextById('Ellipse-area', area);   
}
function getInputValueById(inputFieldId){
   const inputField = document.getElementById(inputFieldId);
   const inputValueText = inputField.value;
   const value = parseFloat(inputValueText);
   return value;

}
function setInnerTextById(elementId, area){
   const element = document.getElementById(elementId);
   element.innerText = area;
}