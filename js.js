let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    let inputnum = document.getElementById('inputnum').value;
    // console.log(inputnum);
    let choose = document.getElementById('choose');
    let chooseValue = choose.options[choose.selectedIndex].value;
    // console.log(chooseValue);

    if (chooseValue == 'cel') {
        let ans =  Math.round((inputnum - 32)*5/9); 
        // (12°F − 32) × 5/9
        document.getElementById('out').innerHTML = `<hr>  ${inputnum}° Fahrenheit = ${ans}° Celsius`;
    }
    else if(chooseValue == 'fah'){
        let ans1 =  Math.round((inputnum * 9/5) + 32);
        document.getElementById('out').innerHTML = `<hr>  ${inputnum}° Celsius = ${ans1}° Fahrenheit`;
        
    }

});
