function calculateFibonacci(){
    let terms = parseInt(document.getElementById('insertFibonacci').value);
    let a = 0;
    let b = 1;
    let c;
    let result_Fibonacci = '';

    for (let i = 0; i < terms; i++) {
        c = a + b;
        a = b;
        b = c;
        result_Fibonacci += c + ',' ;
    }
}
document.getElementById('resultFibonacci').textContent = result_Fibonacci;
     
