function  calculateTax(income, expenses){
    inc = income;
    ex = expenses;
    if(inc<0 || ex<0 || ex>inc)
    {
       return 'Invalid Input'
    
    }
    else{
    tax = (inc-ex)*(20/100)
    return tax
    }
}

