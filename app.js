const reasonInput = document.querySelector("#input-reason")
const amountInput = document.querySelector("#input-amount")
const cancelBtn = document.querySelector("#btn-cancel")
const confirmBtn = document.querySelector("#btn-confirm")
const expensesList = document.querySelector("#expenses-list")
const totalExpensesOutput = document.querySelector("#total-expenses")

let totalExpenses = 0

const clear=()=>{
    reasonInput.value=''
    amountInput.value=''
}

confirmBtn.addEventListener('click',()=>{
    var enteredReason = reasonInput.value
    var enteredAmount = parseInt(amountInput.value)
    if (enteredReason.trim().length<=0||enteredAmount<=0)
        // alert("Enter a valid reason and amount!")
    {
        const alert = document.createElement('ion-alert');
        alert.header = 'Invalid Input';

        alert.message = "Please enter valid amount and reason!!";
        alert.buttons = ['Okay'];

        document.body.appendChild(alert);
        return alert.present();
    }
    else{
        const newItem = document.createElement("ion-item")
        newItem.textContent = enteredReason + ':$' + enteredAmount
        expensesList.appendChild(newItem)
        clear()
        totalExpenses = totalExpenses + enteredAmount
        totalExpensesOutput.textContent=totalExpenses
    }
})

cancelBtn.addEventListener('click',clear)