let firstCurrencyEle = document.getElementById('first-currency');
let firstAmountEle = document.getElementById('first-amount');
let secondCurrencyEle = document.getElementById('second-currency');
let secondAmountEle = document.getElementById('second-amount');

let rateEle = document.getElementById('rate');
let changeBtn = document.getElementById('change');

//Fetch exchange rates and update the DOM.
function calculate() {
    const firstCurrency = firstCurrencyEle.value;
    const secondCurrency = secondCurrencyEle.value;
    //fetch data
    fetch(`https://api.exchangerate-api.com/v4/latest/${firstCurrency}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[secondCurrency];
            rateEle.innerText = `1 ${firstCurrency} = ${rate} ${secondCurrency}`;
            secondAmountEle.value = (firstAmountEle.value * rate).toFixed(2)
        })
}

//Event listeners
firstCurrencyEle.addEventListener('change', calculate);
firstAmountEle.addEventListener('input', calculate);
secondCurrencyEle.addEventListener('change', calculate);
secondAmountEle.addEventListener('input', calculate);

changeBtn.addEventListener('click', () => {
    const temp = firstCurrencyEle.value;
    firstCurrencyEle.value = secondCurrencyEle.value;
    secondCurrencyEle.value = temp;
    firstAmountEle.value = secondAmountEle.value;
    calculate();
})