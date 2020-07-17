document.querySelector('#loan-form').addEventListener('submit', handleResults)

function handleResults(e){

    //Hide results
    document.querySelector('#results').style.display = 'none'

    //Show loader
    document.querySelector('#loading').style.display = 'block'

    setTimeout(calculateResults, 2000)

    e.preventDefault()
}

function calculateResults(){
    console.log('Calculating')

    //UI variables
    const amount = document.querySelector('#amount')
    const interest = document.querySelector('#interest')
    const years = document.querySelector('#years')
    const monthlyPayment = document.querySelector('#monthly-payment')
    const totalPayment = document.querySelector('#total-payment')
    const totalInterest = document.querySelector('#total-interest')

    //Formulae
    const principal = parseFloat(amount.value)
    const calculatedInterest = parseFloat(interest.value) / 100 / 12
    const calculatedPayments = parseFloat(years.value) * 12

    //Compute monthly payments
    const x = Math.pow(1+calculatedInterest, calculatedPayments)
    const monthly = (principal * x * calculatedInterest) / (x-1)

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2)
        totalPayment.value = (monthly * calculatedPayments).toFixed(2)
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2)

        //hide loader
        document.querySelector('#loading').style.display = 'none'

        //Show results
        document.querySelector('#results').style.display = 'block'

        

    }else{
        showError('Please check your numbers')

        //hide loader
        document.querySelector('#loading').style.display = 'none'
    }

}

function showError(error){
    //Create a div
    const errorDiv = document.createElement('div');

    //Get elements 
    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')

    //Add class 
    errorDiv.className = 'alert alert-danger'

    //Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error))

    //Insert error above heading
    card.insertBefore(errorDiv, heading)

    // Timer for error 
    setTimeout(clearError, 3000)
    
}

function clearError(){
    document.querySelector('.alert').remove()
}