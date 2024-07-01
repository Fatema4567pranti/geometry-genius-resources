/**
*objective: get base, height of a tringle.Calculate the area by using by provaided formula .And then display the area. 
*step:1 - get base values
*step:2 - added an id in the basa input field
*step:3 - use getElementById to access the input field
*step:4 - get value from the input field .(value is string now)
*step:5 - convert the value to a number. use parseFloat
*
*/



function calculateTringleArea(){
    //console.log('inside function');
     const tringleBaseInput = document.getElementById('tringle-base');
    // console.log(tringleBaseInput);
    const tringleBaseText = tringleBaseInput.value;
    const base = parseFloat(tringleBaseText)

    //3//console.log(typeof base)
    console.log(base);

    //get triangle height value 
    const tringleHeightInput = document.getElementById('triangle-height');
    const tringleHeightText = tringleHeightInput.value;
    const height = parseFloat(tringleHeightText)
    //console.log(tringleHeightText);
    console.log(height);


    //1//console.log(tringleBaseText);

    //2//console.log(typeof tringleBaseText);
    
    //calculate triangle area
    const area = 0.5 * base * height;
    console.log('area of the triangle is: ', area);

    //display triangle area
    const TringleAreaSpan = document.getElementById('triangle-area');
    TringleAreaSpan.innerText = area;
}