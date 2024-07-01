function pentagonAreaCalculate(){
     const peremiter = getInputValueById('Pentagon-base');
     //console.log(peremiter);

     const apothem = getInputValueById('Pentagon-height');
     //console.log(apothem);

     const area = 0.5 * peremiter * apothem;
     //console.log(area);

     setInnerTextById('Pentagon-area', area);   
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