document.getElementById('btn-withdraw').addEventListener('click', function () {
    //withdraw input & convert number
    let withdrawField = document.getElementById('withdraw-field');
    let newWithdrawAmountString = withdrawField.value;
    let newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //withdraw convert number

    let withdrawTotalElement = document.getElementById('withdraw-total');
    let previousWithdrawTotalString = withdrawTotalElement.innerText;
    let previousTotalAmount = parseFloat(previousWithdrawTotalString);

    //calculate total withdraw
    let currentTotalWithdraw = newWithdrawAmount + previousTotalAmount;
    withdrawTotalElement.innerText = currentTotalWithdraw;

    //total balance and withdraw calculas
    let totalBalanceElement = document.getElementById('balance-total');
    let previousBalanceElementString = totalBalanceElement.innerText;
    let previousTotalBalance = parseFloat(previousBalanceElementString);

    let currentBalanceTotal = previousTotalBalance - newWithdrawAmount;
    totalBalanceElement.innerText = currentBalanceTotal;

    withdrawField.value = '';
})