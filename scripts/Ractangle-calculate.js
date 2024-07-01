function calculateRactanglArea(){
    const RactanglWidthInput = document.getElementById('Ractangle-width');
    const RactanglWidthText = RactanglWidthInput.value;
    const Width = parseFloat(RactanglWidthText)
    console.log(Width);

    const RactanglLangthInput = document.getElementById('Ractangle-langth');
    const RactanglLangthText = RactanglLangthInput.value;
    const Langth = parseFloat(RactanglLangthText)
    
    console.log(Langth);

    const area = Width * Langth;
    console.log('area of the triangle is: ', area);

    const ractangleAreaSpan = document.getElementById('Ractangle-area');
    ractangleAreaSpan.innerText = area;
}