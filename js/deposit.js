//deposit buttin handaler

document.getElementById('btn-deposit').addEventListener('click', function () {
    let depositfield = document.getElementById('deposit-field');
    let newDepositAmountString = depositfield.value;
    let newDepositAmount = parseFloat(newDepositAmountString)


    let depositTotalElement = document.getElementById('deposit-total');
    let PreviousDepositTotalString = depositTotalElement.innerText;
    let previousDepositTotal = parseFloat(PreviousDepositTotalString)
    previousDepositTotal.innerText = newDepositAmount;

    let currentDepoditTotal = newDepositAmount + previousDepositTotal;
    depositTotalElement.innerText = currentDepoditTotal;

    //total amount added
    let balanceElementTotal = document.getElementById('balance-total');

    let previousBalanceTotalString = balanceElementTotal.innerText;
    let previousBalanceTotal = parseFloat(previousBalanceTotalString);

    let currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceElementTotal.innerText = currentBalanceTotal;







    depositfield.value = ''
})