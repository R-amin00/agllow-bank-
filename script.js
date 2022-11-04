//Login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click', function(event){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display="none"

    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display="block";
})

//Deposit button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function(){
    const depositNumber = getInputNumber("depositAmount");


    // const depositAmount = document.getElementById('depositAmount').value;
    // const depositNumber = parseFloat(depositAmount);
    
    // const currentDeposit = document.getElementById('currentDeposit').innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById('currentDeposit').innerText = totalDeposit;

    // const currentBalance = document.getElementById('currentBalance').innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = depositNumber + currentBalanceNumber;
    // document.getElementById('currentBalance').innerText = totalBalance;

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);
    document.getElementById('depositAmount').value = "";
})


//Withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener("click", function(){
    const withdrawNumber = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1*withdrawNumber);
    document.getElementById('withdrawAmount').value = "";


    // const withdrawAmount = document.getElementById('withdrawAmount').value;
    // const withdrawAmountNumber = parseFloat(withdrawAmount);
    
    // const currentWithdraw = document.getElementById('currentWithdraw').innerText;
    // const currentWithdrawNumber = parseFloat(currentWithdraw);
    // const totalWithdraw = withdrawAmountNumber + currentWithdrawNumber;
    // document.getElementById('withdrawAmount').innerText = totalWithdraw;
    // document.getElementById('currentWithdraw').value = "";
})

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText (id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}



// loginBtn.addEventListener('click', function (){
//     const transaction = document.getElementById('transaction-area');
//     transaction.style.display="block";
// })