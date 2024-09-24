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




