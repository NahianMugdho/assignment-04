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

function sendNotification(email) {
    s = email
    k = s.split('@');

    if(k.length==2)
    {
    
        z = k[0]+' sent you an email from '+k[1]
        return z
    
    }
    else
    {
    
        return 'Invalid Email'
    
    }    

    }


    function checkDigitsInName(name) {

        s= name 
        if(typeof s == 'string'){
            k = s.split('')
            for(i=0;i<=k.length-1;i++)
            {
                let m = k[i];
                if(m>= '0' && m<= '9'){
                
                    return 'true';
                
                } 
                
            }    
                return 'false';
                
                
               
            
            }
            
        
        else
        {
            return 'Invalid Input'
        }
    
    }
    
    function calculateFinalScore(obj) {
        if(typeof obj == 'object'){
        
            if(typeof obj.name == 'string' && typeof obj.testScore == 'number' && typeof obj.schoolGrade ==  'number' && typeof obj.isFFamily == 'boolean' ){
    
                x = obj.testScore
                y = obj.schoolGrade
                
                if(obj.isFFamily == true)
                {
                    z = 20
                
                }
                else{
                    z=0
                
                }
                total = x+y+z
                if (total>= 80){
                
                return true
                
                
                }
    
                else{
                
                    return false
                
                }
            
            }
            else{
            
                return "Invalid Input"
            
            
            }
            
          
        
        }
        else{
        
           return 'Invalid Input' 
        
        }
    
        }
    
        function waitingTime(waitingTimes , serialNumber) {
    
            if (Array.isArray(waitingTimes)== true && typeof serialNumber == 'number')
            {
        
                 let res = 0
                 for(i=0;i<=waitingTimes.length-1;i++)
                    {
                      
                      res = res + waitingTimes[i]
                    
                    }
                
                avg = res/waitingTimes.length
                avg = Math.round(avg)
                k = avg*(serialNumber-1-waitingTimes.length)
                return k
            }
        
            else{
            
                return "Invalid Input"
            
            }
        
        
        } 
        
        
        
        
                