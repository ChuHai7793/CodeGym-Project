// METHOD 1
// let result = document.getElementById('result');
//
// let button1 = document.getElementById('but1')
//
// button1.addEventListener('click', () => {
//     result.innerHTML = `Result: ${parseInt(document.getElementById('value1').value) +
//     parseInt( document.getElementById('value2').value)}`
// })
//
// let button2 = document.getElementById('but2')
// button2.addEventListener('click', () => {
//     result.innerHTML = `Result: ${parseInt(document.getElementById('value1').value) -
//     parseInt( document.getElementById('value2').value)}`
// })
//
// let button3 = document.getElementById('but3')
// button3.addEventListener('click', () => {
//     result.innerHTML = `Result: ${parseInt(document.getElementById('value1').value) *
//     parseInt( document.getElementById('value2').value)}`
// })
//
// let button4 = document.getElementById('but4')
// button4.addEventListener('click', () => {
//     result.innerHTML = `Result: ${parseInt(document.getElementById('value1').value) /
//     parseInt( document.getElementById('value2').value)}`
// })

// METHOD 2
let button1 = document.getElementById('but1')
let button2 = document.getElementById('but2')
let button3 = document.getElementById('but3')
let button4 = document.getElementById('but4')

button1.addEventListener('click', () => {
    const value = button1.innerHTML;
    calculate(value);
})

button2.addEventListener('click', () => {
    const value = button2.innerHTML;
    calculate(value);
})

button3.addEventListener('click', () => {
    const value = button3.innerHTML;
    calculate(value);
})

button4.addEventListener('click', () => {
    const value = button4.innerHTML;
    calculate(value);
})




function calculate(value){
    let result = document.getElementById('result');
    switch (value){
        case 'Addition(+)':
            output = parseInt(document.getElementById('value1').value) + parseInt( document.getElementById('value2').value);
            break;
        case 'Subtraction(-)':
            output = parseInt(document.getElementById('value1').value) - parseInt( document.getElementById('value2').value);
            break;
        case 'Multiplication(*)':
            output = parseInt(document.getElementById('value1').value) * parseInt( document.getElementById('value2').value);
            break;
        case 'Division(/)':
            output = parseInt(document.getElementById('value1').value) / parseInt( document.getElementById('value2').value);
            break;
    }
    result.innerHTML = `Result:${ output }`;

}

