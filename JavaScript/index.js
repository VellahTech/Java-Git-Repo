function addNumbers() {
    var num1 = Number (document.getElementById('first').value)
    var num2 = Number (document.getElementById('second').value)
    console.log(num1 + num2)
    var sum = num1 + num2; 
    document.getElementById('message').innerHTML= 'This sum is :' + sum;

var num1=10
var num2=12
var sum = num1+num2
console.log('The sum is'+sum)
//alert('The sum is'+sum)

}
addNumbers()




// console.log('Hi from external JS file');
